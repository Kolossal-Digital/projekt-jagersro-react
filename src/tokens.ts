import tokenExport from "../design-tokens/figma-export.json";

export type ThemeName = "Light" | "Dark";
export type BreakpointName = "Small" | "Medium" | "Large" | "Max";
export type BackgroundName =
  | "background"
  | "background-accent-01"
  | "background-accent-02"
  | "background-accent-03";
export type ForegroundName =
  | "text-primary"
  | "text-secondary"
  | "text-accent-01"
  | "text-accent-02"
  | "text-placeholder";

type TokenNode = {
  $collectionName?: string;
  $value?: string | number;
  [key: string]: unknown;
};

type TokenCollection = {
  modes: Record<string, Record<string, unknown>>;
};

export type TypographyToken = {
  name: string;
  group: string;
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  fontWeight: number;
  fontStyle: string;
  letterSpacing: number;
};

export type SpacingToken = {
  name: string;
  value: number;
};

const collections = Object.assign(
  {},
  ...(tokenExport as unknown as Array<Record<string, TokenCollection>>),
) as Record<string, TokenCollection>;

const backgroundNames: BackgroundName[] = [
  "background",
  "background-accent-01",
  "background-accent-02",
  "background-accent-03",
];

function readPath(root: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((value, key) => {
    if (!value || typeof value !== "object") return undefined;
    return (value as Record<string, unknown>)[key];
  }, root);
}

function firstMode(collectionName: string): Record<string, unknown> {
  const collection = collections[collectionName];
  if (!collection) throw new Error(`Unknown token collection: ${collectionName}`);
  return Object.values(collection.modes)[0];
}

function resolveToken(node: unknown, sourceCollection: string): string | number {
  if (!node || typeof node !== "object") {
    throw new Error(`Invalid token in ${sourceCollection}`);
  }

  const token = node as TokenNode;
  const value = token.$value;
  if (typeof value === "number") return value;
  if (typeof value !== "string") throw new Error(`Token has no value in ${sourceCollection}`);

  const alias = value.match(/^\{(.+)\}$/);
  if (!alias) return value;

  const targetCollection = token.$collectionName || sourceCollection;
  const target = readPath(firstMode(targetCollection), alias[1]);
  return resolveToken(target, targetCollection);
}

function numericProperty(
  style: Record<string, unknown>,
  property: string,
): number {
  const value = resolveToken(style[property], "Breakpoint");
  if (typeof value !== "number") throw new Error(`${property} is not numeric`);
  return value;
}

function stringProperty(
  style: Record<string, unknown>,
  property: string,
  fallback: string,
): string {
  if (!style[property]) return fallback;
  return String(resolveToken(style[property], "Breakpoint"));
}

function webFontFamily(family: string): string {
  return family === "Source Serif 4" ? "Geist" : family;
}

export function getTypography(mode: BreakpointName): TypographyToken[] {
  const modeValues = collections.Breakpoint.modes[mode];
  const typography = modeValues.typgraphy as Record<
    string,
    Record<string, Record<string, unknown>>
  >;

  return Object.entries(typography).flatMap(([group, styles]) => {
    if (group === "fixed-heading") return [];

    return Object.entries(styles).flatMap(([name, style]) => {
      return [{
        name,
        group,
        fontFamily: webFontFamily(
          String(resolveToken(style["font-family"], "Breakpoint")),
        ),
        fontSize: numericProperty(style, "font-size"),
        lineHeight: numericProperty(style, "line-height"),
        fontWeight: numericProperty(style, "font-weight"),
        fontStyle: stringProperty(style, "font-style", "normal"),
        letterSpacing: numericProperty(style, "letter-spacing"),
      }];
    });
  });
}

export function getTheme(theme: ThemeName) {
  const mode = collections.Mode.modes[theme];
  const backgrounds = mode.background as Record<string, unknown>;
  const text = mode.text as Record<string, unknown>;

  return {
    backgrounds: Object.fromEntries(
      backgroundNames.map((name) => [name, String(resolveToken(backgrounds[name], "Mode"))]),
    ) as Record<BackgroundName, string>,
    textPrimary: String(resolveToken(text["text-primary"], "Mode")),
    textSecondary: String(resolveToken(text["text-secondary"], "Mode")),
    textAccent01: String(resolveToken(text["text-accent-01"], "Mode")),
    textAccent02: String(resolveToken(text["text-accent-02"], "Mode")),
    textPlaceholder: String(resolveToken(text["text-placeholder"], "Mode")),
  };
}

export const spacingTokens: SpacingToken[] = Object.entries(
  firstMode("_spacing"),
).map(([name, token]) => ({
  name,
  value: Number(resolveToken(token, "_spacing")),
}));

export const fontFamilies = [
  { token: "font-sans", family: "Geist" },
  { token: "font-code", family: "Geist Mono" },
] as const;

export const availableBackgrounds = backgroundNames;
export const availableForegrounds: ForegroundName[] = [
  "text-primary",
  "text-secondary",
  "text-accent-01",
  "text-accent-02",
  "text-placeholder",
];

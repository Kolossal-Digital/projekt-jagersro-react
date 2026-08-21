import { parse } from "yaml";
import designMarkdown from "../../DESIGN.md?raw";

export type DesignRuleVisualKind =
  | "source-order"
  | "hierarchy"
  | "radius"
  | "icons"
  | "section"
  | "workflow";

export type DesignRuleVisualItem = {
  label: string;
  detail?: string;
  element?: string;
  token?: string;
  icon?: "file-text" | "folder-open" | "check-circle";
};

export type DesignRule = {
  key: string;
  type: "design-rule";
  category: string;
  title: string;
  summary: string;
  scope: string;
  origin: string;
  source: string;
  visual: {
    kind: DesignRuleVisualKind;
    items: DesignRuleVisualItem[];
  };
};

const yamlBlockPattern = /```ya?ml\n([\s\S]*?)\n```/g;
const visualKinds: DesignRuleVisualKind[] = [
  "source-order",
  "hierarchy",
  "radius",
  "icons",
  "section",
  "workflow",
];

function isDesignRule(record: unknown): record is DesignRule {
  if (!record || typeof record !== "object") return false;
  const rule = record as Partial<DesignRule>;

  return (
    rule.type === "design-rule" &&
    typeof rule.key === "string" &&
    typeof rule.category === "string" &&
    typeof rule.title === "string" &&
    typeof rule.summary === "string" &&
    typeof rule.scope === "string" &&
    typeof rule.origin === "string" &&
    typeof rule.source === "string" &&
    Boolean(rule.visual) &&
    visualKinds.includes(rule.visual!.kind) &&
    Array.isArray(rule.visual!.items) &&
    rule.visual!.items.length > 0 &&
    rule.visual!.items.every((item) => typeof item.label === "string")
  );
}

/** Reads the visual decision registry whose source of truth is DESIGN.md. */
export function readDesignRules(): DesignRule[] {
  const records = Array.from(designMarkdown.matchAll(yamlBlockPattern), (match) =>
    parse(match[1]) as unknown,
  );
  const rules = records.filter(isDesignRule);

  if (rules.length === 0) {
    throw new Error("DESIGN.md needs at least one type: design-rule record.");
  }

  return rules;
}

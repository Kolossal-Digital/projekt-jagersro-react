import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const sourcePath = resolve("design-tokens/figma-export.json");
const layoutPath = resolve("design-tokens/layout.json");
const outputPath = resolve("src/generated/tokens.css");
const exportedCollections = JSON.parse(readFileSync(sourcePath, "utf8"));
const layout = JSON.parse(readFileSync(layoutPath, "utf8"));
const collections = Object.assign({}, ...exportedCollections);

function readPath(root, path) {
  return path.split(".").reduce((value, key) => value?.[key], root);
}

function firstMode(collectionName) {
  return Object.values(collections[collectionName].modes)[0];
}

function resolveToken(token, sourceCollection) {
  const value = token.$value;
  const alias = typeof value === "string" && value.match(/^\{(.+)\}$/);
  if (!alias) return value;

  const targetCollection = token.$collectionName || sourceCollection;
  return resolveToken(readPath(firstMode(targetCollection), alias[1]), targetCollection);
}

function cssName(value) {
  return value.toLowerCase().replaceAll("_", "-");
}

function fontStack(family) {
  if (family === "Source Serif 4") return `"Geist", sans-serif`;
  if (family === "Geist Mono") return `"${family}", monospace`;
  return `"${family}", sans-serif`;
}

const lines = [
  "/* Generated from design-tokens/figma-export.json and design-tokens/layout.json. Do not edit manually. */",
  "",
];

lines.push(":root {");
for (const [name, token] of Object.entries(firstMode("_spacing"))) {
  lines.push(`  --${name}: ${resolveToken(token, "_spacing")}px;`);
}
for (const [name, token] of Object.entries(firstMode("_border-radius"))) {
  lines.push(`  --${name}: ${resolveToken(token, "_border-radius")}px;`);
}
const smallGrid = layout.breakpoints.Small;
lines.push(`  --page-grid-columns: ${smallGrid.columns};`);
lines.push(`  --page-grid-margin: ${smallGrid.margin}px;`);
lines.push(`  --page-grid-gutter: ${smallGrid.gutter}px;`);
lines.push(`  --page-grid-max-width: ${layout.containerMax}px;`);
lines.push("  --page-grid-width: min(100vw, var(--page-grid-max-width));");
lines.push(
  "  --page-grid-offset: calc((100vw - var(--page-grid-width)) / 2 + var(--page-grid-margin));",
);
lines.push("}", "");

for (const modeName of ["Medium", "Large", "Max"]) {
  const grid = layout.breakpoints[modeName];
  lines.push(`@media (min-width: ${grid.min}px) {`);
  lines.push("  :root {");
  lines.push(`    --page-grid-columns: ${grid.columns};`);
  lines.push(`    --page-grid-margin: ${grid.margin}px;`);
  lines.push(`    --page-grid-gutter: ${grid.gutter}px;`);
  lines.push("  }");
  lines.push("}", "");
}

for (const [themeName, mode] of Object.entries(collections.Mode.modes)) {
  lines.push(`.theme--${cssName(themeName)} {`);
  lines.push(`  --background: ${resolveToken(mode.background.background, "Mode")};`);
  lines.push(`  --text-primary: ${resolveToken(mode.text["text-primary"], "Mode")};`);
  lines.push(`  --text-secondary: ${resolveToken(mode.text["text-secondary"], "Mode")};`);
  lines.push(`  --text-accent-01: ${resolveToken(mode.text["text-accent-01"], "Mode")};`);
  lines.push(`  --text-accent-02: ${resolveToken(mode.text["text-accent-02"], "Mode")};`);

  for (const name of [
    "background",
    "background-accent-01",
    "background-accent-02",
    "background-accent-03",
  ]) {
    lines.push(`  --surface-${name}: ${resolveToken(mode.background[name], "Mode")};`);
  }

  for (const [variant, properties] of Object.entries(mode.button)) {
    for (const [property, token] of Object.entries(properties)) {
      lines.push(
        `  --button-${variant}-${property}: ${resolveToken(token, "Mode")};`,
      );
    }
  }

  for (const name of ["field-01", "field-hover-01"]) {
    lines.push(`  --${name}: ${resolveToken(mode.field[name], "Mode")};`);
  }

  for (const name of [
    "text-placeholder",
    "text-helper",
    "text-error",
    "text-disabled",
  ]) {
    lines.push(`  --${name}: ${resolveToken(mode.text[name], "Mode")};`);
  }

  lines.push(`  --support-error: ${resolveToken(mode.support["support-error"], "Mode")};`);
  lines.push(`  --support-success: ${resolveToken(mode.support["support-success"], "Mode")};`);
  lines.push(`  --border-interactive: ${resolveToken(mode.border["border-interactive"], "Mode")};`);

  for (const [property, token] of Object.entries(mode.focus)) {
    lines.push(`  --focus-${property}: ${resolveToken(token, "Mode")};`);
  }

  lines.push("}", "");
}

for (const name of [
  "background",
  "background-accent-01",
  "background-accent-02",
  "background-accent-03",
]) {
  lines.push(`.surface--${name} {`);
  lines.push(`  background-color: var(--surface-${name});`);
  lines.push("}", "");
}

const typographyNames = new Set();

function typographyVariables(mode, indent = "  ") {
  const variables = [];
  for (const [group, styles] of Object.entries(mode.typgraphy)) {
    if (group === "fixed-heading") continue;

    for (const [name, style] of Object.entries(styles)) {
      if (name === "fluid-display-02") continue;

      typographyNames.add(name);
      variables.push(
        `${indent}--type-${name}-family: ${fontStack(resolveToken(style["font-family"], "Breakpoint"))};`,
      );
      variables.push(`${indent}--type-${name}-size: ${resolveToken(style["font-size"], "Breakpoint")}px;`);
      variables.push(`${indent}--type-${name}-weight: ${resolveToken(style["font-weight"], "Breakpoint")};`);
      variables.push(
        `${indent}--type-${name}-line-height: ${resolveToken(style["line-height"], "Breakpoint")}px;`,
      );
      variables.push(
        `${indent}--type-${name}-letter-spacing: ${resolveToken(style["letter-spacing"], "Breakpoint")}px;`,
      );
    }
  }

  return variables;
}

for (const [modeName, mode] of Object.entries(collections.Breakpoint.modes)) {
  lines.push(`.type-mode--${cssName(modeName)} {`);
  lines.push(...typographyVariables(mode));
  lines.push("}", "");
}

lines.push(".type-mode--responsive {");
lines.push(...typographyVariables(collections.Breakpoint.modes.Small));
lines.push("}", "");

for (const modeName of ["Medium", "Large", "Max"]) {
  const minimumWidth = layout.breakpoints[modeName].min;
  lines.push(`@media (min-width: ${minimumWidth}px) {`);
  lines.push("  .type-mode--responsive {");
  lines.push(...typographyVariables(collections.Breakpoint.modes[modeName], "    "));
  lines.push("  }");
  lines.push("}", "");
}

for (const name of typographyNames) {
  lines.push(`.type-${name} {`);
  lines.push(`  font-family: var(--type-${name}-family);`);
  lines.push(`  font-size: var(--type-${name}-size);`);
  lines.push(`  font-weight: var(--type-${name}-weight);`);
  lines.push(`  line-height: var(--type-${name}-line-height);`);
  lines.push(`  letter-spacing: var(--type-${name}-letter-spacing);`);
  lines.push("}", "");
}

const fontTokens = firstMode("_typography")["Font family"];
for (const [name, token] of Object.entries(fontTokens)) {
  if (name === "font-serif") continue;

  lines.push(`.font-family--${name} {`);
  lines.push(`  font-family: ${fontStack(resolveToken(token, "_typography"))};`);
  lines.push("}", "");
}

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, `${lines.join("\n")}\n`);
console.log(`Generated ${outputPath}`);

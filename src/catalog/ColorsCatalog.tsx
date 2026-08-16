import { useState } from "react";
import { BackgroundPicker } from "../components/BackgroundPicker";
import { Section } from "../components/Section";
import {
  availableBackgrounds,
  getTheme,
  type BackgroundName,
  type ThemeName,
} from "../tokens";

type ColorsCatalogProps = {
  theme: ThemeName;
};

export function ColorsCatalog({ theme }: ColorsCatalogProps) {
  const [background, setBackground] =
    useState<BackgroundName>("background-accent-01");
  const themeTokens = getTheme(theme);
  const textColors = [
    { name: "text-primary", value: themeTokens.textPrimary },
    { name: "text-secondary", value: themeTokens.textSecondary },
    { name: "text-accent-01", value: themeTokens.textAccent01 },
    { name: "text-accent-02", value: themeTokens.textAccent02 },
    { name: "text-placeholder", value: themeTokens.textPlaceholder },
  ];

  return (
    <Section
      id="colors"
      eyebrow="foundations / colors"
      title="Färger"
      intro={`Semantiska bakgrunds- och textfärger i temat ${theme}.`}
      background={background}
      action={<BackgroundPicker value={background} onChange={setBackground} />}
    >
      <div className="foundation-group">
        <h3 className="type-fluid-heading-03">Bakgrunder</h3>
        <div className="swatch-grid" aria-label={`Bakgrundsfärger för temat ${theme}`}>
          {availableBackgrounds.map((name) => (
            <div className="swatch" key={name}>
              <span className={`swatch__color surface--${name}`} />
              <code className="type-code-01">{name}</code>
              <small className="type-code-01">{themeTokens.backgrounds[name]}</small>
            </div>
          ))}
        </div>
      </div>

      <div className="foundation-group">
        <h3 className="type-fluid-heading-03">Text</h3>
        <div className="swatch-grid swatch-grid--text">
          {textColors.map((color) => (
            <div className="swatch" key={color.name}>
              <span className={`swatch__color color-swatch--${color.name}`} />
              <code className="type-code-01">{color.name}</code>
              <small className="type-code-01">{color.value}</small>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

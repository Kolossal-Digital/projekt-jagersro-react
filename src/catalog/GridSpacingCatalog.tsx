import { useState } from "react";
import { BackgroundPicker } from "../components/BackgroundPicker";
import { Section } from "../components/Section";
import {
  spacingTokens,
  type BackgroundName,
} from "../tokens";
import { layoutModes, pageGridMaxWidth } from "../layout";

const layoutOrder = ["Small", "Medium", "Large", "Max"] as const;
const layouts = layoutOrder.map((mode) => {
  const layout = layoutModes[mode];
  return {
    ...layout,
    mode,
    range: layout.max
      ? `${layout.min}–${layout.max} px`
      : `${layout.min} px och uppåt`,
  };
});

const pageGridCompositions = [
  {
    id: "full",
    title: "Fullt spann",
    definition: "1 / -1",
    usage: "Innehåll som använder hela sidgridens tillgängliga bredd.",
    cells: ["Innehåll"],
  },
  {
    id: "balanced",
    title: "Balanserad split",
    definition: "6 / 6 kolumner",
    usage: "Två likvärdiga ytor från Large, till exempel text och media.",
    cells: ["6 kolumner", "6 kolumner"],
  },
  {
    id: "asymmetric",
    title: "Asymmetrisk split",
    definition: "7 / 5 kolumner",
    usage: "När huvudbudskapet behöver större vikt än stödytan.",
    cells: ["7 kolumner", "5 kolumner"],
  },
  {
    id: "inset",
    title: "Indraget innehåll",
    definition: "2 / span 10",
    usage: "Fokuserade flöden som fortfarande följer sidgridens linjer.",
    cells: ["Indrag", "Innehåll", "Indrag"],
  },
  {
    id: "media",
    title: "Fullbleed-media",
    definition: "6 / 6 kolumner + ytterkant",
    usage: "Media följer kolumnlinjen inåt och kan sträckas till gridens ytterkant.",
    cells: ["Innehåll", "Media"],
  },
] as const;

export function GridSpacingCatalog() {
  const [background, setBackground] =
    useState<BackgroundName>("background-accent-01");

  return (
    <Section
      id="grid-spacing"
      eyebrow="foundations / layout"
      title="Grid & spacing"
      intro="Den faktiska layoutmodell som används i komponenterna, tillsammans med responsiva lägen, containerbredder och spacing-tokens."
      background={background}
      action={<BackgroundPicker value={background} onChange={setBackground} />}
    >
      <div className="foundation-group">
        <h3 className="type-fluid-heading-03">Sidgrid</h3>
        <p className="foundation-note type-body-01">
          Sidgriden använder åtta kolumner på Small och Medium och tolv från
          Large. Den har en maximal ytterbredd på {pageGridMaxWidth} px. Slå på
          Grid i debugkontrollerna för att lägga den över valfri testsida.
        </p>
        <div aria-hidden="true" className="foundation-grid-preview">
          {Array.from({ length: 12 }, (_, index) => (
            <span key={index} />
          ))}
        </div>
      </div>

      <div className="foundation-group">
        <h3 className="type-fluid-heading-03">Godkända sidgridkompositioner</h3>
        <p className="foundation-note type-body-01">
          Sid- och sektionslayout ska använda sidgridens kolumnspann. Nästlade
          8- eller 12-kolumnsgrids får inte återskapa sidgriden; använd subgrid
          när ett nästlat element måste följa samma kolumnlinjer.
        </p>
        <div className="page-grid-composition-list">
          {pageGridCompositions.map((grid) => (
            <article className="page-grid-composition-card" key={grid.id}>
              <div
                aria-hidden="true"
                className={`grid-diagram grid-diagram--${grid.id}`}
              >
                {grid.cells.map((cell, index) => (
                  <span className="type-code-01" key={`${grid.id}-${index}`}>
                    {cell}
                  </span>
                ))}
              </div>
              <h4 className="type-label-03">{grid.title}</h4>
              <code className="type-code-01">{grid.definition}</code>
              <p className="type-body-01">{grid.usage}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="foundation-group">
        <h3 className="type-fluid-heading-03">Breakpoints och containers</h3>
        <p className="foundation-note type-body-01">
          Breakpoint, kolumnantal, marginal och gutter kommer från samma
          layoutkälla som testsidans overlay och den responsiva typografin.
        </p>
        <div className="layout-grid">
          {layouts.map((layout) => (
            <article className="layout-card" key={layout.mode}>
              <h4 className="type-label-03">{layout.mode}</h4>
              <p className="type-code-01">{layout.range}</p>
              <dl className="type-code-01">
                <div>
                  <dt>kolumner</dt>
                  <dd>{layout.columns}</dd>
                </div>
                <div>
                  <dt>marginal</dt>
                  <dd>{layout.margin} px</dd>
                </div>
                <div>
                  <dt>gutter</dt>
                  <dd>{layout.gutter} px</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>

      <div className="foundation-group">
        <h3 className="type-fluid-heading-03">Spacing</h3>
        <div className="spacing-grid">
          {spacingTokens.map((token) => (
            <article className="spacing-card" key={token.name}>
              <span
                aria-hidden="true"
                className={`spacing-sample spacing-sample--${token.name}`}
              />
              <code className="type-code-01">{token.name}</code>
              <span className="type-code-01">{token.value}px</span>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

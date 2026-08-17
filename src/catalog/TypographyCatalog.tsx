import { useMemo, useState } from "react";
import { BackgroundPicker } from "../components/BackgroundPicker";
import { Section } from "../components/Section";
import { Typography } from "../components/Typography";
import {
  fontFamilies,
  getTypography,
  type BackgroundName,
  type BreakpointName,
} from "../tokens";

const samples: Record<string, string> = {
  utility: "Jägersro förändras — 2026",
  body: "En plats i förändring, formad av berättelserna som redan finns här.",
  "fluid-heading": "Följ det som händer",
  "fluid-display": "Från travbana till ny stadsdel",
};

const sectionDefaults: Record<string, BackgroundName> = {
  foundations: "background-accent-01",
  utility: "background-accent-01",
  headings: "background-accent-01",
  display: "background-accent-01",
};

type TypographyCatalogProps = {
  breakpoint: BreakpointName;
};

export function TypographyCatalog({ breakpoint }: TypographyCatalogProps) {
  const [sectionBackgrounds, setSectionBackgrounds] =
    useState<Record<string, BackgroundName>>(sectionDefaults);
  const typography = useMemo(() => getTypography(breakpoint), [breakpoint]);
  const groupedTypography = useMemo(
    () =>
      typography.reduce<Record<string, typeof typography>>((groups, token) => {
        (groups[token.group] ||= []).push(token);
        return groups;
      }, {}),
    [typography],
  );

  function setBackground(section: string, background: BackgroundName) {
    setSectionBackgrounds((current) => ({ ...current, [section]: background }));
  }

  function sectionAction(section: string) {
    return (
      <BackgroundPicker
        value={sectionBackgrounds[section]}
        onChange={(value) => setBackground(section, value)}
      />
    );
  }

  function renderRows(groups: string[]) {
    return groups.flatMap((group) =>
      (groupedTypography[group] || []).map((token) => (
        <article className="type-row" key={`${group}-${token.name}`}>
          <div className="token-meta type-code-01">
            <strong>{token.name}</strong>
            <span>{group}</span>
            <code>
              {token.fontFamily} · {token.fontWeight} · {token.fontStyle} · {token.fontSize}/{token.lineHeight} ·
              {` ${token.letterSpacing}px`}
            </code>
          </div>
          <Typography className="type-sample" variant={token.name}>
            {samples[group]}
          </Typography>
        </article>
      )),
    );
  }

  return (
    <>
      <Section
        id="foundations"
        eyebrow="foundations"
        title="Typsnitt"
        intro="De två typsnittsfamiljer som används i Jägersros digitala designsystem."
        background={sectionBackgrounds.foundations}
        action={sectionAction("foundations")}
      >
        <div className="font-grid">
          {fontFamilies.map(({ token, family }) => (
            <article className="font-card" key={token}>
              <code className="type-code-01">{token}</code>
              <p className={`font-card__sample type-fluid-heading-06 font-family--${token}`}>
                Jägersro Aa
              </p>
              <span className="type-code-01">{family}</span>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="utility"
        eyebrow="utility"
        title="Utility och brödtext"
        intro={`Alla utility- och body-stilar i breakpoint-läget ${breakpoint}.`}
        background={sectionBackgrounds.utility}
        action={sectionAction("utility")}
      >
        <div className="type-list">{renderRows(["utility", "body"])}</div>
      </Section>

      <Section
        id="headings"
        eyebrow="headings"
        title="Fluid rubriker"
        intro={`Alla responsiva rubrikstilar i breakpoint-läget ${breakpoint}.`}
        background={sectionBackgrounds.headings}
        action={sectionAction("headings")}
      >
        <div className="type-list">{renderRows(["fluid-heading"])}</div>
      </Section>

      <Section
        id="display"
        eyebrow="display"
        title="Display, stycke och citat"
        intro={`Alla fluid display-stilar i breakpoint-läget ${breakpoint}.`}
        background={sectionBackgrounds.display}
        action={sectionAction("display")}
      >
        <div className="type-list">{renderRows(["fluid-display"])}</div>
      </Section>
    </>
  );
}

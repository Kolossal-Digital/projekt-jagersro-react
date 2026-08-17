import { useState } from "react";
import { BackgroundPicker } from "../components/BackgroundPicker";
import { ForegroundPicker } from "../components/ForegroundPicker";
import {
  HeroSection,
  type HeroContent,
  type HeroVariant,
} from "../patterns/HeroSection";
import type { BackgroundName, ForegroundName } from "../tokens";
import { SectionMarkdownDocs } from "./SectionMarkdownDocs";
import { heroMarkdownFields } from "./sectionMarkdownFields";

const commonActions: HeroContent["actions"] = [
  {
    label: "Följ utvecklingen",
    href: "#hero-sections",
    variant: "primary",
    icon: "arrow-right",
  },
  {
    label: "Vad är projekt Jägersro?",
    href: "#hero-sections",
    variant: "outline",
  },
];

const contentByVariant: Record<HeroVariant, HeroContent> = {
  centered: {
    heading: "En plats där historia möter framtid",
    body:
      "Följ utvecklingen av Jägersro och lär känna berättelserna, människorna och planerna som formar platsens nästa kapitel.",
    actions: commonActions,
  },
  left: {
    heading: "Jägersro förändras, steg för steg",
    body:
      "Här samlar vi dokumentation, aktuella händelser och vägar in för dig som vill förstå eller delta i utvecklingen.",
    actions: commonActions,
  },
  split: {
    heading: "En ny stadsdel\nbörjar ta form",
    body:
      "På Jägersro växer en ny del av Malmö fram. Utvecklingen tar avstamp i platsens historia och skapar utrymme för nya berättelser, verksamheter och möten.",
  },
};

const variants: Array<{ id: HeroVariant; label: string }> = [
  { id: "centered", label: "Centered" },
  { id: "left", label: "Left aligned" },
  { id: "split", label: "Split" },
];

export function HeroSectionsCatalog() {
  const [backgrounds, setBackgrounds] = useState<
    Record<HeroVariant, BackgroundName>
  >({
    centered: "background-accent-01",
    left: "background-accent-01",
    split: "background-accent-01",
  });
  const [foregrounds, setForegrounds] = useState<Record<HeroVariant, ForegroundName>>({
    centered: "text-primary",
    left: "text-primary",
    split: "text-primary",
  });

  function setBackground(variant: HeroVariant, background: BackgroundName) {
    setBackgrounds((current) => ({ ...current, [variant]: background }));
  }

  function setForeground(variant: HeroVariant, foreground: ForegroundName) {
    setForegrounds((current) => ({ ...current, [variant]: foreground }));
  }

  return (
    <div className="pattern-catalog" id="hero-sections">
      {variants.map((variant) => (
        <article className="pattern-specimen" key={variant.id}>
          <header className="pattern-specimen__header page-grid">
            <div>
              <p className="type-code-01">pattern / hero</p>
              <h2 className="type-fluid-heading-04">{variant.label}</h2>
              <code className="type-code-01">
                variant=&quot;{variant.id}&quot;
              </code>
            </div>
            <div className="pattern-specimen__controls">
              <BackgroundPicker
                value={backgrounds[variant.id]}
                onChange={(background) => setBackground(variant.id, background)}
              />
              <ForegroundPicker
                value={foregrounds[variant.id]}
                onChange={(foreground) => setForeground(variant.id, foreground)}
              />
            </div>
          </header>
          <HeroSection
            background={backgrounds[variant.id]}
            foreground={foregrounds[variant.id]}
            content={contentByVariant[variant.id]}
            headingAs="h2"
            variant={variant.id}
          />
        </article>
      ))}
      <SectionMarkdownDocs
        fields={heroMarkdownFields}
        sectionName="Hero section"
      />
    </div>
  );
}

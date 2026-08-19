import { useState } from "react";
import featureDummyImage from "../assets/full-width-feature-dummy.jpg";
import { BackgroundPicker } from "../components/BackgroundPicker";
import { ForegroundPicker } from "../components/ForegroundPicker";
import { HeadingBalancePicker } from "../components/HeadingBalancePicker";
import {
  FullWidthFeatureSection,
  type FeatureContent,
} from "../patterns/FullWidthFeatureSection";
import type { BackgroundName, ForegroundName } from "../tokens";
import { SectionMarkdownDocs } from "./SectionMarkdownDocs";
import { fullWidthFeatureMarkdownFields } from "./sectionMarkdownFields";

const featureContent: FeatureContent = {
  tagline: "Projekt Jägersro",
  heading: "En plats i förändring, med historien nära",
  body:
    "Jägersro utvecklas till en ny del av Malmö. Här följer vi processen, dokumenterar platsen och samlar berättelserna som hjälper oss förstå både det som har varit och det som växer fram.",
  actions: [
    {
      label: "Följ utvecklingen",
      href: "#full-width-feature-sections",
      variant: "primary",
      icon: "arrow-right",
    },
    {
      label: "Vad är projekt Jägersro?",
      href: "#full-width-feature-sections",
      variant: "outline",
    },
  ],
};

const variants = [
  {
    id: "right-fit",
    imagePosition: "right",
    imageFit: "fit",
    label: "Text / image · Fit",
  },
  {
    id: "left-fit",
    imagePosition: "left",
    imageFit: "fit",
    label: "Image / text · Fit",
  },
  {
    id: "right-fill",
    imagePosition: "right",
    imageFit: "fill",
    label: "Text / image · Fill",
  },
  {
    id: "left-fill",
    imagePosition: "left",
    imageFit: "fill",
    label: "Image / text · Fill",
  },
] as const;

type VariantId = (typeof variants)[number]["id"];

export function FullWidthFeatureSectionsCatalog() {
  const [backgrounds, setBackgrounds] = useState<
    Record<VariantId, BackgroundName>
  >({
    "right-fit": "background-accent-01",
    "left-fit": "background-accent-01",
    "right-fill": "background-accent-01",
    "left-fill": "background-accent-01",
  });
  const [foregrounds, setForegrounds] = useState<Record<VariantId, ForegroundName>>({
    "right-fit": "text-primary",
    "left-fit": "text-primary",
    "right-fill": "text-primary",
    "left-fill": "text-primary",
  });
  const [balancedHeadings, setBalancedHeadings] = useState<
    Record<VariantId, boolean>
  >({
    "right-fit": true,
    "left-fit": true,
    "right-fill": true,
    "left-fill": true,
  });

  function setBackground(id: VariantId, background: BackgroundName) {
    setBackgrounds((current) => ({ ...current, [id]: background }));
  }

  function setForeground(id: VariantId, foreground: ForegroundName) {
    setForegrounds((current) => ({ ...current, [id]: foreground }));
  }

  return (
    <div className="pattern-catalog" id="full-width-feature-sections">
      {variants.map((variant) => (
        <article className="pattern-specimen" key={variant.id}>
          <header className="pattern-specimen__header page-grid">
            <div>
              <p className="type-code-01">pattern / full width feature</p>
              <h2 className="type-fluid-heading-04">{variant.label}</h2>
              <code className="type-code-01">
                imagePosition=&quot;{variant.imagePosition}&quot;
                {" · "}
                imageFit=&quot;{variant.imageFit}&quot;
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
              <HeadingBalancePicker
                value={balancedHeadings[variant.id]}
                onChange={(value) =>
                  setBalancedHeadings((current) => ({
                    ...current,
                    [variant.id]: value,
                  }))
                }
              />
            </div>
          </header>

          <FullWidthFeatureSection
            background={backgrounds[variant.id]}
            balanceHeading={balancedHeadings[variant.id]}
            foreground={foregrounds[variant.id]}
            content={featureContent}
            headingAs="h2"
            image={{
              src: featureDummyImage,
              alt: "Jägersros vita logotyp mot en mörkgrön bakgrund.",
            }}
            imageFit={variant.imageFit}
            imagePosition={variant.imagePosition}
          />
        </article>
      ))}
      <SectionMarkdownDocs
        fields={fullWidthFeatureMarkdownFields}
        sectionName="Full width feature section"
      />
    </div>
  );
}

import { useState } from "react";
import featureDummyImage from "../assets/full-width-feature-dummy.jpg";
import { BackgroundPicker } from "../components/BackgroundPicker";
import {
  FullWidthFeatureSection,
  type FeatureContent,
} from "../patterns/FullWidthFeatureSection";
import type { BackgroundName } from "../tokens";

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

  function setBackground(id: VariantId, background: BackgroundName) {
    setBackgrounds((current) => ({ ...current, [id]: background }));
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
            <BackgroundPicker
              value={backgrounds[variant.id]}
              onChange={(background) =>
                setBackground(variant.id, background)
              }
            />
          </header>

          <FullWidthFeatureSection
            background={backgrounds[variant.id]}
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
    </div>
  );
}

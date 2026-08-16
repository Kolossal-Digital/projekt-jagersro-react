import { useState } from "react";
import featureMontage from "../assets/full-width-feature-montage.png";
import { BackgroundPicker } from "../components/BackgroundPicker";
import {
  FeatureSection,
  type FeatureSectionContent,
  type FeatureSectionLayout,
  type FeatureSectionMediaPosition,
} from "../patterns/FeatureSection";
import type { BackgroundName } from "../tokens";

const body =
  "Jägersro är en plats med många lager. Här möts minnen från travbanan, vardagen i området och berättelsen om den stadsdel som nu tar form.";

const actions = [
  {
    label: "Följ utvecklingen",
    href: "#feature-sections",
    variant: "primary" as const,
    icon: "arrow-right" as const,
  },
  {
    label: "Vad är projekt Jägersro?",
    href: "#feature-sections",
    variant: "outline" as const,
  },
];

const baseContent: FeatureSectionContent = {
  tagline: "Projekt Jägersro",
  heading: "En plats i förändring, med historien nära",
  richText: [{ type: "paragraph", text: body }],
  actions,
};

type Specimen = {
  id: string;
  label: string;
  layout: FeatureSectionLayout;
  content: FeatureSectionContent;
  mediaPosition?: FeatureSectionMediaPosition;
  headingVariant?: "fluid-heading-05" | "fluid-heading-06";
  align?: "start" | "end";
};

const specimens: Specimen[] = [
  {
    id: "split-intro",
    label: "Split / intro",
    layout: "split",
    align: "end",
    content: {
      heading: "Jägersro bär på en lång historia och en ny berättelse",
      richText: [{ type: "paragraph", text: body }],
    },
  },
  {
    id: "media-right",
    label: "Media / image right",
    layout: "media",
    mediaPosition: "right",
    content: baseContent,
  },
  {
    id: "media-left",
    label: "Media / image left",
    layout: "media",
    mediaPosition: "left",
    content: baseContent,
  },
  {
    id: "split-cta",
    label: "Split / CTA",
    layout: "split",
    content: {
      ...baseContent,
      richText: [{ type: "paragraph", text: body }],
    },
  },
];

const image = {
  src: featureMontage,
  alt: "Bildmontage med patinerad byggnadsdetalj och en kock som lägger upp en maträtt.",
};

export function FeatureSectionsCatalog() {
  const [backgrounds, setBackgrounds] = useState<Record<string, BackgroundName>>(
    Object.fromEntries(
      specimens.map(({ id }) => [id, "background-accent-01"]),
    ) as Record<string, BackgroundName>,
  );

  function setBackground(id: string, background: BackgroundName) {
    setBackgrounds((current) => ({ ...current, [id]: background }));
  }

  return (
    <div className="pattern-catalog" id="feature-sections">
      {specimens.map((specimen) => (
        <article className="pattern-specimen" key={specimen.id}>
          <header className="pattern-specimen__header page-grid">
            <div>
              <p className="type-code-01">pattern / feature section</p>
              <h2 className="type-fluid-heading-04">{specimen.label}</h2>
              <code className="type-code-01">
                layout=&quot;{specimen.layout}&quot;
                {specimen.mediaPosition &&
                  ` · mediaPosition="${specimen.mediaPosition}"`}
              </code>
            </div>
            <BackgroundPicker
              value={backgrounds[specimen.id]}
              onChange={(background) => setBackground(specimen.id, background)}
            />
          </header>

          <FeatureSection
            align={specimen.align}
            background={backgrounds[specimen.id]}
            content={specimen.content}
            headingAs="h2"
            headingVariant={specimen.headingVariant}
            image={specimen.layout === "media" ? image : undefined}
            layout={specimen.layout}
            mediaPosition={specimen.mediaPosition}
          />
        </article>
      ))}
    </div>
  );
}

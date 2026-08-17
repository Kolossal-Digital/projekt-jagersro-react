import { useState } from "react";
import jagersroAerial from "../assets/jagersro-aerial.png";
import { BackgroundPicker } from "../components/BackgroundPicker";
import { ForegroundPicker } from "../components/ForegroundPicker";
import {
  ImageSection,
  type ImageSectionCaption,
  type ImageSectionLayout,
} from "../patterns/ImageSection";
import type { BackgroundName, ForegroundName } from "../tokens";

const image = {
  src: jagersroAerial,
  alt: "Flygbild över Jägersro travbana och det omgivande området.",
  width: 1024,
  height: 683,
};

const caption: ImageSectionCaption = {
  label: "Bild 1",
  description:
    "Flygbilden visar Jägersro travbana och de omgivande kvarteren före omvandlingen. Den dokumenterar platsens skala, grönska och tydliga spår av travets historia – ett landskap som steg för steg får nya användningar och berättelser.",
};

type Specimen = {
  id: string;
  label: string;
  layout: ImageSectionLayout;
  caption?: ImageSectionCaption;
};

const specimens: Specimen[] = [
  { id: "image-grid", label: "Grid", layout: "grid" },
  {
    id: "image-grid-caption",
    label: "Grid / with description",
    layout: "grid",
    caption,
  },
  { id: "image-full-width", label: "Full width", layout: "full-width" },
];

export function ImageSectionCatalog() {
  const [backgrounds, setBackgrounds] = useState<Record<string, BackgroundName>>(
    Object.fromEntries(
      specimens.map(({ id }) => [id, "background-accent-01"]),
    ) as Record<string, BackgroundName>,
  );
  const [foregrounds, setForegrounds] = useState<Record<string, ForegroundName>>(
    Object.fromEntries(specimens.map(({ id }) => [id, "text-primary"])) as Record<string, ForegroundName>,
  );

  function setBackground(id: string, background: BackgroundName) {
    setBackgrounds((current) => ({ ...current, [id]: background }));
  }

  function setForeground(id: string, foreground: ForegroundName) {
    setForegrounds((current) => ({ ...current, [id]: foreground }));
  }

  return (
    <div className="pattern-catalog" id="image-section">
      {specimens.map((specimen) => (
        <article className="pattern-specimen" key={specimen.id}>
          <header className="pattern-specimen__header page-grid">
            <div>
              <p className="type-code-01">pattern / image section</p>
              <h2 className="type-fluid-heading-04">{specimen.label}</h2>
              <code className="type-code-01">
                layout=&quot;{specimen.layout}&quot;
                {specimen.caption ? " · caption" : ""}
              </code>
            </div>
            <div className="pattern-specimen__controls">
              <BackgroundPicker
                value={backgrounds[specimen.id]}
                onChange={(background) => setBackground(specimen.id, background)}
              />
              <ForegroundPicker
                value={foregrounds[specimen.id]}
                onChange={(foreground) => setForeground(specimen.id, foreground)}
              />
            </div>
          </header>

          <ImageSection
            background={backgrounds[specimen.id]}
            foreground={foregrounds[specimen.id]}
            caption={specimen.caption}
            image={image}
            layout={specimen.layout}
          />
        </article>
      ))}
    </div>
  );
}

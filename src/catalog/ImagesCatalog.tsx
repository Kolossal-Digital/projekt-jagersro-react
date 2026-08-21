import { useState } from "react";
import jagersroAerial from "../assets/jagersro-aerial.png";
import { BackgroundPicker } from "../components/BackgroundPicker";
import { Image } from "../components/Image";
import { Section } from "../components/Section";
import { Typography } from "../components/Typography";
import { demoImages } from "../content/demoContent";
import type { BackgroundName } from "../tokens";

const image = {
  src: jagersroAerial,
  alt: "Flygbild över Jägersro travbana och det omgivande området.",
  width: 1024,
  height: 683,
};

const collageResources = [
  ["collageGraphicBlue", demoImages.collageGraphicBlue],
  ["collageMarket", demoImages.collageMarket],
  ["collageMaterialRed", demoImages.collageMaterialRed],
  ["collageMaterialSand", demoImages.collageMaterialSand],
  ["collageGardening", demoImages.collageGardening],
] as const;

export function ImagesCatalog() {
  const [background, setBackground] =
    useState<BackgroundName>("background-accent-01");

  return (
    <Section
      id="images"
      eyebrow="components / image"
      title="Image"
      intro="Gemensam rendering av responsiva CMS-bilder. Den omgivande komponenten bestämmer bildfältets proportion och storlek."
      background={background}
      action={<BackgroundPicker value={background} onChange={setBackground} />}
    >
      <div className="image-specimens">
        {(["cover", "contain"] as const).map((fit) => (
          <article className="image-specimen" key={fit}>
            <h3 className="type-fluid-heading-03">{fit}</h3>
            <div className="image-specimen__frame">
              <Image
                asset={image}
                fit={fit}
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <code className="type-code-01">fit=&quot;{fit}&quot;</code>
          </article>
        ))}
      </div>
      <div className="image-resource-library">
        <Typography as="h3" variant="fluid-heading-03">
          Registrerade kollageresurser
        </Typography>
        <Typography variant="body-01">
          Använd nyckeln i Markdownfält som <code>image: collageMarket</code>.
        </Typography>
        <div className="image-resource-grid">
          {collageResources.map(([key, asset]) => (
            <article className="image-resource-card" key={key}>
              <div className="image-resource-card__frame">
                <Image
                  asset={asset}
                  fit="contain"
                  sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <code className="type-code-01">{key}</code>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

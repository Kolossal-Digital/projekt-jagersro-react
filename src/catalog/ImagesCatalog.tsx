import { useState } from "react";
import jagersroAerial from "../assets/jagersro-aerial.png";
import { BackgroundPicker } from "../components/BackgroundPicker";
import { Image } from "../components/Image";
import { Section } from "../components/Section";
import type { BackgroundName } from "../tokens";

const image = {
  src: jagersroAerial,
  alt: "Flygbild över Jägersro travbana och det omgivande området.",
  width: 1024,
  height: 683,
};

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
    </Section>
  );
}

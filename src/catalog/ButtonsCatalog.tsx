import { ArrowLeftIcon } from "@phosphor-icons/react/dist/csr/ArrowLeft";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/csr/ArrowRight";
import { useState } from "react";
import { BackgroundPicker } from "../components/BackgroundPicker";
import {
  Button,
  type ButtonSize,
  type ButtonVariant,
} from "../components/Button";
import { Section } from "../components/Section";
import type { BackgroundName } from "../tokens";

const variants: Array<{ id: ButtonVariant; label: string }> = [
  { id: "primary", label: "Primary" },
  { id: "secondary", label: "Secondary" },
  { id: "outline", label: "Outline" },
  { id: "text", label: "Text" },
];

const sizes: ButtonSize[] = ["large", "medium", "small"];

export function ButtonsCatalog() {
  const [background, setBackground] =
    useState<BackgroundName>("background-accent-01");

  return (
    <Section
      id="buttons"
      eyebrow="components / button"
      title="Knappar"
      intro="Fyra hierarkier och tre storlekar från Figma. Testa hover, focus och active direkt; disabled visas separat."
      background={background}
      action={<BackgroundPicker value={background} onChange={setBackground} />}
    >
      <div className="button-specimens">
        {variants.map((variant) => (
          <article className="button-specimen" key={variant.id}>
            <header className="button-specimen__header">
              <h3 className="type-fluid-heading-03">{variant.label}</h3>
              <code className="type-code-01">variant=&quot;{variant.id}&quot;</code>
            </header>

            <div className="button-specimen__rows">
              {sizes.map((size) => (
                <div className="button-specimen__row" key={size}>
                  <span className="button-specimen__label type-code-01">{size}</span>
                  <Button variant={variant.id} size={size}>
                    Button
                  </Button>
                  <Button
                    variant={variant.id}
                    size={size}
                    leftIcon={<ArrowLeftIcon weight="regular" />}
                  >
                    Föregående
                  </Button>
                  <Button
                    variant={variant.id}
                    size={size}
                    rightIcon={<ArrowRightIcon weight="regular" />}
                  >
                    Nästa
                  </Button>
                  <Button variant={variant.id} size={size} disabled>
                    Disabled
                  </Button>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

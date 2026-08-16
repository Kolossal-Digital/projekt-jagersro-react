import { ArrowRightIcon } from "@phosphor-icons/react/dist/csr/ArrowRight";
import { CaretDownIcon } from "@phosphor-icons/react/dist/csr/CaretDown";
import { ListIcon } from "@phosphor-icons/react/dist/csr/List";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/csr/MagnifyingGlass";
import { MapPinIcon } from "@phosphor-icons/react/dist/csr/MapPin";
import { XIcon } from "@phosphor-icons/react/dist/csr/X";
import { useState, type ReactNode } from "react";
import { BackgroundPicker } from "../components/BackgroundPicker";
import { Section } from "../components/Section";
import type { BackgroundName } from "../tokens";

const icons: Array<{ name: string; icon: ReactNode }> = [
  { name: "ArrowRight", icon: <ArrowRightIcon weight="light" /> },
  { name: "CaretDown", icon: <CaretDownIcon weight="light" /> },
  { name: "MagnifyingGlass", icon: <MagnifyingGlassIcon weight="light" /> },
  { name: "MapPin", icon: <MapPinIcon weight="light" /> },
  { name: "List", icon: <ListIcon weight="light" /> },
  { name: "X", icon: <XIcon weight="light" /> },
];

export function IconsCatalog() {
  const [background, setBackground] =
    useState<BackgroundName>("background-accent-01");

  return (
    <Section
      id="icons"
      eyebrow="foundations / icons"
      title="Ikoner"
      intro="Phosphor Icons är produktens ikonbibliotek. Standardvikten är Light och standardstorleken är 24 px."
      background={background}
      action={<BackgroundPicker value={background} onChange={setBackground} />}
    >
      <div className="icon-grid">
        {icons.map((icon) => (
          <article className="icon-card" key={icon.name}>
            <span className="icon-card__sample" aria-hidden="true">
              {icon.icon}
            </span>
            <code className="type-code-01">{icon.name}</code>
          </article>
        ))}
      </div>
    </Section>
  );
}

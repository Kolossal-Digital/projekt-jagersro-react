import { useState } from "react";
import { BackgroundPicker } from "../components/BackgroundPicker";
import { Section } from "../components/Section";
import { Select } from "../components/Select";
import type { BackgroundName } from "../tokens";

const destinations = ["Jägersro", "Malmö", "Skåne"] as const;

export function SelectsCatalog() {
  const [background, setBackground] =
    useState<BackgroundName>("background-accent-01");
  const [destination, setDestination] =
    useState<(typeof destinations)[number]>("Jägersro");

  return (
    <Section
      id="selects"
      eyebrow="components / select"
      title="Select"
      intro="Ett tillgängligt native-fält med states från Figma. Hjälptext är valfri och visas inte som standard."
      background={background}
      action={<BackgroundPicker value={background} onChange={setBackground} />}
    >
      <div className="select-specimens">
        <article className="select-specimen">
          <h3 className="type-fluid-heading-03">Standard</h3>
          <Select
            label="Plats"
            value={destination}
            options={destinations}
            onChange={setDestination}
          />
        </article>

        <article className="select-specimen">
          <h3 className="type-fluid-heading-03">Rounded</h3>
          <Select
            label="Plats"
            value={destination}
            options={destinations}
            onChange={setDestination}
            variant="rounded"
          />
        </article>

        <article className="select-specimen">
          <h3 className="type-fluid-heading-03">Med hjälptext</h3>
          <Select
            label="Plats"
            value={destination}
            options={destinations}
            onChange={setDestination}
            helperText="Välj plats för innehållet."
          />
        </article>

        <article className="select-specimen">
          <h3 className="type-fluid-heading-03">Error</h3>
          <Select
            label="Plats"
            value={destination}
            options={destinations}
            onChange={setDestination}
            error="Kontrollera ditt val."
          />
        </article>

        <article className="select-specimen">
          <h3 className="type-fluid-heading-03">Disabled</h3>
          <Select
            label="Plats"
            value={destination}
            options={destinations}
            onChange={setDestination}
            helperText="Detta val kan inte ändras."
            disabled
          />
        </article>
      </div>
    </Section>
  );
}

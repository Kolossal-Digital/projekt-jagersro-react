import { useState } from "react";
import { BackgroundPicker } from "../components/BackgroundPicker";
import { Section } from "../components/Section";
import {
  TextField,
  type TextFieldSize,
} from "../components/TextField";
import type { BackgroundName } from "../tokens";

const sizes: TextFieldSize[] = ["large", "medium", "small"];

export function TextFieldsCatalog() {
  const [background, setBackground] =
    useState<BackgroundName>("background-accent-01");

  return (
    <Section
      id="text-fields"
      eyebrow="components / text field"
      title="Text field"
      intro="Tre storlekar och valideringslägen från Figma. Hover, focus och active testas direkt i de vanliga fälten."
      background={background}
      action={<BackgroundPicker value={background} onChange={setBackground} />}
    >
      <div className="text-field-specimens">
        <article className="text-field-specimen text-field-specimen--sizes">
          <h3 className="type-fluid-heading-03">Storlekar</h3>
          {sizes.map((size) => (
            <TextField
              key={size}
              label={size}
              placeholder="Placeholder"
              size={size}
            />
          ))}
        </article>

        <article className="text-field-specimen">
          <h3 className="type-fluid-heading-03">Med hjälptext</h3>
          <TextField
            label="Namn"
            placeholder="Skriv ditt namn"
            helperText="Ange för- och efternamn."
          />
        </article>

        <article className="text-field-specimen">
          <h3 className="type-fluid-heading-03">Error</h3>
          <TextField
            label="Namn"
            defaultValue="Error"
            error="Kontrollera det angivna namnet."
          />
        </article>

        <article className="text-field-specimen">
          <h3 className="type-fluid-heading-03">Success</h3>
          <TextField
            label="Namn"
            defaultValue="Success"
            helperText="Namnet är tillgängligt."
            success
          />
        </article>

        <article className="text-field-specimen">
          <h3 className="type-fluid-heading-03">Disabled</h3>
          <TextField
            label="Namn"
            defaultValue="Disabled"
            helperText="Fältet kan inte ändras."
            disabled
          />
        </article>
      </div>
    </Section>
  );
}

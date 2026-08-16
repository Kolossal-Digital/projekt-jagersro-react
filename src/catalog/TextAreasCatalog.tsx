import { useState } from "react";
import { BackgroundPicker } from "../components/BackgroundPicker";
import { Section } from "../components/Section";
import { TextArea } from "../components/TextArea";
import type { BackgroundName } from "../tokens";

export function TextAreasCatalog() {
  const [background, setBackground] =
    useState<BackgroundName>("background-accent-01");

  return (
    <Section
      id="text-areas"
      eyebrow="components / text area"
      title="Text area"
      intro="Ett längre textfält med native resize och teckenräknare när maxLength används. Hover, focus och active testas direkt."
      background={background}
      action={<BackgroundPicker value={background} onChange={setBackground} />}
    >
      <div className="text-area-specimens">
        <article className="text-area-specimen">
          <h3 className="type-fluid-heading-03">Standard</h3>
          <TextArea
            label="Beskrivning"
            placeholder="Skriv en beskrivning"
            maxLength={100}
          />
        </article>

        <article className="text-area-specimen">
          <h3 className="type-fluid-heading-03">Med hjälptext</h3>
          <TextArea
            label="Beskrivning"
            placeholder="Skriv en beskrivning"
            helperText="Beskriv kort vad ditt meddelande gäller."
            maxLength={100}
          />
        </article>

        <article className="text-area-specimen">
          <h3 className="type-fluid-heading-03">Error</h3>
          <TextArea
            label="Beskrivning"
            defaultValue="Texten behöver förtydligas."
            error="Beskrivningen behöver vara mer specifik."
            maxLength={100}
          />
        </article>

        <article className="text-area-specimen">
          <h3 className="type-fluid-heading-03">Warning</h3>
          <TextArea
            label="Beskrivning"
            defaultValue="Du närmar dig den rekommenderade textlängden."
            warning="Kontrollera att all information är relevant."
            maxLength={100}
          />
        </article>

        <article className="text-area-specimen">
          <h3 className="type-fluid-heading-03">Disabled</h3>
          <TextArea
            label="Beskrivning"
            defaultValue="Fältet kan inte ändras."
            helperText="Innehållet är låst."
            maxLength={100}
            disabled
          />
        </article>
      </div>
    </Section>
  );
}

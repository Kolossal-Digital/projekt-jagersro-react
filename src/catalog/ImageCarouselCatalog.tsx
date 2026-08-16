import { useState } from "react";
import { BackgroundPicker } from "../components/BackgroundPicker";
import { demoCarouselSlides } from "../content/demoContent";
import { ImageCarousel } from "../patterns/ImageCarousel";
import type { BackgroundName } from "../tokens";

export function ImageCarouselCatalog() {
  const [background, setBackground] =
    useState<BackgroundName>("background-accent-01");

  return (
    <div className="pattern-catalog" id="image-carousel">
      <article className="pattern-specimen">
        <header className="pattern-specimen__header page-grid">
          <div>
            <p className="type-code-01">pattern / image carousel</p>
            <h2 className="type-fluid-heading-04">Focused image with caption</h2>
            <code className="type-code-01">caption=&quot;optional&quot;</code>
          </div>
          <BackgroundPicker value={background} onChange={setBackground} />
        </header>

        <ImageCarousel
          ariaLabel="Dokumentära bilder från Jägersro"
          background={background}
          initialIndex={1}
          slides={demoCarouselSlides}
        />
      </article>
    </div>
  );
}

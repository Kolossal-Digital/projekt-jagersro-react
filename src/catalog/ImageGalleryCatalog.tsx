import { useState } from "react";
import { BackgroundPicker } from "../components/BackgroundPicker";
import { demoGalleryItems } from "../content/demoContent";
import { ImageGallery } from "../patterns/ImageGallery";
import type { BackgroundName } from "../tokens";

export function ImageGalleryCatalog() {
  const [background, setBackground] =
    useState<BackgroundName>("background-accent-01");

  return (
    <div className="pattern-catalog" id="image-gallery">
      <article className="pattern-specimen">
        <header className="pattern-specimen__header">
          <div>
            <p className="type-code-01">pattern / image gallery</p>
            <h2 className="type-fluid-heading-04">Editorial image mosaic</h2>
            <code className="type-code-01">lightbox=&quot;fullscreen&quot;</code>
          </div>
          <BackgroundPicker value={background} onChange={setBackground} />
        </header>

        <ImageGallery
          ariaLabel="Dokumentärt bildgalleri från Jägersro"
          background={background}
          items={demoGalleryItems}
        />
      </article>
    </div>
  );
}

import { useState } from "react";
import { BackgroundPicker } from "../components/BackgroundPicker";
import { ForegroundPicker } from "../components/ForegroundPicker";
import { demoGalleryItems } from "../content/demoContent";
import { ImageGallery } from "../patterns/ImageGallery";
import type { BackgroundName, ForegroundName } from "../tokens";
import { SectionMarkdownDocs } from "./SectionMarkdownDocs";
import { galleryMarkdownFields } from "./sectionMarkdownFields";

export function ImageGalleryCatalog() {
  const [background, setBackground] =
    useState<BackgroundName>("background-accent-01");
  const [foreground, setForeground] = useState<ForegroundName>("text-primary");

  return (
    <div className="pattern-catalog" id="image-gallery">
      <article className="pattern-specimen">
        <header className="pattern-specimen__header page-grid">
          <div>
            <p className="type-code-01">pattern / image gallery</p>
            <h2 className="type-fluid-heading-04">Editorial image mosaic</h2>
            <code className="type-code-01">lightbox=&quot;fullscreen&quot;</code>
          </div>
          <div className="pattern-specimen__controls">
            <BackgroundPicker value={background} onChange={setBackground} />
            <ForegroundPicker value={foreground} onChange={setForeground} />
          </div>
        </header>

        <ImageGallery
          ariaLabel="Dokumentärt bildgalleri från Jägersro"
          background={background}
          foreground={foreground}
          items={demoGalleryItems}
        />
      </article>
      <SectionMarkdownDocs
        fields={galleryMarkdownFields}
        sectionName="Image gallery"
      />
    </div>
  );
}

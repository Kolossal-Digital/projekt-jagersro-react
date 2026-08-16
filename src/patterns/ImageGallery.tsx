import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { CaretLeftIcon } from "@phosphor-icons/react/dist/csr/CaretLeft";
import { CaretRightIcon } from "@phosphor-icons/react/dist/csr/CaretRight";
import { XIcon } from "@phosphor-icons/react/dist/csr/X";
import { IconButton } from "../components/IconButton";
import { Image, type ImageAsset } from "../components/Image";
import type { BackgroundName } from "../tokens";
import { getSectionSpacingClasses, type SectionSpacingProps } from "./sectionSpacing";

export type ImageGalleryItem = {
  id: string;
  image: ImageAsset;
  caption?: string;
};

export type ImageGalleryProps = SectionSpacingProps & {
  id?: string;
  items: ImageGalleryItem[];
  ariaLabel?: string;
  background?: BackgroundName;
};

/** Editorial image mosaic with a native, keyboard-accessible fullscreen viewer. */
export function ImageGallery({
  id,
  items,
  ariaLabel = "Bildgalleri",
  background = "background",
  paddingTop,
  paddingBottom,
}: ImageGalleryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeItem = activeIndex === null ? null : items[activeIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || activeIndex === null || dialog.open) return;

    dialog.showModal();
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex]);

  if (items.length === 0) return null;

  function closeGallery() {
    dialogRef.current?.close();
    setActiveIndex(null);
  }

  function showRelativeItem(offset: number) {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) return 0;
      return (currentIndex + offset + items.length) % items.length;
    });
  }

  function handleDialogKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showRelativeItem(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showRelativeItem(1);
    }
  }

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) closeGallery();
  }

  return (
    <section
      aria-label={ariaLabel}
      className={`image-gallery surface--${background} ${getSectionSpacingClasses({ paddingTop, paddingBottom })}`}
      id={id}
    >
      <div className="image-gallery__grid page-grid">
        {items.map((item, index) => (
          <figure
            className={`image-gallery__item image-gallery__item--position-${(index % 6) + 1}`}
            key={item.id}
          >
            <button
              aria-label={`Öppna bild ${index + 1} av ${items.length} i helskärmsläge: ${item.caption || item.image.alt}`}
              className="image-gallery__image-button"
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              <Image
                asset={item.image}
                sizes="(min-width: 1200px) 66vw, (min-width: 768px) 75vw, calc(100vw - 32px)"
              />
            </button>
            {item.caption && (
              <figcaption className="image-gallery__caption type-label-02">
                {item.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      <dialog
        aria-label="Bildvisning i helskärmsläge"
        className="image-gallery__lightbox"
        onClick={handleBackdropClick}
        onClose={() => setActiveIndex(null)}
        onKeyDown={handleDialogKeyDown}
        ref={dialogRef}
      >
        {activeItem && activeIndex !== null && (
          <div className="image-gallery__lightbox-content">
            <header className="image-gallery__lightbox-header">
              <p aria-live="polite" className="type-code-01">
                {activeIndex + 1} / {items.length}
              </p>
              <IconButton
                className="image-gallery__lightbox-close"
                icon={<XIcon weight="regular" />}
                label="Stäng bildvisningen"
                onClick={closeGallery}
              />
            </header>

            <figure className="image-gallery__lightbox-figure">
              <div className="image-gallery__lightbox-media">
                <Image asset={activeItem.image} fit="contain" priority />
              </div>
              {activeItem.caption && (
                <figcaption className="image-gallery__lightbox-caption type-body-compact-01">
                  {activeItem.caption}
                </figcaption>
              )}
            </figure>

            {items.length > 1 && (
              <div className="image-gallery__lightbox-navigation">
                <IconButton
                  icon={<CaretLeftIcon weight="bold" />}
                  label="Föregående bild"
                  onClick={() => showRelativeItem(-1)}
                />
                <IconButton
                  icon={<CaretRightIcon weight="bold" />}
                  label="Nästa bild"
                  onClick={() => showRelativeItem(1)}
                />
              </div>
            )}
          </div>
        )}
      </dialog>
    </section>
  );
}

import { useState } from "react";
import { CaretLeftIcon } from "@phosphor-icons/react/dist/csr/CaretLeft";
import { CaretRightIcon } from "@phosphor-icons/react/dist/csr/CaretRight";
import { IconButton } from "../components/IconButton";
import { Image, type ImageAsset } from "../components/Image";
import type { BackgroundName, ForegroundName } from "../tokens";
import { getSectionSpacingClasses, type SectionSpacingProps } from "./sectionSpacing";

export type ImageCarouselCaption = {
  label?: string;
  title?: string;
  body?: string;
};

export type ImageCarouselSlide = {
  id: string;
  image: ImageAsset;
  caption?: ImageCarouselCaption;
};

export type ImageCarouselProps = SectionSpacingProps & {
  id?: string;
  slides: ImageCarouselSlide[];
  ariaLabel?: string;
  background?: BackgroundName;
  foreground?: ForegroundName;
  initialIndex?: number;
};

const visibleOffsets = [-3, -2, -1, 0, 1, 2, 3] as const;

function normalizeIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

/** Looping, CMS-ready carousel with one enlarged and captioned image in focus. */
export function ImageCarousel({
  id,
  slides,
  ariaLabel = "Bildkarusell",
  background = "background",
  foreground = "text-primary",
  initialIndex = 0,
  paddingTop,
  paddingBottom,
}: ImageCarouselProps) {
  const safeInitialIndex = Math.min(
    Math.max(initialIndex, 0),
    Math.max(slides.length - 1, 0),
  );
  const [virtualIndex, setVirtualIndex] = useState(safeInitialIndex);

  if (slides.length === 0) return null;

  const activeIndex = normalizeIndex(virtualIndex, slides.length);

  function showSlide(nextVirtualIndex: number) {
    setVirtualIndex(nextVirtualIndex);
  }

  function showSlideByIndex(nextIndex: number) {
    const forwardDistance = normalizeIndex(
      nextIndex - activeIndex,
      slides.length,
    );
    const backwardDistance = forwardDistance - slides.length;
    const shortestDistance =
      Math.abs(backwardDistance) < Math.abs(forwardDistance)
        ? backwardDistance
        : forwardDistance;

    showSlide(virtualIndex + shortestDistance);
  }

  function showPrevious() {
    showSlide(virtualIndex - 1);
  }

  function showNext() {
    showSlide(virtualIndex + 1);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showNext();
    }
  }

  return (
    <section
      aria-label={ariaLabel}
      aria-roledescription="karusell"
      className={`image-carousel surface--${background} foreground--${foreground} ${getSectionSpacingClasses({ paddingTop, paddingBottom })}`}
      id={id}
    >
      <div className="image-carousel__container">
        <div
          className="image-carousel__viewport"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <ul className="image-carousel__track">
            {visibleOffsets.map((offset) => {
              const slidePosition = virtualIndex + offset;
              const slideIndex = normalizeIndex(slidePosition, slides.length);
              const slide = slides[slideIndex];
              const isActive = offset === 0;
              const isAdjacent = Math.abs(offset) === 1;

              return (
                <li
                  aria-current={isActive ? "true" : undefined}
                  aria-hidden={!isActive && !isAdjacent ? "true" : undefined}
                  className={[
                    "image-carousel__slide",
                    `image-carousel__slide--slot-${offset}`,
                    isActive && "image-carousel__slide--active",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  key={slidePosition}
                >
                  <button
                    aria-label={
                      isActive
                        ? `Bild ${slideIndex + 1} av ${slides.length}`
                        : `Visa bild ${slideIndex + 1} av ${slides.length}`
                    }
                    className="image-carousel__image-button"
                    disabled={isActive}
                    onClick={() => showSlide(slidePosition)}
                    tabIndex={isAdjacent ? 0 : -1}
                    type="button"
                  >
                    <Image
                      asset={slide.image}
                      fit="cover"
                      priority={isActive && slideIndex === safeInitialIndex}
                      sizes="(min-width: 1100px) 975px, (min-width: 768px) calc(100vw - 136px), calc(100vw - 32px)"
                    />
                  </button>

                  {slide.caption && (
                    <div
                      aria-hidden={!isActive}
                      className="image-carousel__caption"
                    >
                      {(slide.caption.label || slide.caption.title) && (
                        <p className="image-carousel__caption-title type-body-01">
                          {slide.caption.label && (
                            <span>{slide.caption.label} – </span>
                          )}
                          {slide.caption.title && (
                            <strong>{slide.caption.title}</strong>
                          )}
                        </p>
                      )}
                      {slide.caption.body && (
                        <p className="type-body-01">
                          {slide.caption.body}
                        </p>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="image-carousel__controls-grid page-grid">
          <div className="image-carousel__controls">
            <div
              aria-label="Välj bild"
              className="image-carousel__dots"
              role="group"
            >
              {slides.map((slide, index) => (
                <button
                  aria-current={index === activeIndex ? "true" : undefined}
                  aria-label={`Visa bild ${index + 1} av ${slides.length}`}
                  className="image-carousel__dot-button"
                  key={slide.id}
                  onClick={() => showSlideByIndex(index)}
                  type="button"
                >
                  <span className="image-carousel__dot" />
                </button>
              ))}
            </div>

            <div className="image-carousel__arrows">
              <IconButton
                icon={<CaretLeftIcon weight="bold" />}
                label="Föregående bild"
                onClick={showPrevious}
              />
              <IconButton
                icon={<CaretRightIcon weight="bold" />}
                label="Nästa bild"
                onClick={showNext}
              />
            </div>
          </div>
        </div>

        <p aria-live="polite" className="visually-hidden">
          Bild {activeIndex + 1} av {slides.length}
        </p>
      </div>
    </section>
  );
}

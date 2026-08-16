import { useId, useLayoutEffect, useRef, useState } from "react";
import { CaretDownIcon } from "@phosphor-icons/react/dist/csr/CaretDown";
import { CaretLeftIcon } from "@phosphor-icons/react/dist/csr/CaretLeft";
import { CaretRightIcon } from "@phosphor-icons/react/dist/csr/CaretRight";
import { CaretUpIcon } from "@phosphor-icons/react/dist/csr/CaretUp";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/csr/ArrowRight";
import { ButtonLink } from "../components/Button";
import { IconButton } from "../components/IconButton";
import { Image, type ImageAsset } from "../components/Image";
import type { BackgroundName } from "../tokens";
import { getSectionSpacingClasses, type SectionSpacingProps } from "./sectionSpacing";

export type TimelineStatus = "completed" | "current" | "future";

export type TimelineMedia = {
  image: ImageAsset;
  caption?: string;
};

export type TimelineItem = {
  id: string;
  year: string;
  title: string;
  summary: string;
  status: TimelineStatus;
  detail?: {
    heading?: string;
    body?: string;
    link?: {
      label: string;
      href: string;
    };
  };
  media?: TimelineMedia;
};

export type TimelineSectionProps = SectionSpacingProps & {
  items: TimelineItem[];
  ariaLabel?: string;
  background?: BackgroundName;
  id?: string;
  initialIndex?: number;
};

const statusLabels: Record<TimelineStatus, string> = {
  completed: "Genomfört",
  current: "Pågår",
  future: "Planerat",
};

/** Interactive, CMS-ready project timeline with optional editorial detail media. */
export function TimelineSection({
  items,
  ariaLabel = "Projektets tidslinje",
  background = "background",
  id,
  initialIndex = 0,
  paddingTop,
  paddingBottom,
}: TimelineSectionProps) {
  const safeInitialIndex = Math.min(
    Math.max(initialIndex, 0),
    Math.max(items.length - 1, 0),
  );
  const [activeIndex, setActiveIndex] = useState(safeInitialIndex);
  const tabListId = useId();
  const itemsRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const hasPositionedTrackRef = useRef(false);

  const activeItem = items[activeIndex];

  useLayoutEffect(() => {
    const activeButton = buttonRefs.current[activeIndex];
    const itemsElement = itemsRef.current;
    const trackElement = trackRef.current;
    if (!activeButton || !itemsElement || !trackElement) return;
    const activeElement: HTMLButtonElement = activeButton;
    const viewportElement: HTMLDivElement = itemsElement;
    const movingTrack: HTMLDivElement = trackElement;

    function centerActiveItem(animate = true) {
      const isDesktop = window.matchMedia("(min-width: 1200px)").matches;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const x = isDesktop
        ? 0
        : viewportElement.clientWidth / 2 -
          (activeElement.offsetLeft + activeElement.offsetWidth / 2);
      const y = isDesktop
        ? viewportElement.clientHeight / 2 -
          (activeElement.offsetTop + activeElement.offsetHeight / 2)
        : 0;
      const targetTransform = `translate3d(${x}px, ${y}px, 0)`;
      const currentTransform = getComputedStyle(movingTrack).transform;

      movingTrack.getAnimations().forEach((animation) => animation.cancel());
      movingTrack.animate(
        animate && !reduceMotion
          ? [
              { transform: currentTransform === "none" ? targetTransform : currentTransform },
              { transform: targetTransform },
            ]
          : { transform: targetTransform },
        {
          duration: animate && !reduceMotion ? 520 : 0,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "forwards",
        },
      );

      hasPositionedTrackRef.current = true;
    }

    centerActiveItem(hasPositionedTrackRef.current);

    let observedWidth = viewportElement.clientWidth;
    let observedHeight = viewportElement.clientHeight;
    const resizeObserver = new ResizeObserver(() => {
      const nextWidth = viewportElement.clientWidth;
      const nextHeight = viewportElement.clientHeight;
      if (nextWidth === observedWidth && nextHeight === observedHeight) return;

      observedWidth = nextWidth;
      observedHeight = nextHeight;
      centerActiveItem(false);
    });
    resizeObserver.observe(viewportElement);
    return () => resizeObserver.disconnect();
  }, [activeIndex]);

  if (!activeItem) return null;

  function selectItem(index: number, moveFocus = false) {
    const nextIndex = Math.min(Math.max(index, 0), items.length - 1);
    setActiveIndex(nextIndex);
    if (moveFocus) buttonRefs.current[nextIndex]?.focus();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      selectItem(activeIndex - 1, true);
    }

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      selectItem(activeIndex + 1, true);
    }

    if (event.key === "Home") {
      event.preventDefault();
      selectItem(0, true);
    }

    if (event.key === "End") {
      event.preventDefault();
      selectItem(items.length - 1, true);
    }
  }

  const media = activeItem.media;
  const detailHeading = activeItem.detail?.heading ?? activeItem.title;

  return (
    <section
      aria-label={ariaLabel}
      className={`timeline-section surface--${background} ${getSectionSpacingClasses({ paddingTop, paddingBottom })}`}
      id={id}
    >
      <div className="timeline-section__container page-grid">
        <div className="timeline-section__navigation">
          <div className="timeline-section__arrow timeline-section__arrow--previous">
            <IconButton
              disabled={activeIndex === 0}
              icon={
                <>
                  <CaretUpIcon className="timeline-section__icon--vertical" weight="bold" />
                  <CaretLeftIcon className="timeline-section__icon--horizontal" weight="bold" />
                </>
              }
              label="Föregående händelse"
              onClick={() => selectItem(activeIndex - 1)}
            />
          </div>

          <div
            className="timeline-section__items"
            ref={itemsRef}
          >
            <div
              aria-label={ariaLabel}
              className="timeline-section__track"
              id={tabListId}
              onKeyDown={handleKeyDown}
              ref={trackRef}
              role="tablist"
            >
              {items.map((item, index) => {
                const isActive = index === activeIndex;
                const distanceFromActive = Math.abs(index - activeIndex);
                const visibilityClass =
                  distanceFromActive === 0
                    ? "timeline-section__item--active"
                    : distanceFromActive <= 2
                      ? `timeline-section__item--distance-${distanceFromActive}`
                      : "timeline-section__item--outside-range";

                return (
                  <button
                    aria-controls={`${tabListId}-panel`}
                    aria-selected={isActive}
                    className={[
                      "timeline-section__item",
                      `timeline-section__item--${item.status}`,
                      visibilityClass,
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    id={`${tabListId}-tab-${item.id}`}
                    key={item.id}
                    onClick={() => selectItem(index)}
                    ref={(element) => {
                      buttonRefs.current[index] = element;
                    }}
                    role="tab"
                    tabIndex={isActive ? 0 : -1}
                    type="button"
                  >
                    <span className="timeline-section__year type-code-01">{item.year}</span>
                    <span className="timeline-section__item-copy">
                      <span className="timeline-section__item-title type-body-compact-01">
                        {item.title}
                      </span>
                      <span className="timeline-section__item-summary type-body-01">
                        {item.summary}
                      </span>
                      <span className="timeline-section__status type-label-01">
                        {statusLabels[item.status]}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div aria-hidden="true" className="timeline-section__selection" />

          <div className="timeline-section__arrow timeline-section__arrow--next">
            <IconButton
              disabled={activeIndex === items.length - 1}
              icon={
                <>
                  <CaretDownIcon className="timeline-section__icon--vertical" weight="bold" />
                  <CaretRightIcon className="timeline-section__icon--horizontal" weight="bold" />
                </>
              }
              label="Nästa händelse"
              onClick={() => selectItem(activeIndex + 1)}
            />
          </div>
        </div>

        <div
          aria-labelledby={`${tabListId}-tab-${activeItem.id}`}
          className={`timeline-section__detail timeline-section__detail--media-${media ? 1 : 0}`}
          id={`${tabListId}-panel`}
          key={activeItem.id}
          role="tabpanel"
          tabIndex={0}
        >
          <div className="timeline-section__detail-copy">
            <p className="timeline-section__detail-meta type-code-01">
              {activeItem.year} / {statusLabels[activeItem.status]}
            </p>
            <h2 className="type-fluid-heading-04">{detailHeading}</h2>
            {activeItem.detail?.body && (
              <p className="type-body-01">{activeItem.detail.body}</p>
            )}
            {activeItem.detail?.link && (
              <ButtonLink
                href={activeItem.detail.link.href}
                rightIcon={<ArrowRightIcon weight="regular" />}
                size="medium"
                variant="secondary"
              >
                {activeItem.detail.link.label}
              </ButtonLink>
            )}
          </div>

          {media && (
            <div className="timeline-section__media-grid">
              <figure className="timeline-section__media">
                <Image
                  asset={media.image}
                  sizes="(min-width: 1200px) 50vw, (min-width: 768px) calc(100vw - 136px), calc(100vw - 32px)"
                />
                {media.caption && (
                  <figcaption className="type-body-compact-01">
                    {media.caption}
                  </figcaption>
                )}
              </figure>
            </div>
          )}
        </div>

        <p aria-live="polite" className="visually-hidden">
          {activeItem.year}: {activeItem.title}, {activeIndex + 1} av {items.length}
        </p>
      </div>
    </section>
  );
}

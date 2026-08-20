import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Image, type ImageAsset } from "../components/Image";
import { Typography } from "../components/Typography";
import type { BackgroundName, ForegroundName } from "../tokens";
import { getSectionSpacingClasses, type SectionSpacingProps } from "./sectionSpacing";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export type ImageSectionLayout = "grid" | "full-width" | "full-width-scroll";

export type ImageSectionCaption = {
  label: string;
  description: string;
};

export type ImageSectionProps = SectionSpacingProps & {
  id?: string;
  image: ImageAsset;
  /** @deprecated Use backgroundTop and backgroundBottom for new content. */
  background?: BackgroundName;
  backgroundTop?: BackgroundName;
  backgroundBottom?: BackgroundName;
  backgroundTopTheme?: "light" | "dark";
  backgroundBottomTheme?: "light" | "dark";
  foreground?: ForegroundName;
  caption?: ImageSectionCaption;
  layout?: ImageSectionLayout;
  priority?: boolean;
};

/** Grid-aligned or full-width documentary image section prepared for CMS data. */
export function ImageSection({
  id,
  image,
  background = "background",
  backgroundTop,
  backgroundBottom,
  backgroundTopTheme,
  backgroundBottomTheme,
  foreground = "text-primary",
  caption,
  layout = "grid",
  priority = false,
  paddingTop,
  paddingBottom,
}: ImageSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isScrollVariant = layout === "full-width-scroll";
  const resolvedBackgroundTop = backgroundTop ?? background;
  const resolvedBackgroundBottom = backgroundBottom ?? background;

  useGSAP(
    () => {
      if (!isScrollVariant || !sectionRef.current) return;

      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".image-section__media .image",
          { yPercent: 0 },
          {
            yPercent: -16.667,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });

      return () => media.revert();
    },
    { scope: sectionRef, dependencies: [isScrollVariant] },
  );

  const classes = [
    "image-section",
    `image-section--${layout}`,
    `foreground--${foreground}`,
    getSectionSpacingClasses({ paddingTop, paddingBottom }),
  ].join(" ");

  return (
    <section className={classes} id={id} ref={sectionRef}>
      <div
        aria-hidden="true"
        className={`image-section__background image-section__background--top${backgroundTopTheme ? ` theme--${backgroundTopTheme}` : ""} surface--${resolvedBackgroundTop}`}
      />
      <div
        aria-hidden="true"
        className={`image-section__background image-section__background--bottom${backgroundBottomTheme ? ` theme--${backgroundBottomTheme}` : ""} surface--${resolvedBackgroundBottom}`}
      />
      <div
        className={`image-section__container${layout === "grid" ? " page-grid" : ""}`}
      >
        <div className="image-section__media">
          <Image
            asset={image}
            fit="cover"
            priority={priority}
            sizes={
              layout !== "grid"
                ? "100vw"
                : "(min-width: 1920px) 1792px, (min-width: 1200px) calc(100vw - 128px), (min-width: 768px) calc(100vw - 136px), calc(100vw - 32px)"
            }
          />
        </div>

        {caption && (
          <div
            className={`image-section__caption${backgroundBottomTheme ? ` theme--${backgroundBottomTheme}` : ""}`}
          >
            <Typography variant="label-03">{caption.label}</Typography>
            <Typography variant="label-02">{caption.description}</Typography>
          </div>
        )}
      </div>
    </section>
  );
}

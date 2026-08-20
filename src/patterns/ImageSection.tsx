import { useEffect, useRef } from "react";
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

export type VideoAsset = {
  src: string;
  label: string;
  poster?: string;
  captions?: string;
};

export type VideoPlaybackMode = "background" | "controls";

type ImageSectionSharedProps = SectionSpacingProps & {
  id?: string;
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

export type ImageSectionProps = ImageSectionSharedProps & (
  | { image: ImageAsset; video?: never; playback?: never }
  | { image?: never; video: VideoAsset; playback: VideoPlaybackMode }
);

/** Grid-aligned or full-width image/video section prepared for CMS data. */
export function ImageSection({
  id,
  image,
  video,
  playback,
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const isScrollVariant = layout === "full-width-scroll";
  const isBackgroundVideo = Boolean(video && playback === "background");
  const resolvedBackgroundTop = backgroundTop ?? background;
  const resolvedBackgroundBottom = backgroundBottom ?? background;

  useGSAP(
    () => {
      if (!isScrollVariant || !sectionRef.current) return;

      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".image-section__media-element",
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

  useEffect(() => {
    const element = videoRef.current;
    if (!element || !isBackgroundVideo) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPlayback = () => {
      if (reducedMotion.matches) {
        element.pause();
      } else {
        void element.play().catch(() => undefined);
      }
    };

    syncPlayback();
    reducedMotion.addEventListener("change", syncPlayback);
    return () => reducedMotion.removeEventListener("change", syncPlayback);
  }, [isBackgroundVideo, video?.src]);

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
          {image ? (
            <div className="image-section__media-element">
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
          ) : (
            <video
              aria-hidden={isBackgroundVideo ? "true" : undefined}
              aria-label={isBackgroundVideo ? undefined : video.label}
              autoPlay={isBackgroundVideo}
              className="image-section__media-element image-section__video"
              controls={playback === "controls"}
              loop={isBackgroundVideo}
              muted={isBackgroundVideo}
              playsInline
              poster={video.poster}
              preload={isBackgroundVideo ? "auto" : "metadata"}
              ref={videoRef}
              src={video.src}
              tabIndex={isBackgroundVideo ? -1 : undefined}
            >
              {video.captions && (
                <track
                  default
                  kind="captions"
                  label="Svenska"
                  src={video.captions}
                  srcLang="sv"
                />
              )}
            </video>
          )}
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

import { useEffect, useRef, useState, type CSSProperties } from "react";
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

type NativeVideoAsset = {
  provider?: "native";
  src: string;
  label: string;
  poster?: string;
  captions?: string;
};

type VimeoVideoAsset = {
  provider: "vimeo";
  videoId: string;
  hash?: string;
  width: number;
  height: number;
  label: string;
  poster?: string;
  sourceUrl?: string;
};

export type VideoAsset = NativeVideoAsset | VimeoVideoAsset;

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

function getVimeoPlayerUrl(
  video: VimeoVideoAsset,
  playback: VideoPlaybackMode,
) {
  const parameters = new URLSearchParams({
    dnt: "1",
    title: "0",
    byline: "0",
    portrait: "0",
  });

  if (video.hash) parameters.set("h", video.hash);

  if (playback === "background") {
    parameters.set("background", "1");
    parameters.set("autoplay", "1");
    parameters.set("loop", "1");
    parameters.set("muted", "1");
    parameters.set("autopause", "0");
  }

  return `https://player.vimeo.com/video/${video.videoId}?${parameters.toString()}`;
}

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
  const vimeoCoverRef = useRef<HTMLDivElement>(null);
  const vimeoIframeRef = useRef<HTMLIFrameElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const isScrollVariant = layout === "full-width-scroll";
  const isBackgroundVideo = Boolean(video && playback === "background");
  const isVimeoVideo = video?.provider === "vimeo";
  const nativeVideoSrc = video && video.provider !== "vimeo" ? video.src : undefined;
  const vimeoCoverStyle = isVimeoVideo
    ? ({
        "--video-source-width": `${video.width}px`,
        "--video-source-height": `${video.height}px`,
      } as CSSProperties)
    : undefined;
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
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setPrefersReducedMotion(reducedMotion.matches);

    syncPreference();
    reducedMotion.addEventListener("change", syncPreference);
    return () => reducedMotion.removeEventListener("change", syncPreference);
  }, []);

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
  }, [isBackgroundVideo, nativeVideoSrc]);

  useEffect(() => {
    const cover = vimeoCoverRef.current;
    if (!cover || !isVimeoVideo || !isBackgroundVideo) return;

    const syncScale = () => {
      const { width, height } = cover.getBoundingClientRect();
      const scale = Math.max(width / video.width, height / video.height);
      cover.style.setProperty("--video-cover-scale", String(scale));
    };

    syncScale();
    const resizeObserver = new ResizeObserver(syncScale);
    resizeObserver.observe(cover);
    return () => resizeObserver.disconnect();
  }, [isBackgroundVideo, isVimeoVideo, video]);

  useEffect(() => {
    const iframe = vimeoIframeRef.current;
    if (!iframe || !isVimeoVideo || !isBackgroundVideo) return;

    const setPlayback = (shouldPlay: boolean) => {
      iframe.contentWindow?.postMessage(
        JSON.stringify({ method: shouldPlay ? "play" : "pause" }),
        "https://player.vimeo.com",
      );
    };

    const observer = new IntersectionObserver(
      ([entry]) => setPlayback(entry.isIntersecting && !prefersReducedMotion),
      { rootMargin: "200px 0px" },
    );

    observer.observe(iframe);
    return () => observer.disconnect();
  }, [isBackgroundVideo, isVimeoVideo, prefersReducedMotion]);

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
          ) : isVimeoVideo ? (
            isBackgroundVideo && prefersReducedMotion && video.poster ? (
              <img
                alt=""
                aria-hidden="true"
                className="image-section__media-element image-section__video"
                src={video.poster}
              />
            ) : isBackgroundVideo ? (
              <div
                className="image-section__media-element image-section__vimeo-cover"
                ref={vimeoCoverRef}
                style={vimeoCoverStyle}
              >
                <iframe
                  allow="autoplay; fullscreen; picture-in-picture"
                  aria-hidden="true"
                  className="image-section__video image-section__video--vimeo"
                  loading={priority ? "eager" : "lazy"}
                  ref={vimeoIframeRef}
                  src={getVimeoPlayerUrl(video, playback ?? "background")}
                  tabIndex={-1}
                  title={video.label}
                />
              </div>
            ) : (
              <iframe
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="image-section__media-element image-section__video image-section__video--vimeo"
                loading={priority ? "eager" : "lazy"}
                src={getVimeoPlayerUrl(video, playback ?? "controls")}
                title={video.label}
              />
            )
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

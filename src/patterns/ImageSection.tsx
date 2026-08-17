import { Image, type ImageAsset } from "../components/Image";
import { Typography } from "../components/Typography";
import type { BackgroundName, ForegroundName } from "../tokens";
import { getSectionSpacingClasses, type SectionSpacingProps } from "./sectionSpacing";

export type ImageSectionLayout = "grid" | "full-width";

export type ImageSectionCaption = {
  label: string;
  description: string;
};

export type ImageSectionProps = SectionSpacingProps & {
  id?: string;
  image: ImageAsset;
  background?: BackgroundName;
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
  foreground = "text-primary",
  caption,
  layout = "grid",
  priority = false,
  paddingTop,
  paddingBottom,
}: ImageSectionProps) {
  const classes = [
    "image-section",
    `image-section--${layout}`,
    `surface--${background}`,
    `foreground--${foreground}`,
    getSectionSpacingClasses({ paddingTop, paddingBottom }),
  ].join(" ");

  return (
    <section className={classes} id={id}>
      <div
        className={`image-section__container${layout === "grid" ? " page-grid" : ""}`}
      >
        <div className="image-section__media">
          <Image
            asset={image}
            fit="cover"
            priority={priority}
            sizes={
              layout === "full-width"
                ? "100vw"
                : "(min-width: 1920px) 1792px, (min-width: 1200px) calc(100vw - 128px), (min-width: 768px) calc(100vw - 136px), calc(100vw - 32px)"
            }
          />
        </div>

        {caption && (
          <div className="image-section__caption">
            <Typography variant="label-03">{caption.label}</Typography>
            <Typography variant="label-02">{caption.description}</Typography>
          </div>
        )}
      </div>
    </section>
  );
}

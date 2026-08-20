import { ArrowRightIcon } from "@phosphor-icons/react/dist/csr/ArrowRight";
import { ArrowDownIcon } from "@phosphor-icons/react/dist/csr/ArrowDown";
import { ButtonLink, type ButtonVariant } from "../components/Button";
import { Image, type ImageAsset } from "../components/Image";
import { Typography } from "../components/Typography";
import type { BackgroundName, ForegroundName } from "../tokens";
import { getSectionSpacingClasses, type SectionSpacingProps } from "./sectionSpacing";

export type FeatureAction = {
  label: string;
  href: string;
  variant?: Extract<ButtonVariant, "primary" | "outline">;
  icon?: "arrow-right" | "arrow-down";
};

export type FeatureContent = {
  tagline?: string;
  heading: string;
  body: string;
  actions?: FeatureAction[];
};

export type FeatureImage = ImageAsset;

export type FullWidthFeatureSectionProps = SectionSpacingProps & {
  id?: string;
  content: FeatureContent;
  image: FeatureImage;
  imagePosition?: "left" | "right";
  imageFit?: "fit" | "fill";
  background?: BackgroundName;
  foreground?: ForegroundName;
  balanceHeading?: boolean;
  headingAs?: "h1" | "h2";
};

/** Full-width feature pattern with a CMS-friendly text, action and image contract. */
export function FullWidthFeatureSection({
  id,
  content,
  image,
  imagePosition = "right",
  imageFit = "fit",
  background = "background",
  foreground = "text-primary",
  balanceHeading = true,
  headingAs = "h2",
  paddingTop,
  paddingBottom,
}: FullWidthFeatureSectionProps) {
  return (
    <section
      className={`feature-section feature-section--image-${imagePosition} feature-section--image-${imageFit} surface--${background} foreground--${foreground} ${balanceHeading ? "headings--balanced" : ""} ${getSectionSpacingClasses({ paddingTop, paddingBottom })}`}
      id={id}
    >
      <div className="feature-section__layout">
        <div className="feature-section__grid page-grid">
          <div className="feature-section__content-panel">
            <div className="feature-section__content">
              <div className="feature-section__copy">
                {content.tagline && (
                  <Typography variant="code-02">{content.tagline}</Typography>
                )}
                <Typography as={headingAs} variant="fluid-heading-06">
                  {content.heading}
                </Typography>
                <Typography variant="body-02">{content.body}</Typography>
              </div>

              {content.actions && content.actions.length > 0 && (
                <div className="feature-section__actions">
                  {content.actions.map((action) => (
                    <ButtonLink
                      href={action.href}
                      key={`${action.href}-${action.label}`}
                      rightIcon={
                        action.icon === "arrow-right" ? (
                          <ArrowRightIcon weight="regular" />
                        ) : action.icon === "arrow-down" ? (
                          <ArrowDownIcon weight="regular" />
                        ) : undefined
                      }
                      variant={action.variant}
                    >
                      {action.label}
                    </ButtonLink>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="feature-section__media">
          <Image
            asset={image}
            fit={imageFit === "fill" ? "cover" : "contain"}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}

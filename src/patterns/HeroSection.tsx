import { ArrowRightIcon } from "@phosphor-icons/react/dist/csr/ArrowRight";
import type { BackgroundName } from "../tokens";
import { getSectionSpacingClasses, type SectionSpacingProps } from "./sectionSpacing";
import { ButtonLink, type ButtonVariant } from "../components/Button";
import { Typography } from "../components/Typography";

export type HeroVariant = "centered" | "left" | "split";

export type HeroAction = {
  label: string;
  href: string;
  variant?: Extract<ButtonVariant, "primary" | "outline">;
  icon?: "arrow-right";
};

export type HeroContent = {
  heading: string;
  body: string;
  actions?: HeroAction[];
};

export type HeroSectionProps = SectionSpacingProps & {
  id?: string;
  variant: HeroVariant;
  content: HeroContent;
  background?: BackgroundName;
  headingAs?: "h1" | "h2";
  bodyVariant?: "body-01" | "body-02" | "body-compact-01" | "body-compact-02";
};

/** Full-width, CMS-ready hero pattern with serializable content props. */
export function HeroSection({
  id,
  variant,
  content,
  background = "background-accent-01",
  headingAs = "h1",
  bodyVariant,
  paddingTop,
  paddingBottom,
}: HeroSectionProps) {
  const isSplit = variant === "split";
  const headingVariant = isSplit ? "fluid-display-03" : "fluid-heading-06";

  return (
    <section
      className={`hero-section hero-section--${variant} surface--${background} ${getSectionSpacingClasses({ paddingTop, paddingBottom })}`}
      id={id}
    >
      <div className="hero-section__container page-grid">
        <div className="hero-section__heading">
          <Typography as={headingAs} variant={headingVariant}>
            {content.heading}
          </Typography>
        </div>

        <div className="hero-section__supporting-content">
          <Typography
            className="hero-section__body"
            variant={bodyVariant ?? (isSplit ? "body-02" : "body-compact-02")}
          >
            {content.body}
          </Typography>

          {content.actions && content.actions.length > 0 && (
            <div className="hero-section__actions">
              {content.actions.map((action) => (
                <ButtonLink
                  href={action.href}
                  key={`${action.href}-${action.label}`}
                  rightIcon={
                    action.icon === "arrow-right" ? (
                      <ArrowRightIcon weight="regular" />
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
    </section>
  );
}

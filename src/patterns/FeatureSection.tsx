import { ArrowDownRightIcon } from "@phosphor-icons/react/dist/csr/ArrowDownRight";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/csr/ArrowRight";
import { ButtonLink } from "../components/Button";
import { Image, type ImageAsset } from "../components/Image";
import { Typography } from "../components/Typography";
import type { BackgroundName, ForegroundName } from "../tokens";
import type { FeatureAction } from "./FullWidthFeatureSection";
import { getSectionSpacingClasses, type SectionSpacingProps } from "./sectionSpacing";

export type FeatureSectionLayout = "split" | "media" | "cta" | "centered";
export type FeatureSectionMediaPosition = "left" | "right";

export type FeatureRichTextBlock =
  | { type: "paragraph"; text: string }
  | { type: "bullet-list"; items: string[] }
  | {
      type: "columns";
      items: Array<{ heading: string; body: string }>;
    };

export type FeatureSectionContent = {
  tagline?: string;
  heading: string;
  richText: FeatureRichTextBlock[];
  actions?: FeatureAction[];
};

export type FeatureSectionProps = SectionSpacingProps & {
  id?: string;
  layout: FeatureSectionLayout;
  content: FeatureSectionContent;
  mediaPosition?: FeatureSectionMediaPosition;
  image?: ImageAsset;
  background?: BackgroundName;
  foreground?: ForegroundName;
  balanceHeading?: boolean;
  headingAs?: "h1" | "h2";
  headingVariant?: "fluid-heading-05" | "fluid-heading-06";
  align?: "start" | "end";
};

function FeatureRichText({ blocks }: { blocks: FeatureRichTextBlock[] }) {
  return (
    <div className="contained-feature__rich-text">
      {blocks.map((block, index) => {
        if (block.type === "paragraph") {
          return (
            <Typography key={`${block.type}-${index}`} variant="body-02">
              {block.text}
            </Typography>
          );
        }

        if (block.type === "bullet-list") {
          return (
            <ul className="contained-feature__list" key={`${block.type}-${index}`}>
              {block.items.map((item) => (
                <li key={item}>
                  <ArrowDownRightIcon aria-hidden="true" />
                  <Typography variant="body-02">{item}</Typography>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <div className="contained-feature__columns" key={`${block.type}-${index}`}>
            {block.items.map((item) => (
              <article key={`${item.heading}-${item.body}`}>
                <Typography as="h3" variant="fluid-heading-03">
                  {item.heading}
                </Typography>
                <Typography variant="body-02">{item.body}</Typography>
              </article>
            ))}
          </div>
        );
      })}
    </div>
  );
}

function FeatureActions({ actions }: { actions?: FeatureAction[] }) {
  if (!actions?.length) return null;

  return (
    <div className="contained-feature__actions">
      {actions.map((action) => (
        <ButtonLink
          href={action.href}
          key={`${action.href}-${action.label}`}
          rightIcon={
            action.icon === "arrow-right" ? <ArrowRightIcon /> : undefined
          }
          variant={action.variant}
        >
          {action.label}
        </ButtonLink>
      ))}
    </div>
  );
}

/** Max-width feature pattern with split, media, CTA and centered layouts. */
export function FeatureSection({
  id,
  layout,
  content,
  mediaPosition = "right",
  image,
  background = "background",
  foreground = "text-primary",
  balanceHeading = true,
  headingAs = "h2",
  headingVariant = "fluid-heading-06",
  align = "start",
  paddingTop,
  paddingBottom,
}: FeatureSectionProps) {
  const classes = [
    "contained-feature",
    `contained-feature--${layout}`,
    `contained-feature--align-${align}`,
    layout === "media" ? `contained-feature--media-${mediaPosition}` : "",
    `surface--${background}`,
    `foreground--${foreground}`,
    balanceHeading ? "headings--balanced" : "",
    getSectionSpacingClasses({ paddingTop, paddingBottom }),
  ]
    .filter(Boolean)
    .join(" ");

  const headingColumn = (
    <div className="contained-feature__heading-column">
      {content.tagline && (
        <Typography variant="code-02">{content.tagline}</Typography>
      )}
      <Typography as={headingAs} variant={headingVariant}>
        {content.heading}
      </Typography>
    </div>
  );

  const contentColumn = (
    <div className="contained-feature__content-column">
      <FeatureRichText blocks={content.richText} />
      <FeatureActions actions={content.actions} />
    </div>
  );

  const ctaCopyColumn = (
    <div className="contained-feature__cta-copy">
      {headingColumn}
      <FeatureRichText blocks={content.richText} />
    </div>
  );

  const ctaActionsColumn = (
    <div className="contained-feature__cta-actions">
      <FeatureActions actions={content.actions} />
    </div>
  );

  return (
    <section className={classes} id={id}>
      <div className="contained-feature__container">
        <div className="contained-feature__layout page-grid">
          {layout === "media" ? (
            <div className="contained-feature__media-content">
              {headingColumn}
              {contentColumn}
            </div>
          ) : layout === "cta" ? (
            <>
              {ctaCopyColumn}
              {ctaActionsColumn}
            </>
          ) : (
            <>
              {headingColumn}
              {contentColumn}
            </>
          )}

          {layout === "media" && image && (
            <div className="contained-feature__media">
              <Image
                asset={image}
                fit="contain"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

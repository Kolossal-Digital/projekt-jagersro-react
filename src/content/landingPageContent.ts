import { parse } from "yaml";
import type { NavbarAction, NavbarLink } from "../components/SiteNavbar";
import type { FooterLink, FooterNewsletter } from "../components/SiteFooter";
import type { BackgroundName } from "../tokens";
import type { HeroContent, HeroVariant } from "../patterns/HeroSection";
import type {
  FeatureSectionContent,
  FeatureSectionLayout,
  FeatureSectionMediaPosition,
} from "../patterns/FeatureSection";
import type { FeatureContent } from "../patterns/FullWidthFeatureSection";
import type { ImageCarouselCaption } from "../patterns/ImageCarousel";
import type { ImageGalleryItem } from "../patterns/ImageGallery";
import type {
  ArticleRowCount,
  ArticleSummary,
} from "../patterns/LatestArticlesSection";
import type {
  ImageSectionCaption,
  ImageSectionLayout,
} from "../patterns/ImageSection";
import type { TimelineItem } from "../patterns/TimelineSection";
import type { SectionPaddingSize } from "../patterns/sectionSpacing";
import landingPageMarkdown from "./landing-page.md?raw";

type Theme = "light" | "dark";

type SectionBase = {
  key: string;
  id?: string;
  theme: Theme;
  background: BackgroundName;
  paddingTop?: SectionPaddingSize;
  paddingBottom?: SectionPaddingSize;
};

export type LandingPageSection =
  | (SectionBase & {
      type: "navbar";
      links: NavbarLink[];
      searchAction: NavbarAction;
      primaryAction?: NavbarAction;
    })
  | (SectionBase & {
      type: "hero";
      variant: HeroVariant;
      content: HeroContent;
      headingAs?: "h1" | "h2";
      bodyVariant?: "body-01" | "body-02" | "body-compact-01" | "body-compact-02";
    })
  | (SectionBase & {
      type: "image";
      image: string;
      caption?: ImageSectionCaption;
      layout?: ImageSectionLayout;
      priority?: boolean;
    })
  | (SectionBase & {
      type: "feature";
      layout: FeatureSectionLayout;
      content: FeatureSectionContent;
      image?: string;
      mediaPosition?: FeatureSectionMediaPosition;
      headingVariant?: "fluid-heading-05" | "fluid-heading-06";
      align?: "start" | "end";
    })
  | (SectionBase & {
      type: "full-width-feature";
      content: FeatureContent;
      image: string;
      imagePosition?: "left" | "right";
      imageFit?: "fit" | "fill";
    })
  | (SectionBase & {
      type: "carousel";
      ariaLabel?: string;
      initialIndex?: number;
      slides: Array<{
        id: string;
        image: string;
        caption?: ImageCarouselCaption;
      }>;
    })
  | (SectionBase & {
      type: "image-gallery";
      ariaLabel?: string;
      itemIds: ImageGalleryItem["id"][];
    })
  | (SectionBase & {
      type: "latest-articles";
      heading: string;
      rows?: ArticleRowCount;
      articleIds: ArticleSummary["id"][];
      allArticlesLink?: {
        label: string;
        href: string;
      };
    })
  | (SectionBase & {
      type: "timeline";
      ariaLabel?: string;
      initialIndex?: number;
      itemIds: TimelineItem["id"][];
    })
  | (SectionBase & {
      type: "footer";
      navigation: FooterLink[];
      legalLinks: FooterLink[];
      newsletter: FooterNewsletter;
      copyright: string;
    });

const sectionPattern = /^##\s+.+\n```ya?ml\n([\s\S]*?)\n```/gm;

/** Reads ordered, CMS-like section records from the local Markdown fixture. */
export function readLandingPageSections(): LandingPageSection[] {
  return Array.from(landingPageMarkdown.matchAll(sectionPattern), (match) => {
    const section = parse(match[1]) as Partial<LandingPageSection>;

    if (!section.key || !section.type || !section.theme || !section.background) {
      throw new Error("Every landing-page section needs key, type, theme and background.");
    }

    return section as LandingPageSection;
  });
}

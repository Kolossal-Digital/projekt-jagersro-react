import { parse } from "yaml";
import type { ArticleSummary } from "../components/ArticleCard";
import type { BackgroundName, ForegroundName } from "../tokens";
import type { HeroContent, HeroVariant } from "../patterns/HeroSection";
import type {
  FeatureSectionContent,
  FeatureSectionLayout,
  FeatureSectionMediaFit,
  FeatureSectionMediaPosition,
} from "../patterns/FeatureSection";
import type { IconListItem } from "../patterns/IconListSection";
import type { FeatureContent } from "../patterns/FullWidthFeatureSection";
import type { ImageCarouselCaption } from "../patterns/ImageCarousel";
import type { ImageGalleryItem } from "../patterns/ImageGallery";
import type {
  ImageSectionCaption,
  ImageSectionLayout,
  VideoPlaybackMode,
} from "../patterns/ImageSection";
import type { TimelineItem } from "../patterns/TimelineSection";
import type { SectionPaddingSize } from "../patterns/sectionSpacing";
import landingPageMarkdown from "./landing-page.md?raw";
import { parsePageSettings } from "./pageSettings";

type Theme = "light" | "dark";

type SectionBase = {
  key: string;
  id?: string;
  theme: Theme;
  background: BackgroundName;
  headingColor?: ForegroundName;
  balanceHeading?: boolean;
  paddingTop?: SectionPaddingSize;
  paddingBottom?: SectionPaddingSize;
};

export type LandingPageSection =
  | (SectionBase & {
      type: "hero";
      variant: HeroVariant;
      content: HeroContent;
      headingAs?: "h1" | "h2";
      bodyVariant?: "body-01" | "body-02";
    })
  | (SectionBase & {
      type: "image";
      image: string;
      backgroundTop?: BackgroundName;
      backgroundBottom?: BackgroundName;
      backgroundTopTheme?: Theme;
      backgroundBottomTheme?: Theme;
      caption?: ImageSectionCaption;
      variant?: ImageSectionLayout;
      /** @deprecated Use variant in Markdown/CMS content. */
      layout?: ImageSectionLayout;
      priority?: boolean;
    })
  | (SectionBase & {
      type: "video";
      video: string;
      playback: VideoPlaybackMode;
      backgroundTop?: BackgroundName;
      backgroundBottom?: BackgroundName;
      backgroundTopTheme?: Theme;
      backgroundBottomTheme?: Theme;
      caption?: ImageSectionCaption;
      variant?: ImageSectionLayout;
    })
  | (SectionBase & {
      type: "feature";
      layout: FeatureSectionLayout;
      content: FeatureSectionContent;
      image?: string;
      mediaPosition?: FeatureSectionMediaPosition;
      mediaFit?: FeatureSectionMediaFit;
      headingVariant?: "fluid-heading-05" | "fluid-heading-06";
      align?: "start" | "end";
    })
  | (SectionBase & {
      type: "icon-list";
      heading: string;
      items: IconListItem[];
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
      articleIds: ArticleSummary["id"][];
      cardBackground?: BackgroundName;
    })
  | (SectionBase & {
      type: "timeline";
      ariaLabel?: string;
      initialIndex?: number;
      itemIds: TimelineItem["id"][];
    });

const sectionPattern = /^##\s+.+\n```ya?ml\n([\s\S]*?)\n```/gm;

/** Reads ordered, CMS-like section records from the local Markdown fixture. */
export function readLandingPageSections(): LandingPageSection[] {
  return parsePageSections(landingPageMarkdown, "landing page");
}

export function readLandingPageSettings() {
  return parsePageSettings(landingPageMarkdown, "Landing page");
}

export function parsePageSections(
  markdown: string,
  pageName: string,
): LandingPageSection[] {
  return Array.from(markdown.matchAll(sectionPattern), (match) => {
    const record = parse(match[1]) as { type?: string };

    if (record.type === "page") return undefined;

    const section = record as Partial<LandingPageSection>;

    if (!section.key || !section.type || !section.theme || !section.background) {
      throw new Error(`Every ${pageName} section needs key, type, theme and background.`);
    }

    return section as LandingPageSection;
  }).filter((section): section is LandingPageSection => section !== undefined);
}

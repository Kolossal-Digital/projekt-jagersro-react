import { parse } from "yaml";
import type { BackgroundName, ForegroundName } from "../tokens";
import type { HeroContent, HeroVariant } from "../patterns/HeroSection";
import type { SectionPaddingSize } from "../patterns/sectionSpacing";
import aktuelltPageMarkdown from "./aktuellt-page.md?raw";
import { parsePageSettings } from "./pageSettings";

type Theme = "light" | "dark";

type PageSectionBase = {
  id?: string;
  background: BackgroundName;
  headingColor?: ForegroundName;
  balanceHeading?: boolean;
  paddingTop?: SectionPaddingSize;
  paddingBottom?: SectionPaddingSize;
};

export type AktuelltPageContent = {
  theme: Theme;
  hero: PageSectionBase & {
    variant: HeroVariant;
    content: HeroContent;
  };
  articleListing: PageSectionBase & {
    source: "all-articles";
    cardBackground?: BackgroundName;
    initialCount?: number;
    batchSize?: number;
    loadMoreLabel?: string;
    paginationPath?: string;
    ariaLabel?: string;
  };
};

const yamlBlockPattern = /```ya?ml\n([\s\S]*?)\n```/g;

/** Reads the serializable page-level composition for the Aktuellt example. */
export function readAktuelltPageContent(): AktuelltPageContent {
  const page = Array.from(aktuelltPageMarkdown.matchAll(yamlBlockPattern), (match) =>
    parse(match[1]) as Partial<AktuelltPageContent> & { type?: string },
  ).find((record) => record.type !== "page");
  if (!page) throw new Error("Aktuellt-page fixture needs a content YAML block.");
  if (
    !page.theme ||
    !page.hero?.content?.heading ||
    !page.articleListing ||
    page.articleListing.source !== "all-articles"
  ) {
    throw new Error(
      "Aktuellt page needs theme, hero content and an all-articles listing.",
    );
  }

  return page as AktuelltPageContent;
}

export function readAktuelltPageSettings() {
  return parsePageSettings(aktuelltPageMarkdown, "Aktuellt page");
}

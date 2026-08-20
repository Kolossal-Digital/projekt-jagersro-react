import type { LandingPageSection } from "./landingPageContent";
import { parsePageSections } from "./landingPageContent";
import labbetPageMarkdown from "./labbet-page.md?raw";

export type LabbetPageSection = Extract<
  LandingPageSection,
  { type: "hero" | "feature" | "icon-list" }
>;

/** Reads the ordered, serializable sections for the Labbet example. */
export function readLabbetPageSections(): LabbetPageSection[] {
  const sections = parsePageSections(labbetPageMarkdown, "Labbet page");

  if (
    sections.some(
      (section) =>
        section.type !== "hero" &&
        section.type !== "feature" &&
        section.type !== "icon-list",
    )
  ) {
    throw new Error("Labbet page supports hero, feature and icon-list sections.");
  }

  return sections as LabbetPageSection[];
}

import type { LandingPageSection } from "./landingPageContent";
import { parsePageSections } from "./landingPageContent";
import resanPageMarkdown from "./resan-page.md?raw";
import { parsePageSettings } from "./pageSettings";

export type ResanPageSection = Extract<
  LandingPageSection,
  { type: "hero" | "feature" | "image" | "video" | "timeline" }
>;

/** Reads the ordered, serializable sections for the Resan example. */
export function readResanPageSections(): ResanPageSection[] {
  const sections = parsePageSections(resanPageMarkdown, "Resan page");

  if (
    sections.some(
      (section) =>
        section.type !== "hero" &&
        section.type !== "feature" &&
        section.type !== "image" &&
        section.type !== "video" &&
        section.type !== "timeline",
    )
  ) {
    throw new Error("Resan page supports hero, feature, image, video and timeline sections.");
  }

  return sections as ResanPageSection[];
}

export function readResanPageSettings() {
  return parsePageSettings(resanPageMarkdown, "Resan page");
}

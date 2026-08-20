import type { LandingPageSection } from "./landingPageContent";
import { parsePageSections } from "./landingPageContent";
import resanPageMarkdown from "./resan-page.md?raw";

export type ResanPageSection = Extract<
  LandingPageSection,
  { type: "hero" | "feature" | "image" | "timeline" }
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
        section.type !== "timeline",
    )
  ) {
    throw new Error("Resan page supports hero, feature, image and timeline sections.");
  }

  return sections as ResanPageSection[];
}

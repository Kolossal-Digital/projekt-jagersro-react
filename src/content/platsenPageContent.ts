import type { LandingPageSection } from "./landingPageContent";
import { parsePageSections } from "./landingPageContent";
import platsenPageMarkdown from "./platsen-page.md?raw";

export type PlatsenPageSection = Extract<
  LandingPageSection,
  { type: "hero" | "feature" | "image" }
>;

/** Reads the ordered, serializable sections for the Platsen example. */
export function readPlatsenPageSections(): PlatsenPageSection[] {
  const sections = parsePageSections(platsenPageMarkdown, "Platsen page");

  if (
    sections.some(
      (section) =>
        section.type !== "hero" &&
        section.type !== "feature" &&
        section.type !== "image",
    )
  ) {
    throw new Error("Platsen page supports hero, feature and image sections.");
  }

  return sections as PlatsenPageSection[];
}

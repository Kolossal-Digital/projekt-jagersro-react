import type { LandingPageSection } from "./landingPageContent";
import { parsePageSections } from "./landingPageContent";
import platsenPageMarkdown from "./platsen-page.md?raw";
import { parsePageSettings } from "./pageSettings";

export type PlatsenPageSection = Extract<
  LandingPageSection,
  { type: "hero" | "feature" | "image" | "video" }
>;

/** Reads the ordered, serializable sections for the Platsen example. */
export function readPlatsenPageSections(): PlatsenPageSection[] {
  const sections = parsePageSections(platsenPageMarkdown, "Platsen page");

  if (
    sections.some(
      (section) =>
        section.type !== "hero" &&
        section.type !== "feature" &&
        section.type !== "image" &&
        section.type !== "video",
    )
  ) {
    throw new Error("Platsen page supports hero, feature, image and video sections.");
  }

  return sections as PlatsenPageSection[];
}

export function readPlatsenPageSettings() {
  return parsePageSettings(platsenPageMarkdown, "Platsen page");
}

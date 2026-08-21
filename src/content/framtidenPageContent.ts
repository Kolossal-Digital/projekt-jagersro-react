import type { LandingPageSection } from "./landingPageContent";
import { parsePageSections } from "./landingPageContent";
import framtidenPageMarkdown from "./framtiden-page.md?raw";
import { parsePageSettings } from "./pageSettings";

export type FramtidenPageSection = Extract<
  LandingPageSection,
  {
    type:
      | "hero"
      | "image"
      | "video"
      | "feature"
      | "image-gallery"
      | "icon-list"
      | "carousel";
  }
>;

/** Reads the ordered, serializable sections for the Framtiden example. */
export function readFramtidenPageSections(): FramtidenPageSection[] {
  const sections = parsePageSections(framtidenPageMarkdown, "Framtiden page");
  const supportedTypes = new Set([
    "hero",
    "image",
    "video",
    "feature",
    "image-gallery",
    "icon-list",
    "carousel",
  ]);

  if (sections.some((section) => !supportedTypes.has(section.type))) {
    throw new Error(
      "Framtiden page supports hero, image, video, feature, image-gallery, icon-list and carousel sections.",
    );
  }

  return sections as FramtidenPageSection[];
}

export function readFramtidenPageSettings() {
  return parsePageSettings(framtidenPageMarkdown, "Framtiden page");
}

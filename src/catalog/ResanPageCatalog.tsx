import jagersroWordmark from "../assets/jagersro-wordmark.svg";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNavbar } from "../components/SiteNavbar";
import { demoImages, demoTimelineItems, demoVideos } from "../content/demoContent";
import { readLandingPageSections } from "../content/landingPageContent";
import { readResanPageSections } from "../content/resanPageContent";
import { exampleRoutes } from "../exampleRoutes";
import { FeatureSection } from "../patterns/FeatureSection";
import { HeroSection } from "../patterns/HeroSection";
import { ImageSection } from "../patterns/ImageSection";
import { TimelineSection } from "../patterns/TimelineSection";

const sections = readResanPageSections();
const sharedSections = readLandingPageSections();

function getSharedSection<Type extends "navbar" | "footer">(type: Type) {
  const section = sharedSections.find(
    (candidate): candidate is Extract<(typeof sharedSections)[number], { type: Type }> =>
      candidate.type === type,
  );
  if (!section) throw new Error(`Resan-page example needs a shared ${type}.`);
  return section;
}

function resolveImage(key: string) {
  const image = demoImages[key as keyof typeof demoImages];
  if (!image) throw new Error(`Unknown Resan image: ${key}`);
  return image;
}

function resolveVideo(key: string) {
  const video = demoVideos[key as keyof typeof demoVideos];
  if (!video) throw new Error(`Unknown Resan video: ${key}`);
  return video;
}

function resolveTimelineItem(id: string) {
  const item = demoTimelineItems.find((candidate) => candidate.id === id);
  if (!item) throw new Error(`Unknown Resan timeline item: ${id}`);
  return item;
}

const navigation = getSharedSection("navbar");
const footer = getSharedSection("footer");

export function ResanPageCatalog() {
  const navigationLinks = navigation.links.map((link) => ({
    ...link,
    current: link.label === "Resan",
  }));

  return (
    <div className="resan-page-demo" id="resan-page">
      <div className="site-navbar-shell theme--dark">
        <SiteNavbar
          background={navigation.background}
          brand={{ src: jagersroWordmark, alt: "Jägersro", href: exampleRoutes.landing }}
          foreground={navigation.headingColor}
          links={navigationLinks}
          primaryAction={navigation.primaryAction}
          searchAction={navigation.searchAction}
        />
      </div>

      <main>
        {sections.map((section) => (
          <div className={`theme--${section.theme}`} key={section.key}>
            {section.type === "hero" && (
              <HeroSection
                background={section.background}
                balanceHeading={section.balanceHeading}
                bodyVariant={section.bodyVariant}
                content={section.content}
                foreground={section.headingColor}
                headingAs={section.headingAs}
                id={section.id}
                paddingBottom={section.paddingBottom}
                paddingTop={section.paddingTop}
                variant={section.variant}
              />
            )}

            {section.type === "feature" && (
              <FeatureSection
                align={section.align}
                background={section.background}
                balanceHeading={section.balanceHeading}
                content={section.content}
                foreground={section.headingColor}
                headingVariant={section.headingVariant}
                id={section.id}
                image={section.image ? resolveImage(section.image) : undefined}
                layout={section.layout}
                mediaFit={section.mediaFit}
                mediaPosition={section.mediaPosition}
                paddingBottom={section.paddingBottom}
                paddingTop={section.paddingTop}
              />
            )}

            {section.type === "image" && (
              <ImageSection
                background={section.background}
                backgroundBottom={section.backgroundBottom}
                backgroundBottomTheme={section.backgroundBottomTheme}
                backgroundTop={section.backgroundTop}
                backgroundTopTheme={section.backgroundTopTheme}
                caption={section.caption}
                foreground={section.headingColor}
                id={section.id}
                image={resolveImage(section.image)}
                layout={section.variant ?? section.layout}
                paddingBottom={section.paddingBottom}
                paddingTop={section.paddingTop}
                priority={section.priority}
              />
            )}

            {section.type === "video" && (
              <ImageSection
                background={section.background}
                backgroundBottom={section.backgroundBottom}
                backgroundBottomTheme={section.backgroundBottomTheme}
                backgroundTop={section.backgroundTop}
                backgroundTopTheme={section.backgroundTopTheme}
                caption={section.caption}
                foreground={section.headingColor}
                id={section.id}
                layout={section.variant}
                paddingBottom={section.paddingBottom}
                paddingTop={section.paddingTop}
                playback={section.playback}
                video={resolveVideo(section.video)}
              />
            )}

            {section.type === "timeline" && (
              <TimelineSection
                ariaLabel={section.ariaLabel}
                background={section.background}
                balanceHeading={section.balanceHeading}
                foreground={section.headingColor}
                id={section.id}
                initialIndex={section.initialIndex}
                items={section.itemIds.map(resolveTimelineItem)}
                paddingBottom={section.paddingBottom}
                paddingTop={section.paddingTop}
              />
            )}
          </div>
        ))}
      </main>

      <div className="theme--dark">
        <SiteFooter
          background={footer.background}
          balanceHeading={footer.balanceHeading}
          brand={{ src: jagersroWordmark, alt: "Jägersro", href: exampleRoutes.landing }}
          copyright={footer.copyright}
          foreground={footer.headingColor}
          legalLinks={footer.legalLinks}
          navigation={footer.navigation}
          newsletter={footer.newsletter}
        />
      </div>
    </div>
  );
}

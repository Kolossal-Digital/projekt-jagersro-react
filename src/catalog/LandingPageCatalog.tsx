import jagersroWordmark from "../assets/jagersro-wordmark.svg";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNavbar } from "../components/SiteNavbar";
import {
  demoGalleryItems,
  demoImages,
  demoLatestArticles,
  demoTimelineItems,
  demoVideos,
} from "../content/demoContent";
import {
  readLandingPageSections,
  type LandingPageSection,
} from "../content/landingPageContent";
import { FeatureSection } from "../patterns/FeatureSection";
import { FullWidthFeatureSection } from "../patterns/FullWidthFeatureSection";
import { HeroSection } from "../patterns/HeroSection";
import { ImageCarousel } from "../patterns/ImageCarousel";
import { ImageGallery } from "../patterns/ImageGallery";
import { ImageSection } from "../patterns/ImageSection";
import { LatestArticlesSection } from "../patterns/LatestArticlesSection";
import { TimelineSection } from "../patterns/TimelineSection";
import { exampleRoutes } from "../exampleRoutes";
import { IconListSection } from "../patterns/IconListSection";

const sections = readLandingPageSections();

function resolveImage(key: string) {
  const image = demoImages[key as keyof typeof demoImages];
  if (!image) throw new Error(`Unknown demo image: ${key}`);
  return image;
}

function resolveVideo(key: string) {
  const video = demoVideos[key as keyof typeof demoVideos];
  if (!video) throw new Error(`Unknown demo video: ${key}`);
  return video;
}

function resolveGalleryItem(id: string) {
  const item = demoGalleryItems.find((candidate) => candidate.id === id);
  if (!item) throw new Error(`Unknown demo gallery item: ${id}`);
  return item;
}

function resolveArticle(id: string) {
  const article = demoLatestArticles.find((candidate) => candidate.id === id);
  if (!article) throw new Error(`Unknown demo article: ${id}`);
  return article;
}

function resolveTimelineItem(id: string) {
  const item = demoTimelineItems.find((candidate) => candidate.id === id);
  if (!item) throw new Error(`Unknown demo timeline item: ${id}`);
  return item;
}

function renderSection(section: LandingPageSection) {
  switch (section.type) {
    case "navbar":
      return (
        <SiteNavbar
          background={section.background}
          foreground={section.headingColor}
          brand={{
            src: jagersroWordmark,
            alt: "Jägersro",
            href: exampleRoutes.landing,
          }}
          links={section.links}
          primaryAction={section.primaryAction}
          searchAction={section.searchAction}
        />
      );

    case "hero":
      return (
        <HeroSection
          background={section.background}
          balanceHeading={section.balanceHeading}
          foreground={section.headingColor}
          bodyVariant={section.bodyVariant}
          content={section.content}
          headingAs={section.headingAs}
          id={section.id}
          paddingBottom={section.paddingBottom}
          paddingTop={section.paddingTop}
          variant={section.variant}
        />
      );

    case "image":
      return (
        <ImageSection
          background={section.background}
          backgroundBottom={section.backgroundBottom}
          backgroundBottomTheme={section.backgroundBottomTheme}
          backgroundTop={section.backgroundTop}
          backgroundTopTheme={section.backgroundTopTheme}
          foreground={section.headingColor}
          caption={section.caption}
          id={section.id}
          image={resolveImage(section.image)}
          layout={section.variant ?? section.layout}
          paddingBottom={section.paddingBottom}
          paddingTop={section.paddingTop}
          priority={section.priority}
        />
      );

    case "video":
      return (
        <ImageSection
          background={section.background}
          backgroundBottom={section.backgroundBottom}
          backgroundBottomTheme={section.backgroundBottomTheme}
          backgroundTop={section.backgroundTop}
          backgroundTopTheme={section.backgroundTopTheme}
          foreground={section.headingColor}
          caption={section.caption}
          id={section.id}
          layout={section.variant}
          paddingBottom={section.paddingBottom}
          paddingTop={section.paddingTop}
          playback={section.playback}
          video={resolveVideo(section.video)}
        />
      );

    case "feature":
      return (
        <FeatureSection
          align={section.align}
          background={section.background}
          balanceHeading={section.balanceHeading}
          foreground={section.headingColor}
          content={section.content}
          headingVariant={section.headingVariant}
          id={section.id}
          image={section.image ? resolveImage(section.image) : undefined}
          layout={section.layout}
          mediaPosition={section.mediaPosition}
          mediaFit={section.mediaFit}
          paddingBottom={section.paddingBottom}
          paddingTop={section.paddingTop}
        />
      );

    case "icon-list":
      return (
        <IconListSection
          background={section.background}
          balanceHeading={section.balanceHeading}
          foreground={section.headingColor}
          heading={section.heading}
          id={section.id}
          items={section.items}
          paddingBottom={section.paddingBottom}
          paddingTop={section.paddingTop}
        />
      );

    case "full-width-feature":
      return (
        <FullWidthFeatureSection
          background={section.background}
          balanceHeading={section.balanceHeading}
          foreground={section.headingColor}
          content={section.content}
          id={section.id}
          image={resolveImage(section.image)}
          imageFit={section.imageFit}
          imagePosition={section.imagePosition}
          paddingBottom={section.paddingBottom}
          paddingTop={section.paddingTop}
        />
      );

    case "carousel":
      return (
        <ImageCarousel
          ariaLabel={section.ariaLabel}
          background={section.background}
          foreground={section.headingColor}
          id={section.id}
          initialIndex={section.initialIndex}
          slides={section.slides.map((slide) => ({
            id: slide.id,
            image: resolveImage(slide.image),
            caption: slide.caption,
          }))}
          paddingBottom={section.paddingBottom}
          paddingTop={section.paddingTop}
        />
      );

    case "image-gallery":
      return (
        <ImageGallery
          ariaLabel={section.ariaLabel}
          background={section.background}
          foreground={section.headingColor}
          id={section.id}
          items={section.itemIds.map(resolveGalleryItem)}
          paddingBottom={section.paddingBottom}
          paddingTop={section.paddingTop}
        />
      );

    case "latest-articles":
      return (
        <LatestArticlesSection
          articles={section.articleIds.map(resolveArticle)}
          background={section.background}
          balanceHeading={section.balanceHeading}
          cardBackground={section.cardBackground}
          foreground={section.headingColor}
          id={section.id}
          paddingBottom={section.paddingBottom}
          paddingTop={section.paddingTop}
        />
      );

    case "timeline":
      return (
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
      );

    case "footer":
      return (
        <SiteFooter
          background={section.background}
          balanceHeading={section.balanceHeading}
          foreground={section.headingColor}
          brand={{
            src: jagersroWordmark,
            alt: "Jägersro",
            href: exampleRoutes.landing,
          }}
          copyright={section.copyright}
          legalLinks={section.legalLinks}
          navigation={section.navigation}
          newsletter={section.newsletter}
        />
      );
  }
}

export function LandingPageCatalog() {
  return (
    <div className="landing-page-demo" id="landing-page">
      {sections.map((section) => (
        <div
          className={`theme--${section.theme}${section.type === "navbar" ? " site-navbar-shell" : ""}`}
          id={section.type === "footer" ? section.id : undefined}
          key={section.key}
        >
          {renderSection(section)}
        </div>
      ))}
    </div>
  );
}

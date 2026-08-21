import { ExampleSiteFooter, ExampleSiteNavbar } from "../components/ExampleSiteChrome";
import { demoGalleryItems, demoImages, demoVideos } from "../content/demoContent";
import {
  readFramtidenPageSections,
  readFramtidenPageSettings,
} from "../content/framtidenPageContent";
import { FeatureSection } from "../patterns/FeatureSection";
import { HeroSection } from "../patterns/HeroSection";
import { IconListSection } from "../patterns/IconListSection";
import { ImageCarousel } from "../patterns/ImageCarousel";
import { ImageGallery } from "../patterns/ImageGallery";
import { ImageSection } from "../patterns/ImageSection";

const sections = readFramtidenPageSections();
const page = readFramtidenPageSettings();

function resolveImage(key: string) {
  const image = demoImages[key as keyof typeof demoImages];
  if (!image) throw new Error(`Unknown Framtiden image: ${key}`);
  return image;
}

function resolveVideo(key: string) {
  const video = demoVideos[key as keyof typeof demoVideos];
  if (!video) throw new Error(`Unknown Framtiden video: ${key}`);
  return video;
}

function resolveGalleryItem(id: string) {
  const item = demoGalleryItems.find((candidate) => candidate.id === id);
  if (!item) throw new Error(`Unknown Framtiden gallery item: ${id}`);
  return item;
}

export function FramtidenPageCatalog() {
  return (
    <div className="framtiden-page-demo" id="framtiden-page">
      <ExampleSiteNavbar currentLabel="Framtiden" page={page} />

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

            {section.type === "image-gallery" && (
              <ImageGallery
                ariaLabel={section.ariaLabel}
                background={section.background}
                foreground={section.headingColor}
                id={section.id}
                items={section.itemIds.map(resolveGalleryItem)}
                paddingBottom={section.paddingBottom}
                paddingTop={section.paddingTop}
              />
            )}

            {section.type === "icon-list" && (
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
            )}

            {section.type === "carousel" && (
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
            )}
          </div>
        ))}
      </main>

      <ExampleSiteFooter page={page} />
    </div>
  );
}

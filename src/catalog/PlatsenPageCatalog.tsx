import { ExampleSiteFooter, ExampleSiteNavbar } from "../components/ExampleSiteChrome";
import { demoImages, demoVideos } from "../content/demoContent";
import {
  readPlatsenPageSections,
  readPlatsenPageSettings,
} from "../content/platsenPageContent";
import { FeatureSection } from "../patterns/FeatureSection";
import { HeroSection } from "../patterns/HeroSection";
import { ImageSection } from "../patterns/ImageSection";

const sections = readPlatsenPageSections();
const page = readPlatsenPageSettings();

function resolveImage(key: string) {
  const image = demoImages[key as keyof typeof demoImages];
  if (!image) throw new Error(`Unknown Platsen image: ${key}`);
  return image;
}

function resolveVideo(key: string) {
  const video = demoVideos[key as keyof typeof demoVideos];
  if (!video) throw new Error(`Unknown Platsen video: ${key}`);
  return video;
}

export function PlatsenPageCatalog() {
  return (
    <div className="platsen-page-demo" id="platsen-page">
      <ExampleSiteNavbar currentLabel="Platsen" page={page} />

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
          </div>
        ))}
      </main>

      <ExampleSiteFooter page={page} />
    </div>
  );
}

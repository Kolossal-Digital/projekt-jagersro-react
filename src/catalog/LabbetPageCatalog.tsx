import { ExampleSiteFooter, ExampleSiteNavbar } from "../components/ExampleSiteChrome";
import { demoImages } from "../content/demoContent";
import {
  readLabbetPageSections,
  readLabbetPageSettings,
} from "../content/labbetPageContent";
import { FeatureSection } from "../patterns/FeatureSection";
import { HeroSection } from "../patterns/HeroSection";
import { IconListSection } from "../patterns/IconListSection";

const sections = readLabbetPageSections();
const page = readLabbetPageSettings();

function resolveImage(key: string) {
  const image = demoImages[key as keyof typeof demoImages];
  if (!image) throw new Error(`Unknown Labbet image: ${key}`);
  return image;
}

export function LabbetPageCatalog() {
  return (
    <div className="labbet-page-demo" id="labbet-page">
      <ExampleSiteNavbar currentLabel="Labbet" page={page} />

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
          </div>
        ))}
      </main>

      <ExampleSiteFooter page={page} />
    </div>
  );
}

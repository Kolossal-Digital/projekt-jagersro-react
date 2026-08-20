import jagersroWordmark from "../assets/jagersro-wordmark.svg";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNavbar } from "../components/SiteNavbar";
import { demoImages } from "../content/demoContent";
import { readLandingPageSections } from "../content/landingPageContent";
import { readPlatsenPageSections } from "../content/platsenPageContent";
import { exampleRoutes } from "../exampleRoutes";
import { FeatureSection } from "../patterns/FeatureSection";
import { HeroSection } from "../patterns/HeroSection";
import { ImageSection } from "../patterns/ImageSection";

const sections = readPlatsenPageSections();
const sharedSections = readLandingPageSections();

function getSharedSection<Type extends "navbar" | "footer">(type: Type) {
  const section = sharedSections.find(
    (candidate): candidate is Extract<(typeof sharedSections)[number], { type: Type }> =>
      candidate.type === type,
  );
  if (!section) throw new Error(`Platsen-page example needs a shared ${type}.`);
  return section;
}

function resolveImage(key: string) {
  const image = demoImages[key as keyof typeof demoImages];
  if (!image) throw new Error(`Unknown Platsen image: ${key}`);
  return image;
}

const navigation = getSharedSection("navbar");
const footer = getSharedSection("footer");

export function PlatsenPageCatalog() {
  const navigationLinks = navigation.links.map((link) => ({
    ...link,
    current: link.label === "Platsen",
  }));

  return (
    <div className="platsen-page-demo" id="platsen-page">
      <div className="theme--dark">
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

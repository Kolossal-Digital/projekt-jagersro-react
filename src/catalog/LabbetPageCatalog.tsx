import jagersroWordmark from "../assets/jagersro-wordmark.svg";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNavbar } from "../components/SiteNavbar";
import { demoImages } from "../content/demoContent";
import { readLabbetPageSections } from "../content/labbetPageContent";
import { readLandingPageSections } from "../content/landingPageContent";
import { exampleRoutes } from "../exampleRoutes";
import { FeatureSection } from "../patterns/FeatureSection";
import { HeroSection } from "../patterns/HeroSection";
import { IconListSection } from "../patterns/IconListSection";

const sections = readLabbetPageSections();
const sharedSections = readLandingPageSections();

function getSharedSection<Type extends "navbar" | "footer">(type: Type) {
  const section = sharedSections.find(
    (candidate): candidate is Extract<(typeof sharedSections)[number], { type: Type }> =>
      candidate.type === type,
  );
  if (!section) throw new Error(`Labbet-page example needs a shared ${type}.`);
  return section;
}

function resolveImage(key: string) {
  const image = demoImages[key as keyof typeof demoImages];
  if (!image) throw new Error(`Unknown Labbet image: ${key}`);
  return image;
}

const navigation = getSharedSection("navbar");
const footer = getSharedSection("footer");

export function LabbetPageCatalog() {
  const navigationLinks = navigation.links.map((link) => ({
    ...link,
    current: link.label === "Labbet",
  }));

  return (
    <div className="labbet-page-demo" id="labbet-page">
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

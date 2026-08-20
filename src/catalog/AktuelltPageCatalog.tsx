import jagersroWordmark from "../assets/jagersro-wordmark.svg";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNavbar } from "../components/SiteNavbar";
import { readAktuelltPageContent } from "../content/aktuelltPageContent";
import { demoArticleArchive } from "../content/demoContent";
import { readLandingPageSections } from "../content/landingPageContent";
import { ArticleListingSection } from "../patterns/ArticleListingSection";
import { HeroSection } from "../patterns/HeroSection";
import { exampleRoutes } from "../exampleRoutes";

const page = readAktuelltPageContent();
const sharedSections = readLandingPageSections();

function getSharedSection<Type extends "navbar" | "footer">(type: Type) {
  const section = sharedSections.find(
    (candidate): candidate is Extract<(typeof sharedSections)[number], { type: Type }> =>
      candidate.type === type,
  );
  if (!section) throw new Error(`Aktuellt-page example needs a shared ${type}.`);
  return section;
}

const navigation = getSharedSection("navbar");
const footer = getSharedSection("footer");

function getRequestedPage() {
  if (typeof window === "undefined") return 1;
  const requestedPage = Number(new URLSearchParams(window.location.search).get("page"));
  return Number.isInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1;
}

export function AktuelltPageCatalog() {
  const navigationLinks = navigation.links.map((link) => ({
    ...link,
    current: link.label === "Aktuellt",
    href: link.label === "Aktuellt" ? exampleRoutes.aktuellt : link.href,
  }));

  return (
    <div className="aktuellt-page-demo" id="aktuellt-page">
      <div className={`site-navbar-shell theme--${page.theme}`}>
        <SiteNavbar
          background={navigation.background}
          brand={{ src: jagersroWordmark, alt: "Jägersro", href: exampleRoutes.landing }}
          foreground={navigation.headingColor}
          links={navigationLinks}
          primaryAction={navigation.primaryAction}
          searchAction={navigation.searchAction}
        />
      </div>

      <div className={`theme--${page.theme}`}>
        <main>
          <HeroSection
            background={page.hero.background}
            balanceHeading={page.hero.balanceHeading}
            content={page.hero.content}
            foreground={page.hero.headingColor}
            id={page.hero.id}
            paddingBottom={page.hero.paddingBottom}
            paddingTop={page.hero.paddingTop}
            variant={page.hero.variant}
          />

          <ArticleListingSection
            ariaLabel={page.articleListing.ariaLabel}
            articles={demoArticleArchive}
            background={page.articleListing.background}
            cardBackground={page.articleListing.cardBackground}
            balanceHeading={page.articleListing.balanceHeading}
            batchSize={page.articleListing.batchSize}
            foreground={page.articleListing.headingColor}
            id={page.articleListing.id}
            initialCount={page.articleListing.initialCount}
            initialPage={getRequestedPage()}
            loadMoreLabel={page.articleListing.loadMoreLabel}
            paginationPath={page.articleListing.paginationPath}
            paddingBottom={page.articleListing.paddingBottom}
            paddingTop={page.articleListing.paddingTop}
            updateHistory
          />
        </main>
      </div>

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

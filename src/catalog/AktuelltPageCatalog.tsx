import { ExampleSiteFooter, ExampleSiteNavbar } from "../components/ExampleSiteChrome";
import {
  readAktuelltPageContent,
  readAktuelltPageSettings,
} from "../content/aktuelltPageContent";
import { demoArticleArchive } from "../content/demoContent";
import { ArticleListingSection } from "../patterns/ArticleListingSection";
import { HeroSection } from "../patterns/HeroSection";

const page = readAktuelltPageContent();
const pageSettings = readAktuelltPageSettings();

function getRequestedPage() {
  if (typeof window === "undefined") return 1;
  const requestedPage = Number(new URLSearchParams(window.location.search).get("page"));
  return Number.isInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1;
}

export function AktuelltPageCatalog() {
  return (
    <div className="aktuellt-page-demo" id="aktuellt-page">
      <ExampleSiteNavbar currentLabel="Aktuellt" page={pageSettings} />

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

      <ExampleSiteFooter page={pageSettings} />
    </div>
  );
}

import jagersroWordmark from "../assets/jagersro-wordmark.svg";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNavbar } from "../components/SiteNavbar";
import { readArticlePageContent } from "../content/articlePageContent";
import { demoLatestArticles } from "../content/demoContent";
import { readLandingPageSections } from "../content/landingPageContent";
import { ArticlePage } from "../pages/ArticlePage";
import { exampleRoutes } from "../exampleRoutes";

const article = readArticlePageContent();
const landingSections = readLandingPageSections();

function getSharedSection<Type extends "navbar" | "footer">(type: Type) {
  const section = landingSections.find(
    (candidate): candidate is Extract<(typeof landingSections)[number], { type: Type }> =>
      candidate.type === type,
  );
  if (!section) throw new Error(`Article-page example needs a shared ${type}.`);
  return section;
}

function getArticleSummary(id: string) {
  const summary = demoLatestArticles.find((item) => item.id === id);
  if (!summary) throw new Error(`Unknown article: ${id}`);
  return summary;
}

const navigation = getSharedSection("navbar");
const footer = getSharedSection("footer");
const articleSummary = getArticleSummary(article.image);

const relatedArticles = article.relatedArticleIds.map((id) => {
  return getArticleSummary(id);
});

export function ArticlePageCatalog() {
  const navigationLinks = navigation.links.map((link) => ({
    ...link,
    current: link.label === "Aktuellt",
    href: link.label === "Aktuellt" ? exampleRoutes.aktuellt : link.href,
  }));

  return (
    <div className="article-page-demo" id="article-page">
      <div className="site-navbar-shell theme--light">
        <SiteNavbar
          background={navigation.background}
          brand={{ src: jagersroWordmark, alt: "Jägersro", href: exampleRoutes.landing }}
          links={navigationLinks}
          primaryAction={navigation.primaryAction}
          searchAction={navigation.searchAction}
        />
      </div>
      <div className="theme--light">
        <ArticlePage
          article={article}
          breadcrumbs={[
            { label: "Jägersro", href: exampleRoutes.landing },
            { label: "Aktuellt", href: exampleRoutes.aktuellt },
            { label: article.title },
          ]}
          image={articleSummary.image}
          relatedArticles={relatedArticles}
        />
      </div>
      <div className="theme--dark">
        <SiteFooter
          background={footer.background}
          brand={{ src: jagersroWordmark, alt: "Jägersro", href: exampleRoutes.landing }}
          copyright={footer.copyright}
          legalLinks={footer.legalLinks}
          navigation={footer.navigation}
          newsletter={footer.newsletter}
        />
      </div>
    </div>
  );
}

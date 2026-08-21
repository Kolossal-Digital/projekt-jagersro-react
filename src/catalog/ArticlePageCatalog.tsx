import { ExampleSiteFooter, ExampleSiteNavbar } from "../components/ExampleSiteChrome";
import {
  readArticlePageContent,
  readArticlePageSettings,
} from "../content/articlePageContent";
import { demoLatestArticles } from "../content/demoContent";
import { ArticlePage } from "../pages/ArticlePage";
import { exampleRoutes } from "../exampleRoutes";

const article = readArticlePageContent();
const page = readArticlePageSettings();

function getArticleSummary(id: string) {
  const summary = demoLatestArticles.find((item) => item.id === id);
  if (!summary) throw new Error(`Unknown article: ${id}`);
  return summary;
}

const articleSummary = getArticleSummary(article.image);

const relatedArticles = article.relatedArticleIds.map((id) => {
  return getArticleSummary(id);
});

export function ArticlePageCatalog() {
  return (
    <div className="article-page-demo" id="article-page">
      <ExampleSiteNavbar currentLabel="Aktuellt" page={page} />
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
      <ExampleSiteFooter page={page} />
    </div>
  );
}

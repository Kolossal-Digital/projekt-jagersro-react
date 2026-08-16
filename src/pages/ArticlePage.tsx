import { Breadcrumb, type BreadcrumbItem } from "../components/Breadcrumb";
import { Image, type ImageAsset } from "../components/Image";
import type { ArticlePageContent } from "../content/articlePageContent";
import {
  ArticleCard,
  type ArticleSummary,
} from "../patterns/LatestArticlesSection";

export type ArticlePageProps = {
  article: ArticlePageContent;
  breadcrumbs: BreadcrumbItem[];
  image: ImageAsset;
  relatedArticles: ArticleSummary[];
};

/** CMS-ready editorial article template built on the shared page grid. */
export function ArticlePage({
  article,
  breadcrumbs,
  image,
  relatedArticles,
}: ArticlePageProps) {
  return (
    <div className="article-page">
      <div className="article-page__breadcrumb-surface surface--background-accent-01">
        <div className="article-page__breadcrumb-grid page-grid">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      <article className="article-page__article surface--background">
        <div className="article-page__grid page-grid">
          <div className="article-page__meta type-label-03">
            <span>{article.category}</span>
            <time dateTime={article.publishedAt}>{article.displayDate}</time>
          </div>

          <div className="article-page__hero-media">
            <Image
              asset={image}
              priority
              sizes="(min-width: 1920px) 1792px, (min-width: 1200px) calc(100vw - 128px), (min-width: 768px) calc(100vw - 136px), calc(100vw - 32px)"
            />
          </div>

          <header className="article-page__header">
            <h1 className="type-fluid-display-03">{article.title}</h1>
            <p className="type-body-02">{article.lead}</p>
          </header>

          <div className="article-page__body type-body-01">
            {article.blocks.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2 className="type-fluid-heading-03" key={`${block.type}-${index}`}>
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "quote") {
                return (
                  <blockquote key={`${block.type}-${index}`}>
                    <p>{block.text}</p>
                  </blockquote>
                );
              }

              return <p key={`${block.type}-${index}`}>{block.text}</p>;
            })}
          </div>
        </div>
      </article>

      {relatedArticles.length > 0 && (
        <section
          aria-labelledby="related-articles-title"
          className="related-articles surface--background-accent-01"
        >
          <div className="related-articles__container page-grid">
            <h2 className="type-fluid-heading-04" id="related-articles-title">
              Relaterade artiklar
            </h2>
            <div className="related-articles__grid">
              {relatedArticles.slice(0, 3).map((relatedArticle, index) => (
                <ArticleCard
                  article={relatedArticle}
                  key={relatedArticle.id}
                  position={index + 2}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

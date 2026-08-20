import { ArticleCard, type ArticleSummary } from "../components/ArticleCard";
import type { BackgroundName, ForegroundName } from "../tokens";
import { getSectionSpacingClasses, type SectionSpacingProps } from "./sectionSpacing";

export type LatestArticlesSectionProps = SectionSpacingProps & {
  id?: string;
  articles: ArticleSummary[];
  background?: BackgroundName;
  cardBackground?: BackgroundName;
  foreground?: ForegroundName;
  balanceHeading?: boolean;
};


/** CMS-ready latest-articles composition with one featured story. */
export function LatestArticlesSection({
  id,
  articles,
  background = "background",
  cardBackground = "background-accent-01",
  foreground = "text-primary",
  balanceHeading = true,
  paddingTop,
  paddingBottom,
}: LatestArticlesSectionProps) {
  if (articles.length === 0) return null;

  const visibleArticles = articles.slice(0, 4);

  return (
    <section className={`latest-articles surface--${background} foreground--${foreground} ${balanceHeading ? "headings--balanced" : ""} ${getSectionSpacingClasses({ paddingTop, paddingBottom })}`} id={id}>
      <div className="latest-articles__container page-grid">
        <div className="latest-articles__grid">
          {visibleArticles.map((article, index) => (
            <ArticleCard
              article={article}
              contentBackground={cardBackground}
              featured={index === 0}
              key={article.id}
              position={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

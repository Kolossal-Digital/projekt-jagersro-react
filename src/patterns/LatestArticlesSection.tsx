import { ArrowRightIcon } from "@phosphor-icons/react/dist/csr/ArrowRight";
import { ButtonLink } from "../components/Button";
import { Image, type ImageAsset } from "../components/Image";
import type { BackgroundName, ForegroundName } from "../tokens";
import { getSectionSpacingClasses, type SectionSpacingProps } from "./sectionSpacing";

export type ArticleSummary = {
  id: string;
  title: string;
  href: string;
  excerpt: string;
  publishedAt: string;
  displayDate: string;
  image: ImageAsset;
  imageFit?: "cover" | "contain";
  category?: string;
};

export type ArticleRowCount = 2 | 3 | 4;

export type LatestArticlesSectionProps = SectionSpacingProps & {
  id?: string;
  heading: string;
  articles: ArticleSummary[];
  rows?: ArticleRowCount;
  allArticlesLink?: {
    label: string;
    href: string;
  };
  background?: BackgroundName;
  foreground?: ForegroundName;
};

const articleCountByRows: Record<ArticleRowCount, number> = {
  2: 4,
  3: 6,
  4: 7,
};

export type ArticleCardProps = {
  article: ArticleSummary;
  featured?: boolean;
  position: number;
};

export function ArticleCard({ article, featured = false, position }: ArticleCardProps) {
  return (
    <article
      className={[
        "article-card",
        featured ? "article-card--featured" : "",
        `article-card--position-${position}`,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <a className="article-card__link" href={article.href}>
        <div className="article-card__media">
          <Image
            asset={article.image}
            fit={article.imageFit}
            priority={featured}
            sizes={
              featured
                ? "(min-width: 1920px) 1792px, (min-width: 1200px) calc(100vw - 128px), (min-width: 768px) calc(100vw - 136px), calc(100vw - 32px)"
                : "(min-width: 1200px) 33vw, (min-width: 768px) 50vw, calc(100vw - 32px)"
            }
          />
        </div>

        <div className="article-card__content">
          <div className="article-card__meta type-label-03">
            {article.category && <span>{article.category}</span>}
            <time dateTime={article.publishedAt}>{article.displayDate}</time>
          </div>
          <h3
            className={
              featured
                ? "type-fluid-heading-05"
                : "type-fluid-heading-03"
            }
          >
            {article.title}
          </h3>
          <p className="type-body-01">{article.excerpt}</p>
          <span aria-hidden="true" className="article-card__arrow">
            <ArrowRightIcon weight="regular" />
          </span>
        </div>
      </a>
    </article>
  );
}

/** CMS-ready latest-articles composition with one featured story. */
export function LatestArticlesSection({
  id,
  heading,
  articles,
  rows = 4,
  allArticlesLink,
  background = "background",
  foreground = "text-primary",
  paddingTop,
  paddingBottom,
}: LatestArticlesSectionProps) {
  if (articles.length === 0) return null;

  const visibleArticles = articles.slice(0, articleCountByRows[rows]);

  return (
    <section className={`latest-articles surface--${background} foreground--${foreground} ${getSectionSpacingClasses({ paddingTop, paddingBottom })}`} id={id}>
      <div className="latest-articles__container page-grid">
        <header className="latest-articles__header">
          <h2 className="type-fluid-heading-04">{heading}</h2>
          {allArticlesLink && (
            <ButtonLink
              href={allArticlesLink.href}
              rightIcon={<ArrowRightIcon weight="regular" />}
              size="medium"
              variant="secondary"
            >
              {allArticlesLink.label}
            </ButtonLink>
          )}
        </header>

        <div className="latest-articles__grid">
          {visibleArticles.map((article, index) => (
            <ArticleCard
              article={article}
              featured={index === 0}
              key={article.id}
              position={index === 0 ? 1 : ((index - 1) % 6) + 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

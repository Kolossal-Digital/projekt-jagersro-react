import { ArrowRightIcon } from "@phosphor-icons/react/dist/csr/ArrowRight";
import { Image, type ImageAsset } from "./Image";
import type { BackgroundName } from "../tokens";

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

export type ArticleCardProps = {
  article: ArticleSummary;
  featured?: boolean;
  position: number;
  contentBackground: BackgroundName;
};

/** Shared editorial card for article listings and related-content modules. */
export function ArticleCard({
  article,
  featured = false,
  position,
  contentBackground,
}: ArticleCardProps) {
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

        <div className={`article-card__content surface--${contentBackground}`}>
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

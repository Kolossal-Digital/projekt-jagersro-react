import { useEffect, useId, useState, type MouseEvent } from "react";
import { ArticleCard, type ArticleSummary } from "../components/ArticleCard";
import { ButtonLink } from "../components/Button";
import type { BackgroundName, ForegroundName } from "../tokens";
import { getSectionSpacingClasses, type SectionSpacingProps } from "./sectionSpacing";

export type ArticleListingSectionProps = SectionSpacingProps & {
  id?: string;
  articles: ArticleSummary[];
  background?: BackgroundName;
  cardBackground?: BackgroundName;
  foreground?: ForegroundName;
  balanceHeading?: boolean;
  initialCount?: number;
  initialPage?: number;
  batchSize?: number;
  loadMoreLabel?: string;
  paginationPath?: string;
  ariaLabel?: string;
  updateHistory?: boolean;
};

/**
 * Full article archive with a featured first story and progressive, crawlable pagination.
 * The visible control remains a real link; ordinary clicks enhance it into in-place loading.
 */
export function ArticleListingSection({
  id,
  articles,
  background = "background",
  cardBackground = "background-accent-01",
  foreground = "text-primary",
  balanceHeading = true,
  initialCount = 7,
  initialPage = 1,
  batchSize = 6,
  loadMoreLabel = "Ladda fler artiklar",
  paginationPath = "/aktuellt/",
  ariaLabel = "Alla artiklar",
  updateHistory = false,
  paddingTop,
  paddingBottom,
}: ArticleListingSectionProps) {
  const listingId = useId();
  const safeInitialCount = Math.max(1, Math.floor(initialCount));
  const safeInitialPage = Math.max(1, Math.floor(initialPage));
  const safeBatchSize = Math.max(1, Math.floor(batchSize));
  const requestedVisibleCount =
    safeInitialCount + (safeInitialPage - 1) * safeBatchSize;
  const [visibleCount, setVisibleCount] = useState(() =>
    Math.min(requestedVisibleCount, articles.length),
  );

  useEffect(() => {
    setVisibleCount((currentCount) =>
      Math.min(Math.max(currentCount, requestedVisibleCount), articles.length),
    );
  }, [articles.length, requestedVisibleCount]);

  if (articles.length === 0) return null;

  const visibleArticles = articles.slice(0, visibleCount);
  const hasMore = visibleCount < articles.length;
  const loadedAdditionalPages = Math.ceil(
    Math.max(0, visibleCount - safeInitialCount) / safeBatchSize,
  );
  const nextPage = loadedAdditionalPages + 2;
  const pageSeparator = paginationPath.includes("?") ? "&" : "?";
  const nextPageHref = `${paginationPath}${pageSeparator}page=${nextPage}`;

  function loadMore(event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    setVisibleCount((currentCount) =>
      Math.min(currentCount + safeBatchSize, articles.length),
    );
    if (updateHistory && typeof window !== "undefined") {
      window.history.replaceState(window.history.state, "", nextPageHref);
    }
  }

  return (
    <section
      aria-label={ariaLabel}
      className={`article-listing surface--${background} foreground--${foreground} ${balanceHeading ? "headings--balanced" : ""} ${getSectionSpacingClasses({ paddingTop, paddingBottom })}`}
      id={id}
    >
      <div className="article-listing__container page-grid">
        <div className="article-listing__grid" id={listingId}>
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

        <p aria-live="polite" className="visually-hidden">
          Visar {visibleArticles.length} av {articles.length} artiklar.
        </p>

        {hasMore && (
          <div className="article-listing__pagination">
            <ButtonLink
              aria-controls={listingId}
              href={nextPageHref}
              onClick={loadMore}
              size="large"
              variant="outline"
            >
              {loadMoreLabel}
            </ButtonLink>
          </div>
        )}
      </div>
    </section>
  );
}

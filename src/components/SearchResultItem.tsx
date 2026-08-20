import { ArrowRightIcon } from "@phosphor-icons/react/dist/csr/ArrowRight";
import {
  searchExcerpt,
  type SearchDocument,
} from "../search/searchIndex";

type SearchResultItemProps = {
  document: SearchDocument;
  query: string;
  onNavigate?: () => void;
};

const typeLabels: Record<SearchDocument["type"], string> = {
  page: "Sida",
  article: "Artikel",
  section: "Avsnitt",
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function HighlightedText({ text, query }: { text: string; query: string }) {
  const terms = query.trim().split(/\s+/).filter((term) => term.length >= 2);
  if (terms.length === 0) return text;

  const pattern = new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "giu");
  return text.split(pattern).map((part, index) =>
    terms.some((term) => part.localeCompare(term, "sv", { sensitivity: "accent" }) === 0) ? (
      <mark key={`${part}-${index}`}>{part}</mark>
    ) : (
      part
    ),
  );
}

/** Shared, keyboard-friendly result link used by the site-wide search panel. */
export function SearchResultItem({
  document,
  query,
  onNavigate,
}: SearchResultItemProps) {
  return (
    <article className="search-result-item">
      <a className="search-result-item__link" href={document.url} onClick={onNavigate}>
        <div className="search-result-item__meta type-code-01">
          <span>{typeLabels[document.type]}</span>
          {document.type !== "page" && <span>{document.pageTitle}</span>}
          {document.displayDate && <span>{document.displayDate}</span>}
        </div>
        <h3 className="type-fluid-heading-03">
          <HighlightedText query={query} text={document.title} />
        </h3>
        <p className="type-body-01">
          <HighlightedText
            query={query}
            text={searchExcerpt(document, query)}
          />
        </p>
        <ArrowRightIcon aria-hidden="true" className="search-result-item__arrow" />
      </a>
    </article>
  );
}

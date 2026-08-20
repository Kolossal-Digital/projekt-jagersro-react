import { useEffect, useRef, useState } from "react";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/csr/MagnifyingGlass";
import { XIcon } from "@phosphor-icons/react/dist/csr/X";
import { IconButton } from "./IconButton";
import { SearchResultItem } from "./SearchResultItem";
import {
  searchSite,
  type SearchDocumentType,
} from "../search/searchIndex";

type SearchOverlayProps = {
  open: boolean;
  onClose: () => void;
};

type SearchTypeFilter = "all" | SearchDocumentType;

const searchTypeFilters: Array<{
  label: string;
  value: SearchTypeFilter;
}> = [
  { label: "Alla", value: "all" },
  { label: "Sida", value: "page" },
  { label: "Artikel", value: "article" },
  { label: "Avsnitt", value: "section" },
];

/** Modal, site-wide quick search with live, type-filtered results. */
export function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<SearchTypeFilter>("all");
  const results = searchSite(query);
  const hasQuery = query.trim().length >= 2;
  const resultCounts: Record<SearchTypeFilter, number> = {
    all: results.length,
    page: results.filter((result) => result.type === "page").length,
    article: results.filter((result) => result.type === "article").length,
    section: results.filter((result) => result.type === "section").length,
  };
  const visibleResults = typeFilter === "all"
    ? results
    : results.filter((result) => result.type === typeFilter);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
      window.requestAnimationFrame(() => inputRef.current?.focus());
    } else if (!open) {
      if (dialog.open) dialog.close();
      setQuery("");
      setTypeFilter("all");
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose, open]);

  function close() {
    onClose();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDialogElement>) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    const focusable = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>(
        '.search-overlay__input, .search-overlay__filter, .search-result-item__link, .search-overlay__close',
      ),
    );
    const currentIndex = focusable.indexOf(document.activeElement as HTMLElement);
    const direction = event.key === "ArrowDown" ? 1 : -1;
    const nextIndex = (currentIndex + direction + focusable.length) % focusable.length;
    event.preventDefault();
    focusable[nextIndex]?.focus();
  }

  return (
    <dialog
      aria-labelledby="search-overlay-title"
      className="search-overlay theme--light"
      onCancel={close}
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
      onClose={onClose}
      onKeyDown={handleKeyDown}
      ref={dialogRef}
    >
      <div className="search-overlay__panel surface--background" data-lenis-prevent>
        <header className="search-overlay__header page-grid">
          <div className="search-overlay__title-row">
            <h2 className="type-code-01" id="search-overlay-title">
              Sök på hela webbplatsen
            </h2>
            <IconButton
              className="search-overlay__close"
              icon={<XIcon />}
              label="Stäng sökningen"
              onClick={close}
            />
          </div>
          <label className="search-overlay__field">
            <span className="visually-hidden">Sökfråga</span>
            <MagnifyingGlassIcon aria-hidden="true" />
            <input
              autoComplete="off"
              className="search-overlay__input type-fluid-heading-04"
              name="q"
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Vad letar du efter?"
              ref={inputRef}
              type="search"
              value={query}
            />
          </label>
        </header>

        <div className="search-overlay__results page-grid">
          {!hasQuery && (
            <p className="search-overlay__guidance type-body-01">
              Skriv minst två tecken. Du kan söka efter sidor, artiklar och avsnitt.
            </p>
          )}

          {hasQuery && results.length === 0 && (
            <p className="search-overlay__guidance type-body-01" role="status">
              Inga resultat för “{query}”. Prova ett annat ord eller en bredare sökning.
            </p>
          )}

          {results.length > 0 && (
            <>
              <div className="search-overlay__summary">
                <p className="search-overlay__count type-code-01" role="status">
                  {visibleResults.length} resultat
                </p>
                <div
                  aria-label="Filtrera sökresultat efter innehållstyp"
                  className="search-overlay__filters"
                  role="group"
                >
                  {searchTypeFilters.map((filter) => (
                    <button
                      aria-pressed={typeFilter === filter.value}
                      className="search-overlay__filter type-code-01"
                      key={filter.value}
                      onClick={() => setTypeFilter(filter.value)}
                      type="button"
                    >
                      <span>{filter.label}</span>
                      <span aria-hidden="true" className="search-overlay__filter-count">
                        {resultCounts[filter.value]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              {visibleResults.length === 0 && (
                <p className="search-overlay__guidance type-body-01">
                  Inga träffar av den valda typen.
                </p>
              )}
              <div className="search-overlay__result-list">
                {visibleResults.map((result) => (
                  <SearchResultItem
                    document={result}
                    key={result.id}
                    onNavigate={close}
                    query={query}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </dialog>
  );
}

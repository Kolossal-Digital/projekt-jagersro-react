export type CatalogPage =
  | "typography"
  | "colors"
  | "grid-spacing"
  | "icons"
  | "buttons"
  | "breadcrumbs"
  | "selects"
  | "text-fields"
  | "text-areas"
  | "images"
  | "hero-sections"
  | "full-width-feature-sections"
  | "feature-sections"
  | "image-section"
  | "image-carousel"
  | "image-gallery"
  | "latest-articles"
  | "timeline"
  | "navbar"
  | "footer"
  | "landing-page"
  | "article-page";

type CatalogSidebarProps = {
  activePage: CatalogPage;
  controls?: ReactNode;
  hidden?: boolean;
  onSelect: (page: CatalogPage) => void;
};

type CatalogGroup = {
  label: string;
  items: Array<{ id: CatalogPage; label: string }>;
};

const catalogGroups: CatalogGroup[] = [
  {
    label: "Foundations",
    items: [
      { id: "typography", label: "Typografi" },
      { id: "colors", label: "Färger" },
      { id: "grid-spacing", label: "Grid & spacing" },
      { id: "icons", label: "Ikoner" },
    ],
  },
  {
    label: "Components",
    items: [
      { id: "buttons", label: "Knappar" },
      { id: "breadcrumbs", label: "Breadcrumb" },
      { id: "selects", label: "Select" },
      { id: "text-fields", label: "Text field" },
      { id: "text-areas", label: "Text area" },
      { id: "images", label: "Image" },
    ],
  },
  {
    label: "Sections",
    items: [
      { id: "hero-sections", label: "Hero section" },
      {
        id: "full-width-feature-sections",
        label: "Full width feature",
      },
      { id: "feature-sections", label: "Feature section" },
      { id: "image-section", label: "Image section" },
      { id: "image-carousel", label: "Image carousel" },
      { id: "image-gallery", label: "Image gallery" },
      { id: "latest-articles", label: "Latest articles" },
      { id: "timeline", label: "Timeline" },
      { id: "navbar", label: "Navbar" },
      { id: "footer", label: "Footer" },
    ],
  },
  {
    label: "Examples",
    items: [
      { id: "landing-page", label: "Landing page" },
      { id: "article-page", label: "Article page" },
    ],
  },
];

/** Navigation for the growing design-system verification catalog. */
export function CatalogSidebar({
  activePage,
  controls,
  hidden = false,
  onSelect,
}: CatalogSidebarProps) {
  return (
    <aside
      className="catalog-sidebar"
      data-lenis-prevent
      hidden={hidden}
      id="catalog-sidebar"
    >
      {controls && <div className="catalog-sidebar__controls">{controls}</div>}
      <nav aria-label="Designsystemets delar">
        <div className="catalog-sidebar__groups">
          {catalogGroups.map((group) => (
            <section className="catalog-sidebar__group" key={group.label}>
              <h2 className="catalog-sidebar__group-label type-code-01">
                {group.label}
              </h2>
              <ul className="catalog-sidebar__list">
                {group.items.map((item) => (
                  <li key={item.id}>
                    <button
                      aria-current={activePage === item.id ? "page" : undefined}
                      className="catalog-sidebar__link type-code-02"
                      onClick={() => onSelect(item.id)}
                      type="button"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </nav>
    </aside>
  );
}
import type { ReactNode } from "react";

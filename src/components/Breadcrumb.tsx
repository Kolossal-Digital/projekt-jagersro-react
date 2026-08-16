export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type BreadcrumbProps = {
  items: BreadcrumbItem[];
  ariaLabel?: string;
};

/** Hierarchical navigation where the final, non-linked item is the current page. */
export function Breadcrumb({
  items,
  ariaLabel = "Brödsmulor",
}: BreadcrumbProps) {
  if (items.length === 0) return null;

  return (
    <nav aria-label={ariaLabel} className="breadcrumb">
      <ol className="breadcrumb__list type-code-02">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;

          return (
            <li className="breadcrumb__item" key={`${item.label}-${index}`}>
              {index > 0 && (
                <span aria-hidden="true" className="breadcrumb__separator">
                  /
                </span>
              )}
              {item.href && !isCurrent ? (
                <a className="breadcrumb__link" href={item.href}>
                  {item.label}
                </a>
              ) : (
                <span aria-current={isCurrent ? "page" : undefined} className="breadcrumb__current">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

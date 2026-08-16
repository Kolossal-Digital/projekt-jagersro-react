import { Breadcrumb } from "../components/Breadcrumb";

export function BreadcrumbCatalog() {
  return (
    <div className="pattern-catalog" id="breadcrumbs">
      <article className="pattern-specimen">
        <header className="pattern-specimen__header">
          <div>
            <p className="type-code-01">component / breadcrumb</p>
            <h2 className="type-fluid-heading-04">Hierarki / current page</h2>
          </div>
        </header>
        <div className="breadcrumb-specimen surface--background-accent-01 page-grid">
          <Breadcrumb
            items={[
              { label: "Jägersro", href: "#breadcrumbs" },
              { label: "Aktuellt", href: "#breadcrumbs" },
              { label: "Första spadtaget till hästarnas favoritbana" },
            ]}
          />
        </div>
      </article>
    </div>
  );
}

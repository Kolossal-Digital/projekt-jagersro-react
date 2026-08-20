import { useId } from "react";

export type MarkdownField = {
  field: string;
  type: string;
  required: "Ja" | "Nej" | "Villkorligt";
  description: string;
};

type SectionMarkdownDocsProps = {
  fields: MarkdownField[];
  sectionName: string;
  sourceLabel?: string;
};

/** Editorial field reference shared by every Markdown-configurable section page. */
export function SectionMarkdownDocs({
  fields,
  sectionName,
  sourceLabel = "content / landing-page.md",
}: SectionMarkdownDocsProps) {
  const titleId = useId();

  return (
    <section
      aria-labelledby={titleId}
      className="section-markdown-docs page-grid"
    >
      <header className="section-markdown-docs__header">
        <p className="type-code-01">{sourceLabel}</p>
        <h2 className="type-fluid-heading-04" id={titleId}>
          Markdownfält
        </h2>
        <p className="type-body-01">
          Fält som kan användas för {sectionName}. Punktnotation visar nästlade
          objekt och [] visar ett objekt i en lista.
        </p>
      </header>

      <div className="section-markdown-docs__table-wrap" tabIndex={0}>
        <table className="section-markdown-docs__table">
          <thead>
            <tr>
              <th className="type-label-03" scope="col">Fält</th>
              <th className="type-label-03" scope="col">Typ / värden</th>
              <th className="type-label-03" scope="col">Krav</th>
              <th className="type-label-03" scope="col">Standard och användning</th>
            </tr>
          </thead>
          <tbody>
            {fields.map((field) => (
              <tr key={`${field.field}-${field.type}`}>
                <th scope="row">
                  <code className="type-code-02">{field.field}</code>
                </th>
                <td>
                  <code className="type-code-02">{field.type}</code>
                </td>
                <td className="type-label-02">{field.required}</td>
                <td className="type-body-01">{field.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

import { useState } from "react";
import { BackgroundPicker } from "../components/BackgroundPicker";
import { Select } from "../components/Select";
import { demoLatestArticles } from "../content/demoContent";
import {
  LatestArticlesSection,
  type ArticleRowCount,
} from "../patterns/LatestArticlesSection";
import type { BackgroundName } from "../tokens";

const rowOptions = ["2", "3", "4"] as const;
type RowOption = (typeof rowOptions)[number];

export function LatestArticlesCatalog() {
  const [background, setBackground] =
    useState<BackgroundName>("background-accent-01");
  const [rows, setRows] = useState<RowOption>("4");

  return (
    <div className="pattern-catalog" id="latest-articles">
      <article className="pattern-specimen">
        <header className="pattern-specimen__header">
          <div>
            <p className="type-code-01">pattern / latest articles</p>
            <h2 className="type-fluid-heading-04">Featured story and latest updates</h2>
            <code className="type-code-01">articles=&quot;ordered&quot;</code>
          </div>
          <div className="pattern-specimen__controls">
            <Select
              className="article-row-picker"
              label="Rader"
              onChange={setRows}
              options={rowOptions}
              value={rows}
            />
            <BackgroundPicker value={background} onChange={setBackground} />
          </div>
        </header>

        <LatestArticlesSection
          allArticlesLink={{
            label: "Se allt aktuellt",
            href: "https://projektjagersro.se/aktuellt/",
          }}
          articles={demoLatestArticles}
          background={background}
          heading="Senaste från Jägersro"
          rows={Number(rows) as ArticleRowCount}
        />
      </article>
    </div>
  );
}

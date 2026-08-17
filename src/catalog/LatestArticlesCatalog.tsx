import { useState } from "react";
import { BackgroundPicker } from "../components/BackgroundPicker";
import { ForegroundPicker } from "../components/ForegroundPicker";
import { Select } from "../components/Select";
import { demoLatestArticles } from "../content/demoContent";
import {
  LatestArticlesSection,
  type ArticleRowCount,
} from "../patterns/LatestArticlesSection";
import type { BackgroundName, ForegroundName } from "../tokens";
import { SectionMarkdownDocs } from "./SectionMarkdownDocs";
import { latestArticlesMarkdownFields } from "./sectionMarkdownFields";

const rowOptions = ["2", "3", "4"] as const;
type RowOption = (typeof rowOptions)[number];

export function LatestArticlesCatalog() {
  const [background, setBackground] =
    useState<BackgroundName>("background-accent-01");
  const [foreground, setForeground] = useState<ForegroundName>("text-primary");
  const [rows, setRows] = useState<RowOption>("4");

  return (
    <div className="pattern-catalog" id="latest-articles">
      <article className="pattern-specimen">
        <header className="pattern-specimen__header page-grid">
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
            <ForegroundPicker value={foreground} onChange={setForeground} />
          </div>
        </header>

        <LatestArticlesSection
          articles={demoLatestArticles}
          background={background}
          foreground={foreground}
          rows={Number(rows) as ArticleRowCount}
        />
      </article>
      <SectionMarkdownDocs
        fields={latestArticlesMarkdownFields}
        sectionName="Latest articles"
      />
    </div>
  );
}

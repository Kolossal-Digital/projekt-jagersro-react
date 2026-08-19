import { useState } from "react";
import { BackgroundPicker } from "../components/BackgroundPicker";
import { ForegroundPicker } from "../components/ForegroundPicker";
import { HeadingBalancePicker } from "../components/HeadingBalancePicker";
import { demoLatestArticles } from "../content/demoContent";
import { LatestArticlesSection } from "../patterns/LatestArticlesSection";
import type { BackgroundName, ForegroundName } from "../tokens";
import { SectionMarkdownDocs } from "./SectionMarkdownDocs";
import { latestArticlesMarkdownFields } from "./sectionMarkdownFields";

export function LatestArticlesCatalog() {
  const [background, setBackground] =
    useState<BackgroundName>("background-accent-01");
  const [foreground, setForeground] = useState<ForegroundName>("text-primary");
  const [balanceHeading, setBalanceHeading] = useState(true);

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
            <BackgroundPicker value={background} onChange={setBackground} />
            <ForegroundPicker value={foreground} onChange={setForeground} />
            <HeadingBalancePicker
              value={balanceHeading}
              onChange={setBalanceHeading}
            />
          </div>
        </header>

        <LatestArticlesSection
          articles={demoLatestArticles}
          background={background}
          balanceHeading={balanceHeading}
          foreground={foreground}
        />
      </article>
      <SectionMarkdownDocs
        fields={latestArticlesMarkdownFields}
        sectionName="Latest articles"
      />
    </div>
  );
}

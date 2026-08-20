import { useState } from "react";
import { BackgroundPicker } from "../components/BackgroundPicker";
import { ForegroundPicker } from "../components/ForegroundPicker";
import { HeadingBalancePicker } from "../components/HeadingBalancePicker";
import { demoArticleArchive } from "../content/demoContent";
import { ArticleListingSection } from "../patterns/ArticleListingSection";
import type { BackgroundName, ForegroundName } from "../tokens";
import { SectionMarkdownDocs } from "./SectionMarkdownDocs";
import { articleListingMarkdownFields } from "./sectionMarkdownFields";

export function ArticleListingCatalog() {
  const [background, setBackground] =
    useState<BackgroundName>("background-accent-01");
  const [foreground, setForeground] = useState<ForegroundName>("text-primary");
  const [cardBackground, setCardBackground] =
    useState<BackgroundName>("background-accent-01");
  const [balanceHeading, setBalanceHeading] = useState(true);

  return (
    <div className="pattern-catalog" id="article-listing">
      <article className="pattern-specimen">
        <header className="pattern-specimen__header page-grid">
          <div>
            <p className="type-code-01">pattern / article listing</p>
            <h2 className="type-fluid-heading-04">Featured story and full archive</h2>
            <code className="type-code-01">initialCount=7 · batchSize=6</code>
          </div>
          <div className="pattern-specimen__controls">
            <BackgroundPicker value={background} onChange={setBackground} />
            <ForegroundPicker value={foreground} onChange={setForeground} />
            <BackgroundPicker
              label="Kortbakgrund"
              value={cardBackground}
              onChange={setCardBackground}
            />
            <HeadingBalancePicker
              value={balanceHeading}
              onChange={setBalanceHeading}
            />
          </div>
        </header>

        <ArticleListingSection
          articles={demoArticleArchive}
          background={background}
          cardBackground={cardBackground}
          balanceHeading={balanceHeading}
          foreground={foreground}
        />
      </article>

      <SectionMarkdownDocs
        fields={articleListingMarkdownFields}
        sectionName="Article listing"
        sourceLabel="content / aktuellt-page.md"
      />
    </div>
  );
}

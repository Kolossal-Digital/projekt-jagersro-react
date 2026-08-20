import { useState } from "react";
import { ArticleCard } from "../components/ArticleCard";
import { BackgroundPicker } from "../components/BackgroundPicker";
import { Section } from "../components/Section";
import { demoLatestArticles } from "../content/demoContent";
import type { BackgroundName } from "../tokens";

export function ArticleCardsCatalog() {
  const [background, setBackground] =
    useState<BackgroundName>("background-accent-01");
  const [cardBackground, setCardBackground] =
    useState<BackgroundName>("background-accent-01");

  return (
    <Section
      id="article-cards"
      eyebrow="components / article card"
      title="Article card"
      intro="Ett gemensamt redaktionellt kort för artikellistor, relaterat innehåll och framhävda berättelser."
      background={background}
      action={
        <div className="pattern-specimen__controls">
          <BackgroundPicker value={background} onChange={setBackground} />
          <BackgroundPicker
            label="Kortbakgrund"
            value={cardBackground}
            onChange={setCardBackground}
          />
        </div>
      }
    >
      <div className="article-card-specimens">
        <article className="article-card-specimen">
          <header className="article-card-specimen__header">
            <h3 className="type-fluid-heading-03">Standard</h3>
            <code className="type-code-01">
              featured=false · content padding=24
            </code>
          </header>
          <ArticleCard
            article={demoLatestArticles[1]}
            contentBackground={cardBackground}
            position={2}
          />
        </article>

        <article className="article-card-specimen">
          <header className="article-card-specimen__header">
            <h3 className="type-fluid-heading-03">Featured</h3>
            <code className="type-code-01">
              featured=true · content padding=32/48
            </code>
          </header>
          <ArticleCard
            article={demoLatestArticles[0]}
            contentBackground={cardBackground}
            featured
            position={1}
          />
        </article>
      </div>
    </Section>
  );
}

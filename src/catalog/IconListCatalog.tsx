import { useState } from "react";
import { BackgroundPicker } from "../components/BackgroundPicker";
import { ForegroundPicker } from "../components/ForegroundPicker";
import { HeadingBalancePicker } from "../components/HeadingBalancePicker";
import { Select } from "../components/Select";
import { IconListSection } from "../patterns/IconListSection";
import type { BackgroundName, ForegroundName } from "../tokens";
import { SectionMarkdownDocs } from "./SectionMarkdownDocs";
import { iconListMarkdownFields } from "./sectionMarkdownFields";

const items = [
  { id: "popup", icon: "hammer" as const, text: "Starta popup eller tillfällig verksamhet" },
  { id: "concept", icon: "buildings" as const, text: "Testa ett nytt koncept" },
  { id: "events", icon: "tree" as const, text: "Arrangera event eller aktiviteter" },
  { id: "collaborate", icon: "handshake" as const, text: "Samarbeta med andra aktörer" },
  { id: "explore", icon: "binoculars" as const, text: "Utforska nya sätt att använda platsen" },
  { id: "build", icon: "hammer" as const, text: "Bygg och prova i mindre skala" },
  { id: "meet", icon: "handshake" as const, text: "Skapa nya möten och samarbeten" },
  { id: "grow", icon: "tree" as const, text: "Utveckla idéer över tid" },
  { id: "establish", icon: "buildings" as const, text: "Etablera en verksamhet på platsen" },
  { id: "discover", icon: "binoculars" as const, text: "Upptäck nya behov och möjligheter" },
];

const itemCounts = ["2", "3", "4", "5", "6", "7", "8", "9", "10"] as const;

export function IconListCatalog() {
  const [background, setBackground] =
    useState<BackgroundName>("background-accent-03");
  const [foreground, setForeground] = useState<ForegroundName>("text-primary");
  const [balanceHeading, setBalanceHeading] = useState(true);
  const [itemCount, setItemCount] =
    useState<(typeof itemCounts)[number]>("5");
  const visibleItems = items.slice(0, Number(itemCount));

  return (
    <div className="pattern-catalog" id="icon-list">
      <article className="pattern-specimen">
        <header className="pattern-specimen__header page-grid">
          <div>
            <p className="type-code-01">pattern / icon list</p>
            <h2 className="type-fluid-heading-04">Variable item overview</h2>
            <code className="type-code-01">items={itemCount}</code>
          </div>
          <div className="pattern-specimen__controls">
            <BackgroundPicker value={background} onChange={setBackground} />
            <ForegroundPicker value={foreground} onChange={setForeground} />
            <HeadingBalancePicker value={balanceHeading} onChange={setBalanceHeading} />
            <Select
              label="Antal objekt"
              onChange={setItemCount}
              options={itemCounts}
              value={itemCount}
            />
          </div>
        </header>

        <IconListSection
          background={background}
          balanceHeading={balanceHeading}
          foreground={foreground}
          heading="Vad kan du göra i Labbet?"
          items={visibleItems}
        />
      </article>

      <SectionMarkdownDocs
        fields={iconListMarkdownFields}
        sectionName="Icon list"
      />
    </div>
  );
}

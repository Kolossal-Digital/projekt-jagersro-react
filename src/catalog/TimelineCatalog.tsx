import { useState } from "react";
import { BackgroundPicker } from "../components/BackgroundPicker";
import { ForegroundPicker } from "../components/ForegroundPicker";
import { demoTimelineItems } from "../content/demoContent";
import { TimelineSection } from "../patterns/TimelineSection";
import type { BackgroundName, ForegroundName } from "../tokens";
import { SectionMarkdownDocs } from "./SectionMarkdownDocs";
import { timelineMarkdownFields } from "./sectionMarkdownFields";

export function TimelineCatalog() {
  const [background, setBackground] =
    useState<BackgroundName>("background-accent-01");
  const [foreground, setForeground] = useState<ForegroundName>("text-primary");

  return (
    <div className="pattern-catalog" id="timeline">
      <article className="pattern-specimen">
        <header className="pattern-specimen__header page-grid">
          <div>
            <p className="type-code-01">pattern / timeline</p>
            <h2 className="type-fluid-heading-04">Project milestones</h2>
            <code className="type-code-01">media=&quot;optional image&quot;</code>
          </div>
          <div className="pattern-specimen__controls">
            <BackgroundPicker value={background} onChange={setBackground} />
            <ForegroundPicker value={foreground} onChange={setForeground} />
          </div>
        </header>

        <TimelineSection
          background={background}
          foreground={foreground}
          initialIndex={5}
          items={demoTimelineItems}
          paddingTop="small"
        />
      </article>
      <SectionMarkdownDocs
        fields={timelineMarkdownFields}
        sectionName="Timeline"
      />
    </div>
  );
}

import { useState } from "react";
import { BackgroundPicker } from "../components/BackgroundPicker";
import { demoTimelineItems } from "../content/demoContent";
import { TimelineSection } from "../patterns/TimelineSection";
import type { BackgroundName } from "../tokens";

export function TimelineCatalog() {
  const [background, setBackground] =
    useState<BackgroundName>("background-accent-01");

  return (
    <div className="pattern-catalog" id="timeline">
      <article className="pattern-specimen">
        <header className="pattern-specimen__header">
          <div>
            <p className="type-code-01">pattern / timeline</p>
            <h2 className="type-fluid-heading-04">Project milestones</h2>
            <code className="type-code-01">media=&quot;optional image&quot;</code>
          </div>
          <BackgroundPicker value={background} onChange={setBackground} />
        </header>

        <TimelineSection
          background={background}
          initialIndex={5}
          items={demoTimelineItems}
          paddingTop="small"
        />
      </article>
    </div>
  );
}

import type { ReactNode } from "react";
import type { BackgroundName } from "../tokens";
import { Typography } from "./Typography";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  background: BackgroundName;
  action?: ReactNode;
  children: ReactNode;
};

export function Section({
  id,
  eyebrow,
  title,
  intro,
  background,
  action,
  children,
}: SectionProps) {
  return (
    <section id={id} className={`section surface--${background}`}>
      <div className="section__inner page-grid">
        <header className="section__header">
          <div className="section__header-copy">
            <Typography as="p" className="eyebrow" variant="code-01">
              {eyebrow}
            </Typography>
            <Typography as="h2" variant="fluid-heading-05">
              {title}
            </Typography>
            <Typography className="section__intro" variant="body-01">
              {intro}
            </Typography>
          </div>
          {action}
        </header>
        <div className="section__content">{children}</div>
      </div>
    </section>
  );
}

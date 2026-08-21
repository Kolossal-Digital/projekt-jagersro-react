import { CheckCircleIcon } from "@phosphor-icons/react/dist/csr/CheckCircle";
import { FileTextIcon } from "@phosphor-icons/react/dist/csr/FileText";
import { FolderOpenIcon } from "@phosphor-icons/react/dist/csr/FolderOpen";
import type { ComponentType, SVGProps } from "react";
import type {
  DesignRule,
  DesignRuleVisualItem,
} from "../content/designRules";
import { Typography } from "./Typography";

type PhosphorIcon = ComponentType<
  SVGProps<SVGSVGElement> & { weight?: "light" }
>;

const icons: Record<NonNullable<DesignRuleVisualItem["icon"]>, PhosphorIcon> = {
  "check-circle": CheckCircleIcon,
  "file-text": FileTextIcon,
  "folder-open": FolderOpenIcon,
};

function SourceOrderVisual({ items }: { items: DesignRuleVisualItem[] }) {
  return (
    <ol className="design-rule-source-order">
      {items.map((item, index) => (
        <li key={item.label}>
          <span className="design-rule-source-order__number type-code-01">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span>
            <strong className="type-label-03">{item.label}</strong>
            {item.detail && <span className="type-code-02">{item.detail}</span>}
          </span>
        </li>
      ))}
    </ol>
  );
}

function HierarchyVisual({ items }: { items: DesignRuleVisualItem[] }) {
  return (
    <div className="design-rule-hierarchy">
      {items.map((item) => (
        <div className="design-rule-hierarchy__row" key={item.label}>
          <span className="type-code-01">{item.element}</span>
          <span className={`type-${item.token}`}>{item.label}</span>
          <code className="type-code-01">{item.token}</code>
        </div>
      ))}
    </div>
  );
}

function RadiusVisual({ items }: { items: DesignRuleVisualItem[] }) {
  return (
    <div className="design-rule-radius-list">
      {items.map((item) => (
        <div className="design-rule-radius" key={item.label}>
          <span
            aria-hidden="true"
            className="design-rule-radius__sample"
            style={{ borderRadius: `var(--${item.token})` }}
          />
          <span className="type-label-03">{item.label}</span>
          <code className="type-code-01">{item.token}</code>
        </div>
      ))}
    </div>
  );
}

function IconsVisual({ items }: { items: DesignRuleVisualItem[] }) {
  return (
    <div className="design-rule-icons">
      {items.map((item) => {
        const Icon = item.icon ? icons[item.icon] : undefined;
        return (
          <div className="design-rule-icon" key={item.label}>
            {Icon && <Icon aria-hidden="true" weight="light" />}
            <span className="type-code-01">{item.label}</span>
          </div>
        );
      })}
      <p className="type-code-01">Phosphor / Light / 24 px</p>
    </div>
  );
}

function SectionVisual({ items }: { items: DesignRuleVisualItem[] }) {
  return (
    <div className="design-rule-section-visual">
      <span className="design-rule-section-visual__outer type-code-01">
        {items[0]?.label}
        <span className="design-rule-section-visual__grid">
          {items[1]?.label}
          <span className="design-rule-section-visual__content">
            {items[2]?.label}
          </span>
        </span>
      </span>
    </div>
  );
}

function WorkflowVisual({ items }: { items: DesignRuleVisualItem[] }) {
  return (
    <div className="design-rule-workflow">
      {items.map((item, index) => (
        <div className="design-rule-workflow__mode" key={item.label}>
          <span className="type-label-03">{item.label}</span>
          <span className="design-rule-workflow__steps" aria-hidden="true">
            {Array.from({ length: index + 1 }, (_, step) => (
              <span key={step} />
            ))}
          </span>
          <span className="type-code-01">{item.detail}</span>
        </div>
      ))}
    </div>
  );
}

function RuleVisual({ rule }: { rule: DesignRule }) {
  const { kind, items } = rule.visual;
  if (kind === "source-order") return <SourceOrderVisual items={items} />;
  if (kind === "hierarchy") return <HierarchyVisual items={items} />;
  if (kind === "radius") return <RadiusVisual items={items} />;
  if (kind === "icons") return <IconsVisual items={items} />;
  if (kind === "section") return <SectionVisual items={items} />;
  return <WorkflowVisual items={items} />;
}

/** Visualizes one serializable, sourced rule read from DESIGN.md. */
export function DesignRuleCard({ rule }: { rule: DesignRule }) {
  return (
    <article className="design-rule-card">
      <header className="design-rule-card__header">
        <span className="type-code-01">{rule.category}</span>
        <Typography as="h3" variant="fluid-heading-03">
          {rule.title}
        </Typography>
        <Typography variant="body-01">{rule.summary}</Typography>
      </header>
      <div className="design-rule-card__visual">
        <RuleVisual rule={rule} />
      </div>
      <dl className="design-rule-card__meta type-code-01">
        <div><dt>Gäller</dt><dd>{rule.scope}</dd></div>
        <div><dt>Ursprung</dt><dd>{rule.origin}</dd></div>
        <div><dt>Källa</dt><dd>{rule.source}</dd></div>
      </dl>
    </article>
  );
}

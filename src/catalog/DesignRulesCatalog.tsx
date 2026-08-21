import { DesignRuleCard } from "../components/DesignRuleCard";
import { Section } from "../components/Section";
import { readDesignRules } from "../content/designRules";

const rules = readDesignRules();

export function DesignRulesCatalog() {
  return (
    <Section
      id="design-rules"
      eyebrow="foundations / DESIGN.md"
      title="Dokumenterade beslut"
      intro="En skrivskyddad visualisering av regler som redan är förankrade i DESIGN.md. Ändra beslutet och dess källa i DESIGN.md – katalogen visar resultatet."
      background="background-accent-01"
    >
      <div className="design-rule-list">
        {rules.map((rule) => (
          <DesignRuleCard key={rule.key} rule={rule} />
        ))}
      </div>
    </Section>
  );
}

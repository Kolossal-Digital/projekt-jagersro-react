import { useState } from "react";
import jagersroWordmark from "../assets/jagersro-wordmark.svg";
import { BackgroundPicker } from "../components/BackgroundPicker";
import { ForegroundPicker } from "../components/ForegroundPicker";
import { SiteFooter, type FooterLink } from "../components/SiteFooter";
import type { BackgroundName, ForegroundName } from "../tokens";
import { SectionMarkdownDocs } from "./SectionMarkdownDocs";
import { footerMarkdownFields } from "./sectionMarkdownFields";

const footerNavigation: FooterLink[] = [
  { label: "Aktuellt", href: "#footer" },
  { label: "Labbet", href: "#footer" },
  { label: "Platsen", href: "#footer" },
  { label: "Resan", href: "#footer" },
  { label: "Framtiden", href: "#footer" },
];

const legalLinks: FooterLink[] = [
  { label: "Integritetspolicy", href: "#footer" },
  { label: "Användarvillkor", href: "#footer" },
  { label: "Cookie-inställningar", href: "#footer" },
];

export function FooterCatalog() {
  const [background, setBackground] =
    useState<BackgroundName>("background-accent-01");
  const [foreground, setForeground] = useState<ForegroundName>("text-primary");

  return (
    <div className="pattern-catalog" id="footer">
      <article className="pattern-specimen">
        <header className="pattern-specimen__header page-grid">
          <div>
            <p className="type-code-01">pattern / footer</p>
            <h2 className="type-fluid-heading-04">Footer</h2>
            <code className="type-code-01">responsive=&quot;automatic&quot;</code>
          </div>
          <div className="pattern-specimen__controls">
            <BackgroundPicker value={background} onChange={setBackground} />
            <ForegroundPicker value={foreground} onChange={setForeground} />
          </div>
        </header>

        <SiteFooter
          background={background}
          foreground={foreground}
          brand={{ src: jagersroWordmark, alt: "Jägersro", href: "#footer" }}
          copyright="© 2026 Projekt Jägersro. Alla rättigheter förbehållna."
          legalLinks={legalLinks}
          navigation={footerNavigation}
          newsletter={{
            title: "Prenumerera på vårt nyhetsbrev",
            inputLabel: "E-postadress",
            placeholder: "Ange din e-postadress",
            submitLabel: "Prenumerera",
            consentText: "Genom att prenumerera godkänner du vår",
            privacyLink: { label: "integritetspolicy", href: "#footer" },
          }}
        />
      </article>
      <SectionMarkdownDocs
        fields={footerMarkdownFields}
        sectionName="Footer"
      />
    </div>
  );
}

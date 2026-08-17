import { useState } from "react";
import jagersroWordmark from "../assets/jagersro-wordmark.svg";
import { BackgroundPicker } from "../components/BackgroundPicker";
import { ForegroundPicker } from "../components/ForegroundPicker";
import { SiteNavbar, type NavbarLink } from "../components/SiteNavbar";
import type { BackgroundName, ForegroundName } from "../tokens";
import { SectionMarkdownDocs } from "./SectionMarkdownDocs";
import { navbarMarkdownFields } from "./sectionMarkdownFields";

const navbarLinks: NavbarLink[] = [
  { label: "Aktuellt", href: "#navbar", current: true },
  { label: "Labbet", href: "#navbar" },
  { label: "Platsen", href: "#navbar" },
  { label: "Resan", href: "#navbar" },
  { label: "Framtiden", href: "#navbar" },
];

export function NavbarCatalog() {
  const [background, setBackground] =
    useState<BackgroundName>("background-accent-01");
  const [foreground, setForeground] = useState<ForegroundName>("text-primary");

  return (
    <div className="pattern-catalog" id="navbar">
      <article className="pattern-specimen">
        <header className="pattern-specimen__header page-grid">
          <div>
            <p className="type-code-01">pattern / navigation</p>
            <h2 className="type-fluid-heading-04">Navbar</h2>
            <code className="type-code-01">responsive=&quot;automatic&quot;</code>
          </div>
          <div className="pattern-specimen__controls">
            <BackgroundPicker value={background} onChange={setBackground} />
            <ForegroundPicker value={foreground} onChange={setForeground} />
          </div>
        </header>

        <SiteNavbar
          background={background}
          foreground={foreground}
          brand={{
            src: jagersroWordmark,
            alt: "Jägersro",
            href: "#navbar",
          }}
          links={navbarLinks}
          primaryAction={{ label: "Kontakta oss", href: "#navbar" }}
          searchAction={{ label: "Sök", href: "#navbar" }}
        />
      </article>
      <SectionMarkdownDocs
        fields={navbarMarkdownFields}
        sectionName="Navbar"
      />
    </div>
  );
}

import jagersroWordmark from "../assets/jagersro-wordmark.svg";
import { exampleRoutes } from "../exampleRoutes";
import type { PageSettings } from "../content/pageSettings";
import { readSiteShellContent } from "../content/siteShellContent";
import { SiteFooter } from "./SiteFooter";
import { SiteNavbar } from "./SiteNavbar";

const siteShell = readSiteShellContent();

type ExampleSiteNavbarProps = {
  page: PageSettings;
  currentLabel?: string;
};

export function ExampleSiteNavbar({ page, currentLabel }: ExampleSiteNavbarProps) {
  const links = siteShell.navbar.links.map((link) => ({
    ...link,
    current: link.label === currentLabel,
  }));

  return (
    <div className={`site-navbar-shell theme--${page.navbarTheme}`}>
      <SiteNavbar
        background={page.navbarBackground}
        brand={{ src: jagersroWordmark, alt: "Jägersro", href: exampleRoutes.landing }}
        links={links}
        primaryAction={siteShell.navbar.primaryAction}
        searchAction={siteShell.navbar.searchAction}
      />
    </div>
  );
}

export function ExampleSiteFooter({ page }: { page: PageSettings }) {
  return (
    <div
      className={`theme--${page.footerTheme}`}
      id={siteShell.footer.id}
    >
      <SiteFooter
        background={page.footerBackground}
        brand={{ src: jagersroWordmark, alt: "Jägersro", href: exampleRoutes.landing }}
        copyright={siteShell.footer.copyright}
        legalLinks={siteShell.footer.legalLinks}
        navigation={siteShell.footer.navigation}
        newsletter={siteShell.footer.newsletter}
      />
    </div>
  );
}

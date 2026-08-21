import { parse } from "yaml";
import type {
  NavbarAction,
  NavbarLink,
  NavbarSearchAction,
} from "../components/SiteNavbar";
import type { FooterLink, FooterNewsletter } from "../components/SiteFooter";
import siteShellMarkdown from "./site-shell.md?raw";

export type SiteShellContent = {
  navbar: {
    key: string;
    type: "navbar";
    links: NavbarLink[];
    searchAction: NavbarSearchAction;
    primaryAction?: NavbarAction;
  };
  footer: {
    key: string;
    type: "footer";
    id?: string;
    navigation: FooterLink[];
    legalLinks: FooterLink[];
    newsletter: FooterNewsletter;
    copyright: string;
  };
};

const yamlBlockPattern = /```ya?ml\n([\s\S]*?)\n```/g;

export function readSiteShellContent(): SiteShellContent {
  const records = Array.from(siteShellMarkdown.matchAll(yamlBlockPattern), (match) =>
    parse(match[1]) as Record<string, unknown>,
  );
  const navbar = records.find((record) => record.type === "navbar");
  const footer = records.find((record) => record.type === "footer");

  if (!navbar?.key || !navbar.links || !navbar.searchAction) {
    throw new Error("Site shell needs navbar links and a search action.");
  }
  if (!footer?.key || !footer.navigation || !footer.newsletter || !footer.copyright) {
    throw new Error("Site shell needs footer navigation, newsletter and copyright.");
  }

  return { navbar, footer } as SiteShellContent;
}

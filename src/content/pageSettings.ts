import { parse } from "yaml";
import type { BackgroundName } from "../tokens";

export type PageTheme = "light" | "dark";

export type PageSettings = {
  key: string;
  type: "page";
  navbarTheme: PageTheme;
  navbarBackground: BackgroundName;
  footerTheme: PageTheme;
  footerBackground: BackgroundName;
};

const yamlBlockPattern = /```ya?ml\n([\s\S]*?)\n```/g;

export function parsePageSettings(markdown: string, pageName: string): PageSettings {
  const settings = Array.from(markdown.matchAll(yamlBlockPattern), (match) =>
    parse(match[1]) as Partial<PageSettings>,
  ).find((record) => record.type === "page");

  if (
    !settings?.key ||
    !settings.navbarTheme ||
    !settings.navbarBackground ||
    !settings.footerTheme ||
    !settings.footerBackground
  ) {
    throw new Error(
      `${pageName} needs a type: page record with navbar and footer theme settings.`,
    );
  }

  return settings as PageSettings;
}

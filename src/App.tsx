import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { ListIcon } from "@phosphor-icons/react/dist/csr/List";
import { XIcon } from "@phosphor-icons/react/dist/csr/X";
import { ButtonsCatalog } from "./catalog/ButtonsCatalog";
import { BreadcrumbCatalog } from "./catalog/BreadcrumbCatalog";
import { ColorsCatalog } from "./catalog/ColorsCatalog";
import { FooterCatalog } from "./catalog/FooterCatalog";
import { FeatureSectionsCatalog } from "./catalog/FeatureSectionsCatalog";
import { GridSpacingCatalog } from "./catalog/GridSpacingCatalog";
import { FullWidthFeatureSectionsCatalog } from "./catalog/FullWidthFeatureSectionsCatalog";
import { HeroSectionsCatalog } from "./catalog/HeroSectionsCatalog";
import { ImageSectionCatalog } from "./catalog/ImageSectionCatalog";
import { ImageCarouselCatalog } from "./catalog/ImageCarouselCatalog";
import { ImageGalleryCatalog } from "./catalog/ImageGalleryCatalog";
import { ImagesCatalog } from "./catalog/ImagesCatalog";
import { IconsCatalog } from "./catalog/IconsCatalog";
import { NavbarCatalog } from "./catalog/NavbarCatalog";
import { LandingPageCatalog } from "./catalog/LandingPageCatalog";
import { ArticlePageCatalog } from "./catalog/ArticlePageCatalog";
import { LatestArticlesCatalog } from "./catalog/LatestArticlesCatalog";
import { SelectsCatalog } from "./catalog/SelectsCatalog";
import { TextAreasCatalog } from "./catalog/TextAreasCatalog";
import { TextFieldsCatalog } from "./catalog/TextFieldsCatalog";
import { TimelineCatalog } from "./catalog/TimelineCatalog";
import { TypographyCatalog } from "./catalog/TypographyCatalog";
import {
  CatalogSidebar,
  type CatalogPage,
} from "./components/CatalogSidebar";
import { Button } from "./components/Button";
import { CatalogControls } from "./components/CatalogControls";
import { GridOverlay } from "./components/GridOverlay";
import { Typography } from "./components/Typography";
import { getBreakpointName as getLayoutBreakpointName } from "./layout";
import type { BreakpointName, ThemeName } from "./tokens";

function getBreakpointName(): BreakpointName {
  if (typeof window === "undefined") return "Small";
  return getLayoutBreakpointName(window.innerWidth);
}

function getInitialMenuVisibility() {
  if (typeof window === "undefined") return true;
  return window.innerWidth >= 768;
}

const pageContent: Record<
  CatalogPage,
  { eyebrow: string; title: string; description: string }
> = {
  typography: {
    eyebrow: "Designsystem / foundations",
    title: "Typografi.",
    description:
      "Verifiera Geist, Geist Mono och de responsiva textstilarna i aktuellt viewportläge.",
  },
  colors: {
    eyebrow: "Designsystem / foundations",
    title: "Färger.",
    description:
      "Semantiska bakgrunds- och textfärger för designsystemets Light- och Dark-teman.",
  },
  "grid-spacing": {
    eyebrow: "Designsystem / foundations",
    title: "Grid & spacing.",
    description:
      "Breakpointgränser, containerbredder och spacing-skalan som styr våra layouter.",
  },
  icons: {
    eyebrow: "Designsystem / foundations",
    title: "Ikoner.",
    description:
      "Ett kontrollerat urval från Phosphor Icons med gemensamma vikter, storlekar och betydelser.",
  },
  buttons: {
    eyebrow: "Designsystem / components",
    title: "Knappar.",
    description:
      "Den första återanvändbara komponenten från Figma, byggd med riktiga interaktionstillstånd och semantiska tokens.",
  },
  breadcrumbs: {
    eyebrow: "Designsystem / components",
    title: "Breadcrumb.",
    description:
      "Hierarkisk navigation där tidigare nivåer är länkar och den aktuella sidan markeras semantiskt och visuellt.",
  },
  selects: {
    eyebrow: "Designsystem / components",
    title: "Select.",
    description:
      "Ett återanvändbart formulärfält med native funktion, Phosphor-ikon och semantiska states från Figma.",
  },
  "text-fields": {
    eyebrow: "Designsystem / components",
    title: "Text field.",
    description:
      "Ett återanvändbart textfält i tre storlekar med native interaktion och valideringslägen från Figma.",
  },
  "text-areas": {
    eyebrow: "Designsystem / components",
    title: "Text area.",
    description:
      "Ett återanvändbart flerradigt textfält med native resize, teckenräknare och valideringslägen från Figma.",
  },
  images: {
    eyebrow: "Designsystem / components",
    title: "Image.",
    description:
      "Gemensam bildrendering med responsiva storlekar, stabila dimensioner och tillgängliga alt-texter.",
  },
  "hero-sections": {
    eyebrow: "Designsystem / sections",
    title: "Hero sections.",
    description:
      "Tre fullbreddsmönster med ett gemensamt, CMS-vänligt innehållskontrakt och responsiv layout från Figma.",
  },
  "full-width-feature-sections": {
    eyebrow: "Designsystem / sections",
    title: "Full width feature.",
    description:
      "En berättande fullbreddssektion med text, handlingar och ett manuellt producerat bildmontage i två bildlägen.",
  },
  "feature-sections": {
    eyebrow: "Designsystem / sections",
    title: "Feature sections.",
    description:
      "Tre maxbreddsbegränsade layoutlägen, visade i fem innehållskombinationer med rich text, bildmontage och handlingar.",
  },
  "image-section": {
    eyebrow: "Designsystem / sections",
    title: "Image section.",
    description:
      "Ett maxbreddsbegränsat, responsivt bildfält för dokumentära bilder från CMS.",
  },
  "image-carousel": {
    eyebrow: "Designsystem / sections",
    title: "Image carousel.",
    description:
      "En responsiv bildkarusell där en dokumentär bild är i fokus och dess valfria bildtext visas.",
  },
  "image-gallery": {
    eyebrow: "Designsystem / sections",
    title: "Image gallery.",
    description:
      "Ett responsivt, redaktionellt bildgalleri med varierad skala och tillgänglig helskärmsvisning.",
  },
  "latest-articles": {
    eyebrow: "Designsystem / sections",
    title: "Latest articles.",
    description:
      "En redaktionell artikellista med en framhävd huvudartikel och en levande, responsiv rytm för de senaste uppdateringarna.",
  },
  timeline: {
    eyebrow: "Designsystem / sections",
    title: "Timeline.",
    description:
      "En interaktiv projektkronologi där vald milstolpe centreras och visar flexibelt text-, länk- och bildinnehåll.",
  },
  navbar: {
    eyebrow: "Designsystem / sections",
    title: "Navbar.",
    description:
      "Primär navigation med desktoplayout och en tillgänglig meny för Small och Medium.",
  },
  footer: {
    eyebrow: "Designsystem / sections",
    title: "Footer.",
    description:
      "Sidfot med navigation, nyhetsbrev, Jägersros ordmärke och juridisk information.",
  },
  "landing-page": {
    eyebrow: "Designsystem / examples",
    title: "Landing page.",
    description:
      "Ett sammanhållet exempel som kombinerar våra återanvändbara komponenter, sektioner, bakgrunder och lokala teman.",
  },
  "article-page": {
    eyebrow: "Designsystem / examples",
    title: "Article page.",
    description:
      "En redaktionell undersida med navigation, breadcrumb, artikelinnehåll, relaterade artiklar och footer.",
  },
};

function App() {
  const lenisRef = useRef<Lenis | null>(null);
  const [theme, setTheme] = useState<ThemeName>("Light");
  const [breakpoint, setBreakpoint] = useState<BreakpointName>(getBreakpointName);
  const [activePage, setActivePage] = useState<CatalogPage>("typography");
  const [isSidebarVisible, setIsSidebarVisible] = useState(
    getInitialMenuVisibility,
  );
  const [isGridVisible, setIsGridVisible] = useState(false);
  const intro = pageContent[activePage];

  useEffect(() => {
    const lenis = new Lenis({
      anchors: true,
      autoRaf: true,
      respectReducedMotion: true,
      stopInertiaOnNavigate: true,
    });

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    function updateBreakpoint() {
      setBreakpoint(getBreakpointName());
    }

    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  useEffect(() => {
    if (breakpoint === "Small") setIsSidebarVisible(false);
  }, [breakpoint]);

  function selectPage(page: CatalogPage) {
    setActivePage(page);
    if (breakpoint === "Small") setIsSidebarVisible(false);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <div
      className={`app theme--${theme.toLowerCase()} type-mode--responsive`}
    >
      <header className="toolbar">
        <div className="toolbar-brand">
          <a className="wordmark type-code-02" href="#top" aria-label="Till sidans början">
            JÄGERSRO / DESIGN SYSTEM
          </a>
          <Button
            aria-controls="catalog-sidebar"
            aria-expanded={isSidebarVisible}
            aria-label={isSidebarVisible ? "Stäng debugmenyn" : "Öppna debugmenyn"}
            className="toolbar-menu-toggle"
            onClick={() => setIsSidebarVisible((visible) => !visible)}
            rightIcon={isSidebarVisible ? <XIcon /> : <ListIcon />}
            size="small"
            variant="outline"
          >
            {isSidebarVisible ? "Stäng" : "Meny"}
          </Button>
        </div>

        <CatalogControls
          breakpoint={breakpoint}
          className="toolbar-controls catalog-controls--toolbar"
          gridVisible={isGridVisible}
          onGridVisibilityChange={setIsGridVisible}
          onThemeChange={setTheme}
          theme={theme}
        />
      </header>

      <div
        className={`catalog-layout${isSidebarVisible ? "" : " catalog-layout--sidebar-hidden"}`}
        id="top"
      >
        <CatalogSidebar
          activePage={activePage}
          controls={
            <CatalogControls
              breakpoint={breakpoint}
              className="catalog-controls--menu"
              gridVisible={isGridVisible}
              onGridVisibilityChange={setIsGridVisible}
              onThemeChange={setTheme}
              theme={theme}
            />
          }
          hidden={!isSidebarVisible}
          onSelect={selectPage}
        />

        <main className="catalog-content">
          {isGridVisible && <GridOverlay />}
          {activePage !== "landing-page" && activePage !== "article-page" && (
            <div className="page-intro page-grid">
              <Typography className="eyebrow" variant="code-01">
                {intro.eyebrow}
              </Typography>
              <Typography as="h1" variant="fluid-display-04">
                {intro.title}
              </Typography>
              <Typography variant="body-02">{intro.description}</Typography>
            </div>
          )}

          {activePage === "typography" && (
            <TypographyCatalog breakpoint={breakpoint} />
          )}
          {activePage === "colors" && <ColorsCatalog theme={theme} />}
          {activePage === "grid-spacing" && <GridSpacingCatalog />}
          {activePage === "icons" && <IconsCatalog />}
          {activePage === "buttons" && <ButtonsCatalog />}
          {activePage === "breadcrumbs" && <BreadcrumbCatalog />}
          {activePage === "selects" && <SelectsCatalog />}
          {activePage === "text-fields" && <TextFieldsCatalog />}
          {activePage === "text-areas" && <TextAreasCatalog />}
          {activePage === "images" && <ImagesCatalog />}
          {activePage === "hero-sections" && <HeroSectionsCatalog />}
          {activePage === "full-width-feature-sections" && (
            <FullWidthFeatureSectionsCatalog />
          )}
          {activePage === "feature-sections" && <FeatureSectionsCatalog />}
          {activePage === "image-section" && <ImageSectionCatalog />}
          {activePage === "image-carousel" && <ImageCarouselCatalog />}
          {activePage === "image-gallery" && <ImageGalleryCatalog />}
          {activePage === "latest-articles" && <LatestArticlesCatalog />}
          {activePage === "timeline" && <TimelineCatalog />}
          {activePage === "navbar" && <NavbarCatalog />}
          {activePage === "footer" && <FooterCatalog />}
          {activePage === "landing-page" && <LandingPageCatalog />}
          {activePage === "article-page" && <ArticlePageCatalog />}
        </main>
      </div>
    </div>
  );
}

export default App;

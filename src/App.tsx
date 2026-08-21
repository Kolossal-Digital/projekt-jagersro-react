import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { ListIcon } from "@phosphor-icons/react/dist/csr/List";
import { XIcon } from "@phosphor-icons/react/dist/csr/X";
import { CornersInIcon } from "@phosphor-icons/react/dist/csr/CornersIn";
import { CornersOutIcon } from "@phosphor-icons/react/dist/csr/CornersOut";
import { ButtonsCatalog } from "./catalog/ButtonsCatalog";
import { BreadcrumbCatalog } from "./catalog/BreadcrumbCatalog";
import { ColorsCatalog } from "./catalog/ColorsCatalog";
import { DesignRulesCatalog } from "./catalog/DesignRulesCatalog";
import { FooterCatalog } from "./catalog/FooterCatalog";
import { FeatureSectionsCatalog } from "./catalog/FeatureSectionsCatalog";
import { GridSpacingCatalog } from "./catalog/GridSpacingCatalog";
import { FullWidthFeatureSectionsCatalog } from "./catalog/FullWidthFeatureSectionsCatalog";
import { HeroSectionsCatalog } from "./catalog/HeroSectionsCatalog";
import { ImageSectionCatalog } from "./catalog/ImageSectionCatalog";
import { IntroCatalog } from "./catalog/IntroCatalog";
import { ImageCarouselCatalog } from "./catalog/ImageCarouselCatalog";
import { ImageGalleryCatalog } from "./catalog/ImageGalleryCatalog";
import { ImagesCatalog } from "./catalog/ImagesCatalog";
import { IconsCatalog } from "./catalog/IconsCatalog";
import { NavbarCatalog } from "./catalog/NavbarCatalog";
import { LandingPageCatalog } from "./catalog/LandingPageCatalog";
import { ArticlePageCatalog } from "./catalog/ArticlePageCatalog";
import { ArticleCardsCatalog } from "./catalog/ArticleCardsCatalog";
import { ArticleListingCatalog } from "./catalog/ArticleListingCatalog";
import { AktuelltPageCatalog } from "./catalog/AktuelltPageCatalog";
import { LabbetPageCatalog } from "./catalog/LabbetPageCatalog";
import { PlatsenPageCatalog } from "./catalog/PlatsenPageCatalog";
import { ResanPageCatalog } from "./catalog/ResanPageCatalog";
import { FramtidenPageCatalog } from "./catalog/FramtidenPageCatalog";
import { IconListCatalog } from "./catalog/IconListCatalog";
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
import { IconButton } from "./components/IconButton";
import { Typography } from "./components/Typography";
import { getBreakpointName as getLayoutBreakpointName } from "./layout";
import type { BreakpointName, ThemeName } from "./tokens";
import { exampleRoutes, getExampleRoute } from "./exampleRoutes";

function getBreakpointName(): BreakpointName {
  if (typeof window === "undefined") return "Small";
  return getLayoutBreakpointName(window.innerWidth);
}

function getInitialMenuVisibility() {
  if (typeof window === "undefined") return true;
  return window.innerWidth >= 768;
}

function getInitialCatalogPage(): CatalogPage {
  if (typeof window === "undefined") return "intro";
  const exampleRoute = getExampleRoute(window.location.pathname);

  if (exampleRoute === "landing") return "landing-page";
  if (exampleRoute === "aktuellt") return "aktuellt-page";
  if (exampleRoute === "labbet") return "labbet-page";
  if (exampleRoute === "platsen") return "platsen-page";
  if (exampleRoute === "resan") return "resan-page";
  if (exampleRoute === "framtiden") return "framtiden-page";
  if (exampleRoute === "article") return "article-page";

  return "intro";
}

const examplePages = new Set<CatalogPage>([
  "landing-page",
  "aktuellt-page",
  "labbet-page",
  "platsen-page",
  "resan-page",
  "framtiden-page",
  "article-page",
]);

function isExamplePage(page: CatalogPage) {
  return examplePages.has(page);
}

function getInitialExampleFocusMode() {
  if (typeof window === "undefined") return false;
  if (!getExampleRoute(window.location.pathname)) return false;
  return window.sessionStorage.getItem("jagersro-example-focus-mode") === "true";
}

const pageContent: Record<
  CatalogPage,
  { eyebrow: string; title: string; description: string }
> = {
  intro: {
    eyebrow: "Projekt Jägersro / guide",
    title: "Så arbetar ni i projektet.",
    description:
      "En praktisk guide från skrivskyddat källmaterial och produktbeslut till designregler, implementation och verifiering i katalogen.",
  },
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
  "design-rules": {
    eyebrow: "Designsystem / foundations",
    title: "DESIGN.md-regler.",
    description:
      "En visuell sammanställning av dokumenterade designbeslut, deras användning, avgränsning och källa.",
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
  "article-cards": {
    eyebrow: "Designsystem / components",
    title: "Article card.",
    description:
      "Det gemensamma artikelkortet i standard- och featured-läge för redaktionella listningar.",
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
      "Ett responsivt mediefält med samma grid-, fullbredds- och bakgrundskontrakt för CMS-bilder och video.",
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
  "article-listing": {
    eyebrow: "Designsystem / sections",
    title: "Article listing.",
    description:
      "Den fullständiga artikellistan med en framhävd berättelse, enhetliga kortrader och progressiv paginering.",
  },
  "icon-list": {
    eyebrow: "Designsystem / sections",
    title: "Icon list.",
    description:
      "En responsiv översikt över korta möjligheter eller teman med ikoner från det kontrollerade ikonregistret.",
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
  "aktuellt-page": {
    eyebrow: "Designsystem / examples",
    title: "Aktuellt.",
    description:
      "En fullständig redaktionell arkivsida med sidintroduktion, featured artikel, artikelgrid och progressiv paginering.",
  },
  "labbet-page": {
    eyebrow: "Designsystem / examples",
    title: "Labbet.",
    description:
      "En sammanhållen presentationssida för aktörer som vill testa idéer och verksamheter under Jägersros utveckling.",
  },
  "platsen-page": {
    eyebrow: "Designsystem / examples",
    title: "Platsen.",
    description:
      "En sammanhållen berättelse om Jägersros omvandling, vardagsliv, grönska, hållbarhet och mobilitet.",
  },
  "resan-page": {
    eyebrow: "Designsystem / examples",
    title: "Resan.",
    description:
      "En kronologisk berättelse om Jägersros historia, pågående förändring och kommande utvecklingssteg.",
  },
  "framtiden-page": {
    eyebrow: "Designsystem / examples",
    title: "Framtiden.",
    description:
      "En visionär exempelsida om nästa generations Jägersro, uppbyggd av återanvändbara bild-, innehålls- och listsektioner.",
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
  const [activePage, setActivePage] = useState<CatalogPage>(getInitialCatalogPage);
  const [isSidebarVisible, setIsSidebarVisible] = useState(
    getInitialMenuVisibility,
  );
  const [isGridVisible, setIsGridVisible] = useState(false);
  const [isExampleFocusMode, setIsExampleFocusMode] = useState(
    getInitialExampleFocusMode,
  );
  const activePageIsExample = isExamplePage(activePage);
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

  useEffect(() => {
    if (!activePageIsExample && isExampleFocusMode) {
      setIsExampleFocusMode(false);
    }
  }, [activePageIsExample, isExampleFocusMode]);

  useEffect(() => {
    window.sessionStorage.setItem(
      "jagersro-example-focus-mode",
      String(activePageIsExample && isExampleFocusMode),
    );
  }, [activePageIsExample, isExampleFocusMode]);

  useEffect(() => {
    if (!activePageIsExample) return;

    function handleFocusModeShortcut(event: KeyboardEvent) {
      const target = event.target;
      const isEditing =
        target instanceof HTMLElement &&
        (target.isContentEditable ||
          ["INPUT", "SELECT", "TEXTAREA"].includes(target.tagName));

      if (isEditing) return;

      if (event.key.toLowerCase() === "f" && event.shiftKey && !event.metaKey && !event.ctrlKey && !event.altKey) {
        event.preventDefault();
        setIsExampleFocusMode((active) => !active);
      }

      if (event.key === "Escape" && isExampleFocusMode) {
        setIsExampleFocusMode(false);
      }
    }

    window.addEventListener("keydown", handleFocusModeShortcut);
    return () => window.removeEventListener("keydown", handleFocusModeShortcut);
  }, [activePageIsExample, isExampleFocusMode]);

  function selectPage(page: CatalogPage) {
    setActivePage(page);
    const nextPath =
      page === "landing-page"
        ? exampleRoutes.landing
        : page === "aktuellt-page"
          ? exampleRoutes.aktuellt
          : page === "labbet-page"
            ? exampleRoutes.labbet
            : page === "platsen-page"
              ? exampleRoutes.platsen
              : page === "resan-page"
                ? exampleRoutes.resan
              : page === "framtiden-page"
                ? exampleRoutes.framtiden
              : page === "article-page"
                ? exampleRoutes.article
                : "/";
    window.history.replaceState(window.history.state, "", nextPath);
    if (breakpoint === "Small") setIsSidebarVisible(false);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <div
      className={`app theme--${theme.toLowerCase()} type-mode--responsive${isExampleFocusMode ? " app--example-focus" : ""}`}
    >
      {!isExampleFocusMode && <header className="toolbar">
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
      </header>}

      <div
        className={`catalog-layout${isSidebarVisible && !isExampleFocusMode ? "" : " catalog-layout--sidebar-hidden"}`}
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
          hidden={!isSidebarVisible || isExampleFocusMode}
          onSelect={selectPage}
        />

        <main className="catalog-content">
          {isGridVisible && <GridOverlay />}
          {activePage !== "landing-page" && activePage !== "aktuellt-page" && activePage !== "labbet-page" && activePage !== "platsen-page" && activePage !== "resan-page" && activePage !== "framtiden-page" && activePage !== "article-page" && (
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
          {activePage === "intro" && <IntroCatalog />}
          {activePage === "colors" && <ColorsCatalog theme={theme} />}
          {activePage === "grid-spacing" && <GridSpacingCatalog />}
          {activePage === "icons" && <IconsCatalog />}
          {activePage === "design-rules" && <DesignRulesCatalog />}
          {activePage === "buttons" && <ButtonsCatalog />}
          {activePage === "breadcrumbs" && <BreadcrumbCatalog />}
          {activePage === "selects" && <SelectsCatalog />}
          {activePage === "text-fields" && <TextFieldsCatalog />}
          {activePage === "text-areas" && <TextAreasCatalog />}
          {activePage === "images" && <ImagesCatalog />}
          {activePage === "article-cards" && <ArticleCardsCatalog />}
          {activePage === "hero-sections" && <HeroSectionsCatalog />}
          {activePage === "full-width-feature-sections" && (
            <FullWidthFeatureSectionsCatalog />
          )}
          {activePage === "feature-sections" && <FeatureSectionsCatalog />}
          {activePage === "image-section" && <ImageSectionCatalog />}
          {activePage === "image-carousel" && <ImageCarouselCatalog />}
          {activePage === "image-gallery" && <ImageGalleryCatalog />}
          {activePage === "latest-articles" && <LatestArticlesCatalog />}
          {activePage === "article-listing" && <ArticleListingCatalog />}
          {activePage === "icon-list" && <IconListCatalog />}
          {activePage === "timeline" && <TimelineCatalog />}
          {activePage === "navbar" && <NavbarCatalog />}
          {activePage === "footer" && <FooterCatalog />}
          {activePage === "landing-page" && <LandingPageCatalog />}
          {activePage === "aktuellt-page" && <AktuelltPageCatalog />}
          {activePage === "labbet-page" && <LabbetPageCatalog />}
          {activePage === "platsen-page" && <PlatsenPageCatalog />}
          {activePage === "resan-page" && <ResanPageCatalog />}
          {activePage === "framtiden-page" && <FramtidenPageCatalog />}
          {activePage === "article-page" && <ArticlePageCatalog />}
        </main>
      </div>

      {activePageIsExample && (
        <IconButton
          aria-keyshortcuts="Shift+F"
          aria-pressed={isExampleFocusMode}
          className="example-focus-toggle"
          icon={isExampleFocusMode ? <CornersInIcon /> : <CornersOutIcon />}
          label={
            isExampleFocusMode
              ? "Lämna fullskärmsläge"
              : "Visa exempelsidan i fullskärmsläge"
          }
          onClick={() => setIsExampleFocusMode((active) => !active)}
          title={`${isExampleFocusMode ? "Lämna" : "Öppna"} fullskärmsläge (Shift+F)`}
        />
      )}
    </div>
  );
}

export default App;

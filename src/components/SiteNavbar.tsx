import { useEffect, useId, useState } from "react";
import { ListIcon } from "@phosphor-icons/react/dist/csr/List";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/dist/csr/MagnifyingGlass";
import { XIcon } from "@phosphor-icons/react/dist/csr/X";
import { Button, ButtonLink } from "./Button";
import { SearchOverlay } from "./SearchOverlay";
import type { BackgroundName, ForegroundName } from "../tokens";

export type NavbarLink = {
  label: string;
  href: string;
  current?: boolean;
};

export type NavbarAction = {
  label: string;
  href: string;
};

export type NavbarSearchAction = {
  label: string;
};

export type NavbarBrand = {
  src: string;
  alt: string;
  href: string;
};

export type SiteNavbarProps = {
  brand: NavbarBrand;
  links: NavbarLink[];
  searchAction: NavbarSearchAction;
  primaryAction?: NavbarAction;
  background?: BackgroundName;
  foreground?: ForegroundName;
};

/** Responsive primary navigation with serializable site-settings content. */
export function SiteNavbar({
  brand,
  links,
  searchAction,
  primaryAction,
  background = "background",
  foreground = "text-primary",
}: SiteNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const menuId = useId();
  const toggleId = useId();

  useEffect(() => {
    if (!isMenuOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setIsMenuOpen(false);
      document.getElementById(toggleId)?.focus();
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen, toggleId]);

  useEffect(() => {
    function openSearchFromKeyboard(event: KeyboardEvent) {
      if (event.key.toLowerCase() !== "k" || (!event.metaKey && !event.ctrlKey)) return;
      event.preventDefault();
      setIsMenuOpen(false);
      setIsSearchOpen(true);
    }

    window.addEventListener("keydown", openSearchFromKeyboard);
    return () => window.removeEventListener("keydown", openSearchFromKeyboard);
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  const classes = [
    "site-navbar",
    isMenuOpen ? "site-navbar--menu-open" : "",
    `surface--${background}`,
    `foreground--${foreground}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={classes}>
      <nav aria-label="Huvudnavigation">
        <div className="site-navbar__bar page-grid">
          <a className="site-navbar__brand" href={brand.href} onClick={closeMenu}>
            <img alt={brand.alt} src={brand.src} />
          </a>

          <ul className="site-navbar__desktop-links">
            {links.map((link) => (
              <li key={`${link.href}-${link.label}`}>
                <ButtonLink
                  aria-current={link.current ? "page" : undefined}
                  className="site-navbar__nav-link"
                  href={link.href}
                  size="medium"
                  variant="text"
                >
                  {link.label}
                </ButtonLink>
              </li>
            ))}
          </ul>

          <div className="site-navbar__desktop-action">
            <Button
              aria-keyshortcuts="Control+K Meta+K"
              leftIcon={<MagnifyingGlassIcon weight="regular" />}
              onClick={() => setIsSearchOpen(true)}
              size="medium"
              variant="secondary"
            >
              {searchAction.label}
            </Button>
          </div>

          <Button
            aria-controls={menuId}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Stäng huvudmenyn" : "Öppna huvudmenyn"}
            className="site-navbar__menu-toggle"
            id={toggleId}
            onClick={() => setIsMenuOpen((open) => !open)}
            rightIcon={isMenuOpen ? <XIcon /> : <ListIcon />}
            size="medium"
            variant="secondary"
          >
            {isMenuOpen ? "Stäng" : "Meny"}
          </Button>
        </div>

        <div
          className="site-navbar__mobile-menu page-grid"
          hidden={!isMenuOpen}
          id={menuId}
        >
          <ul className="site-navbar__mobile-links">
            {links.map((link) => (
              <li key={`${link.href}-${link.label}`}>
                <ButtonLink
                  aria-current={link.current ? "page" : undefined}
                  className="site-navbar__nav-link"
                  href={link.href}
                  onClick={closeMenu}
                  size="medium"
                  variant="text"
                >
                  {link.label}
                </ButtonLink>
              </li>
            ))}
          </ul>

          <div className="site-navbar__mobile-actions">
            <Button
              aria-keyshortcuts="Control+K Meta+K"
              leftIcon={<MagnifyingGlassIcon weight="regular" />}
              onClick={() => {
                closeMenu();
                setIsSearchOpen(true);
              }}
              size="medium"
              variant="secondary"
            >
              {searchAction.label}
            </Button>
            {primaryAction && (
              <ButtonLink
                href={primaryAction.href}
                onClick={closeMenu}
                size="medium"
                variant="primary"
              >
                {primaryAction.label}
              </ButtonLink>
            )}
          </div>
        </div>
      </nav>
      <SearchOverlay
        onClose={() => setIsSearchOpen(false)}
        open={isSearchOpen}
      />
    </header>
  );
}

import { useId, useRef, type FormEvent } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button, ButtonLink } from "./Button";
import { TextField } from "./TextField";
import type { BackgroundName, ForegroundName } from "../tokens";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterBrand = {
  src: string;
  alt: string;
  href: string;
};

export type FooterNewsletter = {
  title: string;
  inputLabel: string;
  placeholder: string;
  submitLabel: string;
  consentText: string;
  privacyLink: FooterLink;
};

export type SiteFooterProps = {
  brand: FooterBrand;
  navigation: FooterLink[];
  legalLinks: FooterLink[];
  newsletter: FooterNewsletter;
  copyright: string;
  background?: BackgroundName;
  foreground?: ForegroundName;
  balanceHeading?: boolean;
};

/** Responsive site footer with serializable navigation and newsletter content. */
export function SiteFooter({
  brand,
  navigation,
  legalLinks,
  newsletter,
  copyright,
  background = "background",
  foreground = "text-primary",
  balanceHeading = true,
}: SiteFooterProps) {
  const newsletterTitleId = useId();
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!footerRef.current) return;

      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 82%",
            once: true,
          },
        });

        timeline
          .from(
            ".site-footer__top",
            { y: 32, opacity: 0, duration: 0.9 },
            0,
          )
          .from(
            ".site-footer__brand",
            { y: 48, opacity: 0, duration: 1 },
            "-=0.62",
          )
          .from(
            ".site-footer__divider, .site-footer__legal",
            { y: 20, opacity: 0, duration: 0.7, stagger: 0.1 },
            "-=0.55",
          );
      });

      return () => media.revert();
    },
    { scope: footerRef },
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <footer
      className={`site-footer surface--${background} foreground--${foreground} ${balanceHeading ? "headings--balanced" : ""}`}
      ref={footerRef}
    >
      <div className="site-footer__inner page-grid">
        <div className="site-footer__top">
          <nav aria-label="Sidfotsnavigation">
            <ul className="site-footer__navigation">
              {navigation.map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <ButtonLink href={link.href} size="medium" variant="text">
                    {link.label}
                  </ButtonLink>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby={newsletterTitleId} className="site-footer__newsletter">
            <h2 className="type-body-01" id={newsletterTitleId}>
              {newsletter.title}
            </h2>
            <form className="site-footer__newsletter-form" onSubmit={handleSubmit}>
              <div className="site-footer__newsletter-row">
                <TextField
                  autoComplete="email"
                  className="site-footer__newsletter-field"
                  label={newsletter.inputLabel}
                  labelHidden
                  name="email"
                  placeholder={newsletter.placeholder}
                  type="email"
                />
                <Button className="site-footer__newsletter-submit" type="submit">
                  {newsletter.submitLabel}
                </Button>
              </div>
              <p className="site-footer__consent type-legal-01">
                {newsletter.consentText}{" "}
                <a href={newsletter.privacyLink.href}>
                  {newsletter.privacyLink.label}
                </a>
              </p>
            </form>
          </section>
        </div>

        <div className="site-footer__brand-and-legal">
          <a className="site-footer__brand" href={brand.href}>
            <img alt={brand.alt} src={brand.src} />
          </a>
          <div className="site-footer__divider" />
          <div className="site-footer__legal type-legal-02">
            <nav aria-label="Juridisk information">
              <ul>
                {legalLinks.map((link) => (
                  <li key={`${link.href}-${link.label}`}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <p>{copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

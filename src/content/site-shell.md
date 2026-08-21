# Gemensamt sidskal

Navigationens och sidfotens innehåll används av samtliga exempelsidor. Visuellt
tema och bakgrund väljs i respektive sidfils `type: page`-post.

## Navigation
```yaml
key: navigation
type: navbar
links:
  - { label: Aktuellt, href: "/aktuellt/" }
  - { label: Labbet, href: "/labbet/" }
  - { label: Platsen, href: "/platsen/" }
  - { label: Resan, href: "/resan/" }
  - { label: Framtiden, href: "/framtiden/" }
searchAction: { label: Sök }
primaryAction: { label: Kontakta oss, href: "#kontakt" }
```

## Footer
```yaml
key: footer
type: footer
id: kontakt
navigation:
  - { label: Aktuellt, href: "/aktuellt/" }
  - { label: Labbet, href: "/labbet/" }
  - { label: Platsen, href: "/platsen/" }
  - { label: Resan, href: "/resan/" }
  - { label: Framtiden, href: "/framtiden/" }
legalLinks:
  - { label: Integritetspolicy, href: "#kontakt" }
  - { label: Användarvillkor, href: "#kontakt" }
  - { label: Cookie-inställningar, href: "#kontakt" }
newsletter:
  title: Följ berättelsen om Jägersro
  inputLabel: E-postadress
  placeholder: Ange din e-postadress
  submitLabel: Prenumerera
  consentText: Genom att prenumerera godkänner du vår
  privacyLink: { label: integritetspolicy, href: "#kontakt" }
copyright: © 2026 Projekt Jägersro. Alla rättigheter förbehållna.
```

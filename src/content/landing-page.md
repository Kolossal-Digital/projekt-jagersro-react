# Exempel: Jägersro landningssida

Varje H2-rubrik är en modul i sidans ordning. YAML-blocket innehåller modulens
serialiserbara CMS-data. Bildfält använder nycklar från den lokala bildbanken.

## Navigation
```yaml
key: navigation
type: navbar
theme: light
background: background
links:
  - { label: Aktuellt, href: "#aktuellt", current: true }
  - { label: Labbet, href: "#labbet" }
  - { label: Platsen, href: "#platsen" }
  - { label: Galleri, href: "#galleri" }
  - { label: Resan, href: "#resan" }
searchAction: { label: Sök, href: "#landing-page" }
primaryAction: { label: Kontakta oss, href: "#kontakt" }
```

## Sidintroduktion
```yaml
key: intro
type: hero
theme: dark
background: background-accent-02
variant: split
content:
  heading: Jägersro förändras. Berättelsen fortsätter.
  body: En ny stadsdel växer fram på en plats som redan bär på generationer av minnen. Följ resan, möt människorna och upptäck det Jägersro som håller på att ta form.
  actions:
    - { label: Följ utvecklingen, href: "#resan", variant: primary, icon: arrow-right }
    - { label: Lär känna platsen, href: "#platsen", variant: outline }
```

## Flygbild
```yaml
key: aerial
type: image
theme: light
background: background-accent-01
image: aerial
priority: true
```

## Platsens lager
```yaml
key: place
type: feature
id: platsen
theme: light
background: background-accent-02
layout: split
content:
  tagline: Projekt Jägersro
  heading: En plats i förändring, med historien nära
  richText:
    - type: paragraph
      text: Jägersro är en plats med många lager. Här möts minnen från travbanan, vardagen i området och berättelsen om den stadsdel som nu tar form.
  actions:
    - { label: Följ utvecklingen, href: "#feature-sections", variant: primary, icon: arrow-right }
    - { label: Vad är projekt Jägersro?, href: "#feature-sections", variant: outline }
```

## Senaste artiklarna
```yaml
key: latest-articles
type: latest-articles
id: aktuellt
theme: light
background: background-accent-01
heading: Senaste från Jägersro
rows: 2
allArticlesLink: { label: Se allt aktuellt, href: "https://projektjagersro.se/aktuellt/" }
articleIds:
  - first-spadtaget
  - now-it-starts
  - new-district-step
  - jagersro-model
  - green-rule
  - climate-standard
  - mobility-workshop
```

## Jägersrolabbet
```yaml
key: lab
type: full-width-feature
id: labbet
theme: dark
background: background-accent-01
image: montage
imagePosition: right
content:
  tagline: Jägersrolabbet
  heading: En öppen plats för frågor, idéer och nya perspektiv
  body: I labbet undersöker vi platsen tillsammans. Här får tidiga idéer möta lokal kunskap innan de blir färdiga svar.
  actions:
    - { label: Besök labbet, href: "#kontakt", variant: primary, icon: arrow-right }
```

## Resan introduktion
```yaml
key: journey-intro
type: feature
theme: light
background: background-accent-01
paddingBottom: small
layout: split
content:
  tagline: Resan
  heading: En plats i förändring
  richText:
    - type: paragraph
      text: Från åkermark till travbana, vidare till handel och nu mot en ny stadsdel. Jägersros historia är en del av Malmös utveckling – och nästa kapitel skrivs just nu.
  actions:
    - { label: Se hur Jägersro förändrats över tid, href: "#resan", variant: primary, icon: arrow-right }
```

## Projektets tidslinje
```yaml
key: journey-timeline
type: timeline
id: resan
theme: light
background: background-accent-01
paddingTop: medium
ariaLabel: Projekt Jägersros tidslinje
initialIndex: 5
itemIds:
  - agreement
  - early-studies
  - partnership
  - dialogue-starts
  - planning
  - overview-plan
  - climate-model
  - consultation
  - detailed-plan
  - jagersro-lab
  - public-space-design
  - construction
  - first-buildings
  - moving-in
  - next-stage
```

## Bildgalleri
```yaml
key: gallery
type: image-gallery
id: galleri
theme: light
background: background
ariaLabel: Dokumentärt bildgalleri från Jägersro
itemIds:
  - gallery-aerial
  - gallery-statues
  - gallery-demolition
  - gallery-horses
  - gallery-interior
  - gallery-montage
```

## Bildkarusell
```yaml
key: carousel
type: carousel
id: berättelser
theme: light
background: background-accent-02
ariaLabel: Berättelser och dokumentation från Jägersro
initialIndex: 1
slides:
  - { id: interior, image: interior }
  - id: statues
    image: statues
    caption:
      label: Fig 4.2
      title: Vad hände med statyn?
      body: Hästarna stod länge framför travbanans entré och blev en välbekant del av platsens vardag. Bilden dokumenterar ett ögonblick i övergången mellan det gamla Jägersro och den stadsdel som nu tar form.
  - id: demolition
    image: demolition
    caption:
      label: Fig 4.3
      title: Platsen förändras
      body: Rivning och återbruk blir synliga lager i berättelsen om områdets utveckling.
  - { id: horses, image: horses }
```

## Footer
```yaml
key: footer
type: footer
id: kontakt
theme: dark
background: background
navigation:
  - { label: Aktuellt, href: "#aktuellt" }
  - { label: Labbet, href: "#labbet" }
  - { label: Platsen, href: "#platsen" }
  - { label: Galleri, href: "#galleri" }
  - { label: Resan, href: "#resan" }
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

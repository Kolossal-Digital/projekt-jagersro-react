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
theme: light
background: background-accent-02
headingColor: text-accent-01
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
background: background-accent-02
variant: full-width
image: aerial
priority: true
```

## Platsens lager
```yaml
key: ongoing
type: feature
id: just-nu
theme: light
background: background-accent-01
headingColor: text-accent-01
paddingBottom: small
layout: cta
content:
  tagline: Vad händer på jägersro?
  heading: Just nu på platsen
  richText:
    - type: paragraph
      text: Händelser, berättelser och nedslag från Jägersro– i takt med att området förändras.
  actions:
    - { label: Se alla uppdateringar, href: "#feature-sections", variant: primary, icon: arrow-right }
```

## Senaste artiklarna
```yaml
key: latest-articles
type: latest-articles
id: aktuellt
theme: light
background: background-accent-01
rows: 2
articleIds:
  - first-spadtaget
  - now-it-starts
  - new-district-step
  - jagersro-model
  - green-rule
  - climate-standard
  - mobility-workshop
```

## Platsens lager
```yaml
key: place
type: feature
id: platsen
theme: light
background: background-accent-02
headingColor: text-accent-01
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

## Jägersrolabbet
```yaml
key: lab
type: full-width-feature
id: labbet
theme: dark
background: background-accent-01
image: featureDummy
imagePosition: right
imageFit: fill
content:
  tagline: Jägersrolabbet
  heading: En öppen plats för frågor, idéer och nya perspektiv
  body: I labbet undersöker vi platsen tillsammans. Här får tidiga idéer möta lokal kunskap innan de blir färdiga svar.
  actions:
    - { label: Besök labbet, href: "#kontakt", variant: primary, icon: arrow-right }
```

## Resan introduktion
```yaml
key: journey
type: feature
theme: light
background: background-accent-01
paddingBottom: medium
layout: cta
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

## Historiken
```yaml
key: history
type: feature
theme: light
background: background-accent-03
headingColor: text-accent-02
paddingBottom: medium
layout: media
mediaPosition: left
image: montage
content:
  tagline: Jägersro 1907–idag
  heading: Från travbana till ny stadsdel
  richText:
    - type: paragraph
      text: Jägersro har länge varit en plats för rörelse, möten och förändring. Nu står området inför sin största omvandling hittills. Här växer en ny stadsdel fram – med bostäder, arbetsplatser, grönska och liv. Vi är inte där än. Men vi är på väg.
  actions:
    - { label: Läs mer om platsens bakgrund, href: "#resan", variant: primary, icon: arrow-right }
    - { label: Framtiden, href: "#resan", variant: outline, icon: arrow-right }
```

## Resan introduktion
```yaml
key: trip
type: feature
theme: dark
background: background-accent-01
paddingBottom: medium
layout: cta
content:
  tagline: Resan
  heading: Det vi bygger tillsammans
  richText:
    - type: paragraph
      text: Jägersro utvecklas med fokus på hållbarhet, gemenskap och framtidens stadsliv. Här formas en stadsdel med bostäder, arbetsplatser, parker och mötesplatser.
  actions:
    - { label: Se vad som planeras, href: "#resan", variant: primary, icon: arrow-right }
```
## Bildgalleri
```yaml
key: gallery
type: image-gallery
id: galleri
theme: dark
background: background-accent-01
ariaLabel: Dokumentärt bildgalleri från Jägersro
itemIds:
  - gallery-aerial
  - gallery-statues
  - gallery-demolition
  - gallery-horses
  - gallery-interior
```
## Resan introduktion
```yaml
key: explore
type: feature
theme: light
background: background-accent-02
paddingBottom: medium
layout: cta
content:
  tagline: utforska platsen
  heading: Upptäck Jägersro
  richText:
    - type: paragraph
      text: Hur låter det här en tidig morgon? Vad finns kvar från tidigare epoker? Utforska Jägersro genom bilder, platser och berättelser från området.
  actions:
    - { label: Utforska området, href: "#resan", variant: primary, icon: arrow-right }
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


## Resan introduktion
```yaml
key: participate
type: feature
theme: dark
background: background-accent-02
layout: centered
content:
  tagline: Delta
  heading: Var med längs vägen
  richText:
    - type: paragraph
      text: Transformationen av Jägersro sker inte i ett vakuum. Här finns möjlighet att delta, tycka till och uppleva platsen redan idag.
  actions:
     - { label: Se vad som händer på platsen, href: "#resan", variant: primary, icon: arrow-right }
     - { label: Kontakta oss, href: "#platsen", variant: outline }
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

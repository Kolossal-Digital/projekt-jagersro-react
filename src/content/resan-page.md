# Exempel: Resan

## Sidinställningar
```yaml
key: resan-page
type: page
navbarTheme: light
navbarBackground: background
footerTheme: dark
footerBackground: background
```

## Introduktion
```yaml
key: journey-intro
type: hero
id: resan-intro
theme: light
background: background-accent-02
headingColor: text-accent-01
variant: split
paddingTop: large
paddingBottom: large
content:
  heading: "Från då till nu\n– och vidare"
  body: Jägersro har alltid varit en plats i rörelse. Från åkermark till travbana, vidare till handel – och nu mot en ny stadsdel. Här kan du följa resan, förstå hur vi bygger och se vart vi är på väg.
  actions:
    - { label: Följ utvecklingen, href: "#tidslinje", variant: primary, icon: arrow-down }
```

## En plats i förändring
```yaml
key: journey-overview
type: feature
id: forandring
theme: light
background: background-accent-01
headingColor: text-accent-01
layout: cta
content:
  tagline: Resan
  heading: En plats i förändring
  richText:
    - type: paragraph
      text: Från åkermark till travbana, vidare till handel och nu mot en ny stadsdel. Jägersros historia är en del av Malmös utveckling – och nästa kapitel skrivs just nu.
  actions:
    - { label: Se hur Jägersro förändrats över tid, href: "#tidslinje", variant: primary, icon: arrow-right }
```

## Tidslinje
```yaml
key: journey-timeline
type: timeline
id: tidslinje
theme: light
background: background-accent-01
headingColor: text-accent-01
paddingTop: small
paddingBottom: large
ariaLabel: Projekt Jägersros resa över tid
initialIndex: 3
itemIds:
  - agreement
  - partnership
  - planning
  - overview-plan
  - detailed-plan
  - construction
  - moving-in
```

## Det händer nu
```yaml
key: happening-now
type: feature
id: just-nu
theme: dark
background: background-accent-03
headingColor: text-accent-02
layout: split
content:
  heading: Det händer nu
  richText:
    - type: paragraph
      text: Förändringen av Jägersro är redan igång. Parallellt med planeringen aktiveras platsen – med aktiviteter, initiativ och människor som är med och formar området innan det är färdigt.
```

## Labbet
```yaml
key: journey-lab
type: feature
id: labbet
theme: dark
background: background-accent-02
headingColor: text-accent-01
layout: media
mediaPosition: right
mediaFit: contain
image: collageGardening
content:
  tagline: Labbet
  heading: En del av resan – redan idag
  richText:
    - type: paragraph
      text: Genom Labbet öppnar vi upp Jägersro under uppbyggnadstiden. Här ges möjlighet att testa idéer, etablera verksamheter och skapa upplevelser medan platsen växer fram.
    - type: paragraph
      text: Det är här framtiden börjar ta form.
  actions:
    - { label: Utforska Labbet, href: "/labbet/", variant: primary, icon: arrow-right }
    - { label: Anmäl ditt intresse, href: "/labbet/#intresse", variant: outline, icon: arrow-right }
```

## Modellbild
```yaml
key: model-image
type: image
id: jagersromodellen-bild
theme: dark
headingColor: text-accent-01
background: background-accent-02
backgroundTop: background-accent-02
backgroundBottom: background
variant: grid
image: statues
paddingTop: large
paddingBottom: small
```

## Så byggs Jägersro
```yaml
key: how-we-build
type: feature
id: sa-byggs-jagersro
theme: dark
background: background
headingColor: text-accent-01
layout: split
paddingTop: medium
content:
  heading: Så byggs Jägersro
  richText:
    - type: paragraph
      text: Bakom utvecklingen finns Jägersromodellen – ett ramverk som säkerställer att stadsdelen växer hållbart, långsiktigt och med människan i fokus.
    - type: paragraph
      text: Den visar hur beslut hänger ihop, vilka avvägningar som görs och hur vi bygger för framtiden – redan från start.
  actions:
    - { label: Så fungerar Jägersromodellen, href: "#hallbarhet", variant: primary, icon: arrow-right }
```

## Vägen vidare
```yaml
key: next-steps
type: feature
id: vagen-vidare
theme: light
background: background-accent-01
headingColor: text-accent-01
layout: media
mediaPosition: right
mediaFit: contain
image: greenPlan
content:
  heading: Hur går vi vidare?
  richText:
    - type: paragraph
      text: Utvecklingen av Jägersro är en långsiktig process. Varje steg bygger vidare på det förra – från planering till genomförande, från idé till verklighet.
    - type: paragraph
      text: Resan handlar inte bara om vad som byggs, utan hur det byggs – tillsammans med platsen och människorna som finns här.
```

## Delta
```yaml
key: participate
type: feature
id: delta
theme: dark
background: background-accent-03
headingColor: text-accent-02
layout: centered
content:
  tagline: Delta
  heading: Var med längs vägen
  richText:
    - type: paragraph
      text: Transformationen av Jägersro sker inte i ett vakuum. Här finns möjlighet att delta, tycka till och uppleva platsen redan idag.
  actions:
    - { label: Se vad som händer på platsen, href: "/platsen/", variant: primary, icon: arrow-right }
    - { label: Kontakta oss, href: "#kontakt", variant: outline, icon: arrow-right }
```

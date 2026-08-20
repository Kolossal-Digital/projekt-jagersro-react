# Exempel: Labbet

## Introduktion
```yaml
key: labbet-intro
type: hero
id: labbet-intro
theme: dark
background: background
variant: split
paddingTop: large
paddingBottom: large
content:
  heading: "Labbet\n– bygg framtidens Jägersro"
  body: En öppen plattform för entreprenörer, företag och initiativ som vill testa, skapa och etablera sig under tiden Jägersro växer fram.
  actions:
    - { label: Anmäl intresse, href: "#intresse", variant: primary, icon: arrow-right }
    - { label: Kontakta oss, href: "#kontakt", variant: outline, icon: arrow-right }
```

## Vad är Labbet?
```yaml
key: about-labbet
type: feature
id: vad-ar-labbet
theme: light
background: background-accent-01
layout: media
mediaPosition: right
mediaFit: cover
image: aerial
content:
  tagline: Vad är Labbet?
  heading: En plats i rörelse
  richText:
    - type: paragraph
      text: Labbet är Jägersros utrymme för det som händer här och nu. Här ges möjlighet att etablera verksamheter, testa idéer och skapa upplevelser redan innan stadsdelen står färdig.
    - type: paragraph
      text: Det är inte en färdig plats – utan en plats i utveckling. Och det är just det som gör den intressant.
```

## Möjligheter
```yaml
key: labbet-possibilities
type: icon-list
id: mojligheter
theme: light
background: background-accent-03
heading: Vad kan du göra i Labbet?
items:
  - { id: popup, icon: hammer, text: Starta popup eller tillfällig verksamhet }
  - { id: concept, icon: buildings, text: Testa ett nytt koncept }
  - { id: events, icon: tree, text: Arrangera event eller aktiviteter }
  - { id: collaborate, icon: handshake, text: Samarbeta med andra aktörer }
  - { id: explore, icon: binoculars, text: Utforska nya sätt att använda platsen }
```

## För vem
```yaml
key: labbet-audience
type: feature
id: for-vem
theme: light
background: background-accent-01
layout: media
mediaPosition: left
mediaFit: cover
image: aerial
content:
  tagline: För vem
  heading: För dig som vill vara med tidigt
  richText:
    - type: paragraph
      text: Labbet riktar sig till entreprenörer, företag, kreatörer och organisationer som ser värdet i att testa, synas och utvecklas tillsammans med en plats i förändring.
```

## Varför Labbet?
```yaml
key: labbet-benefits
type: feature
id: varfor-labbet
theme: dark
background: background
layout: split
content:
  heading: Varför labbet?
  richText:
    - type: definition-list
      items:
        - { heading: Synlighet, body: Bli en del av berättelsen om Jägersro }
        - { heading: Närhet till utvecklingen, body: Få insikt i och påverka hur platsen formas }
        - { heading: Flexibilitet, body: Möjlighet att testa utan långsiktiga åtaganden }
        - { heading: Nätverk, body: Möt andra aktörer och initiativ }
```

## Så fungerar det
```yaml
key: labbet-process
type: feature
id: sa-fungerar-det
theme: light
background: background-accent-01
layout: split
content:
  heading: Så fungerar det
  richText:
    - type: numbered-list
      items:
        - Skicka in din idé eller intresseanmälan
        - Dialog kring möjligheter och upplägg
        - Genomförande på plats
        - Uppföljning / vidare utveckling
```

## Avslutande CTA
```yaml
key: labbet-cta
type: feature
id: intresse
theme: dark
background: background
layout: centered
content:
  heading: Vill du vara med?
  richText:
    - type: paragraph
      text: Vi söker aktörer som vill testa, skapa och bidra till Jägersros utveckling.
  actions:
    - { label: Anmäl intresse, href: "#intresse", variant: primary, icon: arrow-right }
    - { label: Kontakta oss, href: "#kontakt", variant: outline, icon: arrow-right }
```

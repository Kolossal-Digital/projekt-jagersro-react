# Exempel: Framtiden

## Introduktion
```yaml
key: future-intro
type: hero
id: framtiden-intro
theme: dark
background: background
variant: left
paddingTop: large
paddingBottom: medium
content:
  heading: Nästa generations Jägersro
  body: En ny stadsdel växer fram – steg för steg.
```

## Framtidsbild
```yaml
key: future-image
type: image
id: framtidsbild
theme: dark
background: background
backgroundTop: background
backgroundBottom: background-accent-01
backgroundTopTheme: dark
backgroundBottomTheme: light
variant: grid
image: futureAerial
priority: true
paddingTop: small
paddingBottom: small
```

## På väg att bli nytt
```yaml
key: becoming-new
type: feature
id: nagot-nytt
theme: light
background: background-accent-01
layout: media
mediaPosition: right
mediaFit: cover
image: greenPlan
content:
  heading: En plats på väg att bli något nytt
  richText:
    - type: paragraph
      text: Jägersro förändras över tid. Från det som är idag, till en ny stadsdel för framtidens Malmö.
    - type: paragraph
      text: Det är en resa som sker steg för steg – där varje del bygger vidare på nästa.
```

## Känslan
```yaml
key: future-feeling-intro
type: feature
id: kanslan
theme: light
background: background-accent-02
layout: split
paddingBottom: medium
content:
  heading: Så kan det kännas att vara här
  richText: []
```

## Bildberättelse
```yaml
key: future-gallery
type: image-gallery
id: framtidsgalleri
theme: light
background: background-accent-02
paddingTop: medium
ariaLabel: Bilder av rörelse, grönska och förändring i framtidens Jägersro
itemIds:
  - gallery-demolition
  - gallery-statues
  - gallery-interior
  - gallery-aerial
  - gallery-horses
  - gallery-montage
```

## Stadsdelens delar
```yaml
key: district-parts
type: icon-list
id: stadsdelens-delar
theme: dark
background: background
heading: En stadsdel med många delar
items:
  - { id: homes, icon: buildings, text: Bostäder }
  - { id: workplaces, icon: hammer, text: Arbetsplatser }
  - { id: parks, icon: tree, text: Parker och gröna stråk }
  - { id: schools, icon: handshake, text: Förskolor och skolor }
  - { id: culture, icon: binoculars, text: Platser för kultur och aktivitet }
```

## Knyter ihop staden
```yaml
key: connects-city
type: feature
id: knyter-ihop
theme: light
background: background-accent-01
layout: media
mediaPosition: right
mediaFit: cover
image: futureAerial
content:
  heading: En plats som knyter ihop staden
  richText:
    - type: paragraph
      text: Jägersro blir en del av ett större sammanhang – där områden knyts ihop och nya rörelser skapas.
```

## Byggt för framtiden
```yaml
key: built-to-last
type: feature
id: hallbar-framtid
theme: dark
background: background
layout: split
content:
  heading: Byggt för att hålla över tid
  richText:
    - type: bullet-list
      items:
        - Mindre klimatpåverkan
        - Smart resursanvändning
        - Hållbara livsmiljöer
```
## Etappvis utveckling bild
```yaml
key: future-image-2
type: image
id: framtidsbild2
theme: dark
background: background-accent-01
variant: grid
image: futureAerial
priority: true
paddingTop: large
paddingBottom: small
```

## Etappvis utveckling
```yaml
key: phased-development
type: feature
id: etapper
theme: dark
background: background-accent-01
layout: split
paddingTop: medium
content:
  heading: Det händer inte på en gång
  richText:
    - type: paragraph
      text: Jägersro byggs i etapper. Det som börjar idag fortsätter att utvecklas under många år framöver.
```

## Avslutning
```yaml
key: future-cta
type: feature
id: framtiden-borjar-nu
theme: light
background: background-accent-01
layout: centered
content:
  heading: Framtiden börjar redan nu
  richText:
    - type: paragraph
      text: Det som ska bli Jägersro testas och formas redan idag – genom aktiviteter, initiativ och människor på platsen.
  actions:
    - { label: Se vad som händer nu, href: "/aktuellt/", variant: primary, icon: arrow-right }
    - { label: Utforska Labbet, href: "/labbet/", variant: outline, icon: arrow-right }
```

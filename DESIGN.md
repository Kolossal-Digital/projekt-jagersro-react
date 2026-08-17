# DESIGN.md — Jägersro webb

*En kuraterad och tidlös digital utställning, berättelseplattform och kontaktpunkt för Jägersros långsiktiga förvandling.*

> Status: Första webbversionen av designsystemet  
> Uppdaterad: 2026-08-15  
> Produktkälla: `productHome.md`  
> Tokenkällor: `design-tokens/figma-export.json`, `design-tokens/layout.json`  
> Visuell källa: `Jägersro_Visuell_Identitet_v2.pdf`

---

## 1. Produktbrief

Jägersro webb är det permanenta digitala navet för platsens förvandling från travbana, handel och stora hårdgjorda ytor till en grön och sammanlänkad stadsdel. Produkten används av närboende, Malmöbor, besökare, beslutsfattare, partners, media och framtida boende för att förstå vad platsen har varit, vad som händer nu och vad den är på väg att bli.

Upplevelsen ska kännas som en kuraterad, tidlös utställning med dokumentära inslag och en tydlig möjlighet till kontakt. Gränssnittets viktigaste uppgift är att bära berättelsen utan att skymma den: innehåll, plats, människor och förändring ska alltid dominera över dekorativ UI.

---

## 2. Designprinciper

### Platsen är huvudpersonen

Verkliga miljöer, människor, detaljer och förändringar ska ges mer visuell tyngd än gränssnittets komponenter. UI ska rama in innehållet, inte konkurrera med det.

### Kuraterat, inte katalogartat

Sidor ska kännas komponerade och redaktionella. Variera rytm, bildskala och berättartempo med avsikt, men behåll konsekventa tokens, komponenter och fullbreddsmönster.

### Tidlöst före trendigt

Använd lugna färgfält, lätt typografi, tydliga proportioner och få visuella effekter. Undvik uttryck som snabbt dateras eller gör upplevelsen till en generisk kampanjsajt.

### Dokumentärt och trovärdigt

Skilj visuellt och språkligt på nuläge, beslutade planer, ambitioner och idéer. Bilder ska kännas ärliga och naturliga. Påståenden ska stödjas av konkreta berättelser, fakta eller bevis.

### Ett tydligt nästa steg

Varje sida eller större berättelse ska hjälpa besökaren vidare: fördjupa sig, följa utvecklingen, besöka platsen eller ta kontakt. Kontakt ska kännas tillgänglig utan att hela upplevelsen blir säljdriven.

---

## 3. Visuell karaktär

Den visuella identiteten är varm, harmonisk och naturinspirerad. Basen består av mörk skogsgrön, djup oceanblå, varma benvita och sandiga toner. Ljusblått och havsblått kan skapa större färgfält. Tomatrött används sparsamt som signal och redaktionell förstärkning.

Kompositioner får vara asymmetriska och ha tydlig skala, men ska alltid kännas lugna och avsiktliga. Tom yta är en aktiv del av identiteten. När en layout känns överlastad ska innehåll tas bort eller ges mer utrymme innan nya visuella avdelare läggs till.

---

## 4. Färg

### Identitetspalett

```yaml
brand-dark-forest-green: "#454B3F"
# Primär mörk identitetsfärg. Stora lugna ytor, mörka redaktionella sektioner och accenter.
# Kombinera bara med text eller logotyp som uppfyller WCAG 2.2 AA.

brand-ocean-blue: "#001849"
# Djup blå identitetsfärg. Stora kontrasterande ytor, berättelsekapitel och utställningsliknande partier.
# Använd inte som generell länkfärg utan semantisk token.

brand-yellow-sky: "#FAF6EA"
# Varm huvudbakgrund för redaktionellt innehåll och luftiga sektioner.
# Ska upplevas som neutral yta, inte som varningsfärg.

brand-light-forest-green: "#DCD7BF"
# Lugn accentbakgrund för större innehållssektioner.
# Använd inte för små kontroller där kontrasten blir svår att bedöma.

brand-peach: "#F7DBC6"
# Varm kompletterande yta för grafik, collage och utvalda redaktionella inslag.
# Inte standardbakgrund för formulär eller längre textflöden.

brand-light-blue: "#B6CBEC"
# Ljus accentbakgrund för berättande block och grafiska montage.
# Använd sparsamt så att paletten behåller sin lugna bas.

brand-sea-blue: "#6585C4"
# Mellanblå färg för större grafik och rubriker där kontrasten är verifierad.
# Undvik för liten text och tunna ikoner.

brand-tomato-red: "#FF4A4A"
# Signal- och uppmärksamhetsfärg för enstaka redaktionell förstärkning eller viktig kontaktväg.
# Aldrig dekorativ standardfärg, aldrig synonym med formulärfel och aldrig flera konkurrerande röda CTA:er.

neutral-black: "#000000"
# Logotyp och text när den semantiska texttoken tillåter det.

neutral-white: "#FFFFFF"
# Logotyp och text på mörka ytor när kontrasten är tillräcklig.
```

### Semantiska bakgrunder

Sektioner får endast använda följande fyra bakgrundstokens. Bakgrunden ligger på en fullbreddssektion; innehållet ligger i en separat begränsad container.

```yaml
light:
  background: "#FFFFFF"             # Neutral sid- och innehållsyta.
  background-accent-01: "#FAF6EA"   # Varm, benvit redaktionell yta.
  background-accent-02: "#DCD7BF"   # Ljus skogsgrön/sandig accentyta.
  background-accent-03: "#B6CBEC"   # Ljusblå accentyta.

dark:
  background: "#121619"             # Neutral mörk sid- och innehållsyta.
  background-accent-01: "#22262A"   # Mjukare mörk accentyta.
  background-accent-02: "#454B3F"   # Mörk skogsgrön identitetsyta.
  background-accent-03: "#001849"   # Djup oceanblå identitetsyta.
```

### Text, länkar och fokus

```yaml
light:
  text-primary: "#22262A"                 # Rubriker och primär brödtext.
  text-secondary: "rgba(34, 38, 42, 0.8)" # Metadata och sekundär information.
  text-accent-01: "#454B3F"               # Accenttext på ljusa ytor.
  text-accent-02: "#001849"               # Alternativ accenttext på ljusa ytor.
  text-placeholder: "rgba(34, 38, 42, 0.7)" # Dämpad förgrund; använd med särskild kontrastkontroll.
  link-primary: "#432DD7"                 # Interaktiva textlänkar, inte dekoration.
  link-primary-hover: "#372AAC"           # Hover för textlänkar.
  focus-border: "#432DD7"                 # Synlig tangentbordsfokus.
  border-subtle: "rgba(34, 38, 42, 0.1)"  # Diskret strukturell avgränsning.

dark:
  text-primary: "#FFFFFF"
  text-secondary: "rgba(255, 255, 255, 0.8)"
  text-accent-01: "#DCD7BF"
  text-accent-02: "#B6CBEC"
  text-placeholder: "rgba(255, 255, 255, 0.7)"
  link-primary: "#CEFF64"
  link-primary-hover: "#B1F625"
  focus-border: "#BFDBFE"
  border-subtle: "#343A3F"
```

Länkar ska kännas som länkar genom mer än enbart färg, exempelvis understrykning eller tydlig kontext. Fokusmarkering får aldrig tas bort. Färgkombinationer ska verifieras i både Light och Dark, särskilt när text ligger på accentbakgrunder.

Alla section-patterns har separata semantiska val för `background` och `foreground`, där katalogen presenterar `foreground` som **Rubrik färg**. Valet får vara `text-primary`, `text-secondary`, `text-accent-01`, `text-accent-02` eller `text-placeholder`; standard är `text-primary`. Det påverkar enbart sektionens `h1`–`h6`. Taglines, paragrafer, listor, bildtexter, metadata och övrig copy behåller sina ordinarie semantiska texttokens, normalt `text-primary`, och knappar behåller sina egna färgkontrakt. Varje vald kombination av bakgrund och rubrikfärg måste kontrastkontrolleras i aktuellt tema; `text-placeholder` är ett avsiktligt dämpat alternativ och får inte användas för kritiska rubriker.

### Knappar och status

```yaml
button-primary-light:
  background: "#121619"
  text: "#FFFFFF"
  usage: "Sidans viktigaste handling eller tydlig kontaktväg. Normalt högst en per vy."

button-primary-dark:
  background: "#F2F4F8"
  text: "#22262A"
  usage: "Primär handling på mörk yta."

button-secondary-light:
  background: "rgba(34, 38, 42, 0.05)"
  text: "#121619"
  usage: "Alternativ handling med lägre prioritet."

button-secondary-dark:
  background: "rgba(255, 255, 255, 0.05)"
  text: "#FFFFFF"
  usage: "Alternativ handling på mörk yta."

support-light:
  error: "#DA1E28"    # Endast fel och destruktiva tillstånd.
  success: "#0E6027"  # Endast bekräftad framgång eller slutförd status.
  warning: "#A65F00"  # Endast varning eller risk som kräver uppmärksamhet.
  info: "#2563EB"     # Endast neutral systeminformation.

support-dark:
  error: "#FF8389"
  success: "#6FDC8C"
  warning: "#FFDF20"
  info: "#BFDBFE"
```

Tomatrött är en identitetssignal och ska inte ersätta `support-error`. Status kommuniceras alltid med text och vid behov ikon, aldrig med enbart färg.

---

## 5. Typografi

### Typsnitt och nuvarande mappning

```yaml
font-sans:
  family: "Geist"
  current-usage: "Rubriker, display, body, labels, hjälptext, legal text, längre stycken och citat."

font-code:
  family: "Geist Mono"
  current-usage: "Förrubriker, metadata, faktauppgifter, formulärkontroller och mindre informationsytor."
```

Den visuella identitetsguiden föreskriver Geist för rubrik och brödtext samt Geist Mono för info, knappar och förrubriker. Webbens tokenlager normaliserar därför äldre Source Serif 4-referenser i råexporten till Geist. `font-serif` stöds inte och får inte återinföras utan ett uttryckligt designsystembeslut.

### Utility och body

Välj alltid namngiven texttoken. Sätt inte egna storlekar, radavstånd eller vikter i komponent-CSS.

```yaml
code-01:
  all-modes: "Geist Mono 12/16, weight 400, letter-spacing 0.12px"
  usage: "Förrubrik, kort metadata, tokennamn och kompakt faktainformation. Inte längre textstycken."

code-02:
  all-modes: "Geist Mono 14/20, weight 400, letter-spacing 0.12px"
  usage: "Knappar, select-kontroller och tydligare UI-text. Inte stora rubriker."

label-01:
  all-modes: "Geist 12/16, weight 500, letter-spacing 0.12px"
  usage: "Små etiketter där läsbarhet och kontrast är verifierade."

label-02:
  all-modes: "Geist 14/18, weight 500, letter-spacing 0.06px"
  usage: "Standardetikett för formulär och kompakt innehåll."

label-03:
  all-modes: "Geist 16/20, weight 500, letter-spacing 0.06px"
  usage: "Framträdande etikett eller liten underrubrik."

helper-text-01:
  all-modes: "Geist 12/16, weight 400, letter-spacing 0.12px"
  usage: "Kort hjälptext. Kritisk information får inte döljas här."

helper-text-02:
  all-modes: "Geist 14/18, weight 400, letter-spacing 0.06px"
  usage: "Hjälptext som behöver högre läsbarhet."

legal-01:
  all-modes: "Geist 12/16, weight 400, letter-spacing 0.12px"
  usage: "Kort juridisk eller formell metadata."

legal-02:
  all-modes: "Geist 14/18, weight 400, letter-spacing 0.06px"
  usage: "Juridisk text som måste vara tydligare eller längre."

body-01:
  small-medium: "Geist 14/20, weight 400, letter-spacing 0"
  large-max: "Geist 16/22, weight 400, letter-spacing 0"
  usage: "Standardbrödtext och komponentbeskrivningar."

body-02:
  small-medium: "Geist 18/26, weight 400"
  large-max: "Geist 20/28, weight 400"
  usage: "Ingress och framträdande redaktionell introduktion."
```

### Fluid headings

Fluid headings är den enda tillåtna rubrikskalan. De gamla statiska `fixed-heading`-stilarna är borttagna och får inte genereras eller återskapas.

```yaml
fluid-heading-03:
  small: "24/30"
  medium: "28/36"
  large: "28/36"
  max: "32/40"
  style: "Geist Light, weight 300"
  usage: "Komponent- och mindre layoutrubriker."

fluid-heading-04:
  small: "28/36"
  medium: "32/36"
  large: "32/40"
  max: "42/50"
  style: "Geist Light, weight 300"
  usage: "Sekundär sektionsrubrik och normal redaktionell H2."

fluid-heading-05:
  small: "32/40"
  medium: "40/42"
  large: "42/50"
  max: "54/64"
  style: "Geist Light, weight 300"
  usage: "Primär sektionsrubrik och större redaktionellt kapitel."

fluid-heading-06:
  small: "36/40"
  medium: "42/50"
  large: "48/50"
  max: "60/64"
  style: "Geist Light, weight 300"
  usage: "Stor layout- eller landningssiderubrik. Undvik inne i kort och små komponenter."
```

### Fluid display, stycke och citat

```yaml
fluid-quotation-01:
  small: "Geist Light Italic 20/26"
  medium: "Geist Light Italic 24/30"
  large: "Geist Light Italic 28/36"
  max: "Geist Light Italic 32/40"
  usage: "Kort citat med tydlig avsändare."

fluid-quotation-02:
  small: "Geist Light Italic 32/40"
  medium: "Geist Light Italic 42/50"
  large: "Geist Light Italic 48/56"
  max: "Geist Light Italic 60/70"
  usage: "Stort, sällsynt nyckelcitat. Aldrig för löpande text."

fluid-display-01:
  small: "Geist Light 42/50"
  medium: "Geist Light 54/64"
  large: "Geist Light 60/70"
  max: "Geist Light 76/86"
  usage: "Mindre sidtitel eller kompakt hero. Högst en per vy."

fluid-display-02:
  small: "Geist Light 48/56"
  medium: "Geist Light 60/70"
  large: "Geist Light 76/86"
  max: "Geist Light 92/102"
  usage: "Displayrubrik mellan display-01 och display-03 i skalan. Aldrig inne i kontroller eller löptext."

fluid-display-03:
  small: "Geist Light 54/64"
  medium: "Geist Light 76/86"
  large: "Geist Light 92/102"
  max: "Geist Light 112/130"
  usage: "Stor redaktionell sidtitel eller hero. Aldrig inne i komponenter."

fluid-display-04:
  small: "Geist Light 60/70"
  medium: "Geist Light 92/102"
  large: "Geist Light 112/130"
  max: "Geist Light 142/150"
  usage: "Maximal utställningsrubrik för sidans huvudintro. En per sida och endast när layouten ger den tillräckligt utrymme."
```

`fluid-paragraph-01` är borttagen ur breakpoint-exporten eftersom ingen implementerad komponent eller sida använder den. Den får inte återinföras utan ett konkret innehållsbehov.

---

## 6. Spacing och rytm

Använd den exporterade spacing-skalan konsekvent. För redaktionella sidsektioner ska luft prioriteras framför informationsdensitet. När en vy känns trång ska närliggande tokens skalas upp eller innehåll förenklas; skapa inte godtyckliga mellanvärden.

```yaml
spacing-00: 0px
spacing-04: 4px
spacing-06: 6px
spacing-08: 8px
spacing-12: 12px
spacing-16: 16px
spacing-20: 20px
spacing-24: 24px
spacing-32: 32px
```

Större redaktionell spacing får skapas genom multiplar av skalan, exempelvis 48, 64, 96 och 128 px. Den ska fortfarande uttryckas som en konsekvent rytm och anpassas responsivt.

Varje innehållssektion exponerar separata val för övre och nedre vertikal spacing: `large`, `medium` och `small`. `large` är komponentens befintliga responsiva standardmått, `medium` är exakt hälften av detta mått och `small` är 0. Top och bottom väljs oberoende genom `paddingTop` och `paddingBottom`; båda är `large` när inget annat anges. När två sektioner med samma surface ska upplevas som en sammanhållen komposition kan den första få `paddingBottom: small` och den andra `paddingTop: small`. Valen påverkar aldrig sidgridens horisontella marginaler eller gutters.

---

## 7. Radier, linjer och djup

```yaml
radius-00: 0px   # Fullbreddssektioner, bilder med rak dokumentär karaktär.
radius-04: 4px   # Små tags och diskreta detaljer.
radius-08: 8px   # Kompakta kontroller och mindre media.
radius-10: 10px
radius-12: 12px  # Standardkort och formulärfält när rundning behövs.
radius-14: 14px
radius-16: 16px  # Större fristående kort, sparsamt.
radius-99: 99px  # Pill-form för små kontroller, tags och vissa knappar. Aldrig stora innehållskort.
```

Avgränsa i första hand med spacing, färgyta eller en subtil 1 px-linje. Skuggor är inte ett standardverktyg och ska endast användas om ett lager faktiskt behöver visas ovanpå ett annat, exempelvis en dialog.

---

## 8. Responsiv layout

```yaml
breakpoints:
  small-min: 320px
  small-max: 767px
  medium-min: 768px
  medium-max: 1199px
  large-min: 1200px
  large-max: 1919px
  max-min: 1920px

page-grid:
  max-width: 1920px
  small:
    columns: 8
    margin: 16px
    gutter: 16px
  medium:
    columns: 8
    margin: 68px
    gutter: 16px
  large:
    columns: 12
    margin: 64px
    gutter: 24px
  max:
    columns: 12
    margin: 64px
    gutter: 24px
```

`.page-grid` är den gemensamma layoutgrunden för fulla redaktionella kompositioner, bildmontage och innehållslistor. Den maximala ytterbredden är 1920 px; vid 1920 px ger 64 px marginaler en faktisk gridyta på 1792 px. Ovanför maxbredden centreras griden. Den här centreringen uttrycks också av den härledda CSS-variabeln `--page-grid-offset`, så fullbleed-mönster kan följa samma kolumnlinjer utan att kopiera fasta Figma-paddingar. Längre läsning och fokuserade textflöden begränsas fortfarande med komponentens läsbredd inom valda kolumnspann. Fullbreddssektioner består alltid av en yttre surface och en separat inre grid.

Exempelsidan är design­systemets integrationsyta och ska endast komponera patterns som har migrerats till `.page-grid`. Sidans innehåll kan beskrivas i Markdown, men layoutbeslut ska stanna i komponenterna; artiklar, galleribilder och övriga delade poster refereras med stabila ID:n.

Gridfundamentet och en valbar debug-overlay finns i implementationen. Overlayn är ett utvecklingsverktyg och påverkar inte layout eller interaktion. `.page-grid` är det enda kolumnsystemet för sid- och sektionslayout. Innehåll placeras med kolumnspann och nästlad markup använder CSS `subgrid` när den måste följa samma linjer. Interna komponentgrids får organisera exempelvis formulär, listor och kontroller, men får inte återskapa sidgriden med lokala 8- eller 12-kolumnsdefinitioner.

`HeroSection`, `FullWidthFeatureSection`, `FeatureSection`, den gridanpassade `ImageSection`, `ImageCarousel`, `ImageGallery`, `LatestArticlesSection`, `TimelineSection`, `SiteNavbar` och `SiteFooter` använder den gemensamma sidgriden. Fullbleed-media får sträckas från sin yttre gridlinje till sidgridens kant, men dess inre kant ska alltid förankras i ett kolumnspann.

Katalogens `300px minmax(0, 1fr)` är ett utvecklingsskal för sidebar och preview, inte en del av produktens grid. Dölj sidebaren när en fullbreddssektion behöver kontrolleras mot viewportens riktiga breakpointbredd.

Katalogens egen innehållspresentation följer samma gridkontrakt som produkten: sidintroduktioner, foundations/components-ramar, specimen-rubriker, typografirader, specimen-samlingar och foundation-kort använder `.page-grid`, kolumnspann och `subgrid`. Toolbar och sidebar är katalog-chrome och undantas. Layouten som placerar flera komponentpreviews tillhör alltid katalogen och ska följa sidgriden; endast markupen inuti den renderade komponenten behåller komponentens godkända interna layout. Kataloggriden får aldrig skriva över komponentens interna design.

Katalogens `Examples` kombinerar färdiga komponenter och patterns till representativa sidor. Exempel får variera Light och Dark lokalt per sektion genom att sätta temats scope runt sektionen och därefter välja en av de fyra godkända bakgrundstokensen. De ska använda samma publika och CMS-vänliga kontrakt som en framtida produktionssida, inte kopiera komponenternas interna markup.

Designsystemets verifieringskatalog är en del av implementationens kvalitetsgrind. Ändringar av foundations, tokens, komponenter, varianter, states, responsivt beteende, sektionskontrakt eller sammansatta exempel ska uppdatera motsvarande vy under `Foundations`, `Components`, `Sections` eller `Examples` i samma ändring. Föråldrade exempel och avslutade migrationslägen ska tas bort direkt.

Landing page och Article page är isolerade sidexempel. Deras lokala `theme--light`- och `theme--dark`-scope har företräde framför designkatalogens globala testtema. Katalogens Light/Dark-toggle får därför inte ändra navbar, breadcrumb, artikelmetadata eller andra element inuti dessa exempel. Temaanknutna bildvarianter, inklusive monokrom logotyp, ska styras av en ärvd variabel från närmaste temascope och inte av en bred descendant-selector som kan träffa genom ett nästlat scope.

Breakpoint-lägena väljs automatiskt från viewportens bredd. Produktgränssnittet får inte exponera en manuell typografiväljare. Fluid typografi, sidgrid och responsiva patterns använder samma fyra gränser så att layout och typografi byter läge tillsammans.

Designa mobile-first. På små skärmar staplas kompositioner i läsordning och bilder får tillräcklig yta för att vara begripliga. Beskär aldrig ett montage så att dess avsikt eller text försvinner.

---

## 9. Logotyp

Jägersros logotyp består av symbol och ordbild och ska alltid användas i sin helhet. Separera inte symbolen från typografin och återskapa inte logotypen med vanlig text eller CSS.

Använd endast godkända svarta, vita eller färgsatta logotypfiler. Säkerställ tydlig kontrast mot bakgrunden och tillräcklig storlek för att den lätta linjevikten inte ska bli otydlig. Om symbolens form behövs som grafiskt motiv ska det godkända grafiska elementet användas, inte en beskuren logotyp.

---

## 10. Bildspråk och montage

Fotografi ska ha ett ärligt och naturligt uttryck. Prioritera dokumentära bilder, drönarvyer, människor i verkliga sammanhang, miljöer från området samt närbilder på material och detaljer. Undvik överregisserade situationer, generiska bostadsbilder och polerade framtidsbilder som kan misstolkas som nuläge.

Bildmontage är ett centralt identitetsgrepp. De produceras manuellt enligt den visuella guiden och laddas upp som färdiga PNG-filer. Webbgränssnittet ska visa dem som bildtillgångar och får inte försöka återskapa, dela upp eller slumpmässigt komponera montagen med CSS.

För varje montage ska CMS eller bilddata kunna ange alternativtext, bildförhållande, fokuspunkt och vid behov en synlig bildtext. Dekorativa montage får ha tom alternativtext. Informativa montage måste beskriva sin berättande funktion, inte varje dekorativ detalj.

När en PNG innehåller text ska motsvarande information också finnas som riktig HTML-text i närheten. Kritisk information får aldrig finnas enbart inbakad i bilden.

---

## 11. Grafiska element

### Stämpeln

Stämpeln är en föränderlig, öppen bana med “Jägersro” som konstant och ett kompletterande ord som beskriver platsen eller temat. Den är ett dekorativt eller förstärkande element, aldrig logotyp eller avsändare. Använd den sparsamt runt utvalda berättelser och säkerställ att texten förblir läsbar.

### Travbanan

Travbanans form kan fyllas med färg, fotografi och grafik, användas utfallande eller brytas upp i delar. Den ska skapa en avsiktlig dynamik mellan bild, grafik och färg. Repetera inte formen i varje sektion; se alltid till helheten så att motivet behåller sin kraft.

Grafiska identitetselement ska i första hand levereras som godkända SVG- eller bildtillgångar. Skapa inte approximativa versioner i CSS.

---

## 12. Ikoner och illustration

Jägersro webb använder [Phosphor Icons](https://phosphoricons.com/) som enda generella ikonbibliotek. I React används det officiella paketet `@phosphor-icons/react`. Ikoner ska vara enkla, funktionella och visuellt kompatibla med logotypens lätta linjer. Använd dem när de förbättrar förståelsen, inte för att fylla tom yta.

```yaml
icon-library:
  name: "Phosphor Icons"
  website: "https://phosphoricons.com/"
  react-package: "@phosphor-icons/react"
  default-weight: "light"    # För normal UI och redaktionella länkar; harmonierar med identitetens lätta linjer.
  compact-weight: "regular"  # Tillåten vid 16 px eller när Light blir för svag för tydlig avläsning.
  color: "currentColor"      # Ikonen ärver komponentens semantiska text- eller ikonfärg.
  sizes:
    small: 16px               # Inlineinformation och kompakta kontroller.
    medium: 20px              # Standardknappar och navigation.
    large: 24px               # Fristående handlingar eller tydligare visuell ledtråd.
```

Välj ikon efter betydelse, inte utseende. Samma handling ska använda samma ikon över hela produkten. `fill` får användas för ett tydligt valt eller aktivt tillstånd när färg och text inte ensamma räcker. `duotone`, `thin` och `bold` är inte standardvikter och kräver ett uttryckligt designskäl.

Importera endast de ikoner en komponent använder. Undvik namespace-import av hela biblioteket och dynamiska ikonuppslag som gör tillgänglighet, kodläsbarhet och paketering svårare att kontrollera.

En ikon får aldrig ersätta en textetikett för en kritisk eller ovanlig handling. Dekorativa ikoner ska döljas för hjälpmedel. En knapp med endast ikon måste ha ett tillgängligt namn, tydlig fokusmarkering och en välkänd funktion. Om handlingen behöver förklaras ska en synlig textetikett användas i stället för att förlita sig på tooltip.

Phosphor ersätter inte Jägersros logotyp, stämpel, travbana eller andra identitetsbärande grafiska tillgångar. Specialillustrationer och nya varumärkessymboler är separata designbeslut och får inte konstrueras genom att kombinera standardikoner.

---

## 13. Komponentprinciper

### Fullbreddssektioner

Använd den gemensamma `Section`-strukturen för större sidblock. Den yttre sektionen äger semantisk bakgrund och full bredd. Den inre containern äger maxbredd och spacing. Sektionen kan ha förrubrik, rubrik, introduktion, handling och innehåll, men ska inte dupliceras till en ny specialkomponent när samma mönster räcker.

### Hero section

`HeroSection` är ett fullbreddsmönster med varianterna `centered`, `left` och `split`. `centered` används för en fokuserad introduktion, `left` när sidans fortsatta läsordning ska börja tydligt från vänster och `split` när en stor displayrubrik ska balanseras mot förklarande text. Split-rubriken använder alltid `fluid-display-02`; centered och left använder `fluid-heading-06`. Alla varianter använder `.page-grid`; fasta inre paddingvärden från Figma får inte användas för att efterlikna kolumnlinjer.

På Small ligger innehållet över alla åtta kolumner. Från Medium använder `split` fem kolumner för rubriken och tre för brödtexten. Från Large blir fördelningen sju och fem kolumner. De två kolumnerna bottenjusteras enligt designen. `left` använder hela tillgängliga bredden på Small, en läsbredd upp till 658 px på Medium och sex gridkolumner från Large. `centered` centreras över sidgriden med responsiva läsbredder för rubrik och brödtext. Hero har 64 px vertikal spacing på Small, 80 px på Medium, skalar mellan 80 och 112 px genom Large och använder 120 px på Max. Vid viewportbredder över 1920 px förblir den 1920 px breda griden centrerad, inklusive det visualiserade 3300 px-läget.

Innehållet ska kunna komma direkt från CMS och skickas därför som serialiserbara data: `heading`, `body` och en valfri lista av `actions`. Varje action innehåller `label`, `href`, visuell variant och en begränsad semantisk ikonnyckel. Skicka inte färdig React-markup eller CMS-specifik rådata till pattern-komponenten. Ett separat mappningslager ska senare översätta CMS-svaret till detta kontrakt.

Hero är normalt sidans `h1`. I kataloger, previews eller sidor där en tidigare `h1` redan finns används `headingAs="h2"`. Bakgrunden begränsas till de fyra semantiska section-tokensen. CTA som navigerar renderas som länkar med knappens visuella komponent, inte som `button`.

### Full width feature section

`FullWidthFeatureSection` är en berättande fullbreddssektion med två oberoende presentationsval: `imagePosition="left" | "right"` och `imageFit="fit" | "fill"`. Det ger kombinationerna text/bild och bild/text med både inpassad och fyllande bild, utan fyra separata komponenter. På Small visas alltid texten först och bildfältet därefter, oavsett desktopvariant, så att läsordningen förblir konsekvent.

CMS-kontraktet består av `tagline`, `heading`, `body`, en valfri lista av `actions`, `image` med `src` och `alt`, samt `imagePosition` och `imageFit`. Bildmontage levereras som en manuellt producerad PNG och byggs inte upp av separata lager i gränssnittet. Informativa montage ska ha en kort alternativtext som beskriver montagets kommunikativa innehåll; rent dekorativa montage använder tom alternativtext.

Sektionen använder `fluid-heading-06`, `body-02` och `code-02` samt den befintliga Button-komponenten. På Small staplas text och bild med 16 px mellanrum och bilden är kvadratisk. Från Medium består sektionen av två lika breda fullbleed-paneler med sidgridens gutter mellan sig. Texten upptar fyra gridkolumner på Medium och fem gridkolumner, upp till 733 px, från Large; dess ytterkant följer alltid den gemensamma sidgriden och centreras därför korrekt även vid 3300 px. Textblocket centreras vertikalt med 64 px minsta luft ovan och under. `fit` visar hela bilden i ett kvadratiskt fält på högst 884 px, vänt mot mittengapet. `fill` låter bildpanelen följa sektionens fulla höjd och använder `cover`, vilket tillåter beskärning. Knappar får radbrytas när kolumnen blir för smal. Bakgrunden ligger fortsatt fullbredd och väljs endast bland de fyra semantiska section-tokensen.

### Feature section

`FeatureSection` är det gridbegränsade syskonet till full width feature. Den yttre ytan kan använda en av de fyra semantiska bakgrunderna, medan innehållet följer den gemensamma, centrerade sidgriden upp till 1920 px. De fem exemplen i Figma byggs med samma komponent: layoutlägena är `split`, `media` och `cta`; i `media` väljs bildens sida separat med `mediaPosition="left" | "right"`.

Innehållskontraktet är serialiserbart och består av valfri `tagline`, `heading`, `richText` och valfria `actions`. Rich text representeras tills CMS har valts av en liten blockmodell med `paragraph`, `bullet-list` och `columns`. Det gör att stycken, listor och underkolumner kan kombineras utan nya layoutvarianter. När CMS införs ska ett mappningslager översätta CMS-formatet till dessa block, eller ersätta blocktypen om editorns modell kräver det. Skicka aldrig färdig React-markup genom kontraktet.

Handlingar ligger utanför rich text eftersom CTA:er behöver ett tydligt strukturerat kontrakt för etikett, destination, hierarki och ikon. De återanvänder Button-komponenten och Phosphor Icons. `media` kräver i praktiken en `image`; ett framtida CMS-mappningslager ansvarar för validering innan datan når komponenten.

På Small staplas allt i läsordning: den sammanhållna textgruppen först och bilden därefter. Från Medium använder både `split` och `media` två lika gridhalvor: 4/4 kolumner på Medium och 6/6 på Large och Max. Bildens sida påverkar bara den visuella ordningen från Medium; den semantiska läsordningen förblir text före bild. Textgruppen centreras vertikalt i medialayouten. Bildfältet är 735 px högt på Small, 644 px på Medium och Large samt kvadratiskt på Max, och bilden visas med `contain`. Sektionen har 64 px vertikal spacing på Small, 80 px på Medium, skalar mellan 80 och 112 px genom Large och använder 120 px på Max. `fluid-heading-06` är standard för rubriken; paragrafblock och brödtext i kolumnblock använder `body-02`, medan listor behåller sin kompakta stil.

`cta` är den femte varianten. Från Medium ligger tagline, `fluid-heading-06` och `body-02` i vänster gridhalva, medan knappgruppen ligger högerjusterad och bottenlinjerad i den högra halvan. På Small blir läsordningen tagline, rubrik, brödtext och knappar; knapparna vänsterställs och får radbrytas. Varianten återanvänder samma innehålls- och actionkontrakt som övriga layouter och inför inga presentationsfält i CMS-datan utöver `layout="cta"`.

### Image och image section

Den återanvändbara `Image`-komponenten renderar CMS-bilder med obligatoriskt definierad alternativtext, valfria intrinsiska dimensioner, `cover` eller `contain`, responsiva `sizes` och lazy loading som standard. Sätt `priority` endast för bilder som verkligen ligger i sidans första synliga vy. Bildens layout, proportion och beskärningsyta ägs av den omgivande komponenten, inte av `Image`.

`ImageSection` visar dokumentära bilder i två layoutlägen. `layout="grid"` följer hela den gemensamma sidgriden upp till 1792 px bildbredd, medan `layout="full-width"` låter bilden gå kant till kant utan yttre spacing. Båda använder proportionen 1792:813 och `object-fit: cover`, så redaktionen måste välja material som tål den breda beskärningen.

Gridläget har 64 px vertikal spacing på Small, 80 px på Medium, skalar mellan 80 och 112 px genom Large och använder 120 px på Max. En valfri `caption` innehåller en kort etikett och en beskrivning. På Small staplas de med 16 px mellanrum; från Medium ligger de på samma rad och beskrivningen har högst 733 px läsbredd. Etiketten använder `label-03` och beskrivningen `label-02`. CMS-kontraktet består av `image` med `src`, `alt` och om möjligt `width` och `height`, `layout` samt valfri `caption`. Rent dekorativa bilder använder uttryckligen tom alternativtext.

### Image carousel

`ImageCarousel` används för en kuraterad följd av dokumentära bilder. Sektionens surface är fullbredd och sidobilderna får löpa utanför innehållsgridden, men fokusbilden centreras inom gridens innehållsyta och kontrollerna följer `.page-grid` exakt. Karusellens storlekar utgår från komponentens egen inline-bredd i stället för hela viewporten, så den behåller sina proportioner även i katalogen och andra inbäddade sammanhang.

En bild är i fokus åt gången, visas störst och är den enda som visar sin valfria bildtext. Alla karusellbilder visas i ett enhetligt liggande 3:2-format med `object-fit: cover`. På Max är fokusbilden högst 650 px hög och 975 px bred. Bilden direkt till vänster är högst 432 × 648 px och bilden direkt till höger högst 346 × 519 px. Samtliga storlekar skalar fluid nedåt på mindre breakpoints. Fokusytans reserverade höjd gör att sektionen förblir stabil under navigering. Fokusbilden har ingen skugga. På Small visas bara fokusbilden; kontrollerna ligger ovanför och en reserverad bildtextyta ligger direkt under bilden. Från Medium ligger bildtexten ovanpå fokusbildens nedre högra del.

CMS-kontraktet består av en lista med stabilt `id`, `image` och valfri `caption` (`label`, `title`, `body`). Pilar använder återanvändbar `IconButton` med Phosphor `CaretLeft` och `CaretRight`. Punkterna är riktiga knappar för direktval, vänster/höger piltangent byter bild och en dold live-region meddelar positionen.

Bildbytet använder stabila virtuella positioner runt fokusbilden. Samma bildelement flyttar mellan höger sidoläge, fokus och vänster sidoläge; den tidigare fokusbildens bredd och höjd minskar samtidigt som den flyttar åt sidan, medan den nya växer in i fokus. Nya loopbilder monteras först i ett osynligt yttre läge, så ingen synlig återställning av hela bildföljden behövs. Bildtextlägen finns kvar i DOM och tonas mellan tillstånden för att undvika blinkningar. Den lokala tillståndsrörelsen använder CSS transitions på numeriska mått och positioner; GSAP reserveras för tidslinjer och mer samordnade sekvens- eller scrollanimationer. Standardrörelsen är 700 ms med lugn in/ut-easing. Vid `prefers-reduced-motion` sker bytet omedelbart.

### Image gallery

`ImageGallery` är ett redaktionellt bildpattern för en levande men kontrollerad mosaik. Layouten upprepar en fast rytm om sex positioner med breda, kvadratiska och stående bildytor. CMS-kontraktet behöver därför bara innehålla en ordnad lista med stabilt `id`, `image` och valfri `caption`; redaktören ska inte komponera CSS-kolumner eller skicka layoutkod. Ytterytan använder en valbar surface och innehållet följer `.page-grid`.

På Small staplas bilderna i en förskjuten rytm över sex till åtta kolumner. På Medium bildar mindre och större bilder asymmetriska par över åttakolumnsgridden. På Large och Max använder mönstret 12 kolumner: positionerna fördelas 8/4, 4/8 och 7/5. Det ger varierad skala men behåller tydliga gemensamma kanter. Bilder beskärs med `cover` i patternet; helskärmsläget visar hela originalbilden med `contain`.

Varje bild är en riktig knapp med beskrivande label. Aktivering öppnar ett native `dialog` i helskärmsläge. Dialogen kan stängas med synlig stängknapp, Escape eller klick på bakgrunden. Vänster och höger piltangent samt märkta Phosphor-knappar bläddrar cirkulärt mellan bilderna. Bildnummer meddelas i en live-region, bakgrundssidan låses medan dialogen är öppen och fokus återgår till den aktiverande bilden när dialogen stängs. Den diskreta hover-zoomen och dialogens intoning stängs av vid `prefers-reduced-motion`.

### Latest articles

`LatestArticlesSection` listar de senaste redaktionella artiklarna med en tydlig huvudartikel följd av mindre kort. Den första posten i den sorterade listan är alltid featured; CMS ska därför leverera artiklarna i publiceringsordning och behöver inte skicka layoutvärden. Kontraktet består av `id`, `title`, `href`, `excerpt`, ISO-datum i `publishedAt`, lokaliserat `displayDate`, `image`, valfri `category` och vid behov `imageFit`. `cover` är standard; `contain` används för diagram eller annat material som inte får beskäras. Fältet `rows` väljer 2, 3 eller 4 redaktionella rader. Raderna följer den fasta artikelkapaciteten 1 + 3 + 2 + 1, vilket motsvarar högst 4, 6 eller 7 synliga artiklar; fler poster lämnas till den fullständiga artikellistan.

Sektionen följer `.page-grid`. På Small staplas artiklarna i läsordning och huvudartikelns text ligger under bilden. Från Medium läggs huvudartikelns textpanel ovanpå bildens nedre vänstra del, förankrad i fem av åtta kolumner. Den första gruppen bildar två kolumner; när den tredje artikeln hamnar ensam på nästa rad byter kortet till en horisontell 4/4-komposition. Nästa grupp varierar förskjutningen och dess ensamma slutkort använder samma horisontella princip med omvänd bildordning. På Large och Max ligger huvudartikeln över hela 12-kolumnsgridden med text i de första fem kolumnerna. Därefter växlar layouten mellan tre fyrakolumnskort och ett asymmetriskt 5/7-par följt av ett indraget, horisontellt tiokolumnskort. Small påverkas inte av den här regeln. Den sex positioner långa rytmen upprepas för längre listor utan att CMS behöver lagra layoutvärden.

Hela artikelkortet är en semantisk länk. Datum renderas med `time`, bilder går genom den gemensamma `Image`-komponenten och visuella hover-effekter är sekundära till tydlig fokusmarkering. Rubriker och utdrag får aldrig bära information som bara är tillgänglig genom hover. Demo-innehållet speglar de sju senaste posterna på Projekt Jägersros befintliga Aktuellt-sida, men produktionsimplementationen ska mappa samma kontrakt från det framtida CMS:et.

### Timeline

`TimelineSection` visar Projekt Jägersros genomförda, pågående och planerade milstolpar. En fristående introduktion ovanför tidslinjen ska byggas med `FeatureSection`, vanligtvis `Split / CTA`; tidslinjen duplicerar inte introduktionsmönstret. På desktop ska både listan, den valda markeringen och detaljinnehållet följa sina tilldelade gridkolumner utan extra horisontell inset. Det valda objektet har full opacitet, närmaste objekt före och efter har 75 %, nästa par har 50 % och övriga objekt är osynliga. Detta fokusmönster följer det valda objektet när listan förflyttas. CMS-kontraktet är en kronologiskt sorterad lista med stabilt `id`, `year`, `title`, `summary`, `status` (`completed`, `current`, `future`), valfri detaljrubrik, brödtext och länk samt en valfri bild med bildtext. CMS-data innehåller inga gridpositioner. Flerbildsläget är borttaget tills en separat komposition med förutsägbar höjd har formgivits och verifierats.

På Small och Medium visas händelserna i en horisontell scroll-yta ovanför detaljinnehållet. De två yttre navigationsspåren är 48 px breda, samma som ikonknapparnas träffyta, så kontrollerna alltid ryms innanför sidgriden. På Large visas en vertikal tidsaxel i gridens första fem kolumner och detaljytan i de sista sju. På Max blir listan en kolumn smalare och använder kolumn 1–4; kolumn 5 lämnas som redaktionell luft före detaljytan som fortsatt använder kolumn 6–12. Föregående pil ligger ovanför tidsaxeln och nästa pil under den, med en symmetrisk 36 px kantzon så att kontrollerna hör visuellt ihop med listan utan att överlappa posterna. Desktoplistan scrollas inte manuellt: klick, pilar eller tangentbord ändrar vald händelse och komponenten flyttar listan bakom en fast markeringsyta i mitten. Förflyttningen tar 520 ms med en lugn in/ut-easing och samordnas med opacitetsbytet; vid reducerad rörelse sker den omedelbart. Opaciteten styrs endast av listpostens avstånd från fokus: fokus är `1`, ett steg bort `0.75`, två steg bort `0.5` och längre bort `0`. Status som Genomfört, Pågår eller Planerat får inte skriva över den skalan. Den mörka markeringsytan ändrar därför aldrig vertikal position; aktiv rad centreras före målning och får inverterad text ovanpå ytan. Desktopsektionen är viewportstyrd och högst 900 px hög. Desktop-raderna är 120 px höga och sammanfattningen begränsas till en rad, så fem hela milstolpar normalt är synliga samtidigt. Detaljens text, handling och eventuella media behandlas som en sammanhållen grupp och centreras vertikalt i detaljkolumnen. Noll bilder ger en fokuserad textyta; en bild får en höjdbegränsad detaljyta. Bilden beskärs till 3:2 och bildtexten hör semantiskt till sin `figure`.

Händelserna implementeras som tabs med en tillhörande tabpanel. Klick, föregående/nästa-knappar, piltangenter samt Home och End kan ändra händelse. Pilarna blir inaktiva vid kronologins början och slut; tidslinjen loopar aldrig. Aktiv milstolpe annonseras i en live-region. Genomförda, pågående och framtida poster skiljs med textstatus och inte enbart färg. Detaljbytet tonas och förskjuts diskret; animationen tas bort vid `prefers-reduced-motion`.

### Navbar

`SiteNavbar` är den primära webbplatsnavigationen och tar serialiserbara site settings: `brand`, `links`, `searchAction` och en valfri `primaryAction`. Logotypen använder den godkända exporterade SVG-tillgången och får inte återskapas som text. Länkar och handlingar återanvänder Button-komponentens visuella varianter; sök-, meny- och stängikoner kommer från Phosphor Icons.

Navbarens stängda rad är 64 px hög i samtliga breakpoints och följer den gemensamma sidgriden. På Large och Max ligger logotypen från gridens första kolumn, huvudlänkarna centreras över kolumn 4–9 och sökknappen förankras i kolumn 11–12. På Small och Medium ersätts länkarna av en sekundär menyknapp med synlig etikett och Phosphor-ikon. Menyknappen använder `aria-expanded` och `aria-controls`, menyn stängs med Escape eller när en destination väljs och är stängd som standard.

Den öppna Small-menyn fyller minst återstående viewport under den 64 px höga raden. Navigationslänkarna ligger överst och sök- samt kontaktåtgärderna längst ned. Från Medium blir menyn 232 px hög: länkarna använder gridens första fyra kolumner och åtgärderna de sista fyra. Desktop visar ingen utfälld meny. Innehållskontraktet och DOM:s läsordning är oförändrade mellan lägena.

Figma visar generiska knappetiketter längst ned i Mobile-menyn. Produktimplementationen får inte använda platshållaren “Button”; etiketterna hämtas från `searchAction` och den valfria `primaryAction`. Den gamla `fixed-heading/heading-compact-01` som förekommer i Figma-referensen används inte, eftersom projektet uttryckligen har tagit bort fixed heading-stilar.

### Breadcrumb

`Breadcrumb` visar sidans plats i informationsarkitekturen med en ordnad lista. Alla tidigare nivåer är riktiga, synligt understrukna länkar. Den sista nivån är text utan länk, har `aria-current="page"` och använder sekundär textfärg så att klickbart och icke klickbart innehåll inte förväxlas. Snedstreck är dekorativa separatorer och döljs för hjälpmedel. Komponenten tar endast en ordnad lista med `label` och valfri `href`; sidmallen ansvarar för placeringen i `.page-grid`.

### Footer

`SiteFooter` tar serialiserbara site settings för `brand`, `navigation`, `newsletter`, `legalLinks` och `copyright`. Den godkända Jägersro-SVG:n återanvänds och skalas som det stora ordmärket. Nyhetsbrevsfältet återanvänder TextField med en visuellt dold men tillgänglig label; submit återanvänder Button. Formulärets verkliga endpoint och bekräftelseläge kopplas först när en prenumerationstjänst valts.

Footern följer den gemensamma sidgriden och låser därför sina kanter till samma kolumnlinjer som övriga sektioner. På Small är navigation, nyhetsbrevsformulär och juridiskt innehåll staplade; fält och knapp ligger på varsin rad. Från Medium blir navigationen, formulärraden och de juridiska länkarna horisontella, medan navigation och nyhetsbrev fortfarande ligger ovanför varandra med 64 px mellanrum. På Large och Max använder toppytan 12 kolumner: navigationen ligger i kolumn 1–6 och nyhetsbrevet i kolumn 7–12, högerställt med en maxbredd på 516 px. Det stora ordmärket använder hela gridbredden med proportionen 994:194.

Yttre vertikal padding är 64 px på Small, 80 px på Medium, fluid 80–112 px på Large och 120 px från 1920 px. Avståndet mellan toppytan och ordmärkes-/legalytan är 64 px på Small och Medium samt 112 px på Large och Max. Navigation och juridiska länkar får radbrytas när innehållet inte ryms, men behåller dokumentets läsordning. Alla juridiska länkar förblir vanliga, understrukna länkar.

Figma-referensens mobila copyright “© 2026 KODL” normaliseras till Projekt Jägersro. CaretDown-ikonen som ligger i e-postfältet på Small betraktas som ett designfel och används inte. `fixed-heading/heading-compact-02` ersätts av den stödda `body-01`.

### Article page

`ArticlePage` är den redaktionella undersidan under Aktuellt. Ordningen är Navbar, Breadcrumb, metadata, huvudbild, rubrik och ingress, artikelns rich text, relaterade artiklar och Footer. Huvudbilden följer hela sidgridden medan rubrik och löptext begränsas till en läsbredd på sex kolumner på Large och Max. På Medium används sex av åtta kolumner och på Small hela gridden. Relaterade artiklar återanvänder samma `ArticleCard` som `LatestArticlesSection`.

Sidinnehållet är serialiserbart och kommer i demoimplementationen från `article-page.md`. Kontraktet innehåller metadata, stabil bildreferens, rubrik, ingress, ordnade rich-text-block och stabila ID:n för relaterade artiklar. Navbar och Footer hämtas från samma gemensamma sidinställningar som landningssidan och dupliceras inte i artikeldatan.

### Knappar och länkar

Primär knapp används för sidans viktigaste nästa steg, ofta kontakt, deltagande eller en central fördjupning. Sekundär eller outline används för alternativ med lägre prioritet. Ghost används för lågmälda lokala handlingar. Om flera handlingar ser lika viktiga ut ska hierarkin lösas i innehållet innan fler knappstilar skapas.

Använd textlänk när handlingen navigerar i löpande eller redaktionellt innehåll. Använd knapp när handlingen ändrar tillstånd, skickar data eller behöver framstå som en central CTA. Etiketter ska beskriva destinationen eller resultatet, inte bara säga “Läs mer”.

Den återanvändbara `Button`-komponenten följer Figma-varianterna `primary`, `secondary`, `outline` och `text` samt storlekarna `large` (48 px), `medium` (40 px) och `small` (32 px). Den kan ha en dekorativ Phosphor-ikon till vänster eller höger om en synlig etikett. Hover, focus och active ska uppstå genom native interaktion och CSS-pseudoklasser; de får inte exponeras som manuella state-props i produktkod. Disabled sätts med det riktiga `disabled`-attributet.

### Select

Den återanvändbara `Select`-komponenten följer Figma-lägena Enable, Hover, Focus, Error och Disabled. Formen `default` använder Figma-fältets 4 px radie. Formen `rounded` använder full pilleradie och kan användas när select placeras intill rundade knappar eller kontroller. Interaktionstillstånd uppstår genom native select-beteende och CSS-pseudoklasser; Error anges med en förklarande feltext och Disabled med det riktiga `disabled`-attributet. Komponenten använder `CaretDown` från Phosphor Icons. Hjälptext är valfri och visas inte som standard. Synlig label är obligatorisk, och hjälp- eller feltext kopplas till kontrollen med `aria-describedby`.

Den öppna optionslistans exakta utseende styrs av användarens webbläsare och operativsystem. Behåll native select så länge produkten inte kräver funktion som motiverar en fullt specialbyggd listbox.

### Text field

Den återanvändbara `TextField`-komponenten använder native `input` och följer Figma-storlekarna `large` (48 px), `medium` (40 px) och `small` (32 px). Hover, focus och active kommer från riktig interaktion. Error anges med en förklarande feltext, Success med `success` och Disabled med det riktiga `disabled`-attributet. Error har företräde om både Error och Success råkar anges.

Synlig label är standard och obligatorisk i fristående formulär. `labelHidden` är endast tillåten i en sammansatt, tydligt rubricerad komponent som footerns nyhetsbrevsformulär; fältet behåller då en programmatisk label och får inte förlita sig enbart på placeholder. Hjälptext är valfri och visas inte som standard. Hjälp- och feltext kopplas till fältet med `aria-describedby`, och Error sätter `aria-invalid`. En dekorativ Phosphor-ikon kan skickas in som `suffixIcon`; komponenten låser inte textfältet till en viss symbol.

`TextField` visar ingen ikon som standard. Använd aldrig `CaretDown` i ett vanligt textfält eftersom den signalerar Select eller meny. Suffixikoner ska bara användas när deras funktion är tydlig, exempelvis visa/dölj lösenord, och behöver en separat interaktionsdesign om de är klickbara.

### Text area

Den återanvändbara `TextArea`-komponenten använder native `textarea`, har 144 px grundhöjd och kan ändras vertikalt med webbläsarens resize-kontroll. När `maxLength` anges visas aktuell teckenmängd tillsammans med gränsen i labelraden. Synlig label är obligatorisk och hjälptext är valfri.

Hover, focus och active kommer från riktig interaktion. Error anges med förklarande feltext, Warning med en tydlig varningstext och Disabled med det riktiga `disabled`-attributet. Error har företräde framför Warning. Hjälp-, varnings- och feltext kopplas med `aria-describedby`; Error sätter även `aria-invalid`. Statusikoner används inte innan en korrekt ikon och dess betydelse har definierats.

### Kort och listor

Kort används för innehåll som besökaren skannar och väljer mellan, exempelvis aktuella berättelser eller aktiviteter. Listor och redaktionella rader används när innehållet ska läsas sekventiellt eller jämföras. Om användaren förväntas läsa allt ska liststruktur väljas framför ett rutnät av kort.

Kort ska inte automatiskt få vit bakgrund, skugga och rundning. Börja med sidans surface, spacing och typografi; lägg endast till kant eller separat layer när kortet behöver en tydlig egen gräns.

### Navigation

Huvudnavigationen ska ge direkt åtkomst till Platsen, Aktuellt, Framtiden, Resan och Delta. Aktiv position ska vara synlig utan att enbart förlita sig på färg. På små skärmar ska navigeringen prioritera tydlig läsordning, stora träffytor och enkel stängning framför animation.

### Formulär och kontakt

Formulär ska använda synliga etiketter som inte försvinner när användaren skriver. Hjälptext placeras före ett fel uppstår; feltext placeras nära det berörda fältet och förklarar hur problemet löses. Fel visas med text, semantisk färg och vid behov ikon. Bekräftelse efter skickat formulär ska vara tydlig och beständig nog att uppfattas.

Använd `Select` och andra gemensamma kontrollkomponenter i stället för duplicerad rå markup. Native controls föredras när de möter behovet. Kontaktvägar ska vara tydliga men aldrig lova dialog eller svarstider som organisationen inte kan hålla.

### Tags och status

Tags beskriver kategori eller filtrering. Status visar ett faktiskt tillstånd. De får inte se identiska ut om betydelsen skiljer sig. Statusfärger är reserverade för status; identitetsfärger används för redaktionell kategorisering.

### Dialoger och drawers

Använd dialog endast för en avgränsad uppgift som kräver användarens fokus. Använd drawer för stödjande innehåll som filter eller lokal navigation när sidans sammanhang ska förbli synligt. Kritisk projektinformation, byggstatus eller kontaktuppgifter får inte gömmas bakom en dialog.

---

## 14. Innehåll och tonalitet

Skriv konkret, nyfiket och trovärdigt. Förklara stadsutveckling utan internt fackspråk. Skilj på vad som händer nu, vad som är beslutat och vad som fortfarande är en ambition. Rubriker får vara berättande men ska bära verklig information.

Datum, plats, påverkan och ansvar ska vara enkla att hitta i aktuella uppdateringar. Nästa steg ska vara specifikt: “Se hela tidslinjen”, “Hitta till aktiviteten” eller “Kontakta projektet” är bättre än generiska uppmaningar.

---

## 15. Tillgänglighet

Målet är WCAG 2.2 nivå AA. Semantisk HTML, korrekt rubrikhierarki och tangentbordsstöd är grundkrav. Synliga fokusmarkeringar ska fungera på alla surfaces och i båda teman. Interaktiva träffytor ska vara tillräckligt stora även när etiketten använder liten typografi.

Textkontrast ska testas för varje kombination av theme och section background. Bilder behöver relevant alternativtext; dekorativa bilder får tom alternativtext. Video ska ha textning och meningsfullt innehåll får inte kräva ljud. Animation och övergångar ska respektera `prefers-reduced-motion`.

---

## 16. Rörelse

GSAP är projektets animationsbibliotek och ScrollTrigger är standard för scrollbaserad rörelse. I React används den officiella `useGSAP`-hooken från `@gsap/react` för scope och automatisk cleanup. ScrollTrigger registreras en gång utanför renderflödet innan det används.

```yaml
motion-library:
  core: "gsap"
  scroll: "gsap/ScrollTrigger"
  react: "@gsap/react"
  smooth-scroll: "lenis (verification catalog shell)"
  default-scroll-mode: "discrete reveal"
  reduced-motion: "required"
  native-scroll: true
```

Rörelse ska stödja orientering, berättartempo och förståelse, inte skapa spektakel. ScrollTrigger passar särskilt för att stegvis introducera dokumentärt innehåll, visa progression i Resan och samordna bild, text och grafiska element när besökaren rör sig genom berättelsen. En animation ska alltid ha ett tydligt kommunikativt syfte; om innehållet är lika begripligt utan den och den inte förbättrar rytmen ska den utelämnas.

Verifieringskatalogens dokument använder Lenis som ett tunt lager ovanpå webbläsarens native scroll för mjuk hjulscroll och ankarnavigering. Det är katalogskalets scrolltransport, inte ett alternativt komponentanimationssystem. Katalogens separat scrollbar sidebar undantas, touch förblir native och `prefers-reduced-motion` stänger av utjämningen och gör programmatiska förflyttningar omedelbara.

### Val av rörelsemönster

Använd en diskret trigger med `toggleActions` för innehåll som ska spelas när det kommer in i vyn. Använd `scrub` endast när animationens progression har en direkt och begriplig relation till scrollpositionen, exempelvis en tidslinje eller en visuell förändring över en bestämd sträcka. Använd inte `scrub` och `toggleActions` på samma trigger.

Pinning är ett sällsynt redaktionellt grepp för en tydligt avgränsad berättelsesekvens. Pinna aldrig vanlig navigation, kritisk information eller långa textmassor bara för effekt. Animera innehåll inuti ett pinnat element, inte själva pin-elementet, så att ScrollTriggers positionsberäkning förblir stabil.

Korta, lokala tillstånd som hover, fokus och enklare öppning/stängning får fortsatt använda CSS transitions. GSAP används när rörelsen behöver en tidslinje, samordning, cleanup eller koppling till scroll. Blanda inte flera animationsbibliotek för samma typ av beteende.

### React och implementation

Varje animerad React-komponent ska avgränsa sina selektorer med en lokal ref och `useGSAP({ scope })`. Animationer, ScrollTriggers och efterhandsregistrerade callbacks ska städas upp när komponenten avmonteras eller uppdateras. Lägg ScrollTrigger på tidslinjen eller en top-level tween, aldrig på en child tween inuti en tidslinje.

CSS-klasser beskriver komponentens stabila visuella tillstånd. GSAP får tillfälligt skriva runtime-stilar för exempelvis `transform`, `autoAlpha` och `clip-path`, men React-komponenter ska inte använda `style`-props för att definiera animationen. Rensa tillfälliga egenskaper när CSS åter ska äga slutläget.

Utgå från synligt och användbart innehåll så att sidan fungerar om JavaScript eller animation saknas. Dölj inte viktigt innehåll permanent i start-CSS. ScrollTrigger ska uppdateras efter asynkrona layoutförändringar som påverkar triggerpositioner, exempelvis när bilder, typsnitt eller CMS-innehåll ändrar höjd.

### Responsivitet och reducerad rörelse

Använd `gsap.matchMedia()` för att skilja mellan responsiva rörelseupplägg och för att läsa `prefers-reduced-motion`. Vid reducerad rörelse ska scrollbundna förflyttningar, pinning, parallaxliknande djup och längre reveals tas bort. Innehållet ska visas direkt eller med en mycket kort, icke-rumslig övergång.

ScrollTrigger ska bygga på webbläsarens normala scroll. Implementera inte scroll-hijacking, tvingad snapping eller egen tröghet utan ett separat, uttryckligt design- och tillgänglighetsbeslut. Markers får användas under utveckling men ska aldrig finnas i produktion.

---

## 17. Implementation och styrning

Komponenter äger struktur och beteende; CSS-klasser äger presentation. Använd inte React `style`-props när en klass eller token kan uttrycka resultatet. Återkommande kontroller och mönster byggs som läsbara, återanvändbara komponenter.

Semantiska tokens ska genereras från `design-tokens/figma-export.json` till `src/generated/tokens.css`. Den genererade filen redigeras aldrig manuellt. Light och Dark är modes i samma system, inte separata visuella identiteter.

Råexporten innehåller äldre eller bortvalda tokens. Följande filtreras uttryckligen bort i applikationslagret:

```yaml
unsupported:
  group: "fixed-heading"
```

Nya tokens, komponentvarianter eller grafiska uttryck ska läggas till först när ett konkret innehålls- eller användarbehov finns. Varje komponent ska kontrolleras i Light och Dark, relevanta surfaces och aktuella responsiva lägen.

---

## 18. Öppna designbeslut

Följande områden behöver definieras när produkten kräver dem. De ska inte fyllas med generiska standarder i förväg:

```yaml
open-decisions:
  - "Exakta regler och tillgångar för logotypens minsta storlek och frizon."
  - "Godkända digitala SVG-varianter av stämpeln och travbanan."
  - "Bildformat, beskärningsförhållanden och CMS-fält per innehållstyp."
  - "Durationer, easing-tokens och en godkänd katalog av återanvändbara GSAP-rörelsemönster."
  - "Komponentregler för karta, tidslinje, event, sök och akut bygginformation när dessa funktioner prioriteras."
```

---

## 19. Explicit don'ts

```text
- Återskapa aldrig logotypen med vanlig text, CSS eller en fristående symbol.
- Använd aldrig fixed-heading-stilar eller fluid-paragraph-01.
- Hårdkoda inte färg, typografi, spacing eller radie när en godkänd token finns.
- Skapa inte bildmontage dynamiskt i gränssnittet; använd de manuellt producerade PNG-filerna.
- Lägg aldrig kritisk information enbart som text inuti en bild.
- Använd inte gradienter, glassmorphism eller dekorativa skuggor som standarduttryck.
- Använd inte parallax, autoplay-karuseller eller kontinuerlig dekorativ animation.
- Använd inte andra generella animationsbibliotek parallellt med GSAP.
- Använd inte ScrollTrigger för scroll-hijacking, tvingad snapping eller rörelse utan kommunikativ funktion.
- Låt aldrig en GSAP-animation göra innehåll otillgängligt när JavaScript, ScrollTrigger eller rörelse är avstängd.
- Använd inte tomatrött som generell dekorationsfärg eller som ersättning för semantisk felstatus.
- Använd aldrig statusfärg utan text eller annan begriplig signal.
- Gör inte varje innehållsblock till ett rundat, skuggat kort.
- Repetera inte stämpeln eller travbanans form i varje sektion.
- Använd inte överregisserade stockbilder eller framtidsrenderingar som kan uppfattas som nuläge.
- Presentera inte ambitioner som beslutade fakta.
- Dölj inte kritisk bygg-, påverkan- eller kontaktinformation bakom modaler, hover eller tooltips.
- Skapa inte flera konkurrerande primära CTA:er i samma vy.
- Byt inte fontmappning eller tokennamn utan ett uttryckligt designsystembeslut.
- Återinför inte Source Serif 4 eller font-serif utan ett uttryckligt designsystembeslut.
- Blanda inte Phosphor Icons med andra generella ikonbibliotek eller egenritade standardikoner.
- Använd inte enbart en ikon för en kritisk eller ovanlig handling.
- Skapa inte nya komponentvarianter när en befintlig komponent eller fullbreddssektion löser behovet.
```

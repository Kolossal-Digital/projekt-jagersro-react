import demolition from "../assets/carousel-demolition.png";
import horses from "../assets/carousel-horses.png";
import interior from "../assets/carousel-interior.png";
import jagersroStatues from "../assets/carousel-jagersro-statues.png";
import featureDummy from "../assets/full-width-feature-dummy.jpg";
import featureMontage from "../assets/full-width-feature-montage.png";
import jagersroAerial from "../assets/jagersro-aerial.png";
import articleFirstSpadtaget from "../assets/article-forsta-spadtaget.webp";
import articleGreenRule from "../assets/article-330300.webp";
import articleJagersromodellen from "../assets/article-jagersromodellen.webp";
import articleClimateStandard from "../assets/article-klimatstandard.webp";
import articleMobility from "../assets/article-mobilitet.webp";
import articleNewDistrict from "../assets/article-ny-stadsdel.webp";
import articleNowItStarts from "../assets/article-nu-borjar-det.webp";
import type { ImageAsset } from "../components/Image";
import type { ArticleSummary } from "../components/ArticleCard";
import type { ImageCarouselSlide } from "../patterns/ImageCarousel";
import type { ImageGalleryItem } from "../patterns/ImageGallery";
import type { TimelineItem } from "../patterns/TimelineSection";

export const demoImages = {
  aerial: {
    src: jagersroAerial,
    alt: "Flygbild över Jägersro travbana och det omgivande området.",
    width: 1024,
    height: 683,
  },
  montage: {
    src: featureMontage,
    alt: "Bildmontage med patinerad byggnadsdetalj och en kock som lägger upp en maträtt.",
  },
  featureDummy: {
    src: featureDummy,
    alt: "Jägersros logotyp i vitt mot en mörkgrön bakgrund.",
    width: 5157,
    height: 5157,
  },
  interior: {
    src: interior,
    alt: "En interiör på Jägersro under ombyggnad.",
    width: 2399,
    height: 2266,
  },
  statues: {
    src: jagersroStatues,
    alt: "Häststatyer framför Jägersros läktare.",
    width: 1175,
    height: 882,
  },
  demolition: {
    src: demolition,
    alt: "Arbete pågår vid en äldre byggnad på Jägersro.",
    width: 1694,
    height: 2540,
  },
  horses: {
    src: horses,
    alt: "Närbild av två hästar.",
    width: 2048,
    height: 1365,
  },
  futureAerial: {
    src: articleNewDistrict,
    alt: "Visualisering av den nya stadsdelen i Jägersro sedd ovanifrån.",
    width: 2000,
    height: 1334,
  },
  community: {
    src: articleFirstSpadtaget,
    alt: "Människor samlade vid starten för Jägersros nästa utvecklingsfas.",
    width: 2000,
    height: 1500,
  },
  greenPlan: {
    src: articleGreenRule,
    alt: "Illustrerad stadsplan med träd, gårdsrum och sammanhängande grönska.",
    width: 1935,
    height: 1139,
  },
  everydayMobility: {
    src: articleMobility,
    alt: "Workshop om hur vardagsresor och mobilitet kan utvecklas i Jägersro.",
    width: 2000,
    height: 1500,
  },
} satisfies Record<string, ImageAsset>;

export const demoAerialImage = demoImages.aerial;
export const demoMontageImage = demoImages.montage;

export const demoCarouselSlides: ImageCarouselSlide[] = [
  {
    id: "interior",
    image: {
      ...demoImages.interior,
    },
  },
  {
    id: "statues",
    image: {
      ...demoImages.statues,
    },
    caption: {
      label: "Fig 4.2",
      title: "Vad hände med statyn?",
      body: "Hästarna stod länge framför travbanans entré och blev en välbekant del av platsens vardag. Bilden dokumenterar ett ögonblick i övergången mellan det gamla Jägersro och den stadsdel som nu tar form.",
    },
  },
  {
    id: "demolition",
    image: {
      ...demoImages.demolition,
    },
    caption: {
      label: "Fig 4.3",
      title: "Platsen förändras",
      body: "Rivning och återbruk blir synliga lager i berättelsen om områdets utveckling.",
    },
  },
  {
    id: "horses",
    image: {
      ...demoImages.horses,
    },
  },
];

export const demoGalleryItems: ImageGalleryItem[] = [
  {
    id: "gallery-aerial",
    image: demoImages.aerial,
    caption: "Jägersro sett ovanifrån – en plats i stor skala och ständig förändring.",
  },
  {
    id: "gallery-statues",
    image: demoImages.statues,
    caption: "Häststatyerna framför läktaren har blivit en del av platsens kollektiva minne.",
  },
  {
    id: "gallery-demolition",
    image: demoImages.demolition,
    caption: "Rivning, återbruk och nya mellanrum gör omvandlingen synlig.",
  },
  {
    id: "gallery-horses",
    image: demoImages.horses,
    caption: "Travets vardag lever kvar i människor, rörelser och nära detaljer.",
  },
  {
    id: "gallery-interior",
    image: demoImages.interior,
    caption: "Interiörer dokumenteras innan deras funktion och uttryck förändras.",
  },
  {
    id: "gallery-montage",
    image: demoImages.montage,
    caption: "Ett manuellt montage där material, mat och framtida berättelser möts.",
  },
];

export const demoLatestArticles: ArticleSummary[] = [
  {
    id: "first-spadtaget",
    title: "Första spadtaget till hästarnas favoritbana",
    href: "/aktuellt/forsta-spadtaget-till-hastarnas-favoritbana/",
    excerpt:
      "Det första spadtaget markerar starten för den nya travbanan på Husiefältet och samtidigt nästa fas för Projekt Jägersro.",
    publishedAt: "2025-03-18",
    displayDate: "18 mars 2025",
    category: "Aktuellt",
    image: {
      src: articleFirstSpadtaget,
      alt: "Deltagare vid det första spadtaget för den nya travbanan.",
      width: 2000,
      height: 1500,
    },
  },
  {
    id: "now-it-starts",
    title: "Nu börjar det – på riktigt!",
    href: "https://projektjagersro.se/nu-borjar-det-pa-riktigt/",
    excerpt:
      "Marköverlåtelsen är klar. Nu går projektet från långsiktig vision till konkret planering av den nya stadsdelen.",
    publishedAt: "2025-02-04",
    displayDate: "4 februari 2025",
    category: "Aktuellt",
    image: {
      src: articleNowItStarts,
      alt: "Flygbild över Jägersro travbana och den omgivande staden.",
      width: 2000,
      height: 1334,
    },
  },
  {
    id: "new-district-step",
    title: "Ytterligare ett steg mot en ny stadsdel i Jägersro",
    href: "https://projektjagersro.se/ytterligare-ett-steg-mot-en-ny-stadsdel-i-jagersro/",
    excerpt:
      "Samrådsunderlaget för den fördjupade översiktsplanen har godkänts och skickats vidare i den kommunala processen.",
    publishedAt: "2024-05-29",
    displayDate: "29 maj 2024",
    category: "Aktuellt",
    image: {
      src: articleNewDistrict,
      alt: "Flygbild över Jägersro och Malmö med Öresundsbron i bakgrunden.",
      width: 2000,
      height: 1334,
    },
  },
  {
    id: "jagersro-model",
    title: "Jägersromodellen – ett unikt verktyg som mäter en stadsdels totala klimatpåverkan",
    href: "https://projektjagersro.se/jagersromodellen-ett-unikt-verktyg-som-mater-en-stadsdels-totala-klimatpaverkan/",
    excerpt:
      "Jägersromodellen gör stadsdelens klimatpåverkan mätbar och hjälper projektets aktörer att styra mot en gemensam klimatbudget.",
    publishedAt: "2024-01-15",
    displayDate: "15 januari 2024",
    category: "Aktuellt",
    imageFit: "contain",
    image: {
      src: articleJagersromodellen,
      alt: "Infografik över de delar som ingår i Jägersromodellens klimatbudget.",
      width: 2000,
      height: 1125,
    },
  },
  {
    id: "green-rule",
    title: "Så räknar vi med 3-30-300-regeln: en formel för en mer hållbar stadsdel",
    href: "https://projektjagersro.se/sa-raknar-vi-med-3-30-300-regeln-en-formel-for-en-mer-hallbar-stadsdel/",
    excerpt:
      "3-30-300-regeln används som riktlinje för fler träd, större krontäckning och närhet till grönområden i planeringen.",
    publishedAt: "2023-06-09",
    displayDate: "9 juni 2023",
    category: "Aktuellt",
    image: {
      src: articleGreenRule,
      alt: "Illustrerad stadsplan med färgkodade träd och gröna gårdsrum.",
      width: 1935,
      height: 1139,
    },
  },
  {
    id: "climate-standard",
    title: "Projekt Jägersro vill sätta ny standard för att mäta klimatpåverkan",
    href: "https://projektjagersro.se/projekt-jagersro-vill-satta-ny-standard-for-att-mata-klimatpaverkan/",
    excerpt:
      "Projektet vill bidra till en gemensam vetenskaplig standard för att följa och jämföra stadsdelars klimatpåverkan över tid.",
    publishedAt: "2023-03-09",
    displayDate: "9 mars 2023",
    category: "Aktuellt",
    imageFit: "contain",
    image: {
      src: articleClimateStandard,
      alt: "Infografik som visar en tidslinje mot en klimatneutral stadsdel.",
      width: 2374,
      height: 1328,
    },
  },
  {
    id: "mobility-workshop",
    title: "Kan vi bidra till ett mobilitetsbeteende som räddar planeten?",
    href: "https://projektjagersro.se/kan-vi-bidra-till-ett-mobilitetsbeteende-som-raddar-planeten/",
    excerpt:
      "En samverkansworkshop undersökte hur stadsdelens utformning kan göra hållbara resor enklare och påverka framtida mobilitetsvanor.",
    publishedAt: "2023-02-21",
    displayDate: "21 februari 2023",
    category: "Aktuellt",
    image: {
      src: articleMobility,
      alt: "En deltagare antecknar på en karta under en workshop om framtidens mobilitet.",
      width: 2000,
      height: 1500,
    },
  },
];

export const demoArticleArchive: ArticleSummary[] = [
  ...demoLatestArticles,
  {
    ...demoLatestArticles[1],
    id: "dialogue-shapes-jagersro",
    title: "Dialogen som formar framtidens Jägersro",
    href: "#article-page",
    excerpt:
      "Samtal med boende, föreningar och verksamheter ger fler perspektiv på hur den framtida stadsdelen kan utvecklas.",
    publishedAt: "2022-11-24",
    displayDate: "24 november 2022",
    category: "På platsen",
  },
  {
    ...demoLatestArticles[0],
    id: "preserving-place-stories",
    title: "Så tar vi vara på platsens berättelser",
    href: "#article-page",
    excerpt:
      "Jägersros historia dokumenteras tillsammans med människorna som har arbetat, tävlat och mötts på platsen.",
    publishedAt: "2022-09-15",
    displayDate: "15 september 2022",
    category: "Berättelser",
  },
  {
    ...demoLatestArticles[4],
    id: "green-links",
    title: "Grönska som binder samman den nya stadsdelen",
    href: "#article-page",
    excerpt:
      "Parker, gårdar och gröna stråk planeras som en sammanhängande struktur för vardagsliv, biologisk mångfald och bättre klimat.",
    publishedAt: "2022-06-03",
    displayDate: "3 juni 2022",
    category: "Jägersromodellen",
  },
  {
    ...demoLatestArticles[2],
    id: "from-idea-to-plan",
    title: "Från idé till fördjupad översiktsplan",
    href: "#article-page",
    excerpt:
      "Den långsiktiga visionen blir stegvis mer konkret genom analyser, dialog och kommunal planering.",
    publishedAt: "2022-03-18",
    displayDate: "18 mars 2022",
    category: "Planprocessen",
  },
  {
    ...demoLatestArticles[6],
    id: "jagersro-in-motion",
    title: "Jägersro i rörelse – samtal om framtidens mobilitet",
    href: "#article-page",
    excerpt:
      "Hur människor tar sig till, från och genom området är en central fråga när den nya stadsdelen formas.",
    publishedAt: "2021-12-02",
    displayDate: "2 december 2021",
    category: "Labbet",
  },
  {
    ...demoLatestArticles[5],
    id: "shared-climate-work",
    title: "Ett gemensamt klimatarbete för hela stadsdelen",
    href: "#article-page",
    excerpt:
      "Projektets aktörer samlar mål och mätmetoder i ett gemensamt arbete för att minska stadsdelens totala klimatpåverkan.",
    publishedAt: "2021-09-10",
    displayDate: "10 september 2021",
    category: "Jägersromodellen",
  },
];

export const demoTimelineItems: TimelineItem[] = [
  {
    id: "agreement",
    year: "2017",
    title: "Avtal tecknas",
    summary: "Ett första avtal öppnar för platsens nästa kapitel.",
    status: "completed",
    detail: {
      body: "Skånska Travsällskapet och MKB tecknar avtal om försäljningen av den nuvarande travbanan. Det blir startpunkten för ett långsiktigt arbete med både travets framtid och en ny stadsdel.",
    },
  },
  {
    id: "early-studies",
    year: "2018",
    title: "Tidiga studier inleds",
    summary: "Platsens förutsättningar, historia och samband kartläggs.",
    status: "completed",
    detail: {
      heading: "Kunskap före färdiga svar",
      body: "De första studierna samlar kunskap om marken, trafiken, grönstrukturen och de verksamheter som redan finns på platsen. Underlaget hjälper projektet att formulera rätt frågor inför nästa steg.",
    },
  },
  {
    id: "partnership",
    year: "2019",
    title: "SMT formas",
    summary: "MKB, Skanska och Tornet samlas kring utvecklingen.",
    status: "completed",
    detail: {
      heading: "Ett gemensamt ansvar för helheten",
      body: "Samarbetet skapar en gemensam plattform för att undersöka hur området kan utvecklas socialt, ekologiskt och ekonomiskt över lång tid.",
    },
    media: {
      image: demoImages.aerial,
      caption: "Jägersro före omvandlingen, sett ovanifrån.",
    },
  },
  {
    id: "dialogue-starts",
    year: "2020",
    title: "Dialogen breddas",
    summary: "Fler röster bjuds in till samtalet om Jägersros framtid.",
    status: "completed",
    detail: {
      body: "Boende, verksamheter och andra aktörer bidrar med erfarenheter av platsen. Samtalen synliggör vardagsvärden som behöver följa med in i den fortsatta utvecklingen.",
    },
  },
  {
    id: "planning",
    year: "2021",
    title: "Parallella uppdrag",
    summary: "Flera team prövar idéer för områdets struktur.",
    status: "completed",
    detail: {
      heading: "Många perspektiv på samma plats",
      body: "Genom parallella uppdrag prövas olika principer för stadsrum, grönska, mobilitet och bevarande. Resultaten bildar ett kunskapsunderlag för den fortsatta planeringen.",
      link: { label: "Läs om Jägersromodellen", href: "#latest-articles" },
    },
    media: {
      image: demoImages.montage,
      caption: "Ett montage som samlar material, vardag och framtida möjligheter.",
    },
  },
  {
    id: "overview-plan",
    year: "2022",
    title: "Fördjupad översiktsplan",
    summary: "Riktningen för framtidens Jägersro blir tydligare.",
    status: "completed",
    detail: {
      heading: "Från handelsplats till blandad stadsdel",
      body: "Den fördjupade översiktsplanen visar hur Jägersro kan utvecklas med bostäder, arbetsplatser, service och nya offentliga rum – samtidigt som platsens historia fortsätter vara läsbar.",
      link: { label: "Fördjupa dig i planen", href: "#article-page" },
    },
    media: {
      image: demoImages.statues,
      caption: "Häststatyerna och läktaren är välkända lager i platsens identitet.",
    },
  },
  {
    id: "climate-model",
    year: "2023",
    title: "Jägersromodellen prövas",
    summary: "Stadsdelens samlade klimatpåverkan börjar mätas.",
    status: "completed",
    detail: {
      heading: "Ett gemensamt verktyg för klimatbeslut",
      body: "Jägersromodellen gör det möjligt att följa klimatpåverkan från byggnader, mobilitet, energi och markanvändning i en gemensam struktur.",
      link: { label: "Läs om modellen", href: "#latest-articles" },
    },
  },
  {
    id: "consultation",
    year: "2024",
    title: "Samråd och fortsatt bearbetning",
    summary: "Planeringsunderlaget prövas mot fler perspektiv.",
    status: "completed",
    detail: {
      body: "Synpunkter från samrådet bearbetas och vägs samman med tekniska utredningar. Förslagen justeras för att bättre möta platsens långsiktiga behov.",
    },
  },
  {
    id: "detailed-plan",
    year: "2025",
    title: "Detaljplanearbetet påbörjas",
    summary: "Planens principer översätts till genomförbara kvarter.",
    status: "current",
    detail: {
      heading: "Nu formas nästa nivå av staden",
      body: "Detaljplanearbetet preciserar gator, parker, kvarter och funktioner. Dialog och dokumentation fortsätter medan förslagen prövas och utvecklas.",
      link: { label: "Följ det senaste", href: "#latest-articles" },
    },
    media: {
      image: demoImages.demolition,
      caption: "Förändringen blir fysisk och synlig på platsen.",
    },
  },
  {
    id: "jagersro-lab",
    year: "2026",
    title: "Jägersrolabbet öppnar för nya samtal",
    summary: "Idéer, lokal kunskap och tidiga förslag möts på platsen.",
    status: "future",
    detail: {
      heading: "En öppen plats för frågor och perspektiv",
      body: "Labbet planeras som en mötesplats där utvecklingen kan följas, diskuteras och dokumenteras. Innehållet förändras i takt med projektets olika skeden.",
      link: { label: "Läs om labbet", href: "#labbet" },
    },
    media: {
      image: demoImages.interior,
      caption: "En framtida mötesplats växer fram i takt med projektet.",
    },
  },
  {
    id: "public-space-design",
    year: "2027",
    title: "Gator, parker och mötesplatser projekteras",
    summary: "De offentliga rummens funktion och karaktär preciseras.",
    status: "future",
    detail: {
      body: "Projekteringen fördjupar hur människor ska röra sig, mötas och vistas i den första etappen. Grönska, dagvatten och mobilitet behandlas som delar av samma helhet.",
    },
  },
  {
    id: "construction",
    year: "2028",
    title: "Byggstart första etappen",
    summary: "De första nya kvarteren börjar ta form.",
    status: "future",
    detail: {
      body: "Den första etappen planeras bli startpunkten för genomförandet. Exakt innehåll och tidplan utvecklas i takt med att detaljplanering och projektering går vidare.",
    },
  },
  {
    id: "first-buildings",
    year: "2029",
    title: "De första byggnaderna tar form",
    summary: "Kvarter, stråk och offentliga rum blir synliga.",
    status: "future",
    detail: {
      heading: "Planeringen blir en fysisk miljö",
      body: "När stommar, fasader och landskap växer fram går det att läsa den nya stadsdelens skala och samband direkt på platsen.",
    },
  },
  {
    id: "moving-in",
    year: "2030",
    title: "Inflyttning första etappen",
    summary: "Jägersros nya vardag tar sin början.",
    status: "future",
    detail: {
      heading: "En ny stadsdel börjar leva",
      body: "När de första boende och verksamheterna flyttar in går projektet in i en ny fas. Tidslinjen fortsätter att fyllas på när visioner blir vardag och nya berättelser uppstår.",
    },
    media: {
      image: demoImages.aerial,
      caption: "Den framtida stadsdelen växer fram stegvis och följs över tid.",
    },
  },
  {
    id: "next-stage",
    year: "2032",
    title: "Nästa etapp tar vid",
    summary: "Erfarenheter från den första etappen formar fortsättningen.",
    status: "future",
    detail: {
      body: "Projektet fortsätter stegvis. Lärdomar från genomförande och tidig användning kan då påverka kommande kvarter, mötesplatser och funktioner.",
    },
  },
];

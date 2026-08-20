import type { MarkdownField } from "./SectionMarkdownDocs";

const themes = "light | dark";
const backgrounds =
  "background | background-accent-01 | background-accent-02 | background-accent-03";
const headingColors =
  "text-primary | text-secondary | text-accent-01 | text-accent-02 | text-placeholder";
const spacing = "large | medium | small";

function baseFields(type: string): MarkdownField[] {
  return [
    {
      field: "key",
      type: "unik sträng",
      required: "Ja",
      description: "Stabil och unik nyckel för sektionen.",
    },
    {
      field: "type",
      type,
      required: "Ja",
      description: "Väljer sektionens renderer.",
    },
    {
      field: "theme",
      type: themes,
      required: "Ja",
      description: "Sätter sektionens lokala temaläge.",
    },
    {
      field: "background",
      type: backgrounds,
      required: "Ja",
      description: "Sektionens semantiska bakgrund.",
    },
  ];
}

const sectionFields: MarkdownField[] = [
  {
    field: "id",
    type: "sträng",
    required: "Nej",
    description: "Ankarmål utan #.",
  },
  {
    field: "paddingTop",
    type: spacing,
    required: "Nej",
    description: "Standard: large.",
  },
  {
    field: "paddingBottom",
    type: spacing,
    required: "Nej",
    description: "Standard: large.",
  },
];

const headingColorField: MarkdownField = {
  field: "headingColor",
  type: headingColors,
  required: "Nej",
  description: "Standard: text-primary. Påverkar endast rubriker.",
};

const balanceHeadingField: MarkdownField = {
  field: "balanceHeading",
  type: "boolean",
  required: "Nej",
  description:
    "Standard: true. Sätt false för att stänga av text-wrap: balance på sektionens rubriker.",
};

const cardBackgroundField: MarkdownField = {
  field: "cardBackground",
  type: backgrounds,
  required: "Nej",
  description:
    "Standard: background-accent-01. Används av både featured-panelen och standardkortens textytor.",
};

const actionFields: MarkdownField[] = [
  {
    field: "content.actions",
    type: "lista",
    required: "Nej",
    description: "Noll eller flera CTA:er.",
  },
  {
    field: "content.actions[].label",
    type: "sträng",
    required: "Ja",
    description: "Synlig och beskrivande knapptext.",
  },
  {
    field: "content.actions[].href",
    type: "sträng",
    required: "Ja",
    description: "Ankare eller URL.",
  },
  {
    field: "content.actions[].variant",
    type: "primary | outline",
    required: "Nej",
    description: "Standard: primary.",
  },
  {
    field: "content.actions[].icon",
    type: "arrow-right | arrow-down",
    required: "Nej",
    description: "Lägger till en godkänd riktningspil.",
  },
];

export const heroMarkdownFields: MarkdownField[] = [
  ...baseFields("hero"),
  headingColorField,
  balanceHeadingField,
  ...sectionFields,
  {
    field: "variant",
    type: "centered | left | split",
    required: "Ja",
    description: "Väljer den godkända Hero-kompositionen.",
  },
  {
    field: "headingAs",
    type: "h1 | h2",
    required: "Nej",
    description: "Standard: h1. Använd h2 när sidan redan har en h1.",
  },
  {
    field: "bodyVariant",
    type: "body-01 | body-02",
    required: "Nej",
    description: "Standard: body-02.",
  },
  {
    field: "content.heading",
    type: "sträng",
    required: "Ja",
    description: "Sektionens rubrik.",
  },
  {
    field: "content.body",
    type: "sträng",
    required: "Ja",
    description: "Förklarande brödtext.",
  },
  ...actionFields,
];

export const fullWidthFeatureMarkdownFields: MarkdownField[] = [
  ...baseFields("full-width-feature"),
  headingColorField,
  balanceHeadingField,
  ...sectionFields,
  {
    field: "image",
    type: "registrerad bildnyckel",
    required: "Ja",
    description: "Exempel: featureDummy eller montage.",
  },
  {
    field: "imagePosition",
    type: "left | right",
    required: "Nej",
    description: "Standard: right.",
  },
  {
    field: "imageFit",
    type: "fit | fill",
    required: "Nej",
    description: "Standard: fit. Fill beskär bilden med cover.",
  },
  {
    field: "content.tagline",
    type: "sträng",
    required: "Nej",
    description: "Kort förrubrik.",
  },
  {
    field: "content.heading",
    type: "sträng",
    required: "Ja",
    description: "Sektionens rubrik.",
  },
  {
    field: "content.body",
    type: "sträng",
    required: "Ja",
    description: "Sektionens brödtext.",
  },
  ...actionFields,
];

export const featureMarkdownFields: MarkdownField[] = [
  ...baseFields("feature"),
  headingColorField,
  balanceHeadingField,
  ...sectionFields,
  {
    field: "layout",
    type: "split | media | cta | centered",
    required: "Ja",
    description: "Väljer sektionens komposition.",
  },
  {
    field: "mediaFit",
    type: "contain | cover",
    required: "Nej",
    description: "Standard: contain. Cover använder en beskuren 4:3-yta.",
  },
  {
    field: "mediaPosition",
    type: "left | right",
    required: "Nej",
    description: "Standard: right. Används endast med layout: media.",
  },
  {
    field: "image",
    type: "registrerad bildnyckel",
    required: "Villkorligt",
    description: "Krävs i praktiken med layout: media.",
  },
  {
    field: "headingVariant",
    type: "fluid-heading-05 | fluid-heading-06",
    required: "Nej",
    description: "Standard: fluid-heading-06.",
  },
  {
    field: "align",
    type: "start | end",
    required: "Nej",
    description: "Standard: start. Vertikal justering i relevanta splitlägen.",
  },
  {
    field: "content.tagline",
    type: "sträng",
    required: "Nej",
    description: "Kort förrubrik.",
  },
  {
    field: "content.heading",
    type: "sträng",
    required: "Ja",
    description: "Sektionens rubrik.",
  },
  {
    field: "content.richText",
    type: "lista med block",
    required: "Ja",
    description:
      "Ordnad lista av paragraph, bullet-list, numbered-list, definition-list eller columns.",
  },
  {
    field: "content.richText[].type",
    type: "paragraph | bullet-list | numbered-list | definition-list | columns",
    required: "Ja",
    description: "Väljer rich-text-blockets form.",
  },
  {
    field: "content.richText[].text",
    type: "sträng",
    required: "Villkorligt",
    description: "Krävs för paragraph.",
  },
  {
    field: "content.richText[].items",
    type: "sträng[]",
    required: "Villkorligt",
    description: "Krävs för bullet-list eller numbered-list.",
  },
  {
    field: "content.richText[].items[].heading",
    type: "sträng",
    required: "Villkorligt",
    description: "Krävs per objekt i columns eller definition-list.",
  },
  {
    field: "content.richText[].items[].body",
    type: "sträng",
    required: "Villkorligt",
    description: "Krävs per objekt i columns eller definition-list.",
  },
  ...actionFields,
];

export const iconListMarkdownFields: MarkdownField[] = [
  ...baseFields("icon-list"),
  headingColorField,
  balanceHeadingField,
  ...sectionFields,
  {
    field: "heading",
    type: "sträng",
    required: "Ja",
    description: "Sektionens rubrik.",
  },
  {
    field: "items",
    type: "lista",
    required: "Ja",
    description: "Två till tio korta, tematiska objekt i läsordning.",
  },
  {
    field: "items[].id",
    type: "unik sträng",
    required: "Ja",
    description: "Stabil identitet för objektet.",
  },
  {
    field: "items[].icon",
    type: "hammer | buildings | tree | handshake | binoculars",
    required: "Ja",
    description: "Ikon från sektionens kontrollerade register.",
  },
  {
    field: "items[].text",
    type: "sträng",
    required: "Ja",
    description: "Kort, självständig beskrivning.",
  },
];

export const imageSectionMarkdownFields: MarkdownField[] = [
  ...baseFields("image").filter(({ field }) => field !== "background"),
  {
    field: "background",
    type: backgrounds,
    required: "Ja",
    description:
      "Bakåtkompatibel enfärgad fallback om någon av de två ytorna saknas.",
  },
  {
    field: "backgroundTop",
    type: backgrounds,
    required: "Nej",
    description: "Övre tredjedelen. Standard: background.",
  },
  {
    field: "backgroundBottom",
    type: backgrounds,
    required: "Nej",
    description: "Undre två tredjedelarna. Standard: background.",
  },
  {
    field: "backgroundTopTheme",
    type: themes,
    required: "Nej",
    description: "Valfritt lokalt temaläge för den övre ytan.",
  },
  {
    field: "backgroundBottomTheme",
    type: themes,
    required: "Nej",
    description: "Valfritt lokalt temaläge för den undre ytan.",
  },
  ...sectionFields,
  {
    field: "variant",
    type: "grid | full-width | full-width-scroll",
    required: "Nej",
    description:
      "Standard: grid. full-width-scroll beskär bilden till högst 800 px och panorerar den vid scroll. Använd inte det äldre fältet layout.",
  },
  {
    field: "image",
    type: "registrerad bildnyckel",
    required: "Ja",
    description: "Exempel: aerial.",
  },
  {
    field: "priority",
    type: "boolean",
    required: "Nej",
    description: "Standard: false. Endast för bilder i första synliga vyn.",
  },
  {
    field: "caption.label",
    type: "sträng",
    required: "Villkorligt",
    description: "Krävs om caption används.",
  },
  {
    field: "caption.description",
    type: "sträng",
    required: "Villkorligt",
    description: "Krävs om caption används.",
  },
];

export const carouselMarkdownFields: MarkdownField[] = [
  ...baseFields("carousel"),
  ...sectionFields,
  {
    field: "ariaLabel",
    type: "sträng",
    required: "Nej",
    description: "Standard: Bildkarusell. Beskriver innehållet för hjälpmedel.",
  },
  {
    field: "initialIndex",
    type: "heltal från 0",
    required: "Nej",
    description: "Standard: 0. Klampas till närmaste giltiga index.",
  },
  {
    field: "slides",
    type: "lista",
    required: "Ja",
    description: "Minst en bildruta i visningsordning.",
  },
  {
    field: "slides[].id",
    type: "unik sträng",
    required: "Ja",
    description: "Bildrutans stabila identitet.",
  },
  {
    field: "slides[].image",
    type: "registrerad bildnyckel",
    required: "Ja",
    description: "Exempel: interior, statues, demolition eller horses.",
  },
  {
    field: "slides[].caption.label",
    type: "sträng",
    required: "Nej",
    description: "Kort figur- eller kategorietikett.",
  },
  {
    field: "slides[].caption.title",
    type: "sträng",
    required: "Nej",
    description: "Bildtextens titel.",
  },
  {
    field: "slides[].caption.body",
    type: "sträng",
    required: "Nej",
    description: "Bildtextens brödtext.",
  },
];

export const galleryMarkdownFields: MarkdownField[] = [
  ...baseFields("image-gallery"),
  ...sectionFields,
  {
    field: "ariaLabel",
    type: "sträng",
    required: "Nej",
    description: "Standard: Bildgalleri. Beskriver innehållet för hjälpmedel.",
  },
  {
    field: "itemIds",
    type: "registrerade galleri-ID:n[]",
    required: "Ja",
    description: "Minst ett ID. Ordningen styr mosaik och helskärmsvisning.",
  },
];

export const latestArticlesMarkdownFields: MarkdownField[] = [
  ...baseFields("latest-articles"),
  cardBackgroundField,
  headingColorField,
  balanceHeadingField,
  ...sectionFields,
  {
    field: "articleIds",
    type: "registrerade artikel-ID:n[]",
    required: "Ja",
    description:
      "Publiceringsordning; de fyra första visas och den första blir featured.",
  },
];

export const articleListingMarkdownFields: MarkdownField[] = [
  ...baseFields("article-listing"),
  cardBackgroundField,
  headingColorField,
  balanceHeadingField,
  ...sectionFields,
  {
    field: "source",
    type: "all-articles",
    required: "Ja",
    description: "Hämtar alla publicerade artiklar i omvänd datumordning.",
  },
  {
    field: "initialCount",
    type: "positivt heltal",
    required: "Nej",
    description: "Standard: 7. En featured artikel och två rader med tre kort.",
  },
  {
    field: "batchSize",
    type: "positivt heltal",
    required: "Nej",
    description: "Standard: 6. Två nya rader på Large och Max.",
  },
  {
    field: "loadMoreLabel",
    type: "sträng",
    required: "Nej",
    description: "Standard: Ladda fler artiklar.",
  },
  {
    field: "paginationPath",
    type: "intern sökväg",
    required: "Nej",
    description: "Standard: /aktuellt/. Används för crawlbara ?page=N-länkar.",
  },
  {
    field: "ariaLabel",
    type: "sträng",
    required: "Nej",
    description: "Standard: Alla artiklar.",
  },
];

export const timelineMarkdownFields: MarkdownField[] = [
  ...baseFields("timeline"),
  headingColorField,
  balanceHeadingField,
  ...sectionFields,
  {
    field: "ariaLabel",
    type: "sträng",
    required: "Nej",
    description: "Standard: Projektets tidslinje.",
  },
  {
    field: "initialIndex",
    type: "heltal från 0",
    required: "Nej",
    description: "Standard: 0. Klampas till närmaste giltiga index.",
  },
  {
    field: "itemIds",
    type: "registrerade tidslinje-ID:n[]",
    required: "Ja",
    description: "Minst ett ID i kronologisk ordning.",
  },
];

export const navbarMarkdownFields: MarkdownField[] = [
  ...baseFields("navbar"),
  {
    field: "links",
    type: "lista",
    required: "Ja",
    description: "Ordnad lista av huvudlänkar.",
  },
  {
    field: "links[].label",
    type: "sträng",
    required: "Ja",
    description: "Synlig länktext.",
  },
  {
    field: "links[].href",
    type: "sträng",
    required: "Ja",
    description: "Ankare eller URL.",
  },
  {
    field: "links[].current",
    type: "boolean",
    required: "Nej",
    description:
      "Standard: false. Högst en länk ska vara aktuell; visas visuellt och med aria-current=page.",
  },
  {
    field: "searchAction.label",
    type: "sträng",
    required: "Ja",
    description: "Sökåtgärdens synliga text.",
  },
  {
    field: "searchAction.href",
    type: "sträng",
    required: "Ja",
    description: "Ankare eller URL.",
  },
  {
    field: "primaryAction.label",
    type: "sträng",
    required: "Villkorligt",
    description: "Krävs om den valfria primära mobilåtgärden används.",
  },
  {
    field: "primaryAction.href",
    type: "sträng",
    required: "Villkorligt",
    description: "Krävs om primaryAction används.",
  },
];

export const footerMarkdownFields: MarkdownField[] = [
  ...baseFields("footer"),
  headingColorField,
  balanceHeadingField,
  {
    field: "id",
    type: "sträng",
    required: "Nej",
    description: "Ankarmål utan #.",
  },
  {
    field: "navigation[].label",
    type: "sträng",
    required: "Ja",
    description: "Synlig text för varje navigationslänk.",
  },
  {
    field: "navigation[].href",
    type: "sträng",
    required: "Ja",
    description: "Ankare eller URL.",
  },
  {
    field: "legalLinks[].label",
    type: "sträng",
    required: "Ja",
    description: "Synlig text för varje juridisk länk.",
  },
  {
    field: "legalLinks[].href",
    type: "sträng",
    required: "Ja",
    description: "Ankare eller URL.",
  },
  {
    field: "newsletter.title",
    type: "sträng",
    required: "Ja",
    description: "Nyhetsbrevssektionens rubrik.",
  },
  {
    field: "newsletter.inputLabel",
    type: "sträng",
    required: "Ja",
    description: "Tillgänglig label för e-postfältet.",
  },
  {
    field: "newsletter.placeholder",
    type: "sträng",
    required: "Ja",
    description: "Exempeltext i e-postfältet.",
  },
  {
    field: "newsletter.submitLabel",
    type: "sträng",
    required: "Ja",
    description: "Prenumerationsknappens text.",
  },
  {
    field: "newsletter.consentText",
    type: "sträng",
    required: "Ja",
    description: "Texten före integritetslänken.",
  },
  {
    field: "newsletter.privacyLink.label",
    type: "sträng",
    required: "Ja",
    description: "Integritetslänkens synliga text.",
  },
  {
    field: "newsletter.privacyLink.href",
    type: "sträng",
    required: "Ja",
    description: "Ankare eller URL.",
  },
  {
    field: "copyright",
    type: "sträng",
    required: "Ja",
    description: "Fullständig copyrighttext.",
  },
];

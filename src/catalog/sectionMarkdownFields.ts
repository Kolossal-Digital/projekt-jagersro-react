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
    type: "arrow-right",
    required: "Nej",
    description: "Lägger till den godkända högerpilen.",
  },
];

export const heroMarkdownFields: MarkdownField[] = [
  ...baseFields("hero"),
  headingColorField,
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
  ...sectionFields,
  {
    field: "layout",
    type: "split | media | cta | centered",
    required: "Ja",
    description: "Väljer sektionens komposition.",
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
    description: "Ordnad lista av paragraph, bullet-list eller columns.",
  },
  {
    field: "content.richText[].type",
    type: "paragraph | bullet-list | columns",
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
    description: "Krävs för bullet-list.",
  },
  {
    field: "content.richText[].items[].heading",
    type: "sträng",
    required: "Villkorligt",
    description: "Krävs per objekt i columns.",
  },
  {
    field: "content.richText[].items[].body",
    type: "sträng",
    required: "Villkorligt",
    description: "Krävs per objekt i columns.",
  },
  ...actionFields,
];

export const imageSectionMarkdownFields: MarkdownField[] = [
  ...baseFields("image"),
  ...sectionFields,
  {
    field: "variant",
    type: "grid | full-width",
    required: "Nej",
    description: "Standard: grid. Använd inte det äldre fältet layout.",
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
  headingColorField,
  ...sectionFields,
  {
    field: "rows",
    type: "2 | 3 | 4",
    required: "Nej",
    description: "Standard: 4. Visar högst 4, 6 respektive 7 artiklar.",
  },
  {
    field: "articleIds",
    type: "registrerade artikel-ID:n[]",
    required: "Ja",
    description: "Publiceringsordning; första posten blir featured.",
  },
];

export const timelineMarkdownFields: MarkdownField[] = [
  ...baseFields("timeline"),
  headingColorField,
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
    description: "Standard: false. Högst en länk ska vara aktuell.",
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

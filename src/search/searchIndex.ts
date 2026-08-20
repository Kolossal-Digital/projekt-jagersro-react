import MiniSearch from "minisearch";
import { readAktuelltPageContent } from "../content/aktuelltPageContent";
import { readArticlePageContent } from "../content/articlePageContent";
import {
  demoGalleryItems,
  demoLatestArticles,
  demoTimelineItems,
} from "../content/demoContent";
import { readFramtidenPageSections } from "../content/framtidenPageContent";
import {
  readLandingPageSections,
  type LandingPageSection,
} from "../content/landingPageContent";
import { readLabbetPageSections } from "../content/labbetPageContent";
import { readPlatsenPageSections } from "../content/platsenPageContent";
import { readResanPageSections } from "../content/resanPageContent";
import { exampleRoutes } from "../exampleRoutes";

export type SearchDocumentType = "page" | "article" | "section";

export type SearchDocument = {
  id: string;
  url: string;
  title: string;
  pageTitle: string;
  sectionTitle: string;
  type: SearchDocumentType;
  body: string;
  tags: string;
  publishedAt?: string;
  displayDate?: string;
};

export type SearchHit = SearchDocument & { score: number };

const editorialKeys = new Set([
  "ariaLabel",
  "body",
  "caption",
  "content",
  "heading",
  "items",
  "label",
  "richText",
  "summary",
  "tagline",
  "text",
  "title",
]);

function collectEditorialText(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(collectEditorialText);
  if (!value || typeof value !== "object") return [];

  return Object.entries(value).flatMap(([key, child]) =>
    editorialKeys.has(key) ? collectEditorialText(child) : [],
  );
}

function sectionTitle(section: LandingPageSection) {
  if (section.type === "hero" || section.type === "feature") {
    return section.content.heading;
  }

  if (section.type === "full-width-feature") return section.content.heading;
  if (section.type === "icon-list") return section.heading;
  if (section.type === "timeline") return section.ariaLabel ?? "Resan";
  if (section.type === "image-gallery") return section.ariaLabel ?? "Galleri";
  if (section.type === "carousel") return section.ariaLabel ?? "Bildberättelser";
  if (section.type === "image") return section.caption?.label;
  if (section.type === "video") return section.caption?.label;
  return undefined;
}

function sectionBody(section: LandingPageSection) {
  const text = collectEditorialText(section);

  if (section.type === "timeline") {
    const timelineText = section.itemIds.flatMap((id) => {
      const item = demoTimelineItems.find((candidate) => candidate.id === id);
      return item ? collectEditorialText(item) : [];
    });
    text.push(...timelineText);
  }

  if (section.type === "image-gallery") {
    const galleryText = section.itemIds.flatMap((id) => {
      const item = demoGalleryItems.find((candidate) => candidate.id === id);
      return item?.caption ? [item.caption] : [];
    });
    text.push(...galleryText);
  }

  return Array.from(new Set(text)).join(" ");
}

type PageDefinition = {
  id: string;
  title: string;
  url: string;
  tags: string;
  sections: LandingPageSection[];
};

function pageDocuments(page: PageDefinition): SearchDocument[] {
  const searchableSections = page.sections.filter(
    (section) => section.type !== "navbar" && section.type !== "footer",
  );
  const sectionDocuments = searchableSections.flatMap<SearchDocument>((section) => {
    const title = sectionTitle(section);
    const body = sectionBody(section);
    if (!title || !body) return [];

    return [
      {
        id: `${page.id}-section-${section.key}`,
        url: `${page.url}${section.id ? `#${section.id}` : ""}`,
        title,
        pageTitle: page.title,
        sectionTitle: title,
        type: "section",
        body,
        tags: page.tags,
      },
    ];
  });

  return [
    {
      id: `${page.id}-page`,
      url: page.url,
      title: page.title,
      pageTitle: page.title,
      sectionTitle: "",
      type: "page",
      body: sectionDocuments.map((document) => `${document.title} ${document.body}`).join(" "),
      tags: page.tags,
    },
    ...sectionDocuments,
  ];
}

function createSearchDocuments(): SearchDocument[] {
  const aktuellt = readAktuelltPageContent();
  const articlePage = readArticlePageContent();
  const pages: PageDefinition[] = [
    {
      id: "landing",
      title: "Projekt Jägersro",
      url: exampleRoutes.landing,
      tags: "Jägersroprojektet stadsutveckling Malmö travbana",
      sections: readLandingPageSections(),
    },
    {
      id: "labbet",
      title: "Labbet",
      url: exampleRoutes.labbet,
      tags: "popup etablering företag entreprenörer aktiviteter initiativ",
      sections: readLabbetPageSections(),
    },
    {
      id: "platsen",
      title: "Platsen",
      url: exampleRoutes.platsen,
      tags: "bostäder boende parker grönska mobilitet hållbarhet stadsdel",
      sections: readPlatsenPageSections(),
    },
    {
      id: "resan",
      title: "Resan",
      url: exampleRoutes.resan,
      tags: "historia tidslinje planering utveckling travbana",
      sections: readResanPageSections(),
    },
    {
      id: "framtiden",
      title: "Framtiden",
      url: exampleRoutes.framtiden,
      tags: "vision framtid bostäder arbetsplatser parker skolor stadsdel",
      sections: readFramtidenPageSections(),
    },
  ];

  const documents = pages.flatMap(pageDocuments);
  documents.push({
    id: "aktuellt-page",
    url: exampleRoutes.aktuellt,
    title: aktuellt.hero.content.heading,
    pageTitle: "Aktuellt",
    sectionTitle: "",
    type: "page",
    body: aktuellt.hero.content.body ?? "Nyheter och artiklar från Projekt Jägersro.",
    tags: "aktuellt nyheter artiklar",
  });

  const articleBody = [
    articlePage.lead,
    ...articlePage.blocks.map((block) => block.text),
  ].join(" ");

  for (const article of demoLatestArticles) {
    const isFullArticle = article.href === exampleRoutes.article;
    documents.push({
      id: `article-${article.id}`,
      url: article.href,
      title: article.title,
      pageTitle: "Aktuellt",
      sectionTitle: "",
      type: "article",
      body: isFullArticle ? `${article.excerpt} ${articleBody}` : article.excerpt,
      tags: `${article.category ?? "Aktuellt"} nyheter artikel`,
      publishedAt: article.publishedAt,
      displayDate: article.displayDate,
    });
  }

  return documents;
}

export const searchDocuments = createSearchDocuments();
const documentsById = new Map(searchDocuments.map((document) => [document.id, document]));

const searchEngine = new MiniSearch<SearchDocument>({
  fields: ["title", "pageTitle", "sectionTitle", "body", "tags"],
  storeFields: [
    "url",
    "title",
    "pageTitle",
    "sectionTitle",
    "type",
    "body",
    "tags",
    "publishedAt",
    "displayDate",
  ],
  searchOptions: {
    boost: { title: 6, sectionTitle: 4, pageTitle: 3, tags: 2 },
    prefix: true,
    fuzzy: (term) => (term.length >= 5 ? 0.2 : false),
    combineWith: "AND",
  },
});

searchEngine.addAll(searchDocuments);

export function searchSite(query: string, limit?: number): SearchHit[] {
  const normalizedQuery = query.trim();
  if (normalizedQuery.length < 2) return [];

  let results = searchEngine.search(normalizedQuery);
  if (results.length === 0) {
    results = searchEngine.search(normalizedQuery, { combineWith: "OR" });
  }

  const hits = results.flatMap<SearchHit>((result) => {
    const document = documentsById.get(String(result.id));
    return document ? [{ ...document, score: result.score }] : [];
  });

  return typeof limit === "number" ? hits.slice(0, limit) : hits;
}

export function searchExcerpt(document: SearchDocument, query: string, length = 170) {
  const body = document.body.replace(/\s+/g, " ").trim();
  if (body.length <= length) return body;

  const terms = query.toLocaleLowerCase("sv").split(/\s+/).filter(Boolean);
  const lowerBody = body.toLocaleLowerCase("sv");
  const firstMatch = terms.reduce((position, term) => {
    const next = lowerBody.indexOf(term);
    if (next < 0) return position;
    return position < 0 ? next : Math.min(position, next);
  }, -1);
  const start = Math.max(0, (firstMatch < 0 ? 0 : firstMatch) - Math.round(length * 0.3));
  const excerpt = body.slice(start, start + length).trim();
  return `${start > 0 ? "…" : ""}${excerpt}${start + length < body.length ? "…" : ""}`;
}

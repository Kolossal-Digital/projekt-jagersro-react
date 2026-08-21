import { parse } from "yaml";
import articlePageMarkdown from "./article-page.md?raw";
import type { ArticleSummary } from "../components/ArticleCard";
import { parsePageSettings } from "./pageSettings";

export type ArticleBodyBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string };

export type ArticlePageContent = {
  id: string;
  category: string;
  publishedAt: string;
  displayDate: string;
  image: string;
  title: string;
  lead: string;
  blocks: ArticleBodyBlock[];
  relatedArticleIds: ArticleSummary["id"][];
};

const yamlBlockPattern = /```ya?ml\n([\s\S]*?)\n```/g;

export function readArticlePageContent(): ArticlePageContent {
  const article = Array.from(articlePageMarkdown.matchAll(yamlBlockPattern), (match) =>
    parse(match[1]) as Partial<ArticlePageContent> & { type?: string },
  ).find((record) => record.type !== "page");
  if (!article) throw new Error("Article-page fixture needs a content YAML block.");
  if (!article.id || !article.title || !article.image || !article.blocks) {
    throw new Error("Article page needs id, title, image and body blocks.");
  }

  return article as ArticlePageContent;
}

export function readArticlePageSettings() {
  return parsePageSettings(articlePageMarkdown, "Article page");
}

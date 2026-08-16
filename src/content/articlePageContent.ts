import { parse } from "yaml";
import articlePageMarkdown from "./article-page.md?raw";
import type { ArticleSummary } from "../patterns/LatestArticlesSection";

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

const yamlBlockPattern = /```ya?ml\n([\s\S]*?)\n```/;

export function readArticlePageContent(): ArticlePageContent {
  const match = articlePageMarkdown.match(yamlBlockPattern);
  if (!match) throw new Error("Article-page fixture needs a YAML block.");

  const article = parse(match[1]) as Partial<ArticlePageContent>;
  if (!article.id || !article.title || !article.image || !article.blocks) {
    throw new Error("Article page needs id, title, image and body blocks.");
  }

  return article as ArticlePageContent;
}

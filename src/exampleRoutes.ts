export const exampleRoutes = {
  landing: "/examples/landing/",
  aktuellt: "/aktuellt/",
  labbet: "/labbet/",
  platsen: "/platsen/",
  resan: "/resan/",
  framtiden: "/framtiden/",
  article: "/aktuellt/forsta-spadtaget-till-hastarnas-favoritbana/",
} as const;

export type ExampleRoute = keyof typeof exampleRoutes;

export function getExampleRoute(pathname: string): ExampleRoute | undefined {
  const normalizedPath = pathname === "/" ? pathname : pathname.replace(/\/$/, "");

  if (normalizedPath === exampleRoutes.landing.replace(/\/$/, "")) return "landing";
  if (normalizedPath === exampleRoutes.aktuellt.replace(/\/$/, "")) return "aktuellt";
  if (normalizedPath === exampleRoutes.labbet.replace(/\/$/, "")) return "labbet";
  if (normalizedPath === exampleRoutes.platsen.replace(/\/$/, "")) return "platsen";
  if (normalizedPath === exampleRoutes.resan.replace(/\/$/, "")) return "resan";
  if (normalizedPath === exampleRoutes.framtiden.replace(/\/$/, "")) return "framtiden";
  if (normalizedPath === exampleRoutes.article.replace(/\/$/, "")) return "article";

  return undefined;
}

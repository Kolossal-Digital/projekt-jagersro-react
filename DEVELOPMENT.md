# Development guidelines

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:

- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:

- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:

- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:

```less
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

## 5. Project-specific rules

### Scope and product source

- `productHome.md` is the current product-definition source of truth.
- `DESIGN.md` is the current visual and interaction design source of truth for humans and AI coding tools.
- This repository currently contains one design-system verification page, not the Jägersro production website.
- Do not add routes, product features, CMS integrations, maps, analytics or backend code unless explicitly requested.

### Design tokens and Figma

- `design-tokens/figma-export.json` is the source of truth for exported design tokens.
- `design-tokens/layout.json` is the curated source of truth for the responsive page grid from Figma node `10:5836`.
- Prefer semantic tokens from the `Mode` and `Breakpoint` collections over raw palette values.
- Never hard-code a production color, type value, spacing or radius when an exported token exists.
- Preserve token names exactly, including the exported `typgraphy` spelling, until a deliberate migration is agreed.
- The web typography deliberately normalizes the old Source Serif 4 references in the raw export to Geist. Supported font tokens are `font-sans` for Geist and `font-code` for Geist Mono; do not reintroduce `font-serif` without an explicit design decision.
- Use `fluid-heading-03` through `fluid-heading-06` for headings. The `fixed-heading` group in the original export is intentionally unsupported and must not be generated or used.
- Fluid heading sizes follow the exported breakpoint modes from Small through Max. Do not replace them with static heading values.
- Breakpoint modes are viewport-driven: Small 320–767 px, Medium 768–1199 px, Large 1200–1919 px and Max from 1920 px. Production UI must not expose a manual typography-mode switch.
- `fluid-display-02` is intentionally unsupported because the product does not need a serif display style at that size. Do not generate or use it.
- Light and Dark must be implemented as token modes, not as unrelated stylesheets.
- Section backgrounds are limited to `background`, `background-accent-01`, `background-accent-02` and `background-accent-03` unless the design system changes.
- When implementing a Figma design, inspect the exact node and its variables before coding. Treat generated Figma code as reference, not production code.

### React and CSS

- Use React with TypeScript and plain CSS until another styling approach is explicitly chosen.
- Organize the verification catalog as `Foundations`, `Components` and `Sections`. Foundations contain Typography, Colors, Grid & Spacing and Icons; reusable controls belong to Components; CMS-ready page patterns belong to Sections.
- Keep the verification catalog synchronized with the implementation. Any change to foundations, tokens, components, variants, states, responsive behavior, section contracts or composed examples must update the corresponding `Foundations`, `Components`, `Sections` or `Examples` view in the same change. A change is incomplete while the catalog shows obsolete behavior or migration states.
- Use `.page-grid` and `subgrid` for all layout owned by the verification catalog: page intros, foundation/component section wrappers, specimen headers, typography rows, specimen collections and foundation cards. Toolbar and sidebar are exempt. A rendered component preview retains its approved internal layout, but the catalog layout that positions multiple previews is never component-internal and must follow the page grid.
- Put composed page demonstrations under `Examples`. Build them only from public component and pattern APIs plus shared serializable demo content; do not duplicate component markup inside an example.
- A page example may scope `theme--light` or `theme--dark` around individual sections to verify local theme variation. The section still owns its semantic `surface--*` background token.
- Model section variations as a finite `variant` API on one reusable pattern when markup and purpose are shared. Keep CMS-facing content serializable; do not pass React elements or Figma layer structures through the content contract.
- Render editorial and CMS images through the shared `Image` component. Let the surrounding component own aspect ratio and layout; use `priority` only above the fold and always define meaningful or explicitly empty alt text.
- Model image carousels as serializable slide data with image and optional caption. Render carousel media in the design-approved landscape 3:2 frame with `cover`; source assets should therefore allow safe editorial cropping. Keep the focus viewport height stable and represent the loop as persistent virtual positions, so outgoing, incoming and adjacent slides animate concurrently without resetting the visible track. Only expose the focused slide's caption. Navigation must work with arrow keys, labelled icon buttons and direct-selection dots, and motion must respect `prefers-reduced-motion`.
- Model editorial image galleries as an ordered, serializable list of images with optional captions. Keep the visual rhythm in one finite, reusable layout pattern rather than storing CSS spans in CMS content. Gallery images open in a native modal dialog with visible close and navigation controls, Escape and arrow-key support, backdrop dismissal and `prefers-reduced-motion` handling.
- Model article listings as an ordered list of serializable summaries, separate from full article-body data. The first article may receive featured presentation through its list position; do not store CSS columns in CMS content. Preserve ISO dates for semantics, localized display dates for presentation, and an explicit `cover`/`contain` exception only when editorial imagery must not be cropped.
- On Small, keep catalog chrome out of the preview flow: theme, breakpoint information and navigation belong in the closed-by-default debug menu. Do not use a persistent horizontally scrolling sidebar at this breakpoint.
- On desktop, keep the catalog sidebar independently scrollable within the viewport below the sticky toolbar. Scrolling a long navigation list must not move the component preview.
- The catalog document uses Lenis for smooth wheel and anchor scrolling. Keep the sidebar outside that smoothing context with `data-lenis-prevent`, preserve native touch scrolling and let `respectReducedMotion` disable smoothing when the operating system requests reduced motion.
- Keep components local to the feature until they are genuinely reused.
- Build repeated controls as reusable components. Form controls must centralize label, focus, spacing and interaction behavior instead of duplicating raw markup.
- Components own structure and behavior; CSS classes own presentation. Avoid React `style` props and inline styles when a class can express the same result.
- Use semantic class names tied to design-system tokens. Generated token classes belong in `src/generated/tokens.css` and must be regenerated rather than edited manually.
- Reusable full-width sections use one outer, full-bleed surface and one constrained inner container. Background belongs to the outer section; content width and spacing belong to the inner container.
- New page layouts use the shared `.page-grid`: 8 columns with 16px margin/gutter on Small, 8 columns with 68px margin and 16px gutter on Medium, and 12 columns with 64px margin and 24px gutter on Large and Max. The grid container stops at 1920px and is centered above that width.
- `.page-grid` is the only page- and section-level column system. Place content with column spans and use CSS `subgrid` when nested markup must follow the same lines. Component-internal grids may organize controls or content, but must not recreate the page grid with local 8- or 12-column definitions.
- The landing-page example is the integration surface for the new grid system. It may only compose patterns that have been migrated to `.page-grid`; content remains serializable in Markdown and references shared article, gallery, and image records by stable IDs.
- Editorial subpages follow the same rule. `ArticlePage` reads serializable page content from Markdown, reuses shared site settings for Navbar and Footer, and composes the shared `Breadcrumb`, `Image`, and `ArticleCard` components instead of introducing page-only equivalents.
- `HeroSection`, `FullWidthFeatureSection`, `FeatureSection`, the grid variant of `ImageSection`, `ImageCarousel`, `ImageGallery`, `LatestArticlesSection`, `TimelineSection`, `SiteNavbar` and `SiteFooter` use the shared page grid. Their nested editorial compositions use column spans or `subgrid`; do not introduce parallel page-level column systems.
- Copy width follows each approved pattern: `FullWidthFeatureSection` uses four grid columns on Medium and five columns, up to 733px, on Large and Max. The grid-adapted `FeatureSection` may also use up to 733px on Large and Max. Do not change these editorial line lengths without an explicit design update.
- Use `body-01` for editorial paragraphs in section patterns unless the approved pattern explicitly specifies another scale. `FullWidthFeatureSection` and paragraph content in `FeatureSection` use `body-02`. More compact styles are reserved for the opening hero, list items, captions, legal copy and other explicitly dense UI contexts.
- Section components accept content and explicit slots such as actions. Do not create a new section component for every page block when the shared full-width pattern is sufficient.
- Content sections use the shared `SectionSpacingProps` contract. Expose `paddingTop` and `paddingBottom` independently with only `large`, `medium` and `small`; default both to `large`. Component CSS defines the responsive large value, medium derives as half of it and small is zero. Do not add page-specific margin overrides to join adjacent sections—declare the spacing in the serialized page content instead.
- Full-page examples own their local theme scopes. The catalog's Light/Dark control must not alter Landing page or Article page content. Theme-sensitive images use inherited custom properties from the nearest local theme scope; do not use broad descendant selectors such as `.theme--dark .component`, because an outer catalog theme can then override a nested page theme.
- CMS-bound patterns accept a small serializable content contract rather than CMS response objects or arbitrary React markup. Keep CMS mapping outside the visual component so static fixtures, previews and future providers use the same API.
- Use semantic HTML and native controls before creating custom interaction components.
- Do not add state management, routing or a component library without a demonstrated need.

### Accessibility and quality

- Theme and background controls must be keyboard accessible and have visible labels and focus states.
- Maintain readable text contrast on every supported theme/background combination.
- Respect `prefers-reduced-motion`.
- A change is complete only when `npm run build` passes and the affected UI has been checked in both Light and Dark.

### Change discipline

- Keep synced files under `sources/` read-only.
- Do not modify `productHome.md` as a side effect of implementation work.
- When a new governing, guiding or architectural document is added or adopted, update the document map in `productHome.md` in the same change. This explicit documentation update is authorized and is not considered an implementation side effect.
- Add only files needed for the current request and report unresolved design ambiguities rather than inventing tokens.

export type SectionPaddingSize = "large" | "medium" | "small";

export type SectionSpacingProps = {
  paddingTop?: SectionPaddingSize;
  paddingBottom?: SectionPaddingSize;
};

export function getSectionSpacingClasses({
  paddingTop = "large",
  paddingBottom = "large",
}: SectionSpacingProps) {
  return `section-spacing--top-${paddingTop} section-spacing--bottom-${paddingBottom}`;
}

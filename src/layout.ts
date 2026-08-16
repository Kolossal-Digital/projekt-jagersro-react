import layout from "../design-tokens/layout.json";
import type { BreakpointName } from "./tokens";

export type LayoutMode = {
  min: number;
  max?: number;
  columns: number;
  margin: number;
  gutter: number;
};

export const layoutModes = layout.breakpoints as Record<
  BreakpointName,
  LayoutMode
>;

export const pageGridMaxWidth = layout.containerMax;

/** Returns the responsive design-system mode for a viewport width. */
export function getBreakpointName(width: number): BreakpointName {
  if (width >= layoutModes.Max.min) return "Max";
  if (width >= layoutModes.Large.min) return "Large";
  if (width >= layoutModes.Medium.min) return "Medium";
  return "Small";
}

import { Button } from "./Button";
import type { BreakpointName, ThemeName } from "../tokens";

type CatalogControlsProps = {
  breakpoint: BreakpointName;
  className?: string;
  gridVisible: boolean;
  onGridVisibilityChange: (visible: boolean) => void;
  onThemeChange: (theme: ThemeName) => void;
  theme: ThemeName;
};

/** Shared catalog controls used in the desktop toolbar and the Small menu. */
export function CatalogControls({
  breakpoint,
  className = "",
  gridVisible,
  onGridVisibilityChange,
  onThemeChange,
  theme,
}: CatalogControlsProps) {
  const classes = ["catalog-controls", "type-code-02", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <fieldset className="segmented-control">
        <legend>Tema</legend>
        {(["Light", "Dark"] as ThemeName[]).map((name) => (
          <Button
            aria-pressed={theme === name}
            key={name}
            onClick={() => onThemeChange(name)}
            size="large"
            variant={theme === name ? "primary" : "outline"}
          >
            {name}
          </Button>
        ))}
      </fieldset>

      <fieldset className="grid-control">
        <legend>Debug</legend>
        <Button
          aria-label={gridVisible ? "Dölj sidgriden" : "Visa sidgriden"}
          aria-pressed={gridVisible}
          onClick={() => onGridVisibilityChange(!gridVisible)}
          size="large"
          variant={gridVisible ? "primary" : "outline"}
        >
          Grid
        </Button>
      </fieldset>

      <p className="toolbar-breakpoint type-code-01">
        Responsivt läge: {breakpoint}
      </p>
    </div>
  );
}

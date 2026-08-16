import { Select } from "./Select";
import { availableBackgrounds, type BackgroundName } from "../tokens";

type BackgroundPickerProps = {
  value: BackgroundName;
  onChange: (value: BackgroundName) => void;
};

/** Selects one of the four supported semantic section surfaces. */
export function BackgroundPicker({ value, onChange }: BackgroundPickerProps) {
  return (
    <Select
      className="background-picker"
      label="Bakgrund"
      value={value}
      options={availableBackgrounds}
      onChange={onChange}
    />
  );
}

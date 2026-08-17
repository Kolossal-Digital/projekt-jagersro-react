import { Select } from "./Select";
import { availableForegrounds, type ForegroundName } from "../tokens";

type ForegroundPickerProps = {
  value: ForegroundName;
  onChange: (value: ForegroundName) => void;
};

/** Selects one of the five supported semantic section heading colors. */
export function ForegroundPicker({ value, onChange }: ForegroundPickerProps) {
  return (
    <Select
      className="foreground-picker"
      label="Rubrikfärg"
      value={value}
      options={availableForegrounds}
      onChange={onChange}
    />
  );
}

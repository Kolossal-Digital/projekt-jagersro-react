import { Select } from "./Select";
import { availableBackgrounds, type BackgroundName } from "../tokens";

type BackgroundPickerProps = {
  value: BackgroundName;
  onChange: (value: BackgroundName) => void;
  label?: string;
};

/** Selects one of the four supported semantic section surfaces. */
export function BackgroundPicker({
  value,
  onChange,
  label = "Bakgrund",
}: BackgroundPickerProps) {
  return (
    <Select
      className="background-picker"
      label={label}
      value={value}
      options={availableBackgrounds}
      onChange={onChange}
    />
  );
}

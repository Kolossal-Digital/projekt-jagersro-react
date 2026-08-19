import { Select } from "./Select";

const balanceOptions = ["På", "Av"] as const;
type BalanceOption = (typeof balanceOptions)[number];

type HeadingBalancePickerProps = {
  value: boolean;
  onChange: (value: boolean) => void;
};

/** Catalog control for the shared section heading-balance option. */
export function HeadingBalancePicker({
  value,
  onChange,
}: HeadingBalancePickerProps) {
  return (
    <Select<BalanceOption>
      className="heading-balance-picker"
      label="Balansera rubrik"
      onChange={(option) => onChange(option === "På")}
      options={balanceOptions}
      value={value ? "På" : "Av"}
    />
  );
}

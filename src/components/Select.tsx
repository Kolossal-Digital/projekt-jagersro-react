import { CaretDownIcon } from "@phosphor-icons/react/dist/csr/CaretDown";
import { useId } from "react";

export type SelectVariant = "default" | "rounded";

type SelectProps<Option extends string> = {
  label: string;
  value: Option;
  options: readonly Option[];
  onChange: (value: Option) => void;
  helperText?: string;
  error?: string;
  disabled?: boolean;
  name?: string;
  required?: boolean;
  variant?: SelectVariant;
  className?: string;
};

/** Accessible native select matching the shared Figma field states. */
export function Select<Option extends string>({
  label,
  value,
  options,
  onChange,
  helperText,
  error,
  disabled = false,
  name,
  required = false,
  variant = "default",
  className = "",
}: SelectProps<Option>) {
  const id = useId();
  const messageId = `${id}-message`;
  const message = error || helperText;
  const classes = [
    "select-field",
    `select-field--${variant}`,
    error && "select-field--error",
    disabled && "select-field--disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <label className="select-label type-label-01" htmlFor={id}>
        {label}
      </label>
      <span className="select-control">
        <select
          aria-describedby={message ? messageId : undefined}
          aria-invalid={error ? true : undefined}
          className="type-code-02"
          disabled={disabled}
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={(event) => onChange(event.target.value as Option)}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <CaretDownIcon
          aria-hidden="true"
          className="select-control__icon"
          weight="regular"
        />
      </span>
      {message && (
        <span className="select-message type-helper-text-01" id={messageId}>
          {message}
        </span>
      )}
    </div>
  );
}

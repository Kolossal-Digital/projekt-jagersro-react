import {
  useId,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";

export type TextFieldSize = "large" | "medium" | "small";

type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  label: string;
  helperText?: string;
  labelHidden?: boolean;
  error?: string;
  success?: boolean;
  size?: TextFieldSize;
  suffixIcon?: ReactNode;
};

/** Accessible native text input matching the shared Figma field states. */
export function TextField({
  label,
  helperText,
  labelHidden = false,
  error,
  success = false,
  size = "large",
  suffixIcon,
  className = "",
  disabled = false,
  id: providedId,
  "aria-describedby": describedBy,
  "aria-invalid": ariaInvalid,
  ...inputProps
}: TextFieldProps) {
  const generatedId = useId();
  const id = providedId || generatedId;
  const messageId = `${id}-message`;
  const message = error || helperText;
  const descriptionIds = [describedBy, message ? messageId : undefined]
    .filter(Boolean)
    .join(" ") || undefined;
  const classes = [
    "text-field",
    `text-field--${size}`,
    error && "text-field--error",
    success && !error && "text-field--success",
    disabled && "text-field--disabled",
    labelHidden && "text-field--label-hidden",
    suffixIcon && "text-field--with-suffix",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <label className="text-field__label type-label-01" htmlFor={id}>
        {label}
      </label>
      <span className="text-field__control">
        <input
          {...inputProps}
          aria-describedby={descriptionIds}
          aria-invalid={error ? true : ariaInvalid}
          className="text-field__input type-body-compact-01"
          disabled={disabled}
          id={id}
        />
        {suffixIcon && (
          <span className="text-field__suffix" aria-hidden="true">
            {suffixIcon}
          </span>
        )}
      </span>
      {message && (
        <span className="text-field__message type-helper-text-01" id={messageId}>
          {message}
        </span>
      )}
    </div>
  );
}

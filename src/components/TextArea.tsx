import {
  useId,
  useState,
  type ChangeEvent,
  type TextareaHTMLAttributes,
} from "react";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  helperText?: string;
  error?: string;
  warning?: string;
};

/** Accessible native textarea matching the shared Figma field states. */
export function TextArea({
  label,
  helperText,
  error,
  warning,
  className = "",
  disabled = false,
  id: providedId,
  maxLength,
  value,
  defaultValue,
  onChange,
  "aria-describedby": describedBy,
  "aria-invalid": ariaInvalid,
  ...textAreaProps
}: TextAreaProps) {
  const generatedId = useId();
  const id = providedId || generatedId;
  const messageId = `${id}-message`;
  const message = error || warning || helperText;
  const [uncontrolledCount, setUncontrolledCount] = useState(
    String(defaultValue || "").length,
  );
  const characterCount = value === undefined
    ? uncontrolledCount
    : String(value).length;
  const descriptionIds = [describedBy, message ? messageId : undefined]
    .filter(Boolean)
    .join(" ") || undefined;
  const classes = [
    "text-area",
    error && "text-area--error",
    warning && !error && "text-area--warning",
    disabled && "text-area--disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setUncontrolledCount(event.target.value.length);
    onChange?.(event);
  }

  return (
    <div className={classes}>
      <div className="text-area__label-row type-label-01">
        <label htmlFor={id}>{label}</label>
        {typeof maxLength === "number" && (
          <span aria-live="polite">
            {characterCount}/{maxLength}
          </span>
        )}
      </div>
      <textarea
        {...textAreaProps}
        aria-describedby={descriptionIds}
        aria-invalid={error ? true : ariaInvalid}
        className="text-area__control type-body-compact-01"
        defaultValue={defaultValue}
        disabled={disabled}
        id={id}
        maxLength={maxLength}
        onChange={handleChange}
        value={value}
      />
      {message && (
        <span
          className="text-area__message type-helper-text-01"
          id={messageId}
          role={error ? "alert" : undefined}
        >
          {message}
        </span>
      )}
    </div>
  );
}

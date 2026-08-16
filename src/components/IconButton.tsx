import type { ButtonHTMLAttributes, ReactNode } from "react";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode;
  label: string;
};

/** Compact, accessible control for actions represented by a single icon. */
export function IconButton({
  className = "",
  icon,
  label,
  type = "button",
  ...buttonProps
}: IconButtonProps) {
  return (
    <button
      aria-label={label}
      className={["icon-button", className].filter(Boolean).join(" ")}
      type={type}
      {...buttonProps}
    >
      <span aria-hidden="true" className="icon-button__icon">
        {icon}
      </span>
    </button>
  );
}

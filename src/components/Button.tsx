import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "text";
export type ButtonSize = "large" | "medium" | "small";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

function buttonClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className: string,
) {
  return [
    "button",
    `button--${variant}`,
    `button--${size}`,
    "type-code-02",
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

function ButtonContent({
  leftIcon,
  rightIcon,
  children,
}: Pick<ButtonProps, "leftIcon" | "rightIcon" | "children">) {
  return (
    <>
      {leftIcon && (
        <span className="button__icon" aria-hidden="true">
          {leftIcon}
        </span>
      )}
      <span className="button__label">{children}</span>
      {rightIcon && (
        <span className="button__icon" aria-hidden="true">
          {rightIcon}
        </span>
      )}
    </>
  );
}

/**
 * Accessible button primitive matching the Figma Button component.
 * Use icon props for decorative icons; the visible children remain the button label.
 */
export function Button({
  variant = "primary",
  size = "large",
  leftIcon,
  rightIcon,
  className = "",
  children,
  type = "button",
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      className={buttonClasses(variant, size, className)}
      type={type}
      {...buttonProps}
    >
      <ButtonContent leftIcon={leftIcon} rightIcon={rightIcon}>
        {children}
      </ButtonContent>
    </button>
  );
}

/** Link counterpart for navigational calls to action styled as buttons. */
export function ButtonLink({
  variant = "primary",
  size = "large",
  leftIcon,
  rightIcon,
  className = "",
  children,
  ...linkProps
}: ButtonLinkProps) {
  return (
    <a className={buttonClasses(variant, size, className)} {...linkProps}>
      <ButtonContent leftIcon={leftIcon} rightIcon={rightIcon}>
        {children}
      </ButtonContent>
    </a>
  );
}

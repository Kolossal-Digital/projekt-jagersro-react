import type { ReactNode } from "react";

type TypographyElement = "h1" | "h2" | "h3" | "p" | "span";

type TypographyProps = {
  as?: TypographyElement;
  variant: string;
  className?: string;
  children: ReactNode;
};

export function Typography({
  as: Element = "p",
  variant,
  className,
  children,
}: TypographyProps) {
  const classes = [`type-${variant}`, className].filter(Boolean).join(" ");

  return (
    <Element className={classes}>
      {children}
    </Element>
  );
}

import { useId, type ReactNode } from "react";
import { Typography } from "./Typography";

type CalloutProps = {
  children: ReactNode;
  className?: string;
  icon: ReactNode;
  title: string;
};

/** A short contextual note with a decorative Phosphor icon and visible title. */
export function Callout({
  children,
  className = "",
  icon,
  title,
}: CalloutProps) {
  const titleId = useId();
  const classes = ["callout", className].filter(Boolean).join(" ");

  return (
    <aside aria-labelledby={titleId} className={classes} role="note">
      <span aria-hidden="true" className="callout__icon">
        {icon}
      </span>
      <div className="callout__content">
        <Typography as="h3" variant="label-03">
          <span id={titleId}>{title}</span>
        </Typography>
        <Typography variant="body-01">{children}</Typography>
      </div>
    </aside>
  );
}

import { CodeIcon } from "@phosphor-icons/react/dist/csr/Code";
import { FileTextIcon } from "@phosphor-icons/react/dist/csr/FileText";
import { FolderOpenIcon } from "@phosphor-icons/react/dist/csr/FolderOpen";
import { PaletteIcon } from "@phosphor-icons/react/dist/csr/Palette";
import { PlayCircleIcon } from "@phosphor-icons/react/dist/csr/PlayCircle";
import type { ComponentType, SVGProps } from "react";
import { Typography } from "./Typography";

export type WorkflowIconName =
  | "code"
  | "file-text"
  | "folder-open"
  | "palette"
  | "play-circle";

export type WorkflowStep = {
  id: string;
  icon: WorkflowIconName;
  label?: string;
  title: string;
  description: string;
  note?: string;
};

type WorkflowProps = {
  ariaLabel?: string;
  headingAs?: "h2" | "h3" | "h4";
  steps: WorkflowStep[];
};

type PhosphorIcon = ComponentType<
  SVGProps<SVGSVGElement> & { weight?: "light" }
>;

const icons: Record<WorkflowIconName, PhosphorIcon> = {
  code: CodeIcon,
  "file-text": FileTextIcon,
  "folder-open": FolderOpenIcon,
  palette: PaletteIcon,
  "play-circle": PlayCircleIcon,
};

/** A serializable, ordered process with between two and ten steps. */
export function Workflow({
  ariaLabel,
  headingAs = "h3",
  steps,
}: WorkflowProps) {
  if (steps.length < 2 || steps.length > 10) {
    throw new Error("Workflow requires between 2 and 10 steps.");
  }

  return (
    <ol
      aria-label={ariaLabel}
      className={`workflow workflow--count-${steps.length}`}
    >
      {steps.map((step, index) => {
        const Icon = icons[step.icon];
        const number = String(index + 1).padStart(2, "0");

        return (
          <li className="workflow__step" key={step.id}>
            <article>
              <div className="workflow__topline">
                <span className="workflow__number type-code-01">{number}</span>
                <span className="workflow__icon" aria-hidden="true">
                  <Icon weight="light" />
                </span>
              </div>
              {step.label && (
                <code className="workflow__label type-code-02">
                  {step.label}
                </code>
              )}
              <Typography as={headingAs} variant="fluid-heading-03">
                {step.title}
              </Typography>
              <Typography variant="body-01">{step.description}</Typography>
              {step.note && (
                <p className="workflow__note type-code-02">{step.note}</p>
              )}
            </article>
          </li>
        );
      })}
    </ol>
  );
}

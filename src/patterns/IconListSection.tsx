import { BinocularsIcon } from "@phosphor-icons/react/dist/csr/Binoculars";
import { BuildingsIcon } from "@phosphor-icons/react/dist/csr/Buildings";
import { HandshakeIcon } from "@phosphor-icons/react/dist/csr/Handshake";
import { HammerIcon } from "@phosphor-icons/react/dist/csr/Hammer";
import { TreeIcon } from "@phosphor-icons/react/dist/csr/Tree";
import type { ComponentType, SVGProps } from "react";
import { Typography } from "../components/Typography";
import type { BackgroundName, ForegroundName } from "../tokens";
import { getSectionSpacingClasses, type SectionSpacingProps } from "./sectionSpacing";

export type IconListIconName =
  | "hammer"
  | "buildings"
  | "tree"
  | "handshake"
  | "binoculars";

export type IconListItem = {
  id: string;
  icon: IconListIconName;
  text: string;
};

export type IconListSectionProps = SectionSpacingProps & {
  id?: string;
  heading: string;
  items: IconListItem[];
  background?: BackgroundName;
  foreground?: ForegroundName;
  balanceHeading?: boolean;
  headingAs?: "h1" | "h2";
};

type PhosphorIcon = ComponentType<SVGProps<SVGSVGElement> & { weight?: "light" }>;

const icons: Record<IconListIconName, PhosphorIcon> = {
  hammer: HammerIcon,
  buildings: BuildingsIcon,
  tree: TreeIcon,
  handshake: HandshakeIcon,
  binoculars: BinocularsIcon,
};

/** A CMS-ready overview of short, icon-supported possibilities or themes. */
export function IconListSection({
  id,
  heading,
  items,
  background = "background-accent-01",
  foreground = "text-primary",
  balanceHeading = true,
  headingAs = "h2",
  paddingTop,
  paddingBottom,
}: IconListSectionProps) {
  if (items.length < 2 || items.length > 10) {
    throw new Error("IconListSection requires between 2 and 10 items.");
  }

  const layoutCount = items.length;

  return (
    <section
      className={`icon-list-section icon-list-section--count-${layoutCount} surface--${background} foreground--${foreground} ${balanceHeading ? "headings--balanced" : ""} ${getSectionSpacingClasses({ paddingTop, paddingBottom })}`}
      id={id}
    >
      <div className="icon-list-section__container page-grid">
        <Typography
          as={headingAs}
          className="icon-list-section__heading"
          variant="fluid-heading-06"
        >
          {heading}
        </Typography>

        <ul className="icon-list-section__items">
          {items.map((item) => {
            const Icon = icons[item.icon];

            return (
              <li className="icon-list-section__item" key={item.id}>
                <Icon aria-hidden="true" weight="light" />
                <Typography variant="body-02">{item.text}</Typography>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

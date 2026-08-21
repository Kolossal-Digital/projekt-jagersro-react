import { useState } from "react";
import jagersroAerial from "../assets/jagersro-aerial.png";
import { BackgroundPicker } from "../components/BackgroundPicker";
import { ForegroundPicker } from "../components/ForegroundPicker";
import {
  ImageSection,
  type ImageSectionCaption,
  type ImageSectionLayout,
  type VideoPlaybackMode,
} from "../patterns/ImageSection";
import { demoVideos } from "../content/demoContent";
import type { BackgroundName, ForegroundName } from "../tokens";
import { SectionMarkdownDocs } from "./SectionMarkdownDocs";
import { imageSectionMarkdownFields } from "./sectionMarkdownFields";

const image = {
  src: jagersroAerial,
  alt: "Flygbild över Jägersro travbana och det omgivande området.",
  width: 1024,
  height: 683,
};

const caption: ImageSectionCaption = {
  label: "Bild 1",
  description:
    "Flygbilden visar Jägersro travbana och de omgivande kvarteren före omvandlingen. Den dokumenterar platsens skala, grönska och tydliga spår av travets historia – ett landskap som steg för steg får nya användningar och berättelser.",
};

const videoCaption: ImageSectionCaption = {
  label: "Video 1",
  description:
    "Ett kontrollerat videoklipp startar pausat och låter besökaren styra uppspelning, paus och ljud med webbläsarens inbyggda kontroller.",
};

type Specimen = {
  id: string;
  label: string;
  layout: ImageSectionLayout;
  caption?: ImageSectionCaption;
  media?: "image" | "video";
  playback?: VideoPlaybackMode;
  videoKey?: keyof typeof demoVideos;
};

const specimens: Specimen[] = [
  { id: "image-grid", label: "Grid", layout: "grid" },
  {
    id: "image-grid-caption",
    label: "Grid / with description",
    layout: "grid",
    caption,
  },
  { id: "image-full-width", label: "Full width", layout: "full-width" },
  {
    id: "image-full-width-scroll",
    label: "Full width / scroll",
    layout: "full-width-scroll",
  },
  {
    id: "video-background",
    label: "Video / background loop",
    layout: "full-width",
    media: "video",
    playback: "background",
  },
  {
    id: "video-background-scroll",
    label: "Video / background loop / scroll",
    layout: "full-width-scroll",
    media: "video",
    playback: "background",
  },
  {
    id: "video-controls",
    label: "Video / controls",
    layout: "grid",
    media: "video",
    playback: "controls",
    caption: videoCaption,
  },
  {
    id: "video-vimeo-background-scroll",
    label: "Video / Vimeo / background loop / scroll",
    layout: "full-width-scroll",
    media: "video",
    playback: "background",
    videoKey: "jagersroDroneVertical",
  },
];

export function ImageSectionCatalog() {
  const [topBackgrounds, setTopBackgrounds] = useState<Record<string, BackgroundName>>(
    Object.fromEntries(
      specimens.map(({ id }) => [id, "background-accent-02"]),
    ) as Record<string, BackgroundName>,
  );
  const [bottomBackgrounds, setBottomBackgrounds] = useState<Record<string, BackgroundName>>(
    Object.fromEntries(
      specimens.map(({ id }) => [id, "background-accent-01"]),
    ) as Record<string, BackgroundName>,
  );
  const [foregrounds, setForegrounds] = useState<Record<string, ForegroundName>>(
    Object.fromEntries(specimens.map(({ id }) => [id, "text-primary"])) as Record<string, ForegroundName>,
  );

  function setTopBackground(id: string, background: BackgroundName) {
    setTopBackgrounds((current) => ({ ...current, [id]: background }));
  }

  function setBottomBackground(id: string, background: BackgroundName) {
    setBottomBackgrounds((current) => ({ ...current, [id]: background }));
  }

  function setForeground(id: string, foreground: ForegroundName) {
    setForegrounds((current) => ({ ...current, [id]: foreground }));
  }

  return (
    <div className="pattern-catalog" id="image-section">
      {specimens.map((specimen) => (
        <article className="pattern-specimen" key={specimen.id}>
          <header className="pattern-specimen__header page-grid">
            <div>
              <p className="type-code-01">pattern / image section</p>
              <h2 className="type-fluid-heading-04">{specimen.label}</h2>
              <code className="type-code-01">
                layout=&quot;{specimen.layout}&quot;
                {specimen.media === "video" ? ` · playback="${specimen.playback}"` : ""}
                {specimen.caption ? " · caption" : ""}
              </code>
            </div>
            <div className="pattern-specimen__controls">
              <BackgroundPicker
                label="Övre bakgrund"
                value={topBackgrounds[specimen.id]}
                onChange={(background) => setTopBackground(specimen.id, background)}
              />
              <BackgroundPicker
                label="Undre bakgrund"
                value={bottomBackgrounds[specimen.id]}
                onChange={(background) => setBottomBackground(specimen.id, background)}
              />
              <ForegroundPicker
                value={foregrounds[specimen.id]}
                onChange={(foreground) => setForeground(specimen.id, foreground)}
              />
            </div>
          </header>

          {specimen.media === "video" ? (
            <ImageSection
              backgroundBottom={bottomBackgrounds[specimen.id]}
              backgroundTop={topBackgrounds[specimen.id]}
              foreground={foregrounds[specimen.id]}
              caption={specimen.caption}
              layout={specimen.layout}
              playback={specimen.playback ?? "controls"}
              video={demoVideos[specimen.videoKey ?? "greenMotion"]}
            />
          ) : (
            <ImageSection
              backgroundBottom={bottomBackgrounds[specimen.id]}
              backgroundTop={topBackgrounds[specimen.id]}
              foreground={foregrounds[specimen.id]}
              caption={specimen.caption}
              image={image}
              layout={specimen.layout}
            />
          )}
        </article>
      ))}
      <SectionMarkdownDocs
        fields={imageSectionMarkdownFields}
        sectionName="Image / video section"
      />
    </div>
  );
}

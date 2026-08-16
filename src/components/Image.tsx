import type { ImgHTMLAttributes } from "react";

export type ImageAsset = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type ImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "alt" | "height" | "loading" | "src" | "width"
> & {
  asset: ImageAsset;
  fit?: "cover" | "contain";
  priority?: boolean;
};

/** Responsive content image with stable loading and accessibility defaults. */
export function Image({
  asset,
  fit = "cover",
  priority = false,
  className = "",
  ...imageProps
}: ImageProps) {
  const classes = ["image", `image--${fit}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <img
      alt={asset.alt}
      className={classes}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      height={asset.height}
      loading={priority ? "eager" : "lazy"}
      src={asset.src}
      width={asset.width}
      {...imageProps}
    />
  );
}

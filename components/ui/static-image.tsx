import { imageVariants } from "@/lib/generated/image-variants";

type StaticImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

const DEFAULT_SIZES = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px";

function pickDefaultSrc(sources: Record<string, string>): string {
  const order = ["1920", "1080", "640"];
  for (const w of order) {
    if (sources[w]) return sources[w];
  }
  const keys = Object.keys(sources).sort((a, b) => Number(b) - Number(a));
  return keys.length ? sources[keys[0]] : "";
}

export default function StaticImage({
  src,
  alt,
  width,
  height,
  className,
  priority,
  sizes = DEFAULT_SIZES,
}: StaticImageProps) {
  const variant = imageVariants[src as keyof typeof imageVariants];

  if (!variant?.sources || Object.keys(variant.sources).length === 0) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : undefined}
      />
    );
  }

  const srcSet = Object.entries(variant.sources)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([w, url]) => `${url} ${w}w`)
    .join(", ");

  const defaultSrc = pickDefaultSrc(variant.sources);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={defaultSrc}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width ?? variant.width}
      height={height ?? variant.height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
    />
  );
}
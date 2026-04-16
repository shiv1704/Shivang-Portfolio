type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryProps = {
  images: GalleryImage[];
};

export default function Gallery({ images }: GalleryProps) {
  if (!images) return null;
  const items = Array.isArray(images) ? images : [images as GalleryImage];

  return (
    <div className="not-prose my-10 grid gap-4 sm:grid-cols-2">
      {items.map((img) => (
        <div
          key={img.src ?? img.alt}
          className="overflow-hidden rounded-xl border border-ink/10 bg-ink/5"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.src}
            alt={img.alt}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

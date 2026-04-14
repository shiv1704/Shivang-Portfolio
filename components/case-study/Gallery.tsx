import SafeImage from "@/components/SafeImage";

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
    <div className="my-10 grid gap-4 sm:grid-cols-2">
      {items.map((img) => (
        <div
          key={img.src ?? img.alt}
          className="relative aspect-video overflow-hidden rounded-xl border border-ink/10"
        >
          <SafeImage
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
            fallbackText={img.alt}
          />
        </div>
      ))}
    </div>
  );
}

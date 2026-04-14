"use client";

import Image from "next/image";
import { useState } from "react";

type SafeImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fallbackText?: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
};

function getInitials(text: string) {
  return text
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function SafeImage({
  src,
  alt,
  width,
  height,
  fallbackText,
  className = "",
  fill,
  sizes,
  priority,
}: SafeImageProps) {
  const [errored, setErrored] = useState(false);

  const initials = fallbackText ? getInitials(fallbackText) : alt.slice(0, 2).toUpperCase();

  if (errored) {
    return (
      <div
        className={`flex items-center justify-center bg-coral ${
          fill ? "absolute inset-0" : ""
        } ${className}`}
      >
        <span className="font-display text-4xl font-bold text-cream/90 select-none">
          {initials}
        </span>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={className}
        priority={priority}
        onError={() => setErrored(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width!}
      height={height!}
      className={className}
      priority={priority}
      sizes={sizes}
      onError={() => setErrored(true)}
    />
  );
}

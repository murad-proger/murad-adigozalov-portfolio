"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type ScreenshotGalleryProps = {
  images: string[];
  projectTitle: string;
};

export function ScreenshotGallery({
  images,
  projectTitle,
}: ScreenshotGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const desktopScreenshots = images.filter(
    (image) => !image.includes("_mobile_"),
  );
  const mobileScreenshots = images.filter((image) =>
    image.includes("_mobile_"),
  );
  const isMobilePreview = selectedImage?.includes("_mobile_");

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedImage]);

  const screenshotCard = (image: string, isMobile: boolean) => (
    <button
      key={image}
      type="button"
      onClick={() => setSelectedImage(image)}
      className={`border-border bg-surface group relative block w-full cursor-zoom-in overflow-hidden rounded-sm border text-left ${
        isMobile ? "aspect-9/16" : "aspect-video"
      }`}
      aria-label={`Open ${projectTitle} screenshot`}
    >
      <Image
        src={image}
        alt={`${projectTitle} screenshot`}
        fill
        sizes={
          isMobile
            ? "(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 285px"
            : "(max-width: 640px) 100vw, 430px"
        }
        className="object-contain"
      />
    </button>
  );

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {desktopScreenshots.map((image) => screenshotCard(image, false))}
      </div>

      {mobileScreenshots.length > 0 && (
        <div className="mt-6">
          <h3 className="font-sans text-[0.9375rem] font-semibold">
            Mobile screens
          </h3>
          <div className="mt-3 grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mobileScreenshots.map((image) => screenshotCard(image, true))}
          </div>
        </div>
      )}

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${projectTitle} screenshot preview`}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className={`bg-background relative w-full max-w-6xl overflow-hidden rounded-sm ${
              isMobilePreview
                ? "h-full"
                : "aspect-video max-h-[calc(100dvh-2rem)]"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt={`${projectTitle} screenshot preview`}
              fill
              sizes="100vw"
              className="object-contain p-3 sm:p-6"
              priority
            />
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="border-border bg-background text-foreground hover:border-foreground absolute top-3 right-3 z-10 flex size-10 items-center justify-center rounded-sm border transition-colors"
              aria-label="Close image preview"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

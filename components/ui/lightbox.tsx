"use client";

import * as React from "react";
import Image from "next/image";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface LightboxProps {
  images: { src: string; alt: string }[];
  selectedIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({
  images,
  selectedIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const isOpen = selectedIndex !== null;
  const currentImage = selectedIndex !== null ? images[selectedIndex] : null;

  React.useEffect(() => {
    if (!isOpen || selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        onNavigate(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
      }

      if (event.key === "ArrowRight") {
        onNavigate(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length, isOpen, onNavigate, selectedIndex]);

  return (
    <DialogPrimitive.Root
      open={isOpen}
      onOpenChange={(open) => !open && onClose()}
    >
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />

        <DialogPrimitive.Content className="fixed inset-0 z-50 flex flex-col bg-black text-white outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0">
          <DialogPrimitive.Title className="sr-only">
            {currentImage?.alt ?? "Project screenshot viewer"}
          </DialogPrimitive.Title>
          <DialogPrimitive.Description className="sr-only">
            Viewing image {(selectedIndex ?? 0) + 1} of {images.length}
          </DialogPrimitive.Description>

          <div className="flex h-16 shrink-0 items-center justify-between border-b border-white/15 px-5 sm:h-20 sm:px-8">
            <div className="text-sm text-white/65">
              <span className="font-semibold text-white">
                {(selectedIndex ?? 0) + 1}
              </span>
              <span className="mx-2">of</span>
              <span>{images.length}</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex size-11 items-center justify-center rounded-md text-white/70 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Close image viewer"
            >
              <XIcon className="size-5" />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-16 py-3 sm:px-24 sm:py-6">
            <button
              type="button"
              onClick={() =>
                onNavigate(
                  selectedIndex === 0
                    ? images.length - 1
                    : (selectedIndex ?? 0) - 1,
                )
              }
              disabled={images.length < 2}
              className="absolute left-3 inline-flex size-11 items-center justify-center rounded-md border border-white/15 bg-black text-white/70 transition-colors hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-30 sm:left-8"
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="size-6" />
            </button>

            {currentImage && (
              <figure
                className="mx-auto flex h-full min-h-0 w-full max-w-7xl flex-col"
                key={currentImage.src}
              >
                <div className="relative min-h-0 w-full flex-1 overflow-hidden rounded-lg border border-white/15 bg-black">
                  <Image
                    src={currentImage.src}
                    alt={currentImage.alt}
                    fill
                    sizes="95vw"
                    className="object-contain"
                  />
                </div>
                <figcaption className="mx-auto mt-3 max-w-3xl shrink-0 text-center text-sm leading-5 text-white/70 sm:mt-5 sm:text-base sm:leading-6">
                  {currentImage.alt}
                </figcaption>
              </figure>
            )}

            <button
              type="button"
              onClick={() =>
                onNavigate(
                  selectedIndex === images.length - 1
                    ? 0
                    : (selectedIndex ?? 0) + 1,
                )
              }
              disabled={images.length < 2}
              className="absolute right-3 inline-flex size-11 items-center justify-center rounded-md border border-white/15 bg-black text-white/70 transition-colors hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-30 sm:right-8"
              aria-label="Next image"
            >
              <ChevronRightIcon className="size-6" />
            </button>
          </div>

          <div className="shrink-0 border-t border-white/15 px-4 py-3 sm:px-8 sm:py-4">
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => onNavigate(index)}
                  className={cn(
                    "relative h-10 w-16 overflow-hidden rounded-md border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:h-12 sm:w-20",
                    index === selectedIndex
                      ? "border-primary"
                      : "border-white/15 opacity-55 hover:border-white/35 hover:opacity-100",
                  )}
                  aria-label={`View image ${index + 1}: ${image.alt}`}
                  aria-current={index === selectedIndex ? "true" : undefined}
                >
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-cover object-left-top"
                  />
                </button>
              ))}
            </div>
            <p className="mt-3 hidden text-center text-sm text-white/50 sm:block">
              Arrow keys navigate. Escape closes the viewer.
            </p>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

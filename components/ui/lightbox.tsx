"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
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

  // Keyboard navigation
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        onNavigate(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
      } else if (e.key === "ArrowRight") {
        onNavigate(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, images.length, onNavigate, onClose]);

  const currentImage = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogPrimitive.Portal>
        {/* Backdrop with blur */}
        <DialogPrimitive.Overlay
          className={cn(
            "fixed inset-0 z-50",
            "bg-black/90 backdrop-blur-xl",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "duration-300"
          )}
        />

        <DialogPrimitive.Content
          className={cn(
            "fixed inset-0 z-50",
            "flex flex-col items-center justify-center",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "duration-300 outline-none"
          )}
        >
          <DialogPrimitive.Title className="sr-only">
            {currentImage?.alt || "Image viewer"}
          </DialogPrimitive.Title>

          {/* Close button - top right, refined */}
          <button
            onClick={onClose}
            className={cn(
              "absolute top-6 right-6 z-10",
              "p-3 rounded-full",
              "bg-white/10 hover:bg-white/20",
              "backdrop-blur-sm",
              "border border-white/10 hover:border-white/20",
              "text-white/70 hover:text-white",
              "transition-all duration-200",
              "group"
            )}
            aria-label="Close"
          >
            <XIcon className="w-5 h-5 transition-transform group-hover:rotate-90 duration-200" />
          </button>

          {/* Counter - top left */}
          <div
            className={cn(
              "absolute top-6 left-6 z-10",
              "px-4 py-2 rounded-full",
              "bg-white/10 backdrop-blur-sm",
              "border border-white/10",
              "text-white/70 text-sm font-medium tracking-wide"
            )}
          >
            <span className="text-white">{(selectedIndex ?? 0) + 1}</span>
            <span className="mx-1.5 text-white/40">/</span>
            <span>{images.length}</span>
          </div>

          {/* Main image container */}
          <div className="relative w-full h-full flex items-center justify-center px-4 py-24 sm:px-16 sm:py-28">
            {/* Navigation - Previous */}
            <button
              onClick={() =>
                onNavigate(
                  selectedIndex === 0 ? images.length - 1 : (selectedIndex ?? 0) - 1
                )
              }
              className={cn(
                "absolute left-4 sm:left-8 z-10",
                "p-3 sm:p-4 rounded-full",
                "bg-white/5 hover:bg-white/15",
                "backdrop-blur-sm",
                "border border-white/10 hover:border-white/20",
                "text-white/50 hover:text-white",
                "transition-all duration-200",
                "hover:scale-110 active:scale-95"
              )}
              aria-label="Previous image"
            >
              <ChevronLeftIcon className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            {/* Image with elegant frame */}
            {currentImage && (
              <div
                className={cn(
                  "relative max-w-full max-h-full",
                  "animate-in fade-in-0 zoom-in-95 duration-300"
                )}
                key={selectedIndex}
              >
                <div
                  className={cn(
                    "relative rounded-lg overflow-hidden",
                    "shadow-2xl shadow-black/50",
                    "ring-1 ring-white/10"
                  )}
                >
                  <img
                    src={currentImage.src}
                    alt={currentImage.alt}
                    className="max-h-[70vh] w-auto object-contain"
                  />
                </div>

                {/* Caption */}
                <div className="mt-6 text-center">
                  <p className="text-white/90 text-base sm:text-lg font-light tracking-wide">
                    {currentImage.alt}
                  </p>
                </div>
              </div>
            )}

            {/* Navigation - Next */}
            <button
              onClick={() =>
                onNavigate(
                  selectedIndex === images.length - 1 ? 0 : (selectedIndex ?? 0) + 1
                )
              }
              className={cn(
                "absolute right-4 sm:right-8 z-10",
                "p-3 sm:p-4 rounded-full",
                "bg-white/5 hover:bg-white/15",
                "backdrop-blur-sm",
                "border border-white/10 hover:border-white/20",
                "text-white/50 hover:text-white",
                "transition-all duration-200",
                "hover:scale-110 active:scale-95"
              )}
              aria-label="Next image"
            >
              <ChevronRightIcon className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </div>

          {/* Thumbnail strip */}
          <div
            className={cn(
              "absolute bottom-0 left-0 right-0",
              "py-4 px-4",
              "bg-gradient-to-t from-black/80 via-black/40 to-transparent"
            )}
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              {images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => onNavigate(idx)}
                  className={cn(
                    "relative rounded-md overflow-hidden",
                    "transition-all duration-200",
                    "ring-2 ring-offset-2 ring-offset-black/50",
                    idx === selectedIndex
                      ? "ring-white/80 scale-110"
                      : "ring-transparent hover:ring-white/40 opacity-50 hover:opacity-100"
                  )}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-16 h-10 sm:w-20 sm:h-12 object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Keyboard hint */}
            <p className="mt-3 text-center text-white/30 text-xs tracking-wider hidden sm:block">
              Use <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/50 font-mono text-[10px]">←</kbd>{" "}
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/50 font-mono text-[10px]">→</kbd> to navigate
              {" "}&bull;{" "}
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/50 font-mono text-[10px]">ESC</kbd> to close
            </p>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

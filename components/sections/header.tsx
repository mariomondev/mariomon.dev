"use client";

import { ModeToggle } from "@/components/theme/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
        <div className="text-xl font-semibold text-foreground">
          Mario Montano
        </div>
        <ModeToggle />
      </nav>
    </header>
  );
}

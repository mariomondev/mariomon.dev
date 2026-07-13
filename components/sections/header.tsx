import { ThemeToggle } from "@/components/theme/theme-toggle";

const navigation = [
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95">
      <a
        href="#main-content"
        className="focus-ring absolute left-4 top-0 -translate-y-full rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground focus:top-3 focus:translate-y-0"
      >
        Skip to content
      </a>

      <div className="site-container flex h-[4.5rem] items-center justify-between">
        <a
          href="#top"
          className="focus-ring inline-flex h-11 items-center gap-3 rounded-md font-semibold tracking-[-0.02em]"
          aria-label="Mario Montano, back to top"
        >
          <span className="size-2.5 bg-primary" aria-hidden="true" />
          <span>Mario Montano</span>
        </a>

        <nav className="flex items-center gap-1" aria-label="Primary navigation">
          {navigation.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`focus-ring inline-flex h-11 items-center rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground ${
                index > 0 ? "max-sm:hidden" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-8">
      <div className="site-container flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>(c) {currentYear} Mario Montano</p>
        <p>Built with Next.js.</p>
      </div>
    </footer>
  );
}

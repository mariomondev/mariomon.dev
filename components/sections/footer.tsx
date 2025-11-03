export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-card/50 py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center text-sm text-muted-foreground">
        <p>© {currentYear} Mario Montano. All rights reserved.</p>
      </div>
    </footer>
  );
}

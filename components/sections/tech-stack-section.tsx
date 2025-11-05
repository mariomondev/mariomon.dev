export function TechStackSection() {
  const primaryStack = [
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Runtime" },
    { name: "Next.js", category: "Framework" },
    { name: "React", category: "Frontend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Express", category: "API Framework" },
    { name: "Hono", category: "API Framework" },
    { name: "Puppeteer", category: "Automation" },
    { name: "Playwright", category: "Automation" },
  ];

  const maintenanceStack = [
    { name: "PHP", category: "Backend" },
    { name: "Swift", category: "iOS" },
    { name: "SwiftUI", category: "iOS UI" },
  ];

  const infrastructure = [
    { name: "Vercel", category: "Deployment" },
    { name: "Digital Ocean", category: "Deployment" },
  ];

  return (
    <section className="section-container border-t border-border/50">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Tech Stack
          </h2>
          <div className="h-1 w-12 bg-accent rounded" />
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              Primary Stack
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {primaryStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center justify-center rounded-lg border border-border/50 bg-card p-3 sm:p-4 transition-colors hover:border-accent/50 hover:bg-accent/5"
                >
                  <span className="font-semibold text-foreground text-sm sm:text-base">
                    {tech.name}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              Infrastructure
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {infrastructure.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center justify-center rounded-lg border border-border/50 bg-card/50 p-3 sm:p-4 transition-colors hover:border-accent/50 hover:bg-accent/5"
                >
                  <span className="font-semibold text-foreground text-sm sm:text-base">
                    {tech.name}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              Occasional Use / Maintenance
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {maintenanceStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center justify-center rounded-lg border border-border/50 bg-card/50 p-3 sm:p-4 transition-colors hover:border-accent/50 hover:bg-accent/5"
                >
                  <span className="font-semibold text-foreground text-sm sm:text-base">
                    {tech.name}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

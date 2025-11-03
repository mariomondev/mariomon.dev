export function TechStackSection() {
  const technologies = [
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Runtime" },
    { name: "Next.js", category: "Framework" },
    { name: "React", category: "Frontend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "PHP", category: "Backend" },
    { name: "Swift", category: "iOS" },
    { name: "SwiftUI", category: "iOS UI" },
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

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech) => (
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
    </section>
  );
}

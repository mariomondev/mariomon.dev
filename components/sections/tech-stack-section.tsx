const capabilityGroups = [
  {
    title: "Product systems",
    tools: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL"],
  },
  {
    title: "Operational automation",
    tools: [
      "GraphQL",
      "Hasura",
      "Hono",
      "Trigger.dev",
      "ClickUp API",
      "Google Cloud",
    ],
  },
  {
    title: "Delivery and range",
    tools: ["Docker", "GitLab CI/CD", "Vercel", "Swift", "SwiftUI", "PHP"],
  },
];

export function TechStackSection() {
  return (
    <section id="capabilities" className="section-container border-t">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <h2 className="section-heading max-w-lg">Tools follow the problem.</h2>
          <p className="body-copy mt-6 max-w-lg">
            My deepest experience is in TypeScript product systems. I also work
            across operational automation, cloud services, native iOS, and
            inherited platforms when the product requires it.
          </p>
        </div>

        <div className="border-t">
          {capabilityGroups.map((group) => (
            <div
              key={group.title}
              className="grid gap-5 border-b py-8 sm:grid-cols-[12rem_1fr] sm:gap-8"
            >
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <ul className="flex flex-wrap gap-x-6 gap-y-3 text-base text-muted-foreground">
                {group.tools.map((tool) => (
                  <li key={tool} className="inline-flex items-center gap-2">
                    <span className="size-1.5 bg-primary" aria-hidden="true" />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

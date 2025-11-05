import { Card } from "@/components/ui/card";

export function ProjectsSection() {
  const featuredProjects = [
    {
      title: "Enterprise EMR Platform",
      description:
        "Architected and developed a comprehensive EMR system serving 100+ healthcare providers and 100K+ patients across multiple facilities. Features include patient charting, appointment scheduling, prescription management, lab integrations, billing workflows, HIPAA-compliant audit logging, and role-based access control. Led a team of 3 developers while building critical features independently. Managed full lifecycle from requirements gathering through production deployment and ongoing maintenance.",
      tech: ["TypeScript", "Next.js", "React", "PostgreSQL", "PHP"],
      note: "Proprietary healthcare system (NDA protected)",
    },
    {
      title: "Insurance Verification Automation System",
      description:
        "Built a dual-system architecture (web app + automation bot) that processes 200+ patient verifications daily with 90%+ automatic success rate. Reduced manual verification workload from 8 hours to under 1 hour per day, saving 150+ hours monthly. Led a team of 3 developers while building critical features independently. System handles data collection, automated eligibility checks with insurance providers, and exception handling for manual review.",
      tech: ["TypeScript", "Node.js", "PostgreSQL", "Automation"],
      note: "Enterprise confidential project",
    },
    {
      title: "Healthcare Provider Mobile App",
      description:
        "Developed native iOS application for healthcare providers to use during patient visits on iPad. Built for speed and efficiency, enabling providers to capture wound photography with precise measurements, manage prescriptions, schedule appointments, and access patient records. Led a team of 3 developers while building critical features independently. Optimized for offline-first operation with seamless EMR synchronization.",
      tech: ["Swift", "SwiftUI", "REST APIs", "Offline-First"],
      note: "Client proprietary application",
    },
  ];

  const openSourceProjects = [
    {
      title: "EMR Demo - Open Source Showcase",
      description:
        "A simplified EMR system built from scratch to demonstrate full-stack architecture and coding practices. Features three core modules: patient management, appointment scheduling, and prescription management. This project showcases my approach to building healthcare software with modern technologies and best practices.",
      tech: ["TypeScript", "Next.js", "React", "PostgreSQL"],
      note: "Under construction - Public repository coming soon",
    },
  ];

  return (
    <section className="section-container border-t border-border/50">
      <div className="space-y-12">
        {/* Featured Projects */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Featured Projects
            </h2>
            <div className="h-1 w-12 bg-accent rounded" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="flex flex-col border-border/50 bg-card hover:border-accent/50 transition-colors"
              >
                <div className="flex flex-1 flex-col p-4 sm:p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground text-lg">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    {project.note && (
                      <p className="text-xs text-muted-foreground/70 italic pt-1">
                        {project.note}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Open Source Showcase */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-foreground sm:text-2xl">
              Open Source Showcase
            </h3>
            <div className="h-1 w-12 bg-accent/50 rounded" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {openSourceProjects.map((project, index) => (
              <Card
                key={index}
                className="flex flex-col border-border/50 bg-card/50 hover:border-accent/50 transition-colors"
              >
                <div className="flex flex-1 flex-col p-4 sm:p-6 space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-lg">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    {project.note && (
                      <p className="text-xs text-muted-foreground/70 italic pt-1">
                        {project.note}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GithubIcon, ExternalLinkIcon } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Patient Management System",
      description:
        "Full-featured EMR with real-time collaboration, HIPAA audit logs, and integration with 15+ healthcare providers.",
      tech: ["TypeScript", "Next.js", "PostgreSQL", "React"],
      github: "https://github.com/mariomondev",
      demo: "https://example.com",
    },
    {
      title: "Healthcare Workflow Automation",
      description:
        "Automated routing system for patient records reducing manual data entry by 80% and cutting processing time from hours to minutes.",
      tech: ["Node.js", "PHP", "PostgreSQL", "REST APIs"],
      github: "https://github.com/mariomondev",
      demo: "https://example.com",
    },
    {
      title: "Mobile Health Portal",
      description:
        "iOS app for patient self-service allowing secure record access, appointment scheduling, and prescription management.",
      tech: ["Swift", "SwiftUI", "REST APIs", "iOS"],
      github: "https://github.com/mariomondev",
      demo: "https://example.com",
    },
  ];

  return (
    <section className="section-container border-t border-border/50">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Featured Projects
          </h2>
          <div className="h-1 w-12 bg-accent rounded" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
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

                <div className="flex gap-2 pt-4">
                  <Button asChild variant="ghost" size="sm" className="flex-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <GithubIcon className="h-4 w-4" />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="sm" className="flex-1">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLinkIcon className="h-4 w-4" />
                      <span className="hidden sm:inline">Demo</span>
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

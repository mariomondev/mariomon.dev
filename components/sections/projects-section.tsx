"use client";

import { Card } from "@/components/ui/card";
import { Lightbox } from "@/components/ui/lightbox";
import {
  PlayIcon,
  Building2Icon,
  BotIcon,
  SmartphoneIcon,
  LockKeyholeIcon,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

export function ProjectsSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [selectedScreenshot, setSelectedScreenshot] = useState<number | null>(
    null
  );

  const featuredProjects: {
    title: string;
    description: string;
    tech: string[];
    note: string;
    icon: LucideIcon;
    accentGradient: string;
  }[] = [
    {
      title: "Enterprise EMR Platform",
      description:
        "Architected and developed a comprehensive EMR system serving 100+ healthcare providers and 100K+ patients across multiple facilities. Features include patient charting, appointment scheduling, prescription management, lab integrations, billing workflows, HIPAA-compliant audit logging, and role-based access control. Led a team of 3 developers while building critical features independently. Managed full lifecycle from requirements gathering through production deployment and ongoing maintenance.",
      tech: ["TypeScript", "Next.js", "React", "PostgreSQL", "PHP"],
      note: "Proprietary healthcare system (NDA protected)",
      icon: Building2Icon,
      accentGradient: "from-accent via-accent/80 to-teal-400",
    },
    {
      title: "Insurance Verification Automation System",
      description:
        "Built a dual-system architecture (web app + automation bot) that processes 200+ patient verifications daily with 90%+ automatic success rate. Reduced manual verification workload from 8 hours to under 1 hour per day, saving 150+ hours monthly. Led a team of 3 developers while building critical features independently. System handles data collection, automated eligibility checks with insurance providers, and exception handling for manual review.",
      tech: ["TypeScript", "Node.js", "PostgreSQL", "Automation"],
      note: "Enterprise confidential project",
      icon: BotIcon,
      accentGradient: "from-cyan-500 via-accent to-teal-500",
    },
    {
      title: "Healthcare Provider Mobile App",
      description:
        "Developed native iOS application for healthcare providers to use during patient visits on iPad. Built for speed and efficiency, enabling providers to capture wound photography with precise measurements, manage prescriptions, schedule appointments, and access patient records. Led a team of 3 developers while building critical features independently. Optimized for offline-first operation with seamless EMR synchronization.",
      tech: ["Swift", "SwiftUI", "REST APIs", "Offline-First"],
      note: "Client proprietary application",
      icon: SmartphoneIcon,
      accentGradient: "from-teal-400 via-emerald-500 to-accent",
    },
  ];

  const demoEHR = {
    title: "DemoEHR",
    description:
      "A personal project demonstrating modern EHR architecture and interface design patterns developed through years of healthcare software experience. Features patient management, clinical notes with SOAP format, vitals tracking, lab results, provider profiles, and multi-facility support. Built to showcase full-stack development capabilities in healthcare software.",
    tech: ["TypeScript", "Next.js", "React", "PostgreSQL", "Tailwind CSS"],
    screenshots: [
      { src: "https://assets.mariomon.dev/patient-list.jpg", alt: "Patient list view" },
      { src: "https://assets.mariomon.dev/patient-overview.jpg", alt: "Patient overview with demographics" },
      { src: "https://assets.mariomon.dev/clinical-note.jpg", alt: "Clinical note with vitals" },
      { src: "https://assets.mariomon.dev/provider-profile.jpg", alt: "Provider profile" },
    ],
    videoSrc: "https://assets.mariomon.dev/emr-template.mp4",
    videoPoster: "https://assets.mariomon.dev/patient-overview.jpg",
  };

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
            {featuredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card
                  key={index}
                  className="group relative flex flex-col overflow-hidden border-border/30 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-accent/40 hover:shadow-[0_0_40px_-12px] hover:shadow-accent/20"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Gradient accent bar */}
                  <div
                    className={`h-1 w-full bg-gradient-to-r ${project.accentGradient} opacity-80 group-hover:opacity-100 transition-opacity`}
                  />

                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern
                          id={`grid-${index}`}
                          width="32"
                          height="32"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M 32 0 L 0 0 0 32"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                          />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
                    </svg>
                  </div>

                  <div className="relative flex flex-1 flex-col p-5 sm:p-6">
                    {/* Header with icon */}
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${project.accentGradient} shadow-lg shadow-accent/20 group-hover:shadow-accent/30 transition-shadow`}
                      >
                        <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                      </div>
                      <div className="space-y-1 min-w-0">
                        <h3 className="font-semibold text-foreground text-lg leading-tight tracking-tight">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Note with lock icon */}
                    {project.note && (
                      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/30">
                        <LockKeyholeIcon className="h-3.5 w-3.5 text-muted-foreground/60 shrink-0" />
                        <p className="text-xs text-muted-foreground/70 italic">
                          {project.note}
                        </p>
                      </div>
                    )}

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-md bg-accent/8 dark:bg-accent/12 px-2.5 py-1 text-xs font-medium text-accent ring-1 ring-inset ring-accent/20 transition-colors group-hover:bg-accent/12 dark:group-hover:bg-accent/18"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* DemoEHR Showcase */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-foreground sm:text-2xl">
              {demoEHR.title}
            </h3>
            <div className="h-1 w-12 bg-accent/50 rounded" />
          </div>

          <div className="space-y-6">
            {/* Video Section */}
            <div className="relative aspect-video rounded-lg overflow-hidden bg-black/5 border border-border/50">
              {!isVideoPlaying ? (
                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                >
                  <img
                    src={demoEHR.videoPoster}
                    alt="DemoEHR preview"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                  <div className="relative z-10 flex items-center gap-2 bg-white/90 dark:bg-black/90 px-6 py-3 rounded-full shadow-lg group-hover:scale-105 transition-transform">
                    <PlayIcon className="h-6 w-6 text-accent" />
                    <span className="font-medium text-foreground">Watch Demo</span>
                  </div>
                </button>
              ) : (
                <video
                  src={demoEHR.videoSrc}
                  controls
                  autoPlay
                  className="w-full h-full"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              {demoEHR.description}
            </p>

            {/* Screenshots Gallery */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {demoEHR.screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedScreenshot(index)}
                  className="relative aspect-video rounded-lg overflow-hidden border border-border/50 hover:border-accent/50 transition-colors group cursor-pointer"
                >
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-xs text-white text-center">{screenshot.alt}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Screenshot Lightbox */}
            <Lightbox
              images={demoEHR.screenshots}
              selectedIndex={selectedScreenshot}
              onClose={() => setSelectedScreenshot(null)}
              onNavigate={setSelectedScreenshot}
            />

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {demoEHR.tech.map((tech) => (
                <span
                  key={tech}
                  className="inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Card } from "@/components/ui/card";
import { Lightbox } from "@/components/ui/lightbox";
import { Button } from "@/components/ui/button";
import {
  PlayIcon,
  Building2Icon,
  BotIcon,
  SmartphoneIcon,
  LockKeyholeIcon,
  ChevronDownIcon,
  ExternalLinkIcon,
  CircleDotIcon,
  EyeIcon,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  icon: LucideIcon;
  accentGradient: string;
  note?: string;
  // Demo section (optional - for projects with showcases)
  demo?: {
    title: string;
    description: string;
    screenshots: { src: string; alt: string }[];
    videoSrc: string;
    videoPoster: string;
    liveUrl?: string;
  };
};

export function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [selectedScreenshot, setSelectedScreenshot] = useState<{
    projectId: string;
    index: number;
  } | null>(null);
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const projects: Project[] = [
    {
      id: "emr",
      title: "Enterprise EMR Platform",
      description:
        "Architected and developed a comprehensive EMR system serving 100+ healthcare providers and 100K+ patients across multiple facilities. Features include patient charting, appointment scheduling, prescription management, lab integrations, billing workflows, HIPAA-compliant audit logging, and role-based access control. Led a team of 3 developers while building critical features independently. Managed full lifecycle from requirements gathering through production deployment and ongoing maintenance.",
      tech: ["TypeScript", "Next.js", "React", "PostgreSQL", "PHP"],
      note: "Proprietary healthcare system (NDA protected)",
      icon: Building2Icon,
      accentGradient: "from-primary via-primary/80 to-emerald-400",
      demo: {
        title: "DemoEHR",
        description:
          "A showcase version demonstrating the architecture and interface patterns from my production EMR work. Built with sanitized sample data to demonstrate capabilities while respecting client confidentiality. Features patient management, clinical notes with SOAP format, vitals tracking, lab results, and multi-facility support.",
        screenshots: [
          {
            src: "https://assets.mariomon.dev/demo-images/patient-list.webp",
            alt: "Patient list view",
          },
          {
            src: "https://assets.mariomon.dev/demo-images/patient-overview.webp",
            alt: "Patient overview with demographics",
          },
          {
            src: "https://assets.mariomon.dev/demo-images/clinical-note.webp",
            alt: "Clinical note with vitals",
          },
          {
            src: "https://assets.mariomon.dev/demo-images/provider-profile.webp",
            alt: "Provider profile",
          },
        ],
        videoSrc: "https://assets.mariomon.dev/emr-template.mp4",
        videoPoster: "https://assets.mariomon.dev/demo-images/patient-overview.webp",
      },
    },
    {
      id: "insurance",
      title: "Insurance Verification Automation",
      description:
        "Built a dual-system architecture (web app + automation bot) that can process 200+ patient verifications daily with 90%+ automatic success rate. Reduced manual verification workload from 8 hours to under 1 hour per day, saving 150+ hours monthly. Led a team of 3 developers while building critical features independently. System handles data collection, automated eligibility checks with insurance providers, and exception handling for manual review.",
      tech: ["TypeScript", "Node.js", "PostgreSQL", "Puppeteer", "Next.js"],
      note: "Enterprise confidential project",
      icon: BotIcon,
      accentGradient: "from-primary via-emerald-500 to-teal-500",
      demo: {
        title: "InsVerify",
        description:
          "A demonstration version showcasing the automation workflows and interface patterns from my production verification system. Features queue management, real-time eligibility checks, batch processing, and intelligent error handling with manual review queues. All built with sanitized sample data to demonstrate capabilities while respecting client confidentiality.",
        screenshots: [
          {
            src: "https://assets.mariomon.dev/demo-images/insverify-1.webp",
            alt: "Queue management dashboard",
          },
          {
            src: "https://assets.mariomon.dev/demo-images/insverify-2.webp",
            alt: "Patient verification status list",
          },
          {
            src: "https://assets.mariomon.dev/demo-images/insverify-3.webp",
            alt: "Eligibility results and documents",
          },
          {
            src: "https://assets.mariomon.dev/demo-images/insverify-4.webp",
            alt: "Verification history and audit trail",
          },
        ],
        videoSrc: "https://assets.mariomon.dev/insurance-verification.mp4",
        videoPoster: "https://assets.mariomon.dev/demo-images/insverify-1.webp",
      },
    },
    {
      id: "mobile",
      title: "Healthcare Provider Mobile App",
      description:
        "Developed native iOS application for healthcare providers to use during patient visits on iPad. Built for speed and efficiency, enabling providers to capture wound photography with precise measurements, manage prescriptions, schedule appointments, and access patient records. Led a team of 3 developers while building critical features independently. Optimized for offline-first operation with seamless EMR synchronization.",
      tech: ["Swift", "SwiftUI", "REST APIs", "Offline-First"],
      note: "Client proprietary application",
      icon: SmartphoneIcon,
      accentGradient: "from-teal-400 via-emerald-500 to-primary",
    },
    {
      id: "pulse",
      title: "Pulse",
      description:
        "A showcase landing page demonstrating the Apple-style scrollytelling technique with scroll-driven canvas animations. Features frame sequence animations where video frames render based on scroll position, creating smooth product reveals and 360° rotations. Built with Astro for zero-JS-by-default performance, GSAP ScrollTrigger for animations, and AI-generated assets.",
      tech: ["Astro", "TypeScript", "GSAP", "Tailwind CSS", "Canvas API"],
      icon: CircleDotIcon,
      accentGradient: "from-emerald-500 via-teal-500 to-cyan-500",
      demo: {
        title: "Pulse",
        description: "",
        screenshots: [
          {
            src: "https://assets.mariomon.dev/demo-images/pulse-hero.webp",
            alt: "Hero section with smart ring and health metrics",
          },
          {
            src: "https://assets.mariomon.dev/demo-images/pulse-features.webp",
            alt: "Features section with stress detection and focus zones",
          },
          {
            src: "https://assets.mariomon.dev/demo-images/pulse-app.webp",
            alt: "Companion app preview with sleep tracking dashboard",
          },
          {
            src: "https://assets.mariomon.dev/demo-images/pulse-how-it-works.webp",
            alt: "How it works section with step-by-step guide",
          },
        ],
        videoSrc: "https://assets.mariomon.dev/pulse-demo.mp4",
        videoPoster: "https://assets.mariomon.dev/demo-images/pulse-poster.webp",
        liveUrl: "https://pulse.mariomon.dev",
      },
    },
  ];

  const handleCardClick = (projectId: string) => {
    if (expandedProject === projectId) {
      setExpandedProject(null);
      setPlayingVideo(null);
    } else {
      setExpandedProject(projectId);
      setPlayingVideo(null);
    }
  };

  return (
    <section className="section-container border-t border-border/50">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Projects
          </h2>
          <div className="h-1 w-12 bg-primary rounded" />
        </div>

        <div className="grid gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            const isExpanded = expandedProject === project.id;
            const isPlaying = playingVideo === project.id;
            const hasDemo = !!project.demo;

            return (
              <Card
                key={project.id}
                className={`group relative overflow-hidden border-border/30 bg-card/50 backdrop-blur-sm transition-all duration-500 ${
                  isExpanded
                    ? "border-primary/40 shadow-[0_0_60px_-12px] shadow-primary/25"
                    : "hover:border-primary/40 hover:shadow-[0_0_40px_-12px] hover:shadow-primary/20"
                }`}
              >
                {/* Gradient accent bar */}
                <div
                  className={`h-1 w-full bg-linear-to-r ${
                    project.accentGradient
                  } ${
                    isExpanded
                      ? "opacity-100"
                      : "opacity-80 group-hover:opacity-100"
                  } transition-opacity`}
                />

                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none">
                  <svg
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <pattern
                        id={`grid-${project.id}`}
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
                    <rect
                      width="100%"
                      height="100%"
                      fill={`url(#grid-${project.id})`}
                    />
                  </svg>
                </div>

                {/* Card Content */}
                <div className="relative p-5 sm:p-6">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${project.accentGradient} shadow-lg shadow-primary/20 group-hover:shadow-primary/30 transition-shadow`}
                    >
                      <Icon
                        className="h-6 w-6 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground text-xl leading-tight tracking-tight">
                        {project.title}
                      </h3>
                      {project.note && (
                        <div className="flex items-center gap-1.5 mt-1">
                          <LockKeyholeIcon className="h-3 w-3 text-muted-foreground/60 shrink-0" />
                          <p className="text-xs text-muted-foreground/70 italic">
                            {project.note}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-md bg-primary/8 dark:bg-primary/12 px-2.5 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20 transition-colors group-hover:bg-primary/12 dark:group-hover:bg-primary/18"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Demo toggle button */}
                  {hasDemo && (
                    <div className="pt-4 border-t border-border/30">
                      <button
                        onClick={() => handleCardClick(project.id)}
                        className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
                      >
                        <EyeIcon className="h-4 w-4" />
                        <span>
                          {isExpanded ? "Hide Demo" : `View Demo: ${project.demo!.title}`}
                        </span>
                        <ChevronDownIcon
                          className={`h-4 w-4 transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                  )}
                </div>

                {/* Expanded Demo Content */}
                {hasDemo && (
                  <div
                    ref={(el) => {
                      contentRefs.current[project.id] = el;
                    }}
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      isExpanded
                        ? "max-h-[2000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="relative px-5 pb-6 sm:px-6 space-y-6">
                      {/* Separator */}
                      <div className="h-px bg-linear-to-r from-transparent via-border to-transparent" />

                      {/* Demo Header with Live Demo button */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            Demo Version
                          </span>
                          <span className="text-lg font-semibold text-foreground">
                            {project.demo!.title}
                          </span>
                        </div>
                        {project.demo!.liveUrl && (
                          <Button
                            asChild
                            size="sm"
                            className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 border-primary shadow-sm shadow-primary/20"
                          >
                            <a
                              href={project.demo!.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLinkIcon className="h-4 w-4" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>

                      {/* Video Section */}
                      {project.demo!.videoSrc && project.demo!.videoPoster && (
                        <div className="relative aspect-video rounded-lg overflow-hidden bg-black/5 border border-border/50">
                          {!isPlaying ? (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setPlayingVideo(project.id);
                              }}
                              className="absolute inset-0 flex items-center justify-center group/play cursor-pointer"
                            >
                              <Image
                                src={project.demo!.videoPoster}
                                alt={`${project.demo!.title} preview`}
                                fill
                                unoptimized
                                className="object-cover"
                              />
                              <div className="absolute inset-0 bg-black/30 group-hover/play:bg-black/40 transition-colors" />
                              <div className="relative z-10 flex items-center gap-2 bg-white/90 dark:bg-black/90 px-6 py-3 rounded-full shadow-lg group-hover/play:scale-105 transition-transform">
                                <PlayIcon className="h-6 w-6 text-primary" />
                                <span className="font-medium text-foreground">
                                  Watch Demo
                                </span>
                              </div>
                            </button>
                          ) : (
                            <video
                              src={project.demo!.videoSrc}
                              controls
                              autoPlay
                              className="w-full h-full"
                            >
                              Your browser does not support the video tag.
                            </video>
                          )}
                        </div>
                      )}

                      {/* Demo Description */}
                      {project.demo!.description && (
                        <p className="text-muted-foreground leading-relaxed">
                          {project.demo!.description}
                        </p>
                      )}

                      {/* Screenshots Gallery */}
                      {project.demo!.screenshots &&
                        project.demo!.screenshots.length > 0 && (
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                            {project.demo!.screenshots.map((screenshot, index) => (
                              <button
                                key={index}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedScreenshot({
                                    projectId: project.id,
                                    index,
                                  });
                                }}
                                className="relative aspect-video rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-all group/thumb cursor-pointer hover:shadow-lg hover:shadow-primary/10"
                              >
                                <Image
                                  src={screenshot.src}
                                  alt={screenshot.alt}
                                  fill
                                  unoptimized
                                  className="object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-2 opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                                  <p className="text-xs text-white text-center">
                                    {screenshot.alt}
                                  </p>
                                </div>
                              </button>
                            ))}
                          </div>
                        )}
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Lightbox for screenshots */}
        {selectedScreenshot && (
          <Lightbox
            images={
              projects.find((p) => p.id === selectedScreenshot.projectId)
                ?.demo?.screenshots || []
            }
            selectedIndex={selectedScreenshot.index}
            onClose={() => setSelectedScreenshot(null)}
            onNavigate={(index) =>
              setSelectedScreenshot((prev) =>
                prev ? { ...prev, index } : null
              )
            }
          />
        )}
      </div>
    </section>
  );
}

"use client";

import { Card } from "@/components/ui/card";
import { Lightbox } from "@/components/ui/lightbox";
import {
  PlayIcon,
  Building2Icon,
  BotIcon,
  SmartphoneIcon,
  LockKeyholeIcon,
  ActivityIcon,
  ShieldCheckIcon,
  ChevronDownIcon,
  ExternalLinkIcon,
  CircleDotIcon,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

type ShowcaseProject = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  icon: LucideIcon;
  accentGradient: string;
  screenshots?: { src: string; alt: string }[];
  videoSrc?: string;
  videoPoster?: string;
  liveUrl?: string;
};

export function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [selectedScreenshot, setSelectedScreenshot] = useState<{
    projectId: string;
    index: number;
  } | null>(null);
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

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

  const showcaseProjects: ShowcaseProject[] = [
    {
      id: "demoehr",
      title: "DemoEHR",
      tagline: "Modern EHR architecture & interface design patterns",
      description:
        "A personal project demonstrating modern EHR architecture and interface design patterns developed through years of healthcare software experience. Features patient management, clinical notes with SOAP format, vitals tracking, lab results, provider profiles, and multi-facility support. Built to showcase full-stack development capabilities in healthcare software.",
      tech: ["TypeScript", "Next.js", "React", "PostgreSQL", "Tailwind CSS"],
      icon: ActivityIcon,
      accentGradient: "from-accent via-teal-400 to-emerald-500",
      screenshots: [
        {
          src: "https://assets.mariomon.dev/patient-list.jpg",
          alt: "Patient list view",
        },
        {
          src: "https://assets.mariomon.dev/patient-overview.jpg",
          alt: "Patient overview with demographics",
        },
        {
          src: "https://assets.mariomon.dev/clinical-note.jpg",
          alt: "Clinical note with vitals",
        },
        {
          src: "https://assets.mariomon.dev/provider-profile.jpg",
          alt: "Provider profile",
        },
      ],
      videoSrc: "https://assets.mariomon.dev/emr-template.mp4",
      videoPoster: "https://assets.mariomon.dev/patient-overview.jpg",
    },
    {
      id: "insverify",
      title: "InsVerify",
      tagline: "Insurance verification automation platform",
      description:
        "A demonstration of automated insurance verification workflows. Features real-time eligibility checks, batch processing capabilities, and intelligent error handling with manual review queues. Built to showcase automation architecture patterns in healthcare administration.",
      tech: ["TypeScript", "Node.js", "React", "PostgreSQL", "Puppeteer"],
      icon: ShieldCheckIcon,
      accentGradient: "from-cyan-500 via-accent to-teal-500",
      screenshots: [
        {
          src: "https://assets.mariomon.dev/insverify-1.jpg",
          alt: "Queue management dashboard",
        },
        {
          src: "https://assets.mariomon.dev/insverify-2.jpg",
          alt: "Patient verification status list",
        },
        {
          src: "https://assets.mariomon.dev/insverify-3.jpg",
          alt: "Eligibility results and documents",
        },
        {
          src: "https://assets.mariomon.dev/insverify-4.jpg",
          alt: "Verification history and audit trail",
        },
      ],
      videoSrc: "https://assets.mariomon.dev/insurance-verification.mp4",
      videoPoster: "https://assets.mariomon.dev/insverify-1.jpg",
    },
    {
      id: "pulse",
      title: "Pulse",
      tagline: "Apple-style scrollytelling landing page",
      description:
        "A showcase landing page demonstrating the Apple-style scrollytelling technique with scroll-driven canvas animations. Features frame sequence animations where video frames render based on scroll position, creating smooth product reveals and 360° rotations. Built with Astro for zero-JS-by-default performance, GSAP ScrollTrigger for animations, and AI-generated assets from Google Flow and Nano Banana Pro.",
      tech: ["Astro", "TypeScript", "GSAP", "Tailwind CSS", "Canvas API"],
      icon: CircleDotIcon,
      accentGradient: "from-emerald-500 via-teal-500 to-cyan-500",
      screenshots: [
        {
          src: "https://assets.mariomon.dev/pulse-hero.png",
          alt: "Hero section with smart ring and health metrics",
        },
        {
          src: "https://assets.mariomon.dev/pulse-features.png",
          alt: "Features section with stress detection and focus zones",
        },
        {
          src: "https://assets.mariomon.dev/pulse-app.png",
          alt: "Companion app preview with sleep tracking dashboard",
        },
        {
          src: "https://assets.mariomon.dev/pulse-how-it-works.png",
          alt: "How it works section with step-by-step guide",
        },
      ],
      videoPoster: "https://assets.mariomon.dev/pulse-hero.png",
      liveUrl: "https://pulse.mariomon.dev",
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
                    className={`h-1 w-full bg-linear-to-r ${project.accentGradient} opacity-80 group-hover:opacity-100 transition-opacity`}
                  />

                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none">
                    <svg
                      className="w-full h-full"
                      xmlns="http://www.w3.org/2000/svg"
                    >
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
                      <rect
                        width="100%"
                        height="100%"
                        fill={`url(#grid-${index})`}
                      />
                    </svg>
                  </div>

                  <div className="relative flex flex-1 flex-col p-5 sm:p-6">
                    {/* Header with icon */}
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${project.accentGradient} shadow-lg shadow-accent/20 group-hover:shadow-accent/30 transition-shadow`}
                      >
                        <Icon
                          className="h-5 w-5 text-white"
                          strokeWidth={1.5}
                        />
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

        {/* Project Showcases */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-foreground sm:text-2xl">
              Project Showcases
            </h3>
            <div className="h-1 w-12 bg-accent/50 rounded" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {showcaseProjects.map((project) => {
              const Icon = project.icon;
              const isExpanded = expandedProject === project.id;
              const isPlaying = playingVideo === project.id;

              return (
                <Card
                  key={project.id}
                  className={`group relative overflow-hidden border-border/30 bg-card/50 backdrop-blur-sm transition-all duration-500 ${
                    isExpanded
                      ? "sm:col-span-2 border-accent/40 shadow-[0_0_60px_-12px] shadow-accent/25"
                      : "hover:border-accent/40 hover:shadow-[0_0_40px_-12px] hover:shadow-accent/20"
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
                          id={`showcase-grid-${project.id}`}
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
                        fill={`url(#showcase-grid-${project.id})`}
                      />
                    </svg>
                  </div>

                  {/* Preview Image with Watch Demo - visible in collapsed state */}
                  {!isExpanded && project.videoPoster && (
                    <button
                      onClick={() => handleCardClick(project.id)}
                      className="relative w-full aspect-video overflow-hidden cursor-pointer group/preview focus:outline-none"
                    >
                      <Image
                        src={project.videoPoster}
                        alt={`${project.title} preview`}
                        fill
                        priority
                        unoptimized
                        className="object-cover transition-transform duration-500 group-hover/preview:scale-105"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-black/30 group-hover/preview:from-black/70 group-hover/preview:via-black/30 transition-colors" />

                      {/* Watch Demo button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex items-center gap-3 bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-2xl group-hover/preview:scale-105 group-hover/preview:bg-black/90 transition-all duration-300 ring-1 ring-white/10">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
                            <PlayIcon
                              className="h-4 w-4 text-white ml-0.5"
                              fill="white"
                            />
                          </div>
                          <span className="font-semibold text-white text-base">
                            Watch Demo
                          </span>
                        </div>
                      </div>
                    </button>
                  )}

                  {/* Collapsed Card Header - Always visible and clickable */}
                  <button
                    onClick={() => handleCardClick(project.id)}
                    className="relative w-full text-left p-5 sm:p-6 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
                  >
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${
                          project.accentGradient
                        } shadow-lg shadow-accent/20 group-hover:shadow-accent/30 transition-all duration-300 ${
                          isExpanded ? "scale-110" : ""
                        }`}
                      >
                        <Icon
                          className="h-6 w-6 text-white"
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* Title and Tagline */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground text-lg leading-tight tracking-tight">
                          {project.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Expand/Collapse indicator */}
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 transition-all duration-300 ${
                          isExpanded
                            ? "rotate-180 bg-accent/20"
                            : "group-hover:bg-accent/15"
                        }`}
                      >
                        <ChevronDownIcon className="h-4 w-4 text-accent" />
                      </div>
                    </div>

                    {/* Tech stack pills - visible in collapsed state */}
                    <div
                      className={`flex flex-wrap gap-1.5 mt-4 transition-all duration-300 ${
                        isExpanded
                          ? "opacity-0 h-0 mt-0 overflow-hidden"
                          : "opacity-100"
                      }`}
                    >
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-md bg-accent/8 dark:bg-accent/12 px-2 py-0.5 text-xs font-medium text-accent ring-1 ring-inset ring-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="inline-flex items-center rounded-md bg-muted/50 px-2 py-0.5 text-xs font-medium text-muted-foreground">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                  </button>

                  {/* Expanded Content */}
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

                      {/* Video Section */}
                      {project.videoSrc && project.videoPoster && (
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
                                src={project.videoPoster}
                                alt={`${project.title} preview`}
                                fill
                                unoptimized
                                className="object-cover"
                              />
                              <div className="absolute inset-0 bg-black/30 group-hover/play:bg-black/40 transition-colors" />
                              <div className="relative z-10 flex items-center gap-2 bg-white/90 dark:bg-black/90 px-6 py-3 rounded-full shadow-lg group-hover/play:scale-105 transition-transform">
                                <PlayIcon className="h-6 w-6 text-accent" />
                                <span className="font-medium text-foreground">
                                  Watch Demo
                                </span>
                              </div>
                            </button>
                          ) : (
                            <video
                              src={project.videoSrc}
                              controls
                              autoPlay
                              className="w-full h-full"
                            >
                              Your browser does not support the video tag.
                            </video>
                          )}
                        </div>
                      )}

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* Screenshots Gallery */}
                      {project.screenshots &&
                        project.screenshots.length > 0 && (
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                            {project.screenshots.map((screenshot, index) => (
                              <button
                                key={index}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedScreenshot({
                                    projectId: project.id,
                                    index,
                                  });
                                }}
                                className="relative aspect-video rounded-lg overflow-hidden border border-border/50 hover:border-accent/50 transition-all group/thumb cursor-pointer hover:shadow-lg hover:shadow-accent/10"
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

                      {/* Coming Soon placeholder for projects without screenshots */}
                      {(!project.screenshots ||
                        project.screenshots.length === 0) && (
                        <div className="relative aspect-video rounded-lg overflow-hidden border border-dashed border-border/50 bg-muted/20 flex items-center justify-center">
                          <div className="text-center space-y-2">
                            <div
                              className={`inline-flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br ${project.accentGradient} opacity-50`}
                            >
                              <Icon
                                className="h-6 w-6 text-white"
                                strokeWidth={1.5}
                              />
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Demo coming soon
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Full Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded-md bg-accent/8 dark:bg-accent/12 px-3 py-1 text-sm font-medium text-accent ring-1 ring-inset ring-accent/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Live URL if available */}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
                        >
                          <ExternalLinkIcon className="h-4 w-4" />
                          View Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Lightbox for screenshots */}
          {selectedScreenshot && (
            <Lightbox
              images={
                showcaseProjects.find(
                  (p) => p.id === selectedScreenshot.projectId
                )?.screenshots || []
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
      </div>
    </section>
  );
}

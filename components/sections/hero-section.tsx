import { Button } from "@/components/ui/button";
import { GithubIcon, MailIcon, LinkedinIcon } from "lucide-react";

export function HeroSection() {
  return (
    <section className="section-container flex flex-col items-center justify-center text-center">
      <div className="mb-6 space-y-2">
        <h1 className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl text-balance">
          Full-Stack Engineer
        </h1>
        <p className="text-lg text-muted-foreground sm:text-xl">
          Building healthcare software that doesn&apos;t break at 2am
        </p>
        <p className="text-sm text-accent/80 italic pt-2">
          Portfolio under construction
        </p>
      </div>

      <p className="mb-12 max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
        5+ years specializing in EMR systems, HIPAA compliance, and
        production-ready healthcare software that healthcare professionals
        actually use and rely on.
      </p>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        <Button asChild variant="default" size="lg">
          <a
            href="https://github.com/mariomondev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <GithubIcon className="size-4" />
            GitHub
          </a>
        </Button>
        <Button asChild variant="ghost" size="lg">
          <a
            href="https://linkedin.com/in/mariomondev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border"
          >
            <LinkedinIcon className="size-4" />
            LinkedIn
          </a>
        </Button>
        <Button asChild variant="ghost" size="lg">
          <a
            href="mailto:contact@mariomon.dev"
            className="flex items-center gap-2 border"
          >
            <MailIcon className="size-4" />
            Email
          </a>
        </Button>
      </div>
    </section>
  );
}

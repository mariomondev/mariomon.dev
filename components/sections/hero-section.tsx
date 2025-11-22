import { Button } from "@/components/ui/button";
import { GithubIcon, MailIcon, LinkedinIcon } from "lucide-react";

export function HeroSection() {
  return (
    <section className="section-container flex flex-col items-center justify-center text-center">
      <div className="mb-6 space-y-4">
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
          mariomon.dev
        </div>
        <h1 className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl text-balance">
          <span className="block text-2xl sm:text-3xl text-primary mb-2 font-medium">
            Mario Montano
          </span>
          Senior Full-Stack Engineer
        </h1>
        <p className="text-lg text-muted-foreground sm:text-xl">
          Turning complex requirements into reliable, production-ready systems
        </p>
      </div>

      <p className="mb-12 max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
        8+ years of full-stack development, with 6+ years specialized in
        healthcare systems, EMR architecture, HIPAA compliance, and building
        scalable applications trusted by thousands of users.
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
            href="mailto:mariomontano.dev@gmail.com"
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

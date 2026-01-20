import { Button } from "@/components/ui/button";
import { GithubIcon, MailIcon, LinkedinIcon } from "lucide-react";

export function ContactSection() {
  return (
    <section className="section-container border-t border-border/50">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Let&apos;s Connect
          </h2>
          <div className="h-1 w-12 bg-primary rounded" />
        </div>

        <p className="max-w-2xl text-base text-muted-foreground leading-relaxed sm:text-lg">
          Open to senior full-stack roles. Healthcare is where most of my
          experience is, but I&apos;m flexible on industry. If you have something
          that might be a match, I&apos;d love to hear from you.
        </p>

        <div className="flex flex-wrap gap-3 sm:gap-4">
          <Button asChild variant="default" size="lg">
            <a
              href="mailto:mariomontano.dev@gmail.com"
              className="flex items-center gap-2"
            >
              <MailIcon className="size-5" />
              Email
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a
              href="https://github.com/mariomondev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border"
            >
              <GithubIcon className="size-5" />
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
              <LinkedinIcon className="size-5" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

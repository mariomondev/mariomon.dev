import Image from "next/image";
import { ArrowDownRightIcon, MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="top" className="border-b">
      <div className="site-container grid min-h-[calc(100svh-4.5rem)] items-center gap-14 py-16 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16 lg:py-24">
        <div className="max-w-3xl">
          <p className="mb-6 text-lg font-semibold text-primary">
            Mario Montano, full-stack engineer
          </p>

          <h1 className="text-[clamp(3.35rem,7.2vw,6rem)] font-semibold leading-[0.96] tracking-[-0.04em]">
            Systems that keep complex work moving.
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-8 text-muted-foreground sm:text-2xl sm:leading-9">
            I build product software and automation for workflows where
            context, reliability, and the next action matter.
          </p>

          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            Currently building internal automation at Ventura Travel.
            Previously, I built healthcare systems from the ground up at
            Omniwound.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-6 text-base">
              <a href="#experience">
                See current experience
                <ArrowDownRightIcon className="size-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 border-border bg-transparent px-6 text-base"
            >
              <a href="mailto:mario@mariomon.dev">
                <MailIcon className="size-5" />
                Email Mario
              </a>
            </Button>
          </div>
        </div>

        <figure className="settle-in w-full max-w-2xl lg:justify-self-end">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border bg-surface">
            <Image
              src="https://assets.mariomon.dev/demo-images/patient-overview.webp"
              alt="DemoEHR patient workspace showing demographics, care details, and clinical navigation"
              fill
              preload
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover object-left-top"
            />
          </div>
          <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">
              DemoEHR patient workspace
            </span>
            <span>Sanitized product environment</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

import { CheckCircleIcon } from "lucide-react";

export function HighlightsSection() {
  const highlights = [
    "Architected and maintain enterprise EMR platform serving 100+ healthcare providers and 100K+ patients across multiple facilities",
    "Developed insurance verification automation processing 200+ patients daily with 90%+ success rate, saving 150+ hours of manual work monthly",
    "Built native iOS application for healthcare providers enabling offline-first patient care with wound photography, measurements, and prescription management",
    "Mentor development teams and drive architectural decisions as primary technical authority in a fast-growing healthcare startup",
    "Building open-source EMR showcase to demonstrate architecture and coding practices (coming soon)",
  ];

  return (
    <section className="section-container border-t border-border/50">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Highlights
          </h2>
          <div className="h-1 w-12 bg-accent rounded" />
        </div>

        <div className="space-y-4">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex gap-3 sm:gap-4">
              <CheckCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-accent mt-0.5" />
              <p className="text-base text-muted-foreground leading-relaxed sm:text-lg">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { CheckCircleIcon } from "lucide-react";

export function HighlightsSection() {
  const highlights = [
    "Built EMR systems from scratch serving thousands of healthcare professionals",
    "Created automation bots saving 100+ hours per month in manual processes",
    "Managed legacy system migrations with zero downtime",
    "Architected HIPAA-compliant infrastructure with comprehensive audit trails",
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

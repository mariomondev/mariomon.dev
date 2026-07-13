const responsibilities = [
  {
    title: "Architecture",
    description:
      "Turn ambiguous requirements into system boundaries, data models, APIs, and practical delivery plans.",
  },
  {
    title: "Delivery",
    description:
      "Build critical features, make tradeoffs visible, and stay responsible through release and production support.",
  },
  {
    title: "Technical leadership",
    description:
      "Guide developers, align stakeholders, and create enough structure for teams to move without losing quality.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-container border-t">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <h2 className="section-heading max-w-lg">Ownership, not handoffs.</h2>
        </div>

        <div>
          <div className="max-w-3xl space-y-6">
            <p className="body-copy text-foreground">
              I started building software in 2017. Since 2019, my work has
              moved from building a healthcare platform from the ground up to
              coordinating global travel operations through automation.
            </p>
            <p className="body-copy">
              Across both domains, I work through product decisions,
              architecture, implementation, releases, and production support.
              Reliability, privacy, and operational context are product
              requirements from the start.
            </p>
          </div>

          <dl className="mt-12 border-t">
            {responsibilities.map((item) => (
              <div
                key={item.title}
                className="grid gap-3 border-b py-7 sm:grid-cols-[12rem_1fr] sm:gap-8"
              >
                <dt className="text-lg font-semibold text-foreground">
                  {item.title}
                </dt>
                <dd className="max-w-2xl leading-7 text-muted-foreground">
                  {item.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

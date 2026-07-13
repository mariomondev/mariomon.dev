import { AutomationRelay } from "@/components/experience/automation-relay";

const experience = [
  {
    company: "Ventura Travel",
    role: "Full-Stack Developer, Automations",
    start: "2026-02",
    dates: "Feb 2026 - Present",
    current: true,
    summary:
      "Build the automation layer that turns business events into coordinated operational work.",
  },
  {
    company: "Omniwound",
    role: "Full-Stack Developer -> Senior Software Engineer",
    start: "2019-07",
    end: "2026-01",
    dates: "Jul 2019 - Jan 2026",
    current: false,
    summary:
      "Joined as a founding engineer, built a healthcare platform from the ground up, and later led architecture, delivery, and developer guidance.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="section-container">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <div>
          <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Experience
          </p>
          <h2 className="section-heading max-w-xl">
            From care systems to global operations.
          </h2>
        </div>
        <p className="body-copy max-w-2xl lg:pt-10">
          The domain changed, but the responsibility did not: understand the
          work, preserve its context, and build systems people can trust when
          the next action matters.
        </p>
      </div>

      <ol className="mt-14 border-t sm:mt-18">
        {experience.map((item) => (
          <li
            key={item.company}
            className="grid gap-5 border-b py-8 lg:grid-cols-[11rem_1fr_1.2fr] lg:gap-10 lg:py-10"
          >
            <p className="font-mono text-sm leading-6 text-muted-foreground">
              <time dateTime={item.start}>{item.dates.split(" - ")[0]}</time>
              {" - "}
              {item.end ? (
                <time dateTime={item.end}>{item.dates.split(" - ")[1]}</time>
              ) : (
                "Present"
              )}
            </p>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-semibold tracking-[-0.025em]">
                  {item.company}
                </h3>
                {item.current ? (
                  <span className="border border-primary/60 px-2 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary">
                    Current
                  </span>
                ) : null}
              </div>
              <p className="mt-2 font-medium text-foreground">{item.role}</p>
            </div>
            <p className="max-w-2xl leading-7 text-muted-foreground">
              {item.summary}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-20 border-t pt-12 lg:mt-28 lg:pt-16">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Ventura Travel / current work
            </p>
            <h3 className="mt-5 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              What happens after the event.
            </h3>
          </div>
          <div className="space-y-5 lg:pt-8">
            <p className="body-copy text-foreground">
              At Ventura Travel, I build the automation layer that turns
              business events into coordinated operational work.
            </p>
            <p className="body-copy">
              A signal can require communication, task creation, provider
              follow-up, and an internal handoff. The system carries the
              context so specialists can focus on human judgment.
            </p>
            <p className="text-sm leading-6 text-muted-foreground">
              Current stack: TypeScript, Node.js, GraphQL, PostgreSQL, cloud
              infrastructure, Docker, and CI/CD.
            </p>
          </div>
        </div>

        <AutomationRelay />
      </div>
    </section>
  );
}

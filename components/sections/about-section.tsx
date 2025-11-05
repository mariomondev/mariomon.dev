export function AboutSection() {
  return (
    <section className="section-container border-t border-border/50">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            About
          </h2>
          <div className="h-1 w-12 bg-accent rounded" />
        </div>

        <div className="space-y-4 max-w-3xl">
          <p className="text-base text-muted-foreground leading-relaxed sm:text-lg">
            Hi, I&apos;m Mario 👋
          </p>
          <p className="text-base text-muted-foreground leading-relaxed sm:text-lg">
            I started programming in 2017 and transitioned to healthcare
            software in 2019. What began as curiosity turned into a passion for
            building systems that healthcare professionals rely on every day.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed sm:text-lg">
            Today, I&apos;m a senior full-stack engineer at a US healthcare
            startup, leading technical decisions and guiding development teams.
            I&apos;m responsible for architectural decisions, solving complex
            technical problems, and delivering complete solutions from
            requirements to production.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="font-semibold text-foreground mb-2">Domain Expertise</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>HIPAA-compliant systems architecture</li>
              <li>EMR/EHR development & integration</li>
              <li>Protected Health Information (PHI) security</li>
              <li>Healthcare workflow automation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Technical Leadership</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>Mentoring and guiding development teams</li>
              <li>Architectural decision-making & system design</li>
              <li>Self-directed in ambiguous environments, establishing structure and best practices</li>
              <li>Stakeholder management & requirements gathering</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

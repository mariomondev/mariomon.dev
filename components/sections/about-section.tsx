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

        <p className="text-base text-muted-foreground leading-relaxed sm:text-lg max-w-3xl">
          I&apos;m a solo engineer at a US healthcare company with 5+ years
          building EMR systems end-to-end. I handle everything: requirements
          gathering, architecture, backend APIs, frontend development, database
          design, and deployment.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="font-semibold text-foreground mb-2">Expertise</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>HIPAA-compliant systems architecture</li>
              <li>EMR/EHR development</li>
              <li>Protected Health Information (PHI) security</li>
              <li>Audit trail implementation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Approach</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>Turn vague requirements into working software</li>
              <li>Build systems healthcare professionals use</li>
              <li>Full-stack ownership and accountability</li>
              <li>Production-first mentality</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

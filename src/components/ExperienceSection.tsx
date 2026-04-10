const experiences = [
  {
    period: "2025 — Present",
    company: "Welite Digital",
    role: "Fullstack Javascript Engineer",
    description: "Collaborating directly with overseas clients to deliver frontend & backend solutions.",
    remote: true,
  },
  {
    period: "2024 — 2025",
    company: "BnK Solution",
    role: "Frontend Team Lead",
    description: "Led 15 developers on enterprise banking systems. Oversaw architecture, code quality, and delivery.",
  },
  {
    period: "2022 — 2024",
    company: "ETC",
    role: "Frontend Engineer",
    description: "Designed frontend solutions for client business problems and ensured product delivery.",
  },
  {
    period: "2020 — 2022",
    company: "VMO",
    role: "Frontend Engineer",
    description: "Requirements collection from overseas clients, business analysis, and product development.",
  },
  {
    period: "2019 — 2020",
    company: "BnK Solution",
    role: "Frontend Engineer",
    description: "Implemented and maintained frontend codebases for enterprise projects.",
  },
  {
    period: "2019",
    company: "FPT Software",
    role: "Developer",
    description: "Developed internal tools integrated with existing systems.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-primary text-sm">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Experience</h2>
          <div className="h-px flex-1 gradient-line" />
        </div>
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-8 py-6 border-b border-border/50 hover:border-primary/30 transition-colors"
            >
              <p className="font-mono text-xs text-muted-foreground pt-1">
                {exp.period}
              </p>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">{exp.company}</h3>
                  {exp.remote && (
                    <span className="font-mono text-[10px] text-primary bg-primary/10 px-1.5 py-0.5 rounded">remote</span>
                  )}
                </div>
                <p className="font-mono text-xs text-primary/80 mt-0.5">{exp.role}</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

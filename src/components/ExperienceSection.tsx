const experiences = [
  {
    period: "09/2025 — Present",
    company: "Polish Outsourcing Company",
    role: "Fullstack Software Engineer",
    description: "Collaborate directly with overseas clients to analyze requirements and deliver frontend and backend solutions.",
    remote: true,
  },
  {
    period: "03/2023 — 09/2025",
    company: "Vietnamese Outsourcing Company",
    role: "Fullstack Software Engineer, Frontend Technical Lead",
    description: "Designed and implemented frontend solutions for client business problems and ensured readiness for client delivery.",
  },
  {
    period: "05/2019 — 09/2023",
    company: "Vietnamese Outsourcing Company",
    role: "Software Engineer",
    description: "Developed internal tools designed to integrate seamlessly with existing systems.",
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

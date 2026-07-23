const experiences = [
  {
    period: "09/2025 — Present",
    company: "Welite Digital",
    role: "Fullstack Javascript Engineer",
    description: "Collaborate directly with overseas clients to analyze requirements and deliver effective frontend and backend solutions.",
    remote: true,
  },
  {
    period: "03/2024 — 09/2025",
    company: "BnK Solution",
    role: "Frontend Engineer",
    description: "Served as Frontend Team Lead for banking client-side systems, leading and mentoring a team of 15 developers. Oversaw frontend architecture, code quality, and delivery across multiple modules.",
  },
  {
    period: "03/2022 — 02/2024",
    company: "ETC",
    role: "Frontend Engineer",
    description: "Designed and implemented frontend solutions to solve client business problems and ensured product readiness for client delivery.",
  },
  {
    period: "11/2020 — 03/2022",
    company: "VMO",
    role: "Frontend Developer",
    description: "Collaborated with the team to collect requirements from overseas clients, analyze business needs, and develop products for client handover.",
  },
  {
    period: "09/2019 — 10/2020",
    company: "BnK Solution",
    role: "Frontend Developer",
    description: "Implemented and maintained frontend codebases.",
  },
  {
    period: "06/2019 — 08/2019",
    company: "FPT Software",
    role: "Developer",
    description: "Developed internal tools designed to integrate seamlessly with systems.",
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

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "Angular", "Micro-frontend", "SocketIO", "SSE"] },
  { category: "State Mgmt", items: ["Redux Toolkit", "TanStack Query", "React Context", "RxJS", "MobX"] },
  { category: "UI / CSS", items: ["MUI", "Ant Design", "Taiga UI", "Tailwind CSS", "Bootstrap"] },
  { category: "DevOps", items: ["Docker", "GitHub Actions", "GitLab CI", "Kong Gateway"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="px-6 py-24 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-primary text-sm">02.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Skills</h2>
          <div className="h-px flex-1 gradient-line" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-xs text-primary mb-4 tracking-wider">
                {'<'}{group.category}{' />'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-mono rounded border border-border bg-secondary text-secondary-foreground hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

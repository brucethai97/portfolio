import { Users } from "lucide-react";

const projects = [
  {
    name: "Thinkbond",
    role: "Fullstack Engineer",
    team: 2,
    description: "Global bond investment platform connecting investors with brokers worldwide — proposals, reports, analytics, and Stripe payments.",
    tech: ["Angular 18", "Express.js", "Domino", "Stripe", "Tailwind CSS", "GitHub Actions"],
  },
  {
    name: "FXHUB",
    role: "Frontend Technical Lead",
    team: 15,
    description: "Foreign exchange platform for BIDV supporting currency exchange, transaction management, and secure financial workflows.",
    tech: ["Angular 16", "Micro-frontend", "Taiga UI", "React", "Kong", "Keycloak", "Ag-grid", "Spring Boot"],
  },
  {
    name: "EVideos",
    role: "Frontend Technical Lead",
    team: 15,
    description: "AI-powered traffic monitoring platform with real-time violation detection and interactive map alerts via event-driven architecture.",
    tech: ["Angular 16", "Angular Material", "RxJS", "Leaflet", "OpenStreetMap", "SSE", "Electron", "NestJS"],
  },
  {
    name: "EPAY",
    role: "Mobile Developer",
    team: 15,
    description: "High-traffic e-wallet for Android & iOS with secure deposits, withdrawals, transfers, and KYC identity verification.",
    tech: ["React Native", "CodePush", "AppCenter"],
  },
  {
    name: "Amperfi",
    role: "Frontend Developer",
    team: 10,
    description: "Internal AI project management platform transforming workforce, datasets, and models into production-ready AI solutions.",
    tech: ["React", "MUI", "Elasticsearch"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <span className="font-mono text-primary text-sm">03.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Projects</h2>
          <div className="h-px flex-1 gradient-line" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group p-5 rounded-lg bg-card border border-border hover:border-primary/30 hover:glow transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">{project.name}</h3>
                  <p className="font-mono text-xs text-primary/70 mt-0.5">{project.role}</p>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Users size={12} />
                  <span className="font-mono text-xs">{project.team}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-[10px] font-mono rounded bg-secondary text-muted-foreground border border-border">
                    {t}
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

export default ProjectsSection;

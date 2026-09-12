import { Users } from "lucide-react";

const projects = [
  {
    name: "My Candidate AI",
    role: "Software Engineer",
    team: 2,
    description: "Developed modern user-centric websites, implemented SEO best practices, and integrated Stripe payment gateways.",
    tech: ["Next.js", "Domino", "Stripe", "Tailwind CSS", "GitHub Actions"],
  },
  {
    name: "FXHUB",
    role: "Frontend Technical Lead",
    team: 15,
    description: "Collaborated with the client BA team to propose optimal frontend solutions, then led implementation and delivery.",
    tech: ["Angular 16", "Micro-frontend", "Taiga UI", "Kong API Gateway", "Keycloak", "Ag-grid"],
  },
  {
    name: "MSM",
    role: "Software Engineer",
    team: 12,
    description: "Internal workflow management system for multiple business processes.",
    tech: ["React", "MUI", "CKEditor", "GitLab CI"],
  },
  {
    name: "ITS",
    role: "Software Engineer",
    team: 10,
    description: "Designed and implemented a highway route management system for large-scale infrastructure projects.",
    tech: ["React", "Ant Design", "RTK Query", "Leaflet", "OpenStreetMap"],
  },
  {
    name: "EVideos",
    role: "Software Engineer",
    team: 7,
    description: "Designed and implemented a system to manage AI traffic cameras, detect traffic behaviors, and provide real-time map alerts.",
    tech: ["React", "OpenStreetMap", "Electron", "Socket.IO"],
  },
  {
    name: "Egene",
    role: "Software Engineer (Mobile)",
    team: 8,
    description: "Developed cross-platform mobile applications for task management, calendars, check-ins, and approval workflows.",
    tech: ["React Native", "CodePush", "AppCenter"],
  },
  {
    name: "EPAY",
    role: "Software Engineer (Mobile)",
    team: 15,
    description: "Secure e-wallet with optimized transaction flows on Android & iOS.",
    tech: ["React Native", "CodePush", "AppCenter"],
  },
  {
    name: "Amperfi",
    role: "Software Engineer",
    team: 10,
    description: "Worked with clients via daily syncs to implement a resource management platform for AI product development.",
    tech: ["React", "MUI"],
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

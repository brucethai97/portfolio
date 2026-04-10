import { Mail, MapPin, Linkedin, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 relative grid-bg">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="inline-block font-mono text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20 animate-fade-up">
          // senior frontend engineer
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mt-8 mb-6 animate-fade-up-delay-1 text-foreground tracking-tight">
          Phạm Hồng
          <span className="text-primary glow-text"> Thái</span>
        </h1>
        
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto animate-fade-up-delay-2">
          7+ years building large-scale enterprise web & mobile applications in 
          <span className="text-foreground font-medium"> banking</span>,
          <span className="text-foreground font-medium"> AI</span>, and
          <span className="text-foreground font-medium"> fintech</span>.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-5 mt-10 animate-fade-up-delay-3">
          <a href="mailto:brucethai97@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-mono">
            <Mail size={14} />
            brucethai97@gmail.com
          </a>
          <a href="https://linkedin.com/in/phamhongthai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-mono">
            <Linkedin size={14} />
            /in/phamhongthai
          </a>
          <span className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
            <MapPin size={14} />
            Ha Noi, VN
          </span>
        </div>
        
        <div className="mt-20 animate-fade-up-delay-3">
          <a href="#experience" className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

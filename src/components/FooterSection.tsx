const FooterSection = () => {
  return (
    <footer className="px-6 py-20 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-mono text-sm text-primary mb-4">// let's connect</p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Open to Opportunities
        </h2>
        <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
          Interested in building something great together? Let's talk.
        </p>
        <a
          href="mailto:brucethai97@gmail.com"
          className="inline-block px-6 py-2.5 rounded border border-primary text-primary font-mono text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:glow"
        >
          sendEmail()
        </a>
        <p className="font-mono text-xs text-muted-foreground mt-16">
          © {new Date().getFullYear()} Phạm Hồng Thái — Built with React + TypeScript
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;

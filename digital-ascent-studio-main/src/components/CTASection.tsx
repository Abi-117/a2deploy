import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const CTASection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 animated-gradient-bg" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(260_80%_60%_/_0.15),transparent_70%)]" />
    
    <div className="container mx-auto relative z-10">
      <ScrollReveal>
        <div className="glass-card p-12 md:p-20 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-purple/10 rounded-full blur-[60px]" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-neon-blue/10 rounded-full blur-[60px]" />
          
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-5 relative z-10">
            Ready to <span className="gradient-text">Transform</span> Your Business?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto relative z-10">
            Let's build something extraordinary together. Get in touch and let's discuss your next project.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-neon-purple to-neon-blue text-primary-foreground font-semibold transition-all duration-300 hover:shadow-[0_0_40px_-5px_hsl(260_80%_60%_/_0.5)] hover:scale-105 relative z-10"
          >
            Start Your Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CTASection;

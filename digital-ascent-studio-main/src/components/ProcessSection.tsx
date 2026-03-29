import { Lightbulb, PenTool, Code2, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { icon: Lightbulb, title: "Discovery", desc: "Understanding your business, goals, and target audience." },
  { icon: PenTool, title: "Design", desc: "Creating wireframes and high-fidelity mockups." },
  { icon: Code2, title: "Development", desc: "Building with modern tech stacks and best practices." },
  { icon: Rocket, title: "Launch & Support", desc: "Deploying, testing, and providing ongoing support." },
];

const ProcessSection = () => (
  <section id="process" className="section-padding relative overflow-hidden">
    <div className="container mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-neon-purple text-sm font-semibold uppercase tracking-widest">Our Process</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-5">
            How We <span className="gradient-text">Work</span>
          </h2>
        </div>
      </ScrollReveal>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-purple/50 via-neon-blue/50 to-transparent" />

        {steps.map((step, i) => (
          <ScrollReveal key={step.title} delay={i * 0.15} direction={i % 2 === 0 ? "left" : "right"}>
            <div className={`relative flex items-center mb-12 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-neon-purple -translate-x-1/2 glow-purple z-10" />

              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <div className={`glass-card-hover p-6 inline-block ${i % 2 === 0 ? "md:ml-auto" : ""}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-neon-purple/10 flex items-center justify-center">
                      <step.icon size={20} className="text-neon-purple" />
                    </div>
                    <span className="text-neon-purple font-heading font-bold text-sm">Step {i + 1}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;

import { Code2, Search, Megaphone, Target, Palette } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Custom websites and web applications built with modern frameworks and cutting-edge technology.",
    color: "from-neon-purple to-neon-blue",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Data-driven SEO strategies to boost your visibility, rankings, and organic traffic.",
    color: "from-neon-blue to-accent",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Comprehensive digital marketing campaigns that engage audiences and drive conversions.",
    color: "from-neon-pink to-neon-purple",
  },
  {
    icon: Target,
    title: "Paid Ads Management",
    desc: "Strategic paid advertising across Google, Meta, and more to maximize your ROI.",
    color: "from-accent to-neon-blue",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    desc: "Memorable brand identities and stunning visual designs that set you apart.",
    color: "from-neon-purple to-neon-pink",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-[120px]" />
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-neon-purple text-sm font-semibold uppercase tracking-widest">Our Services</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-5">
              What We <span className="gradient-text">Deliver</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              End-to-end digital solutions tailored to elevate your business.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <div className="glass-card-hover p-8 group h-full relative overflow-hidden">
                {/* Glow on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.color} blur-[80px]`} style={{ opacity: 0 }} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 bg-gradient-to-br from-neon-purple to-neon-blue" />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={26} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Users, Briefcase, Award, Clock } from "lucide-react";

const stats = [
  { icon: Briefcase, value: 150, suffix: "+", label: "Projects Delivered" },
  { icon: Users, value: 80, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 5, suffix: "+", label: "Years Experience" },
  { icon: Clock, value: 99, suffix: "%", label: "On-Time Delivery" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-heading text-4xl md:text-5xl font-bold gradient-text">
      {count}{suffix}
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute top-0 right-0 w-72 h-72 bg-neon-purple/5 rounded-full blur-[100px]" />
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-neon-purple text-sm font-semibold uppercase tracking-widest">About Us</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-5">
              Crafting Digital <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A Square Solutions is a forward-thinking digital agency specializing in web development, 
              digital marketing, and brand strategy. We transform ideas into powerful digital experiences.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="glass-card-hover p-6 md:p-8 text-center group">
                <div className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-neon-purple/20 transition-colors">
                  <stat.icon size={24} className="text-neon-purple" />
                </div>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

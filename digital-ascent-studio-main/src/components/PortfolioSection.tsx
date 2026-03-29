import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  { title: "E-Commerce Platform", category: "Web Development", gradient: "from-neon-purple/20 to-neon-blue/20" },
  { title: "SaaS Dashboard", category: "Web App", gradient: "from-neon-blue/20 to-accent/20" },
  { title: "Brand Identity System", category: "Branding", gradient: "from-neon-pink/20 to-neon-purple/20" },
  { title: "Marketing Campaign", category: "Digital Marketing", gradient: "from-accent/20 to-neon-blue/20" },
  { title: "SEO Growth Strategy", category: "SEO", gradient: "from-neon-purple/20 to-neon-pink/20" },
  { title: "Mobile App Design", category: "UI/UX Design", gradient: "from-neon-blue/20 to-neon-purple/20" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding relative">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-neon-purple text-sm font-semibold uppercase tracking-widest">Portfolio</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-5">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="glass-card-hover overflow-hidden group cursor-pointer"
              >
                <div className={`aspect-video bg-gradient-to-br ${project.gradient} relative flex items-center justify-center`}>
                  <div className="text-4xl font-heading font-bold text-foreground/10 group-hover:text-foreground/20 transition-colors">
                    {project.title.charAt(0)}
                  </div>
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="text-foreground" size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-neon-purple font-semibold uppercase tracking-wider">{project.category}</span>
                  <h3 className="font-heading text-lg font-bold mt-1">{project.title}</h3>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";
import ScrollReveal from "@/components/ScrollReveal";
import { TextReveal, GlowCard, StaggerContainer, StaggerItem } from "@/components/AnimationUtils";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "E-Commerce Platform", category: "Web Development", desc: "Full-stack e-commerce solution with payment integration and inventory management.", gradient: "from-neon-purple/20 to-neon-blue/20" },
  { title: "SaaS Dashboard", category: "Web App", desc: "Real-time analytics dashboard with interactive charts and team collaboration.", gradient: "from-neon-blue/20 to-accent/20" },
  { title: "Brand Identity System", category: "Branding", desc: "Complete brand overhaul including logo, guidelines, and marketing collateral.", gradient: "from-neon-pink/20 to-neon-purple/20" },
  { title: "Marketing Campaign", category: "Digital Marketing", desc: "Multi-channel marketing campaign achieving 5x ROI within 3 months.", gradient: "from-accent/20 to-neon-blue/20" },
  { title: "SEO Growth Strategy", category: "SEO", desc: "Organic traffic growth of 300% through technical SEO and content strategy.", gradient: "from-neon-purple/20 to-neon-pink/20" },
  // { title: "Mobile App Design", category: "UI/UX Design", desc: "Intuitive mobile experience with 4.8-star rating and 100k+ downloads.", gradient: "from-neon-blue/20 to-neon-purple/20" },
  { title: "Corporate Website", category: "Web Development", desc: "High-performance corporate site with CMS and multilingual support.", gradient: "from-neon-pink/20 to-accent/20" },
  { title: "Social Media Campaign", category: "Digital Marketing", desc: "Viral social campaign generating 2M impressions and 50k+ engagements.", gradient: "from-neon-purple/20 to-accent/20" },
];

const PortfolioPage = () => (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <CursorFollower />
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-20 px-4 relative">
      <div className="absolute inset-0 animated-gradient-bg opacity-50" />
      <div className="container mx-auto relative z-10 text-center max-w-4xl">
        <TextReveal>
          <span className="text-neon-purple text-sm font-semibold uppercase tracking-widest">Portfolio</span>
        </TextReveal>
        <TextReveal delay={0.1}>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mt-3 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h1>
        </TextReveal>
        <TextReveal delay={0.2}>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of our best work across web development, marketing, and branding.
          </p>
        </TextReveal>
      </div>
    </section>

    {/* Projects Grid */}
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="glass-card-hover overflow-hidden group cursor-pointer"
              >
                <div className={`aspect-video bg-gradient-to-br ${project.gradient} relative flex items-center justify-center overflow-hidden`}>
                  <motion.div
                    className="text-6xl font-heading font-bold text-foreground/5 select-none"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.5 }}
                  >
                    {project.title.split(" ").map(w => w[0]).join("")}
                  </motion.div>
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-all duration-500 flex items-center justify-center backdrop-blur-0 group-hover:backdrop-blur-sm">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-full bg-neon-purple/20 backdrop-blur-xl flex items-center justify-center border border-neon-purple/30">
                        <ExternalLink className="text-foreground" size={20} />
                      </div>
                    </motion.div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-neon-purple font-semibold uppercase tracking-wider">{project.category}</span>
                  <h3 className="font-heading text-xl font-bold mt-1 mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.desc}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    <Footer />
  </div>
);

export default PortfolioPage;

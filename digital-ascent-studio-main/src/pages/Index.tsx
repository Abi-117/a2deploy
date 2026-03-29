import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { ArrowRight, Code2, CheckCircle, Sparkles,Search,
  Megaphone,
  Target,
  Palette,
   } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import {
  GlowCard,
  StaggerContainer,
  StaggerItem,
  BlurIn,
  SlideIn,
  GradientBorderCard,
  TypingText
  , SmoothCounter
} from "@/components/AnimationUtils";
import CursorFollower from "@/components/CursorFollower";
import Footer from "@/components/Footer";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import TechStackMarquee from "@/components/TechStackMarquee";

import StatsBar from "@/components/StatsBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import ClientLogos from "@/components/ClientLogos";
import FAQSection from "@/components/FAQSection";
import axios from "axios";
import { useEffect, useState } from "react";
import TestimonialsSection from "@/components/TestimonialsSection";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const highlights = [
  "Cutting-edge technology stack",
  "Dedicated project manager",
  "100% responsive designs",
  "SEO-optimized from day one",
  "Post-launch support included",
  "Transparent pricing",
];
const Icons = {
  Code2,
  Search,
  Megaphone,
  Target,
  Palette,
  Sparkles
};

const Index = () => {

  /* ✅ Hooks MUST be here */
  

  const [services, setServices] = useState<any[]>([]);
const [loading, setLoading] = useState(true);
const [about,setAbout] = useState(null);
const [stats, setStats] = useState([]);

useEffect(() => {
  const fetchServices = async () => {
    try {
      const res =await axios.get(`${API}/services`);
      setServices(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  fetchServices();

  
}, []);

 useEffect(() => {

    const loadStats = () => {
      axios
        .get(`${API}/stats`)
        .then(res => setStats(res.data))
        .catch(console.log);
    };

    loadStats();

    window.addEventListener("storage", loadStats);

    return () =>
      window.removeEventListener("storage", loadStats);

  }, []);
useEffect(()=>{
 axios.get(`${API}/about`)
 .then(res=>setAbout(res.data));
},[]);
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <CursorFollower />
      <Navbar />
      <HeroSection />

      {/* Client Logos */}
      <ClientLogos />

      {/* Services */}
      {!loading && services.length > 0 && (
<section className="py-20 px-4 relative">

  <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

  <BlurIn className="text-center mb-12">
    <span className="text-neon-purple text-sm font-semibold uppercase tracking-widest">
      What We Do
    </span>

    <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
      Our <span className="gradient-text">Services</span>
    </h2>
  </BlurIn>

  <div className="container mx-auto">
    <StaggerContainer className="grid grid-cols-2 md:grid-cols-5 gap-4">

      {services.map((s:any) => {
        const IconComponent = Icons[s.icon] || Code2;

        return (
          <StaggerItem key={s._id}>
            <Link to="/services">

              <GlowCard className="p-6 text-center h-full">

                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{
                    background: `linear-gradient(135deg, ${s.gradientFrom}, ${s.gradientTo})`
                    
                  }}
                >
                  <IconComponent size={24} className="text-primary-foreground" />
                </motion.div>

                <span className="text-sm font-semibold block mb-1">
                  {s.title}
                </span>

                <span className="text-xs text-muted-foreground">
                  {s.description}
                </span>

              </GlowCard>

            </Link>
          </StaggerItem>
        );
      })}

    </StaggerContainer>
  </div>

</section>
)}

      <StatsBar />
       <section className="section-padding relative">
        <motion.div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[150px]" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 10, repeat: Infinity }} />
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <SlideIn direction="left">
              
            <span className="text-neon-purple text-sm font-semibold uppercase tracking-widest">
  {about?.badge}
</span>

<h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-6">
  {about?.title} <span className="gradient-text">{about?.highlight}</span>
</h2>

<p className="text-muted-foreground text-lg mb-6 leading-relaxed">
  {about?.paragraph1}
</p>

<p className="text-muted-foreground mb-8 leading-relaxed">
  {about?.paragraph2}
</p>

<div className="grid grid-cols-2 gap-3 mb-8">
  {about?.highlights?.map((h, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08 }}
      className="flex items-center gap-2 text-sm"
    >
      <CheckCircle size={16} className="text-neon-purple shrink-0" />
      <span className="text-muted-foreground">{h.text}</span>
    </motion.div>
  ))}
</div>
       
                 
              
              <Link to="/about">
                <motion.span
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-glass-border/40 bg-glass/30 backdrop-blur-sm text-foreground font-semibold"
                  whileHover={{ scale: 1.05, borderColor: "hsl(260 80% 60% / 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More About Us
                  <ArrowRight size={18} />
                </motion.span>
              </Link>
            </SlideIn>

            <SlideIn direction="right">
              <div className="relative">
                <GradientBorderCard className="p-0">
                  <div className="p-8 space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Sparkles className="text-neon-purple" size={24} />
                      <span className="font-heading font-bold text-lg">We Build</span>
                    </div>
                    <div className="font-heading text-2xl md:text-3xl font-bold h-12">
                      <TypingText
texts={about?.typingTexts?.map(t=>t.text) || []}  className="gradient-text"

/>
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-glass-border/20">
                       {stats.map((stat, i) => (
                      
                                  <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-center"
                                  >
                      
                                    <div className="font-heading text-xl font-bold gradient-text">
                      
                                      <SmoothCounter
                                        target={stat.value}
                                        suffix={stat.suffix}
                                      />
                      
                                    </div>
                      
                                    <p className="text-xs text-muted-foreground">
                                      {stat.label}
                                    </p>
                      
                                  </motion.div>
                      
                                ))}
                    </div>
                  </div>
                </GradientBorderCard>
                <motion.div
                  className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-xl bg-neon-purple/10 blur-xl"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <TechStackMarquee />
      <TestimonialsSection />
      {/* <TestimonialsCarousel /> */}
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
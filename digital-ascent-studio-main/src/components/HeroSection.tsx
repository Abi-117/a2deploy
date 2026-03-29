import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Globe,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingElement, TextReveal, TypingText } from "./AnimationUtils";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

/* ================= FLOATING ICONS ================= */

const floatingIcons = [
  { Icon: Code2, x: "10%", y: "20%", delay: 0, size: 28 },
  { Icon: Globe, x: "5%", y: "85%", delay: 2, size: 32 },
  { Icon: Zap, x: "75%", y: "70%", delay: 5, size: 26 },
];

/* ================= PARTICLES ================= */

const Particles = () => (
  <>
    {Array.from({ length: 30 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${1 + Math.random() * 3}px`,
          height: `${1 + Math.random() * 3}px`,
          background: `hsl(${260 + Math.random() * 60} 80% 60% / ${0.2 + Math.random() * 0.3})`,
        }}
        animate={{
          y: [0, -120 - Math.random() * 80, 0],
          x: [0, (Math.random() - 0.5) * 60, 0],
          opacity: [0, 1, 0],
          scale: [0, 1, 0],
        }}
        transition={{
          duration: 4 + Math.random() * 6,
          repeat: Infinity,
          delay: Math.random() * 5,
          ease: "easeInOut",
        }}
      />
    ))}
  </>
);
// Orbital ring
const OrbitalRing = ({ size, duration, delay = 0 }: { size: number; duration: number; delay?: number }) => (
  <motion.div
    className="absolute top-1/2 left-1/2 rounded-full border border-neon-purple/10"
    style={{ width: size, height: size, marginTop: -size / 2, marginLeft: -size / 2 }}
    animate={{ rotate: 360 }}
    transition={{ duration, repeat: Infinity, ease: "linear", delay }}
  >
    <motion.div
      className="absolute w-2 h-2 rounded-full bg-neon-purple/40 glow-purple"
      style={{ top: -4, left: "50%", marginLeft: -4 }}
      animate={{ scale: [1, 1.5, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </motion.div>
);



/* ================= HERO ================= */

const HeroSection = () => {

  const [hero, setHero] = useState<any>(null);

  /* FETCH CMS DATA */
  useEffect(() => {
    axios
      .get(`${API}/hero`)
      .then((res) => setHero(res.data))
      .catch(() => console.log("Hero data not found"));
  }, []);

  if (!hero) return null;

  return (
<section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient-bg">
  <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-pink/5 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orbital rings */}
      <div className="absolute inset-0 hidden md:block">
        <OrbitalRing size={400} duration={20} />
        <OrbitalRing size={600} duration={30} delay={5} />
        <OrbitalRing size={800} duration={40} delay={10} />
      </div>


      <Particles />

      {/* FLOATING ICONS */}
      {floatingIcons.map(({ Icon, x, y, delay, size }, i) => (
        <FloatingElement key={i} className="absolute hidden md:block" delay={delay} range={200}>
          <motion.div
            style={{ position: "absolute", left: x, top: y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-muted-foreground/15"
          >
            <Icon size={size} />
          </motion.div>
        </FloatingElement>
      ))}

      {/* CONTENT */}
      <div
  className="mx-auto px-4 md:px-8 py-28 relative z-10"
  style={{ textAlign: hero.align || "center" }}
>

        {/* BADGE */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-glass-border/40 bg-glass/30 backdrop-blur-sm mb-8 text-sm text-muted-foreground"
        >
          {hero.badgeText}
        </motion.div>

        {/* TITLE */}
        <TextReveal delay={0.3}>
         
          <h1
  className="font-heading font-bold leading-tight mb-6 max-w-5xl mx-auto"
  style={{
  fontSize: `${hero.titleSize || 64}px`,
  textAlign: hero.align || "center",
  background:
    hero.titleGradientFrom && hero.titleGradientTo
      ? `linear-gradient(90deg, ${hero.titleGradientFrom}, ${hero.titleGradientTo})`
      : "none",
  WebkitBackgroundClip:
    hero.titleGradientFrom ? "text" : "unset",
  WebkitTextFillColor:
    hero.titleGradientFrom ? "transparent" : hero.titleColor || "#ffffff",
}}
>
            {hero.title}{" "}
            <motion.span
              className="gradient-text inline-block"
              style={{ color: hero.highlightColor }}
            >
              {hero.highlightText}
            </motion.span>
          </h1>
        </TextReveal>

        {/* DESCRIPTION */}
        <TextReveal delay={0.5}>
          <p
  className="max-w-2xl mx-auto mb-4"
  style={{
    fontSize: hero.descSize ? `${hero.descSize}px` : "20px",
    color: hero.descriptionColor || "#9ca3af",
    textAlign: hero.align || "center",
  }}
>
            {hero.description}
          </p>
        </TextReveal>

        {/* TYPING TEXT (unchanged) */}
        <div className="mb-10">
          <span className="text-muted-foreground text-sm">
            Specializing in{" "}
          </span>

          <TypingText
            texts={[
              "Web Development",
              "SEO Optimization",
              "Digital Marketing",
              "Brand Identity",
              "E-Commerce Solutions",
            ]}
            className="text-neon-purple font-semibold text-sm"
          />
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <Link to={hero.button1Link || "/contact"}>
            <motion.span className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-neon-purple to-neon-blue text-primary-foreground font-semibold">
              {hero.button1Text}
              <ArrowRight size={18} />
            </motion.span>
          </Link>

          <Link to={hero.button2Link || "/services"}>
            <motion.span className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-glass-border/40 bg-glass/30 backdrop-blur-sm font-semibold">
              {hero.button2Text}
            </motion.span>
          </Link>

          <Link to={hero.button3Link || "/portfolio"}>
            <motion.span className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-glass-border/40 bg-glass/30 backdrop-blur-sm font-semibold">
              {hero.button3Text}
            </motion.span>
          </Link>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
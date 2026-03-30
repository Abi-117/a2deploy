import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Globe, Zap } from "lucide-react";
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
          background: `hsl(${260 + Math.random() * 60} 80% 60% / 0.3)`,
        }}
        animate={{
          y: [0, -120, 0],
          opacity: [0, 1, 0],
          scale: [0, 1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </>
);

/* ================= ORBIT ================= */

const OrbitalRing = ({
  size,
  duration,
  delay = 0,
}: {
  size: number;
  duration: number;
  delay?: number;
}) => (
  <motion.div
    className="absolute top-1/2 left-1/2 rounded-full border border-neon-purple/10"
    style={{
      width: size,
      height: size,
      marginTop: -size / 2,
      marginLeft: -size / 2,
    }}
    animate={{ rotate: 360 }}
    transition={{ duration, repeat: Infinity, ease: "linear", delay }}
  />
);

/* ================= HERO ================= */

const HeroSection = () => {
  const [hero, setHero] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  /* detect mobile */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* FETCH CMS DATA */
  useEffect(() => {
    axios
      .get(`${API}/hero`)
      .then((res) => setHero(res.data))
      .catch(() => console.log("Hero data not found"));
  }, []);

  if (!hero) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient-bg px-2">

      {/* BACKGROUND BLOBS (responsive) */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-neon-purple/10 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-neon-blue/10 rounded-full blur-[120px]"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Orbit (desktop only) */}
      {!isMobile && (
        <div className="absolute inset-0 hidden md:block">
          <OrbitalRing size={400} duration={20} />
          <OrbitalRing size={600} duration={30} delay={5} />
        </div>
      )}

      {/* Particles disabled on mobile */}
      {!isMobile && <Particles />}

      {/* FLOATING ICONS */}
      {!isMobile &&
        floatingIcons.map(({ Icon, x, y, delay, size }, i) => (
          <FloatingElement key={i} className="absolute" delay={delay}>
            <motion.div
              style={{ left: x, top: y, position: "absolute" }}
              className="text-muted-foreground/15"
            >
              <Icon size={size} />
            </motion.div>
          </FloatingElement>
        ))}

      {/* ================= CONTENT ================= */}

      <div
        className="relative z-10 w-full max-w-[1200px] mx-auto px-[clamp(1rem,4vw,2rem)] py-[clamp(4rem,10vh,7rem)]"
        style={{ textAlign: hero.align || "center" }}
      >
        {/* BADGE */}
        <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-glass-border/40 bg-glass/30 backdrop-blur-sm mb-6 text-sm text-muted-foreground">
          {hero.badgeText}
        </motion.div>

        {/* TITLE */}
        <TextReveal delay={0.3}>
          <h1
            className="font-heading font-bold mb-6 leading-tight"
            style={{
              fontSize: "clamp(28px, 6vw, 64px)",
              background:
                hero.titleGradientFrom && hero.titleGradientTo
                  ? `linear-gradient(90deg, ${hero.titleGradientFrom}, ${hero.titleGradientTo})`
                  : "none",
              WebkitBackgroundClip: hero.titleGradientFrom ? "text" : "unset",
              WebkitTextFillColor: hero.titleGradientFrom
                ? "transparent"
                : hero.titleColor || "#fff",
            }}
          >
            {hero.title}{" "}
            <span style={{ color: hero.highlightColor }}>
              {hero.highlightText}
            </span>
          </h1>
        </TextReveal>

        {/* DESCRIPTION */}
        <TextReveal delay={0.5}>
          <p
            className="max-w-2xl mx-auto mb-8"
            style={{
              fontSize: "clamp(14px,2.8vw,20px)",
              color: hero.descriptionColor || "#9ca3af",
            }}
          >
            {hero.description}
          </p>
        </TextReveal>

        {/* TYPING */}
        <div className="mb-10 text-sm">
          <span className="text-muted-foreground">
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
            className="text-neon-purple font-semibold"
          />
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
          <Link to={hero.button1Link || "/contact"} className="w-full sm:w-auto">
            <motion.span className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-neon-purple to-neon-blue font-semibold">
              {hero.button1Text}
              <ArrowRight size={18} />
            </motion.span>
          </Link>

          <Link to={hero.button2Link || "/services"} className="w-full sm:w-auto">
            <motion.span className="w-full inline-flex justify-center px-6 py-3 sm:px-8 sm:py-4 rounded-xl border border-glass-border/40 bg-glass/30 backdrop-blur-sm font-semibold">
              {hero.button2Text}
            </motion.span>
          </Link>

          <Link to={hero.button3Link || "/portfolio"} className="w-full sm:w-auto">
            <motion.span className="w-full inline-flex justify-center px-6 py-3 sm:px-8 sm:py-4 rounded-xl border border-glass-border/40 bg-glass/30 backdrop-blur-sm font-semibold">
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
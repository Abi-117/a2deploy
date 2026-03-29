import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export const StaggerContainer = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-50px" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div variants={staggerItem} className={className}>
    {children}
  </motion.div>
);

export const FloatingElement = ({ children, className, delay = 0, range = 20 }: { children: ReactNode; className?: string; delay?: number; range?: number }) => (
  <motion.div
    className={className}
    animate={{ y: [-range / 2, range / 2, -range / 2] }}
    transition={{ duration: 6, repeat: Infinity, delay, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

export const ScaleOnHover = ({ children, className, scale = 1.05 }: { children: ReactNode; className?: string; scale?: number }) => (
  <motion.div
    className={className}
    whileHover={{ scale }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    {children}
  </motion.div>
);

export const MagneticButton = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    className={className}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    {children}
  </motion.div>
);

export const TextReveal = ({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 40, clipPath: "inset(100% 0% 0% 0%)" }}
    whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const ParallaxSection = ({ children, className, speed = 0.3 }: { children: ReactNode; className?: string; speed?: number }) => (
  <motion.div
    className={className}
    initial={{ y: 0 }}
    whileInView={{ y: 0 }}
    viewport={{ once: false }}
    style={{ willChange: "transform" }}
    transition={{ duration: 0 }}
  >
    <motion.div
      animate={{ y: [speed * 50, -speed * 50] }}
      transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
    >
      {children}
    </motion.div>
  </motion.div>
);

export const GlowCard = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    className={`glass-card-hover relative overflow-hidden group ${className}`}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-neon-blue/5" />
    </div>
    <div className="relative z-10">{children}</div>
  </motion.div>
);

// Infinite scrolling marquee
export const Marquee = ({ children, className, speed = 30, reverse = false }: { children: ReactNode; className?: string; speed?: number; reverse?: boolean }) => (
  <div className={`overflow-hidden ${className}`}>
    <motion.div
      className="flex gap-8 w-max"
      animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
    >
      {children}
      {children}
    </motion.div>
  </div>
);

// Typing animation text
export const TypingText = ({ texts, className }: { texts: string[]; className?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
        if (displayText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[3px] h-[1em] bg-neon-purple ml-1 align-middle"
      />
    </span>
  );
};

// Animated counter with smooth motion
export const SmoothCounter = ({ target, suffix = "", duration = 2 }: { target: number; suffix?: string; duration?: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animate(count, target, { duration });
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [count, target, duration]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return unsubscribe;
  }, [rounded]);

  return <span ref={ref}>{display}{suffix}</span>;
};

// Morphing blob background
export const MorphBlob = ({ className, color = "neon-purple" }: { className?: string; color?: string }) => (
  <motion.div
    className={`absolute rounded-full bg-${color}/10 blur-[100px] ${className}`}
    animate={{
      borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
    }}
    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
  />
);

// Slide in from side
export const SlideIn = ({ children, className, direction = "left", delay = 0 }: { children: ReactNode; className?: string; direction?: "left" | "right"; delay?: number }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, x: direction === "left" ? -80 : 80 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

// Rotate in animation
export const RotateIn = ({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
    whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay, type: "spring", stiffness: 200 }}
  >
    {children}
  </motion.div>
);

// Blur in animation
export const BlurIn = ({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, filter: "blur(20px)" }}
    whileInView={{ opacity: 1, filter: "blur(0px)" }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

// Animated gradient border card
export const GradientBorderCard = ({ children, className }: { children: ReactNode; className?: string }) => (
  <motion.div
    className={`relative p-[1px] rounded-xl overflow-hidden group ${className}`}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-neon-purple via-neon-blue to-neon-pink"
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      style={{ backgroundSize: "200% 200%" }}
    />
    <div className="relative bg-card rounded-xl p-6 z-10 h-full">
      {children}
    </div>
  </motion.div>
);

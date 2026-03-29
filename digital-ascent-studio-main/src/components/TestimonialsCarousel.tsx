import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "CEO, TechStartup India",
    text: "A Square Solutions transformed our online presence completely. Our traffic grew 400% in just 6 months. Their team is incredibly talented and professional.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Founder, EcoStore",
    text: "The e-commerce platform they built for us is flawless. Sales increased by 250% after launch. Best investment we ever made for our business.",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    role: "Marketing Head, FinServe",
    text: "Their digital marketing strategies are data-driven and results-focused. We achieved a 5x ROI on our ad spend within the first quarter.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "CTO, HealthTech Co",
    text: "Outstanding web development skills. They delivered a complex healthcare platform ahead of schedule with zero bugs. Highly recommend their services.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Director, AutoParts Global",
    text: "From branding to SEO, A Square handles everything with expertise. Our brand recognition in the market has improved dramatically.",
    rating: 5,
  },
];

const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0, scale: 0.9 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0, scale: 0.9 }),
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neon-purple text-sm font-semibold uppercase tracking-widest">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            What Our Clients <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="min-h-[280px] flex items-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card p-8 md:p-12 text-center w-full relative"
              >
                <Quote className="absolute top-6 left-6 text-neon-purple/20" size={40} />
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star size={18} className="fill-neon-purple text-neon-purple" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8 italic">
                  "{testimonials[current].text}"
                </p>
                <div>
                  <p className="font-heading font-bold text-lg">{testimonials[current].name}</p>
                  <p className="text-muted-foreground text-sm">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={() => go(-1)}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-neon-purple transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} />
            </motion.button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-neon-purple" : "w-2 bg-muted-foreground/30"}`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
            <motion.button
              onClick={() => go(1)}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-neon-purple transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

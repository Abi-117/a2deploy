import { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight ,Quote} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const TestimonialsSection = () => {

  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [current, setCurrent] = useState(0);

  /* ================= LOAD FROM BACKEND ================= */
  const loadTestimonials = async () => {
    try {
      const res = await axios.get(
        `${API}/testimonials`
      );

      setTestimonials(res.data || []);

    } catch (err) {
      console.log("Testimonials load error", err);
    }
  };

  /* ================= INITIAL LOAD ================= */
  useEffect(() => {
    loadTestimonials();
  }, []);

  /* ================= AUTO SLIDER ================= */
  useEffect(() => {
    if (!testimonials.length) return;

    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials]);

  if (!testimonials.length) return null;

  return (
    <section className="section-padding relative">
      <div className="container mx-auto">
        

        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-neon-purple text-sm font-semibold uppercase tracking-widest">
              Testimonials
            </span>

            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-5">
              Client <span className="gradient-text">Feedback</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto relative">
          

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 md:p-12 text-center"
            >
              {/* ⭐ Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-neon-purple text-neon-purple"
                  />
                ))}
              </div>
                <Quote className="absolute top-6 left-6 text-neon-purple/20" size={40} />
              {/* TEXT */}
              <p className="text-lg md:text-xl text-foreground/90 mb-8 leading-relaxed italic">
                "{testimonials[current]?.text}"
              </p>

              {/* NAME */}
              <div>
                <p className="font-heading font-bold text-lg">
                  {testimonials[current]?.name}
                </p>

                <p className="text-muted-foreground text-sm">
                  {testimonials[current]?.role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CONTROLS */}
          <div className="flex justify-center gap-4 mt-8">

            <button
              onClick={() =>
                setCurrent(
                  (p) => (p - 1 + testimonials.length) % testimonials.length
                )
              }
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center"
            >
              <ChevronLeft size={18} />
            </button>

            {/* DOTS */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-neon-purple w-6"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() =>
                setCurrent((p) => (p + 1) % testimonials.length)
              }
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center"
            >
              <ChevronRight size={18} />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
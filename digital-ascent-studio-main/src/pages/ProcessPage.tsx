import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";
import ScrollReveal from "@/components/ScrollReveal";
import { TextReveal, GlowCard } from "@/components/AnimationUtils";
import { motion } from "framer-motion";
import {
  Lightbulb,
  PenTool,
  Code2,
  Rocket,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

/* ================= ICON MAP ================= */

const iconMap: any = {
  Lightbulb,
  PenTool,
  Code2,
  Rocket
};

const API = `${import.meta.env.VITE_API_URL}/process`;

/* ================= TYPES ================= */

interface Step {
  _id: string;
  title: string;
  desc: string;
  icon: string;
  details: string[];
}

const ProcessPage = () => {
  const [steps, setSteps] = useState<Step[]>([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH DATA ================= */

  useEffect(() => {
  const fetchSteps = async () => {
    try {
      const res = await axios.get(API);
      setSteps(res.data);
    } catch (err) {
      console.log("Process fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchSteps();
}, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <CursorFollower />
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="absolute inset-0 animated-gradient-bg opacity-50" />
        <div className="container mx-auto relative z-10 text-center max-w-4xl">
          <TextReveal>
            <span className="text-neon-purple text-sm font-semibold uppercase tracking-widest">
              Our Process
            </span>
          </TextReveal>

          <TextReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mt-3 mb-6">
              How We <span className="gradient-text">Work</span>
            </h1>
          </TextReveal>

          <TextReveal delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A proven, transparent process that ensures exceptional results every time.
            </p>
          </TextReveal>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="relative">

            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-purple/50 via-neon-blue/50 to-neon-purple/20" />

            {steps.map((step, i) => {

              // ✅ Correct Dynamic Icon
              const IconComponent =
                iconMap[step.icon] || Lightbulb;

              return (
                <ScrollReveal key={step._id} delay={i * 0.15}>
                  <div className="relative pl-16 md:pl-24 mb-6 last:mb-10">

                    {/* DOT */}
                    <motion.div
                      className="absolute left-4 md:left-8 w-4 h-4 rounded-full bg-neon-purple -translate-x-1/2 glow-purple z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring" }}
                    />

                    {/* NUMBER */}
                    <motion.div
                      className="absolute left-10 md:left-16 top-0 text-6xl font-heading font-bold text-neon-purple/5"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      0{i + 1}
                    </motion.div>

                    <GlowCard className="p-8 relative">
                      <div className="flex items-start gap-4 mb-4">

                        {/* ICON */}
                        <motion.div
                          className="w-12 h-12 rounded-2xl bg-neon-purple/10 flex items-center justify-center shrink-0"
                          whileHover={{ rotate: 10, scale: 1.1 }}
                        >
                          <IconComponent
                            size={22}
                            className="text-neon-purple"
                          />
                        </motion.div>

                        <div>
                          <span className="text-neon-purple font-heading font-bold text-sm">
                            Step {i + 1}
                          </span>
                          <h3 className="font-heading text-2xl font-bold">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {step.desc}
                      </p>

                      <div className="grid grid-cols-2 gap-2">
                        {step.details?.map((d, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle
                              size={14}
                              className="text-neon-purple shrink-0"
                            />
                            {d}
                          </div>
                        ))}
                      </div>
                    </GlowCard>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to get <span className="gradient-text">started</span>?
            </h2>

            <Link to="/contact">
              <motion.span
                className="group inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-neon-purple to-neon-blue text-primary-foreground font-semibold"
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 0 35px -5px hsl(260 80% 60% / 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProcessPage;
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";
import { Plus, Minus } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const FAQItem = ({ q, a, isOpen, onClick, index }) => (
  <ScrollReveal delay={index * 0.05}>
    <motion.div
      className={`glass-card overflow-hidden transition-all duration-300 ${
        isOpen ? "border-neon-purple/40" : ""
      }`}
      layout
    >
      <button
        onClick={onClick}
        className="w-full p-6 flex items-center justify-between text-left gap-4"
      >
        <span className="font-heading font-semibold text-sm md:text-base">
          {q}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 w-8 h-8 rounded-full bg-neon-purple/10 flex items-center justify-center"
        >
          {isOpen ? (
            <Minus size={16} className="text-neon-purple" />
          ) : (
            <Plus size={16} className="text-neon-purple" />
          )}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <p className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  </ScrollReveal>
);

const FAQSection = () => {

  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`${API}/faqs`)
      .then((res) => setFaqs(res.data));
  }, []);

  return (
    <section className="section-padding relative">
      <div className="container mx-auto max-w-3xl">

        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-neon-purple text-sm font-semibold uppercase tracking-widest">
              FAQ
            </span>

            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq._id}
              index={i}
              q={faq.question}
              a={faq.answer}
              isOpen={openIndex === i}
              onClick={() =>
                setOpenIndex(openIndex === i ? null : i)
              }
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
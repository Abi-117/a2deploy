import { Marquee } from "./AnimationUtils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const TechStackMarquee = () => {

  const [stack1,setStack1] = useState([]);
  const [stack2,setStack2] = useState([]);

  const loadTech = async () => {
    const res = await axios.get(
      `${API}/tech`
    );

    setStack1(
      res.data.filter(t=>t.type==="stack1")
    );

    setStack2(
      res.data.filter(t=>t.type==="stack2")
    );
  };

  useEffect(()=>{
    loadTech();
  },[]);

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative z-10">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-muted-foreground text-sm uppercase tracking-widest">
            Technologies We Use
          </span>
        </motion.div>

        {/* STACK 1 */}
        <Marquee speed={40}>
          {stack1.map((tech,i)=>(
            <motion.div
              key={i}
              className="px-8 py-3 rounded-full glass-card text-sm font-medium text-muted-foreground whitespace-nowrap hover:text-neon-purple hover:border-neon-purple/30 transition-colors duration-300 cursor-default"
              whileHover={{ scale:1.1, y:-3 }}
            >
              {tech.name}
            </motion.div>
          ))}
        </Marquee>

        {/* STACK 2 */}
        <div className="mt-4">
          <Marquee speed={35} reverse>
            {stack2.map((tech,i)=>(
              <motion.div
                key={i}
                className="px-8 py-3 rounded-full glass-card text-sm font-medium text-muted-foreground whitespace-nowrap hover:text-neon-blue hover:border-neon-blue/30 transition-colors duration-300 cursor-default"
                whileHover={{ scale:1.1, y:-3 }}
              >
                {tech.name}
              </motion.div>
            ))}
          </Marquee>
        </div>

      </div>
    </section>
  );
};

export default TechStackMarquee;
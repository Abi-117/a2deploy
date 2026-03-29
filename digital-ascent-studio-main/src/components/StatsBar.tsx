import { motion } from "framer-motion";
import { SmoothCounter } from "./AnimationUtils";
import { useEffect, useState } from "react";
import axios from "axios";
const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const StatsBar = () => {

  const [stats, setStats] = useState([]);

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

  return (
    <section className="py-16 relative">
       <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 via-neon-blue/5 to-neon-pink/5" />

       <div className="container mx-auto relative z-10">


        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">


          {stats.map((stat, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >

              <div className="text-4xl font-bold gradient-text">

                <SmoothCounter
                  target={stat.value}
                  suffix={stat.suffix}
                />

              </div>

              <p className="text-sm text-muted-foreground">
                {stat.label}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default StatsBar;
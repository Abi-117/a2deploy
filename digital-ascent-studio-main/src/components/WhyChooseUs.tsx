import axios from "axios";
import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";

import {
  Shield,
  Zap,
  HeartHandshake,
  TrendingUp,
  Clock,
  Headphones
} from "lucide-react";

const Icons:any = {
  Zap,
  Shield,
  HeartHandshake,
  TrendingUp,
  Clock,
  Headphones
};

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const WhyChooseUs = () => {

  const [features,setFeatures] = useState<any[]>([]);

  useEffect(()=>{
    axios
      .get(`${API}/features`)
      .then(res=>setFeatures(res.data));
  },[]);

  return (
    <section className="section-padding relative">

      <div className="container mx-auto">

        <div className="text-center mb-16">
          <span className="text-neon-purple text-sm font-semibold uppercase">
            Why Us
          </span>

          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Why Choose <span className="gradient-text">A Square</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((f)=>{

            const IconComponent = Icons[f.icon] || Zap;

            return (
              <ScrollReveal key={f._id}>
                <div className="glass-card-hover p-8 text-center">

                  <div className="w-14 h-14 rounded-2xl bg-neon-purple/10 flex items-center justify-center mx-auto mb-5">
                    <IconComponent size={26} className="text-neon-purple"/>
                  </div>

                  <h3 className="font-heading text-lg font-bold mb-2">
                    {f.title}
                  </h3>

                  <p className="text-muted-foreground text-sm">
                    {f.desc}
                  </p>

                </div>
              </ScrollReveal>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
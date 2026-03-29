import { useEffect, useState } from "react";
import axios from "axios";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code2, Search, Megaphone, Target, Palette, ArrowRight, Check, Layers, BarChart3, ShoppingCart, Smartphone, Globe, Mail } from "lucide-react";
import { BlurIn } from "@/components/AnimationUtils";


const API = `${import.meta.env.VITE_API_URL}/pricing`;

export default function PricingSection() {

  const [plans,setPlans] = useState([]);

  useEffect(()=>{
    axios.get(API).then(res=>setPlans(res.data));
  },[]);

  return (
<section className="section-padding">
<div className="container mx-auto max-w-5xl">
    <BlurIn className="text-center mb-16">
          <span className="text-neon-purple text-sm font-semibold uppercase tracking-widest">Pricing</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Flexible <span className="gradient-text">Plans</span>
          </h2>
        </BlurIn>

{/* YOUR SAME HEADER */}

<div className="grid md:grid-cols-3 gap-6">

{plans.map((plan:any,i:number)=>(
  <ScrollReveal key={plan._id} delay={i*0.1}>
    <motion.div
                className={`glass-card p-8 relative overflow-hidden h-full ${plan.popular ? "border-neon-purple/50" : ""}`}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >

{plan.popular && (
<div className="absolute top-4 right-4">
<span className="px-3 py-1 rounded-full bg-neon-purple/20 text-neon-purple text-xs">
Popular
</span>
</div>
)}

<h3 className="font-heading text-xl font-bold">{plan.name}</h3>

<p className="text-muted-foreground text-sm mt-1 mb-4">
{plan.desc}
</p>

<div className="font-heading text-3xl font-bold gradient-text mb-6">
{plan.price}
</div>

<div className="space-y-3 mb-8">
{plan.features.map((f:string)=>(
<div key={f} className="flex gap-2 text-sm">
<Check size={14} className="text-neon-purple"/>
{f}
</div>
))}
</div>

<Link to="/contact">
<span className="w-full inline-flex justify-center px-6 py-3 rounded-xl border">
Get Quote
</span>
</Link>

</motion.div>
</ScrollReveal>
))}

</div>
</div>
</section>
  );
}
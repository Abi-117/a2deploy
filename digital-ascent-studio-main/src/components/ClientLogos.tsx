import { useEffect, useState } from "react";
import axios from "axios";
import { Marquee } from "./AnimationUtils";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const ClientLogos = () => {

  const [clients, setClients] = useState([]);

  const loadClients = () => {
    axios
      .get(`${API}/clients`)
      .then((res) => setClients(res.data))
      .catch(() => console.log("client load error"));
  };

  useEffect(() => {

    loadClients();

    const handleUpdate = () => {
      loadClients();
    };

    window.addEventListener("storage", handleUpdate);

    return () =>
      window.removeEventListener("storage", handleUpdate);

  }, []);

  return (

<section className="py-20 relative">

<div className="container mx-auto overflow-hidden">

<ScrollReveal>
<p className="text-center text-muted-foreground text-sm uppercase tracking-widest mb-10">
Trusted by innovative companies
</p>
</ScrollReveal>

<Marquee speed={25}>

{clients.map((client) => (

<motion.div
key={client._id}
className="flex items-center justify-center px-10 py-4 glass-card rounded-xl min-w-[160px]"
>

<span className="font-bold text-muted-foreground/50 text-lg whitespace-nowrap">

{client.name}

</span>

</motion.div>

))}

</Marquee>

</div>

</section>

  );
};

export default ClientLogos;
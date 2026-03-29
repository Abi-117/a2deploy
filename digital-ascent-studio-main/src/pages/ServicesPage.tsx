import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";
import ScrollReveal from "@/components/ScrollReveal";
import { TextReveal, GlowCard, StaggerContainer, StaggerItem, SlideIn, BlurIn, GradientBorderCard } from "@/components/AnimationUtils";
import { motion } from "framer-motion";
import { Code2, Search, Megaphone, Target, Palette, ArrowRight, Check, Layers, BarChart3, ShoppingCart, Smartphone, Globe, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import FAQSection from "@/components/FAQSection";
import axios from "axios";
import { useEffect, useState } from "react";
import * as Icons from "lucide-react";
import PricingSection from "./PricingSection";
const API = `${import.meta.env.VITE_API_URL}/services`;



// const services = [
//   {
//     icon: Code2,
//     title: "Web Development",
//     desc: "Custom websites and web applications built with modern frameworks and cutting-edge technology for optimal performance.",
//     color: "from-neon-purple to-neon-blue",
//     features: ["React & Next.js", "E-Commerce Solutions", "Custom CMS", "API Integration", "Progressive Web Apps", "Database Design"],
//   },
//   {
//     icon: Search,
//     title: "SEO Optimization",
//     desc: "Data-driven SEO strategies to boost your visibility, rankings, and organic traffic across all search engines.",
//     color: "from-neon-blue to-accent",
//     features: ["On-Page SEO", "Technical SEO", "Link Building", "Analytics & Reporting", "Local SEO", "Content Strategy"],
//   },
//   {
//     icon: Megaphone,
//     title: "Digital Marketing",
//     desc: "Comprehensive digital marketing campaigns that engage audiences, build brands, and drive conversions.",
//     color: "from-neon-pink to-neon-purple",
//     features: ["Social Media Marketing", "Content Marketing", "Email Campaigns", "Growth Hacking", "Influencer Marketing", "Community Management"],
//   },
//   {
//     icon: Target,
//     title: "Paid Ads Management",
//     desc: "Strategic paid advertising across Google, Meta, LinkedIn and more to maximize your return on investment.",
//     color: "from-accent to-neon-blue",
//     features: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Retargeting", "A/B Testing", "Conversion Tracking"],
//   },
//   {
//     icon: Palette,
//     title: "Branding & Design",
//     desc: "Memorable brand identities and stunning visual designs that set you apart from the competition.",
//     color: "from-neon-purple to-neon-pink",
//     features: ["Logo Design", "Brand Guidelines", "UI/UX Design", "Motion Graphics", "Print Design", "Social Media Design"],
//   },
// ];

const additionalServices = [
  { icon: ShoppingCart, title: "E-Commerce", desc: "Complete online stores with payment integration." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform mobile applications." },
  { icon: Layers, title: "SaaS Products", desc: "Scalable software-as-a-service platforms." },
  { icon: Globe, title: "Domain & Hosting", desc: "Reliable hosting and domain management." },
  { icon: BarChart3, title: "Analytics Setup", desc: "Complete analytics and tracking implementation." },
  { icon: Mail, title: "Email Marketing", desc: "Automated email campaigns and newsletters." },
];

const ServicesPage = () => {
   const [services, setServices] = useState<any[]>([]);
   

   useEffect(() => {
  load();
}, []);

const load = async () => {
  try {
    const res = await axios.get(API);
    setServices(res.data);
  } catch (err) {
    console.error("Service load error:", err);
  }
};


  return (
  <div className="min-h-screen bg-background overflow-x-hidden">
    <CursorFollower />
    <Navbar />

    {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative">
      <div className="absolute inset-0 animated-gradient-bg opacity-50" />
      <motion.div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px]" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} />
      <motion.div className="absolute top-20 right-1/3 w-72 h-72 bg-neon-purple/10 rounded-full blur-[100px]" animate={{ scale: [1.2, 1, 1.2] }} transition={{ duration: 10, repeat: Infinity }} />
      <div className="container mx-auto relative z-10 text-center max-w-4xl">
        <TextReveal>
          <span className="text-neon-purple text-sm font-semibold uppercase tracking-widest">Our Services</span>
        </TextReveal>
        <TextReveal delay={0.1}>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mt-3 mb-6">
            What We <span className="gradient-text">Deliver</span>
          </h1>
        </TextReveal>
        <TextReveal delay={0.2}>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            End-to-end digital solutions tailored to elevate your business and drive measurable results.
          </p>
        </TextReveal>
      </div>
    </section>

    {/* Main Services */}
    {/* <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="space-y-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <motion.div
                className="glass-card-hover p-8 md:p-10 relative overflow-hidden group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-[0.03]`} />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shrink-0`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <service.icon size={30} className="text-primary-foreground" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-heading text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {service.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check size={14} className="text-neon-purple shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section> */}

     <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="space-y-8">

          {services.map((service, i) => {

            const Icon =
              Icons[service.icon as keyof typeof Icons];

            return (
              <ScrollReveal
                key={service._id}
                delay={i * 0.1}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <motion.div
                  className="glass-card-hover p-8 md:p-10 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-[0.03]`}
                    />
                  </div>

                  <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start">

                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center`}
                    >
                       {Icon ? <Icon size={30} /> : <Code2 size={30} />}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-purple-600">
                        {service.title}
                      </h3>

                      <p className="mb-4">
                        {service.desc}
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {service.features?.map((f:string,i:number)=>(
                          <div key={i} className="flex gap-2 text-sm">
                            <Check size={14} className="text-neon-purple shrink-0"/>
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}

        </div>
      </div>
    </section>
     <PricingSection/>

    {/* Additional Services
    <section className="section-padding relative">
      <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[150px]" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 8, repeat: Infinity }} />
      <div className="container mx-auto relative z-10">
        <BlurIn className="text-center mb-16">
          <span className="text-neon-purple text-sm font-semibold uppercase tracking-widest">More Solutions</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Additional <span className="gradient-text">Services</span>
          </h2>
        </BlurIn>
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {additionalServices.map((s) => (
            <StaggerItem key={s.title}>
              <GlowCard className="p-6 text-center h-full">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <s.icon size={22} className="text-neon-purple" />
                </motion.div>
                <h3 className="font-heading font-bold text-sm mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-xs">{s.desc}</p>
              </GlowCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section> */}

    {/* Pricing Tease */}
    {/* <section className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <BlurIn className="text-center mb-16">
          <span className="text-neon-purple text-sm font-semibold uppercase tracking-widest">Pricing</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Flexible <span className="gradient-text">Plans</span>
          </h2>
        </BlurIn>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Starter", price: "Custom", desc: "Perfect for small businesses", features: ["Single Page Website", "Basic SEO Setup", "Mobile Responsive", "1 Month Support"] },
            { name: "Growth", price: "Custom", desc: "For growing businesses", features: ["Multi-Page Website", "Advanced SEO", "Social Media Setup", "3 Months Support", "Analytics Dashboard"], popular: true },
            { name: "Enterprise", price: "Custom", desc: "For large organizations", features: ["Custom Web Application", "Full Digital Marketing", "Brand Identity", "Priority Support", "Dedicated Manager", "Monthly Reports"] },
          ].map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.1}>
              <motion.div
                className={`glass-card p-8 relative overflow-hidden h-full ${plan.popular ? "border-neon-purple/50" : ""}`}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-neon-purple/20 text-neon-purple text-xs font-semibold">Popular</span>
                  </div>
                )}
                <h3 className="font-heading text-xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mt-1 mb-4">{plan.desc}</p>
                <div className="font-heading text-3xl font-bold gradient-text mb-6">{plan.price}</div>
                <div className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check size={14} className="text-neon-purple shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <Link to="/contact">
                  <motion.span
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm ${
                      plan.popular
                        ? "bg-gradient-to-r from-neon-purple to-neon-blue text-primary-foreground"
                        : "border border-glass-border/40 bg-glass/30 text-foreground"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Quote <ArrowRight size={16} />
                  </motion.span>
                </Link>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section> */}

    {/* FAQ */}
    <FAQSection />

    {/* CTA */}
    <section className="section-padding">
      <div className="container mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Need a custom <span className="gradient-text">solution</span>?
          </h2>
          <p className="text-muted-foreground mb-8">Let's discuss your project requirements and find the perfect solution.</p>
          <Link to="/contact">
            <motion.span
              className="group inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-neon-purple to-neon-blue text-primary-foreground font-semibold"
              whileHover={{ scale: 1.05, boxShadow: "0 0 35px -5px hsl(260 80% 60% / 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.span>
          </Link>
        </ScrollReveal>
      </div>
    </section>

    <Footer />
  </div>
);
}
export default ServicesPage;

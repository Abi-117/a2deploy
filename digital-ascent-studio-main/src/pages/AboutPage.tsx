import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";
import ScrollReveal from "@/components/ScrollReveal";
import { TextReveal, GlowCard, StaggerContainer, StaggerItem, SlideIn, BlurIn, GradientBorderCard, SmoothCounter } from "@/components/AnimationUtils";
import { motion } from "framer-motion";
import { Users, Briefcase, Award, Clock, Target, Heart, Lightbulb, Rocket, Star, Code2, Zap, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
import * as Icons from "lucide-react";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const stats = [
  { icon: Briefcase, value: 150, suffix: "+", label: "Projects Delivered" },
  { icon: Users, value: 80, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 5, suffix: "+", label: "Years Experience" },
  { icon: Clock, value: 99, suffix: "%", label: "On-Time Delivery" },
];

const values = [
  { icon: Target, title: "Mission-Driven", desc: "Every project starts with understanding your business goals and crafting solutions that deliver measurable impact." },
  { icon: Heart, title: "Client-First", desc: "We build lasting partnerships through transparent communication, reliability, and genuine care for your success." },
  { icon: Lightbulb, title: "Innovation-Led", desc: "We stay ahead of trends, adopting cutting-edge technologies to give you a competitive advantage." },
  { icon: Rocket, title: "Results-Oriented", desc: "Our work is measured by outcomes — growth, engagement, and ROI that matter to your bottom line." },
];

const team = [
  { name: "Aarav Gupta", role: "Founder & CEO", icon: Rocket, desc: "Visionary leader with 8+ years in tech." },
  { name: "Meera Joshi", role: "Lead Developer", icon: Code2, desc: "Full-stack expert building scalable solutions." },
  { name: "Rohan Kumar", role: "Design Lead", icon: Star, desc: "Creating pixel-perfect, user-centric designs." },
  { name: "Ananya Singh", role: "Marketing Head", icon: Zap, desc: "Data-driven strategist driving business growth." },
  { name: "Dev Patel", role: "SEO Specialist", icon: Globe, desc: "Helping brands dominate search rankings." },
  { name: "Kavya Nair", role: "Project Manager", icon: Target, desc: "Ensuring seamless delivery every time." },
];

const milestones = [
  { year: "2021", title: "Company Founded", desc: "Started with a vision to revolutionize digital solutions for businesses." },
  { year: "2022", title: "50+ Projects", desc: "Reached 50 successful projects with 100% client satisfaction." },
  { year: "2023", title: "Team Expansion", desc: "Grew to a team of 15+ specialists across development, design, and marketing." },
  { year: "2024", title: "Global Reach", desc: "Started serving international clients across 10+ countries." },
  { year: "2025", title: "150+ Projects", desc: "Delivered 150+ projects, establishing ourselves as a leading digital agency." },
];

const AboutPage = () => {
  
  const [data, setData] = useState({
    badgeText: "",
    title: "",
    highlightText: "",
    description: ""
  });
 const [ourStoryData, setOurStoryData] = useState<any>({
    story: {},
    milestones: []
  });
   const [values,setValues]=useState<any[]>([]);
   const [team,setTeam] = useState([]);


  useEffect(() => {
    load();
    loadOurStory();
    axios.get(`${API}/values`)
      .then(res=>setValues(res.data));

    axios.get(`${API}/team`)
  .then(res => setTeam(res.data));
  }, []);

  const load = async () => {
    const res = await axios.get(
      `${API}/about-hero`
    );
    setData(res.data);
  };

  // split highlight word
  const titleParts = data.title.split(data.highlightText);
  

  const loadOurStory = async () => {
    const res = await axios.get(
      `${API}/our-story`
    );
    setOurStoryData(res.data);
  };

  const firstTitleParts =
    ourStoryData.story.title?.split(ourStoryData.story.highlightText) || [];

  return (
   
  <div className="min-h-screen bg-background overflow-x-hidden">
    <CursorFollower />
    <Navbar />

    {/* Hero */}
    <section className="pt-32 pb-20 px-4 relative">
      <div className="absolute inset-0 animated-gradient-bg opacity-50" />

      <motion.div
        className="absolute top-20 right-1/4 w-72 h-72 bg-neon-purple/10 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-10 left-1/4 w-60 h-60 bg-neon-blue/10 rounded-full blur-[100px]"
        animate={{ scale: [1.3, 1, 1.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto relative z-10 text-center max-w-4xl">

        <TextReveal>
          <span className="text-neon-purple text-sm font-semibold uppercase tracking-widest">
            {data.badgeText}
          </span>
        </TextReveal>

        <TextReveal delay={0.1}>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mt-3 mb-6">
            {titleParts[0]}
            <span className="gradient-text">
              {data.highlightText}
            </span>
            {titleParts[1]}
          </h1>
        </TextReveal>

        <TextReveal delay={0.2}>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {data.description}
          </p>
        </TextReveal>

      </div>
    </section>

    {/* Stats */}
    <section className="py-20 px-4 relative">
       <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/5 via-neon-blue/5 to-neon-pink/5" />

       <div className="container mx-auto">


        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">


          {stats.map((stat, i) => (
            <GlowCard className="p-6 md:p-8 text-center">

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
            </GlowCard>

          ))}

        </div>

      </div>

    </section>

    {/* Our Story */}
    <section className="section-padding relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <SlideIn direction="left">

            <span className="text-neon-purple text-sm font-semibold uppercase tracking-widest">
              {ourStoryData.story.badgeText}
            </span>

            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-6">
              {titleParts[0]}
              <span className="gradient-text">
                {ourStoryData.story.highlightText}
              </span>
              {titleParts[1]}
            </h2>

            <p className="text-muted-foreground mb-4">
              {ourStoryData.story.paragraph1}
            </p>

            <p className="text-muted-foreground mb-6">
              {ourStoryData.story.paragraph2}
            </p>

            <Link to="/process">
              <motion.span
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-neon-purple font-semibold"
              >
                See How We Work <ArrowRight size={18} />
              </motion.span>
            </Link>

          </SlideIn>

          {/* RIGHT */}
          <SlideIn direction="right">
            <div className="space-y-4">
              {ourStoryData.milestones.map((m:any, i:number) => (
                <motion.div
                  key={m._id}
                  className="glass-card p-5 flex gap-4 items-start"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 5, borderColor: "hsl(260 80% 60% / 0.3)" }}
                >
                  <span className="font-heading font-bold text-neon-purple text-lg">
                    {m.year}
                  </span>

                  <div>
                    <h4 className="font-heading font-bold text-sm">
                      {m.title}
                    </h4>
                    <p className="text-muted-foreground text-xs mt-1">
                      {m.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </SlideIn>

        </div>
      </div>
    </section>
    

    {/* Our Values */}
    {/* <section className="section-padding relative">
      <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[150px]" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} />
      <div className="container mx-auto relative z-10">
        <BlurIn className="text-center mb-16">
          <span className="text-neon-purple text-sm font-semibold uppercase tracking-widest">Our Values</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            What Drives <span className="gradient-text">Us</span>
          </h2>
        </BlurIn>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <GradientBorderCard>
                <div className="flex items-start gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-2xl bg-neon-purple/10 flex items-center justify-center shrink-0"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <v.icon size={22} className="text-neon-purple" />
                  </motion.div>
                  <div>
                    <h3 className="font-heading text-lg font-bold mb-2">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </GradientBorderCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section> */}
    <section className="section-padding relative">

  <motion.div
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[150px]"
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ duration: 8, repeat: Infinity }}
  />

  <div className="container mx-auto relative z-10">

    <BlurIn className="text-center mb-16">
      <span className="text-neon-purple text-sm font-semibold uppercase tracking-widest">
        Our Values
      </span>

      <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
        What Drives <span className="gradient-text">Us</span>
      </h2>
    </BlurIn>

    {/* ✅ GRID OUTSIDE */}
    <div className="grid md:grid-cols-2 gap-9 max-w-4xl mx-auto">

      {values.map((v, i) => {

        const Icon =
          Icons[v.icon as keyof typeof Icons] || Icons.Target;

        return (
          <ScrollReveal key={v._id} delay={i * 0.1}>
            <GradientBorderCard>

              <div className="flex items-start gap-4">

                <motion.div
                  className="w-12 h-12 rounded-2xl bg-neon-purple/10 flex items-center justify-center shrink-0"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <Icon size={22} className="text-neon-purple" />
                </motion.div>

                <div>
                  <h3 className="font-heading text-lg font-bold mb-2">
                    {v.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>

              </div>

            </GradientBorderCard>
          </ScrollReveal>
        );
      })}

    </div>

  </div>
</section>

    {/* Team */}
    <section className="section-padding relative">
      <div className="container mx-auto">
        <BlurIn className="text-center mb-16">
          <span className="text-neon-purple text-sm font-semibold uppercase tracking-widest">Our Team</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3">
            Meet the <span className="gradient-text">Experts</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            A talented team of developers, designers, and strategists passionate about creating exceptional digital experiences.
          </p>
        </BlurIn>
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {team.map((member) => {

  const Icon = Icons[member.icon] || Icons.Users;

  return (
    <StaggerItem key={member._id}>
      <GlowCard className="p-6 text-center">

        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center mx-auto mb-4">
          <Icon size={28} className="text-neon-purple" />
        </div>

        <h3 className="font-heading font-bold">
          {member.name}
        </h3>

        <p className="text-neon-purple text-xs font-semibold uppercase mt-1">
          {member.role}
        </p>

        <p className="text-muted-foreground text-xs mt-2">
          {member.desc}
        </p>

      </GlowCard>
    </StaggerItem>
  );
})}
        </StaggerContainer>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="container mx-auto text-center">
        <ScrollReveal>
          <div className="glass-card p-12 md:p-16 max-w-3xl mx-auto relative overflow-hidden">
            <motion.div className="absolute -top-10 -right-10 w-32 h-32 bg-neon-purple/10 rounded-full blur-[50px]" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 5, repeat: Infinity }} />
            <h2 className="font-heading text-2xl md:text-4xl font-bold mb-4 relative z-10">
              Want to work with <span className="gradient-text">us</span>?
            </h2>
            <p className="text-muted-foreground text-lg relative z-10 mb-8">
              Let's discuss how we can help grow your business.
            </p>
            <Link to="/contact">
              <motion.span
                className="group inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-neon-purple to-neon-blue text-primary-foreground font-semibold relative z-10"
                whileHover={{ scale: 1.05, boxShadow: "0 0 35px -5px hsl(260 80% 60% / 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <Footer />
  </div>
);
}

export default AboutPage;

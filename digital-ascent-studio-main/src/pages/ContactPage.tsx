import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/CursorFollower";
import ScrollReveal from "@/components/ScrollReveal";
import { TextReveal, BlurIn, GlowCard, StaggerContainer, StaggerItem } from "@/components/AnimationUtils";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Instagram, Linkedin, Twitter, Youtube, Globe, Facebook } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const InputField = ({ label, type = "text", placeholder }) => (
  <div>
    <label className="text-sm font-medium mb-2 block">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="input-style"
    />
  </div>
);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const { name, email, message } = formData;
  //   window.open(
  //     `https://wa.me/91952813292?text=${encodeURIComponent(`Hi, I'm ${name} (${email}). ${message}`)}`,
  //     "_blank"
  //   );
  //   setSubmitted(true);
  //   setTimeout(() => setSubmitted(false), 3000);
  // };
  const WHATSAPP_NUMBER = "919952813292"; // country code + number (NO +)
  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const message = `
New Contact Form Message

> Name: ${formData.name}
> Email: ${formData.email}
> Phone: ${formData.phone}
> Service: ${formData.service}

> Message:
${formData.message}
  `;

  const encodedMessage = encodeURIComponent(message);

  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");

  setSubmitted(true);
};

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <CursorFollower />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="absolute inset-0 animated-gradient-bg opacity-50" />
        <motion.div className="absolute top-40 left-1/3 w-72 h-72 bg-neon-purple/10 rounded-full blur-[100px]" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 8, repeat: Infinity }} />
        <motion.div className="absolute bottom-10 right-1/4 w-60 h-60 bg-neon-blue/10 rounded-full blur-[100px]" animate={{ scale: [1.3, 1, 1.3] }} transition={{ duration: 10, repeat: Infinity }} />
        <div className="container mx-auto relative z-10 text-center max-w-4xl">
          <TextReveal>
            <span className="text-neon-purple text-sm font-semibold uppercase tracking-widest">Contact Us</span>
          </TextReveal>
          <TextReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mt-3 mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h1>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to start your next project? We'd love to hear from you. Get a free consultation today.
            </p>
          </TextReveal>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="px-3 sm:px-4 -mt-2 sm:-mt-4">
  <div className="container mx-auto max-w-6xl">

    <StaggerContainer
      className="
        grid
        grid-cols-1
        xs:grid-cols-2
        md:grid-cols-4
        gap-3 sm:gap-4
      "
    >
      {[
        {
          icon: Phone,
          label: "Call Us",
          value: "+91 99528 13292",
          color: "from-neon-purple to-neon-blue",
        },
        {
          icon: Mail,
          label: "Email",
          value: "asquaresolutions22@gmail.com",
          color: "from-neon-blue to-accent",
        },
        {
          icon: MessageCircle,
          label: "WhatsApp",
          value: "+91 99528 13292",
          color: "from-green-500 to-green-600",
        },
        {
          icon: Clock,
          label: "Hours",
          value: "Mon–Fri 9–6",
          color: "from-neon-pink to-neon-purple",
        },
      ].map((item) => (
        <StaggerItem key={item.label}>
          <GlowCard className="p-4 sm:p-5 text-center h-full">

            {/* ICON */}
            <motion.div
              className={`
                w-10 h-10
                sm:w-12 sm:h-12
                rounded-xl
                bg-gradient-to-br ${item.color}
                flex items-center justify-center
                mx-auto mb-3
              `}
              whileHover={{ rotate: 10, scale: 1.1 }}
            >
              <item.icon
                size={18}
                className="text-primary-foreground sm:w-5 sm:h-5"
              />
            </motion.div>

            {/* LABEL */}
            <span className="
              text-[10px] sm:text-xs
              text-muted-foreground
              uppercase tracking-wider
              block
            ">
              {item.label}
            </span>

            {/* VALUE */}
            <span className="
              text-xs sm:text-sm
              font-semibold
              mt-1 block
              break-words
              leading-snug
            ">
              {item.value}
            </span>

          </GlowCard>
        </StaggerItem>
      ))}
    </StaggerContainer>

  </div>
</section>

      {/* Contact Content */}
      <section className="py-14 sm:py-20 px-3 sm:px-4">
  <div className="container mx-auto">

    {/* GRID */}
    <div className="
      grid
      grid-cols-1
      lg:grid-cols-5
      gap-10 lg:gap-12
      max-w-6xl mx-auto
    ">

      {/* ================= INFO ================= */}
      <div className="lg:col-span-2 space-y-6">

        <ScrollReveal direction="left">
          <h3 className="font-heading text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Get in Touch
          </h3>

          <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
            Have a project in mind? Reach out and let's create something amazing together.
            We respond to all inquiries within 24 hours.
          </p>
        </ScrollReveal>

        {[
          { icon: Mail, label: "Email", value: "asquaresolutions22@gmail.com" },
          { icon: Phone, label: "Phone", value: "+91 99528 13292" },
          { icon: MapPin, label: "Location", value: "Chennai, India" },
          { icon: Clock, label: "Hours", value: "Mon - Fri, 9AM - 6PM" },
        ].map(({ icon: Icon, label, value }, i) => (
          <ScrollReveal key={label} delay={i * 0.1} direction="left">
            <motion.div
              className="
                glass-card-hover
                p-3 sm:p-4
                flex items-center gap-3 sm:gap-4
              "
              whileHover={{ x: 5 }}
            >
              <div className="
                w-9 h-9 sm:w-10 sm:h-10
                rounded-xl
                bg-neon-purple/10
                flex items-center justify-center
                shrink-0
              ">
                <Icon size={16} className="text-neon-purple" />
              </div>

              <div className="min-w-0">
                <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
                  {label}
                </span>

                {/* prevents email overflow */}
                <p className="text-xs sm:text-sm font-medium break-words">
                  {value}
                </p>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}

        {/* WHATSAPP */}
        <ScrollReveal delay={0.4} direction="left">
          <motion.a
            href="https://wa.me/919952813292"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              px-5 py-3 sm:px-6 sm:py-3
              rounded-xl
              bg-green-600
              text-primary-foreground
              font-semibold
              mt-2 sm:mt-4
              w-full justify-center
              text-sm sm:text-base
            "
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </motion.a>
        </ScrollReveal>

        {/* SOCIAL */}
        <ScrollReveal delay={0.5} direction="left">
          <div className="pt-2 sm:pt-4">
            <p className="text-xs sm:text-sm text-muted-foreground mb-3">
              Follow us
            </p>

            <div className="flex gap-3 flex-wrap">
              {[
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Facebook, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  className="
                    w-9 h-9 sm:w-10 sm:h-10
                    rounded-lg
                    glass-card
                    flex items-center justify-center
                    text-muted-foreground
                    hover:text-neon-purple
                    transition-all
                  "
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* ================= FORM ================= */}
      <div className="lg:col-span-3">
        <ScrollReveal direction="right">

          <form
            onSubmit={handleSubmit}
            className="
              glass-card
              p-4 sm:p-6 md:p-8
              space-y-4 sm:space-y-5
            "
          >

            {/* NAME + EMAIL */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <InputField label="Your Name *" placeholder="John Doe" />
              <InputField label="Your Email *" type="email" placeholder="john@example.com" />
            </div>

            {/* PHONE + SERVICE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <InputField label="Phone" placeholder="+91 99999 99999" />

              <div>
                <label className="text-sm font-medium mb-2 block">Service</label>
                <select className="input-style">
                  <option>Select a service</option>
                  <option>Web Development</option>
                  <option>SEO Optimization</option>
                  <option>Digital Marketing</option>
                  <option>Branding & Design</option>
                  <option>E-Commerce Solutions</option>
                  <option value="">Other</option>

                </select>
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm font-medium mb-2 block">Message *</label>
              <textarea
                rows={4}
                required
                className="input-style resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* SUBMIT */}
            <motion.button
              type="submit"
              className="
                w-full
                inline-flex items-center justify-center gap-2
                px-6 py-3 sm:px-8 sm:py-4
                rounded-xl
                bg-gradient-to-r from-neon-purple to-neon-blue
                text-primary-foreground
                font-semibold
                text-sm sm:text-base
              "
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <Send size={18} />
              Send Message
            </motion.button>

          </form>
        </ScrollReveal>
      </div>

    </div>
  </div>
</section>

      {/* Map placeholder */}
      <section className="px-4 pb-20">
  <div className="container mx-auto max-w-6xl">
    <BlurIn>
      <div className="glass-card p-1 rounded-xl overflow-hidden">
        
        <div className="aspect-[21/9] rounded-lg overflow-hidden">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps?q=Chennai,India&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>

      </div>
    </BlurIn>
  </div>
</section>

      <Footer />
    </div>
  );
};

export default ContactPage;

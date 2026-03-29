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
      <section className="px-4 -mt-4">
        <div className="container mx-auto max-w-6xl">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Phone, label: "Call Us", value: "+91 99528 13292", color: "from-neon-purple to-neon-blue" },
              { icon: Mail, label: "Email", value: "asquaresolutions22@gmail.com", color: "from-neon-blue to-accent" },
              { icon: MessageCircle, label: "WhatsApp", value: "+91 99528 13292",color: "from-green-500 to-green-600" },
              { icon: Clock, label: "Hours", value: "Mon-Fri 9-6", color: "from-neon-pink to-neon-purple" },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <GlowCard className="p-4 text-center">
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-3`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <item.icon size={20} className="text-primary-foreground" />
                  </motion.div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider block">{item.label}</span>
                  <span className="text-sm font-semibold mt-1 block">{item.value}</span>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Info */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal direction="left">
                <h3 className="font-heading text-2xl font-bold mb-4">Get in Touch</h3>
                <p className="text-muted-foreground mb-8">
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
                    className="glass-card-hover p-4 flex items-center gap-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-neon-purple/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-neon-purple" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">{label}</span>
                      <p className="text-sm font-medium">{value}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}

              <ScrollReveal delay={0.4} direction="left">
                <motion.a
                  href="https://wa.me/919952813292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-primary-foreground font-semibold mt-4 w-full justify-center"
                  whileHover={{ scale: 1.05, backgroundColor: "hsl(142, 71%, 35%)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </motion.a>
              </ScrollReveal>

              {/* Social Links */}
              <ScrollReveal delay={0.5} direction="left">
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground mb-3">Follow us</p>
                  <div className="flex gap-3">
                    {[
                      { icon: Instagram, href: "https://www.instagram.com/a_square_solutions?igsh=cGZ5MWp3cGR2YnB6" },
                      { icon: Linkedin, href: "https://www.linkedin.com/company/a-square-solutions-2/" },
                      { icon: Youtube, href: "https://youtube.com/@a_square_solutions?si=xr0stucqnHMgk1HL" },
                      { icon: Facebook, href: "https://www.facebook.com/people/A-Square-Solutions/61585239463632/?rdid=s5PkiLpOBhvLcapR&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1H3pUY92HR%2F" },
                    ].map(({ icon: Icon, href }, i) => (
                      <motion.a
                        key={i}
                        href={href}
                        target="_blank"
                        className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-neon-purple hover:border-neon-purple/40 transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon size={18} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-glass-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon-purple/50 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-glass-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon-purple/50 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-glass-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon-purple/50 transition-colors"
                        placeholder="+91 99999 99999"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Service</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-glass-border/30 text-foreground focus:outline-none focus:border-neon-purple/50 transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="web">Web Development</option>
                        <option value="seo">SEO Optimization</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="ads">Paid Ads</option>
                        <option value="branding">Branding & Design</option>
                        <option value="ecommerce">E-Commerce</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  {/* <div>
                    <label className="text-sm font-medium mb-2 block">Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-glass-border/30 text-foreground focus:outline-none focus:border-neon-purple/50 transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="10k-25k">₹10,000 - ₹25,000</option>
                      <option value="25k-50k">₹25,000 - ₹50,000</option>
                      <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                      <option value="1l+">₹1,00,000+</option>
                    </select>
                  </div> */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-glass-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon-purple/50 transition-colors resize-none"
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-neon-purple to-neon-blue text-primary-foreground font-semibold"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 30px -5px hsl(260 80% 60% / 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* {submitted ? (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex items-center gap-2"
                      >
                        Message Sent! ✓
                      </motion.span>
                    ) : (
                      <> */}
                        <Send size={18} />
                        Send Message
                      {/* </>
                    )} */}
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

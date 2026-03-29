import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    window.open(
      `https://wa.me/919999999999?text=${encodeURIComponent(`Hi, I'm ${name} (${email}). ${message}`)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-neon-purple text-sm font-semibold uppercase tracking-widest">Contact</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 mb-5">
              Let's <span className="gradient-text">Connect</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-2xl font-bold mb-4">Get in Touch</h3>
                <p className="text-muted-foreground">
                  Have a project in mind? We'd love to hear about it. Reach out and let's create something amazing together.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: "hello@asquaresolutions.com" },
                  { icon: Phone, label: "+91 99999 99999" },
                  { icon: MapPin, label: "India" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-4 glass-card-hover p-4">
                    <div className="w-10 h-10 rounded-xl bg-neon-purple/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-neon-purple" />
                    </div>
                    <span className="text-sm">{label}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-primary-foreground font-semibold transition-all duration-300 hover:scale-105"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              {[
                { name: "name", label: "Your Name", type: "text" },
                { name: "email", label: "Your Email", type: "email" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="text-sm font-medium mb-2 block">{field.label}</label>
                  <input
                    type={field.type}
                    required
                    value={formData[field.name as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-glass-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon-purple/50 transition-colors"
                    placeholder={field.label}
                  />
                </div>
              ))}
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-glass-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon-purple/50 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-neon-purple to-neon-blue text-primary-foreground font-semibold transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(260_80%_60%_/_0.5)] hover:scale-[1.02]"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

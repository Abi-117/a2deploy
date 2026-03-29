import { Github, Linkedin, Twitter, Instagram , Youtube ,FacebookIcon, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const socials = [
  
  { icon: Facebook, href: "https://www.facebook.com/people/A-Square-Solutions/61585239463632/?rdid=s5PkiLpOBhvLcapR&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1H3pUY92HR%2F" },
  { icon: Instagram, href: "https://www.instagram.com/a_square_solutions?igsh=cGZ5MWp3cGR2YnB6" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/a-square-solutions-2/" },
  { icon: Youtube, href: "https://youtube.com/@a_square_solutions?si=xr0stucqnHMgk1HL" },
  

];

const Footer = () => (
  <footer className="border-t border-glass-border/20 py-12 px-4">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-4 gap-8 mb-12">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img src={logo} alt="A Square Solutions" className="h-20 w-20 object-contain bg-white" />
            <span className="font-heading text-lg font-bold">A Square <span className="text-neon-purple">Solutions</span></span>
          </Link>
          <p className="text-muted-foreground text-sm max-w-sm">
            Building digital experiences that grow businesses. Your trusted partner for web development, marketing, and branding.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-4">Quick Links</h4>
          <div className="space-y-2">
            {[
              { label: "About", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "Portfolio", to: "/portfolio" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <Link key={l.label} to={l.to} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-4">Services</h4>
          <div className="space-y-2">
            {["Web Development", "SEO", "Digital Marketing", "Branding"].map((s) => (
              <Link key={s} to="/services" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">{s}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-glass-border/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© 2026 A Square Solutions. All rights reserved.</p>
        <div className="flex gap-3">
          {socials.map(({ icon: Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-neon-purple hover:border-neon-purple/40 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

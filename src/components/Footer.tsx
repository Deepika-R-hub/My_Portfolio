import { Heart, Linkedin, Mail, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl md:text-3xl font-bold tracking-tight group">
              <span className="gradient-text drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)] group-hover:drop-shadow-[0_0_15px_hsl(var(--primary)/0.7)] transition-all duration-300">Deepika</span>
              <span className="text-secondary drop-shadow-[0_0_8px_hsl(var(--secondary)/0.5)]"> R</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:deepikaraj1803@gmail.com"
              className="p-3 rounded-xl glass hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://linkedin.com/in/deepika-rajendiran"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Deepika-R-hub"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl glass hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {currentYear} Deepika R. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

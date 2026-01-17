import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import nacosLogo from '@/assets/nacos-logo.png';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={nacosLogo} alt="NACOS Logo" className="h-12 w-auto brightness-0 invert" />
              <div>
                <h3 className="font-bold text-lg">NACOS FUDMA</h3>
                <p className="text-sm text-secondary-foreground/70">Faculty of Computing</p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80 max-w-sm">
              Building the next generation of tech leaders in Northern Nigeria through innovation, practical skills, and professional excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-secondary-foreground/80 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/tech-guild" className="text-secondary-foreground/80 hover:text-primary transition-colors">Tech Guild</Link></li>
              <li><Link to="/executives" className="text-secondary-foreground/80 hover:text-primary transition-colors">Executives</Link></li>
              <li><Link to="/verification" className="text-secondary-foreground/80 hover:text-primary transition-colors">ID Verification</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Code of Conduct</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Time-Table</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Tutorial Schedule</a></li>
              <li><Link to="/events" className="text-secondary-foreground/80 hover:text-primary transition-colors">Events</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-secondary-foreground/70 text-center md:text-left">
            <p>© 2026 NACOS FUDMA Chapter. All Rights Reserved.</p>
            <p className="text-xs mt-1">Powered by The Office of the President</p>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="WhatsApp">
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

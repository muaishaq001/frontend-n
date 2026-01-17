import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import nacosLogo from '@/assets/nacos-logo.png';
import fudmaLogo from '@/assets/fudma-logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'The Executives', path: '/executives' },
  { name: 'Tech Guild', path: '/tech-guild' },
  { name: 'Events', path: '/events' },
  { name: 'ID Verification', path: '/verification' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Dual Logos */}
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <img src={nacosLogo} alt="NACOS Logo" className="h-10 md:h-14 w-auto" />
            <div className="h-8 w-px bg-border hidden sm:block" />
            <img src={fudmaLogo} alt="FUDMA Logo" className="h-10 md:h-14 w-auto hidden sm:block" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary bg-accent'
                    : 'text-foreground/80 hover:text-primary hover:bg-accent/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center gap-3">
            <Link to="/contact">
              <Button className="hidden sm:flex rounded-full px-6">
                Contact Us
              </Button>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary bg-accent'
                      : 'text-foreground/80 hover:text-primary hover:bg-accent/50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full mt-2 rounded-full">Contact Us</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

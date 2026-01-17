import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Code, Shield } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/80 to-secondary/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-12">
        <div className="max-w-4xl mx-auto text-center text-secondary-foreground">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium">Federal University Dutsin-Ma</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            <span className="text-secondary-foreground">National Association of</span>
            <br />
            <span className="text-primary">Computing Students</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-secondary-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-in">
            Building tomorrow's tech leaders today. Join the Faculty of Computing's mission of <strong className="text-primary">Capacity & Aura</strong> — where practical excellence meets professional mastery.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in">
            <Link to="/tech-guild">
              <Button size="lg" className="rounded-full px-8 gap-2 text-base">
                Join Tech Guild <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="rounded-full px-8 text-base bg-secondary-foreground/10 border-secondary-foreground/40 text-secondary-foreground hover:bg-secondary-foreground/20 hover:border-secondary-foreground/60">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto animate-fade-in">
            <div className="text-center p-4 rounded-xl bg-secondary-foreground/5 backdrop-blur-sm border border-secondary-foreground/10">
              <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl md:text-3xl font-bold text-secondary-foreground">500+</div>
              <div className="text-xs md:text-sm text-secondary-foreground/70">Active Members</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-secondary-foreground/5 backdrop-blur-sm border border-secondary-foreground/10">
              <Code className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl md:text-3xl font-bold text-secondary-foreground">4</div>
              <div className="text-xs md:text-sm text-secondary-foreground/70">Departments</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-secondary-foreground/5 backdrop-blur-sm border border-secondary-foreground/10">
              <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl md:text-3xl font-bold text-secondary-foreground">4</div>
              <div className="text-xs md:text-sm text-secondary-foreground/70">Tech Tracks</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-secondary-foreground/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

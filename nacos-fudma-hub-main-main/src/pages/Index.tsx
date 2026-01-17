import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import PresidentSection from '@/components/PresidentSection';
import TechGuildPreview from '@/components/TechGuildPreview';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Download, Calendar, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        <PresidentSection />
        <TechGuildPreview />
        
        {/* Registration CTA Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <CheckCircle className="h-12 w-12 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Register as a NACOS Member
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                New to NACOS FUDMA? Register now and become part of the computing community. Verify your email to complete registration.
              </p>
              <Link to="/register">
                <Button 
                  size="lg" 
                  className="rounded-full px-8 gap-2"
                >
                  Register Now <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Verification CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-primary-foreground">
              <CheckCircle className="h-12 w-12 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Verify Your Student Status
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Quickly verify your NACOS membership status using your matriculation number. Access your student information instantly.
              </p>
              <Link to="/verification">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="rounded-full px-8 gap-2"
                >
                  Go to Verification Portal <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                Resources
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Downloadable Documents
              </h2>
              <p className="text-muted-foreground text-lg">
                Access official faculty documents and stay updated with schedules.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { title: 'Faculty Code of Conduct', icon: Download },
                { title: 'Semester Time-Table', icon: Calendar },
                { title: 'Tutorial Schedules', icon: Calendar },
              ].map((doc) => (
                <div
                  key={doc.title}
                  className="flex items-center gap-4 p-6 rounded-xl bg-background border border-border hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="p-3 rounded-lg bg-accent group-hover:bg-primary transition-colors">
                    <doc.icon className="h-5 w-5 text-accent-foreground group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{doc.title}</h3>
                    <p className="text-sm text-muted-foreground">PDF Document</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events Preview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
              <div>
                <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
                  What's Happening
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Upcoming Events
                </h2>
              </div>
              <Link to="/events">
                <Button variant="outline" className="gap-2 rounded-full">
                  View All Events <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Tech Week 2026',
                  date: 'March 15-20, 2026',
                  description: 'Annual technology exhibition showcasing student projects and innovations.',
                },
                {
                  title: 'Cybersecurity Workshop',
                  date: 'February 28, 2026',
                  description: 'Hands-on ethical hacking and security fundamentals workshop.',
                },
                {
                  title: 'Faculty Orientation',
                  date: 'January 25, 2026',
                  description: 'Welcoming new students to the Faculty of Computing family.',
                },
              ].map((event) => (
                <div
                  key={event.title}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all"
                >
                  <div className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium mb-4">
                    {event.date}
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{event.title}</h3>
                  <p className="text-muted-foreground text-sm">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

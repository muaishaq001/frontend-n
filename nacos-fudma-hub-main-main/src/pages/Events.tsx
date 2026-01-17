import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const upcomingEvents = [
  {
    id: 1,
    title: 'Tech Week 2026',
    date: 'March 15-20, 2026',
    time: '9:00 AM - 5:00 PM Daily',
    location: 'Faculty of Computing Complex',
    description: 'Our annual technology exhibition showcasing student projects, innovations, and tech talks from industry leaders. Features hackathons, workshops, and networking sessions.',
    type: 'Major Event',
  },
  {
    id: 2,
    title: 'Cybersecurity Workshop',
    date: 'February 28, 2026',
    time: '10:00 AM - 4:00 PM',
    location: 'Computer Lab 3',
    description: 'Hands-on ethical hacking and security fundamentals workshop. Learn penetration testing basics and network security protocols.',
    type: 'Workshop',
  },
  {
    id: 3,
    title: 'Faculty Orientation',
    date: 'January 25, 2026',
    time: '8:00 AM - 2:00 PM',
    location: 'University Auditorium',
    description: 'Welcoming new students to the Faculty of Computing family. Meet the executives, learn about tech tracks, and join the NACOS community.',
    type: 'Orientation',
  },
  {
    id: 4,
    title: 'AI & Machine Learning Bootcamp',
    date: 'April 5-7, 2026',
    time: '9:00 AM - 3:00 PM',
    location: 'ICT Centre',
    description: 'Three-day intensive bootcamp covering Python, machine learning fundamentals, and hands-on AI project building.',
    type: 'Bootcamp',
  },
];

const pastEvents = [
  {
    id: 5,
    title: 'Web Development Hackathon',
    date: 'December 10, 2025',
    attendees: 150,
  },
  {
    id: 6,
    title: 'Career Fair 2025',
    date: 'November 20, 2025',
    attendees: 300,
  },
  {
    id: 7,
    title: 'Tech Guild Launch',
    date: 'October 15, 2025',
    attendees: 200,
  },
];

const Events = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-primary-foreground">
              <Calendar className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Events & Activities
              </h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Stay updated with workshops, seminars, hackathons, and social gatherings.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8">Upcoming Events</h2>
              
              <div className="space-y-6">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row">
                      {/* Date Badge */}
                      <div className="md:w-48 bg-primary p-6 flex flex-col items-center justify-center text-primary-foreground">
                        <Calendar className="h-8 w-8 mb-2" />
                        <p className="text-center font-semibold">{event.date}</p>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 p-6">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                            {event.type}
                          </span>
                        </div>
                        <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                        <CardDescription className="mb-4">{event.description}</CardDescription>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {event.location}
                          </div>
                        </div>

                        <Button variant="outline" size="sm" className="gap-2">
                          Learn More <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8">Past Events</h2>
              
              <div className="grid sm:grid-cols-3 gap-6">
                {pastEvents.map((event) => (
                  <div 
                    key={event.id}
                    className="p-6 rounded-xl bg-background border border-border"
                  >
                    <p className="text-sm text-muted-foreground mb-2">{event.date}</p>
                    <h3 className="font-semibold text-foreground mb-2">{event.title}</h3>
                    <p className="text-sm text-primary font-medium">{event.attendees}+ Attendees</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Events;

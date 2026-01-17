import { Link } from 'react-router-dom';
import { Code2, Shield, Brain, Palette, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const tracks = [
  {
    id: 'software-engineering',
    title: 'Software Engineering',
    description: 'Master full-stack development, system design, and software architecture.',
    icon: Code2,
    color: 'from-primary to-chart-1',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Learn ethical hacking, security protocols, and threat analysis.',
    icon: Shield,
    color: 'from-chart-2 to-chart-3',
  },
  {
    id: 'data-science',
    title: 'Data Science & AI',
    description: 'Explore machine learning, data analytics, and artificial intelligence.',
    icon: Brain,
    color: 'from-chart-4 to-primary',
  },
  {
    id: 'product-design',
    title: 'Product Design (UI/UX)',
    description: 'Create stunning user interfaces and exceptional user experiences.',
    icon: Palette,
    color: 'from-chart-1 to-chart-2',
  },
];

const TechGuildPreview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Faculty Tech Guild
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Learning Track
          </h2>
          <p className="text-muted-foreground text-lg">
            Join one of our specialized tracks and gain industry-ready skills through hands-on projects and mentorship.
          </p>
        </div>

        {/* Track Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tracks.map((track) => (
            <Card 
              key={track.id}
              className="group relative overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${track.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <track.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{track.title}</CardTitle>
                <CardDescription className="text-sm">
                  {track.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to={`/tech-guild?track=${track.id}`}>
                  <Button variant="ghost" size="sm" className="gap-2 text-primary hover:text-primary hover:bg-accent p-0">
                    Join Track <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/tech-guild">
            <Button size="lg" className="rounded-full px-8 gap-2">
              Explore All Tracks <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TechGuildPreview;

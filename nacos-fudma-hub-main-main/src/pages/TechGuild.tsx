import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Code2, Shield, Brain, Palette, CheckCircle, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const tracks = [
  {
    id: 'software-engineering',
    title: 'Software Engineering',
    description: 'Master full-stack development, system design, and software architecture. Learn to build scalable applications using modern frameworks and best practices.',
    icon: Code2,
    skills: ['React/Next.js', 'Node.js', 'Database Design', 'API Development', 'DevOps Basics'],
    color: 'from-primary to-chart-1',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Learn ethical hacking, security protocols, and threat analysis. Protect systems and networks from cyber threats.',
    icon: Shield,
    skills: ['Penetration Testing', 'Network Security', 'Cryptography', 'Incident Response', 'Security Auditing'],
    color: 'from-chart-2 to-chart-3',
  },
  {
    id: 'data-science',
    title: 'Data Science & AI',
    description: 'Explore machine learning, data analytics, and artificial intelligence. Turn data into actionable insights.',
    icon: Brain,
    skills: ['Python', 'Machine Learning', 'Data Visualization', 'Deep Learning', 'Statistical Analysis'],
    color: 'from-chart-4 to-primary',
  },
  {
    id: 'product-design',
    title: 'Product Design (UI/UX)',
    description: 'Create stunning user interfaces and exceptional user experiences. Design products that users love.',
    icon: Palette,
    skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'Accessibility'],
    color: 'from-chart-1 to-chart-2',
  },
];

const TechGuild = () => {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

  const handleJoinTrack = (trackId: string) => {
    setSelectedTrack(trackId);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted!",
      description: "Welcome to the Tech Guild. You'll receive an email with next steps.",
    });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-primary-foreground">
              <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">
                Level Up Your Skills
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Faculty Tech Guild
              </h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Choose your learning track and gain industry-ready skills through hands-on projects, mentorship, and real-world experience.
              </p>
            </div>
          </div>
        </section>

        {/* Tracks Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {tracks.map((track) => (
                <Card 
                  key={track.id}
                  className="group relative overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                >
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${track.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <track.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl">{track.title}</CardTitle>
                    <CardDescription className="text-base">
                      {track.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Skills */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">What You'll Learn:</h4>
                      <div className="flex flex-wrap gap-2">
                        {track.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button 
                      onClick={() => handleJoinTrack(track.id)}
                      className="w-full gap-2 rounded-lg"
                    >
                      Join Track <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
                Why Join the Tech Guild?
              </h2>
              <div className="grid sm:grid-cols-3 gap-8">
                {[
                  { title: 'Expert Mentorship', desc: 'Learn from industry professionals and senior students.' },
                  { title: 'Project-Based Learning', desc: 'Build real-world projects for your portfolio.' },
                  { title: 'Career Opportunities', desc: 'Get connected with internships and job placements.' },
                ].map((benefit) => (
                  <div key={benefit.title} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Registration Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Join {tracks.find(t => t.id === selectedTrack)?.title}</DialogTitle>
            <DialogDescription>
              Fill in your details to register for this track.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" placeholder="Enter your full name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="matricNo">Matric Number</Label>
              <Input id="matricNo" placeholder="e.g., FCP/CSC/22/1001" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="your.email@student.fudma.edu.ng" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="level">Current Level</Label>
              <Select required>
                <SelectTrigger>
                  <SelectValue placeholder="Select your level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="100">100 Level</SelectItem>
                  <SelectItem value="200">200 Level</SelectItem>
                  <SelectItem value="300">300 Level</SelectItem>
                  <SelectItem value="400">400 Level</SelectItem>
                  <SelectItem value="500">500 Level</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">
              Submit Registration
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default TechGuild;

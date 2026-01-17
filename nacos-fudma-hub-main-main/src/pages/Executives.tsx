import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Linkedin } from 'lucide-react';
import presidentImg from '@/assets/president.jpg';

const executives = [
  {
    id: 1,
    name: 'Muhammed Ishaq',
    alias: 'MUAISHAQ',
    position: 'President',
    department: 'Software Engineering',
    quote: 'Building Capacity. Owning the Aura.',
    image: presidentImg,
    linkedin: '#',
  },
  {
    id: 2,
    name: 'Fatima Abubakar',
    alias: 'FATBK',
    position: 'Vice President',
    department: 'Computer Science',
    quote: 'Innovation starts with collaboration.',
    image: null,
    linkedin: '#',
  },
  {
    id: 3,
    name: 'Ibrahim Musa',
    alias: 'IBMS',
    position: 'General Secretary',
    department: 'Cybersecurity',
    quote: 'Every great achievement begins with a single step.',
    image: null,
    linkedin: '#',
  },
  {
    id: 4,
    name: 'Aisha Yusuf',
    alias: 'AYUS',
    position: 'Financial Secretary',
    department: 'Information Technology',
    quote: 'Excellence is not a skill, it\'s an attitude.',
    image: null,
    linkedin: '#',
  },
  {
    id: 5,
    name: 'Usman Abdullahi',
    alias: 'USABD',
    position: 'Public Relations Officer',
    department: 'Software Engineering',
    quote: 'Communication is the bridge to understanding.',
    image: null,
    linkedin: '#',
  },
  {
    id: 6,
    name: 'Halima Bello',
    alias: 'HBELLO',
    position: 'Welfare Director',
    department: 'Computer Science',
    quote: 'A united faculty is an unstoppable force.',
    image: null,
    linkedin: '#',
  },
];

const Executives = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-primary-foreground">
              <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">
                Leadership Team
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                The Executives
              </h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Meet the visionary leaders driving the "Capacity & Aura" roadmap forward.
              </p>
            </div>
          </div>
        </section>

        {/* Executive Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {executives.map((exec) => (
                <div
                  key={exec.id}
                  className="group perspective-1000"
                >
                  <div className="relative h-[420px] transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                    {/* Front of Card */}
                    <div className="absolute inset-0 backface-hidden">
                      <div className="h-full rounded-2xl overflow-hidden bg-card border border-border shadow-lg">
                        {/* Photo */}
                        <div className="h-56 bg-gradient-to-br from-primary/20 to-accent overflow-hidden">
                          {exec.image ? (
                            <img 
                              src={exec.image} 
                              alt={exec.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="text-6xl font-bold text-primary/30">
                                {exec.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                          )}
                        </div>
                        {/* Info */}
                        <div className="p-6 text-center">
                          <h3 className="text-xl font-bold text-foreground">{exec.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">({exec.alias})</p>
                          <div className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium mb-2">
                            {exec.position}
                          </div>
                          <p className="text-sm text-muted-foreground">{exec.department}</p>
                        </div>
                      </div>
                    </div>

                    {/* Back of Card */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180">
                      <div className="h-full rounded-2xl bg-primary text-primary-foreground p-8 flex flex-col items-center justify-center text-center shadow-lg">
                        <p className="text-lg font-serif italic mb-6">"{exec.quote}"</p>
                        <div className="mt-auto">
                          <p className="font-bold">{exec.name}</p>
                          <p className="text-sm opacity-80 mb-4">{exec.position}</p>
                          <a 
                            href={exec.linkedin}
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-colors"
                            aria-label={`${exec.name}'s LinkedIn`}
                          >
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default Executives;

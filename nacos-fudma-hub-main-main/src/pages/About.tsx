import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Eye, Users, GraduationCap, Code, Database, Shield } from 'lucide-react';

const departments = [
  { name: 'Software Engineering', icon: Code },
  { name: 'Computer Science', icon: Database },
  { name: 'Cybersecurity', icon: Shield },
  { name: 'Information Technology', icon: GraduationCap },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-primary-foreground">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Who We Are
              </h1>
              <p className="text-xl opacity-90">
                Uniting the brightest minds in technology at Federal University Dutsin-Ma
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                The <strong className="text-primary">National Association of Computing Students (NACOS)</strong>, FUDMA Chapter, is the umbrella body uniting the brightest minds in technology within Federal University Dutsin-Ma. We are a coalition of four powerful departments: Software Engineering, Computer Science, Cybersecurity, and Information Technology.
              </p>

              {/* Departments Grid */}
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {departments.map((dept) => (
                  <div 
                    key={dept.name}
                    className="flex flex-col items-center p-6 rounded-xl bg-background border border-border text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <dept.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{dept.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Mission */}
              <div className="p-8 md:p-10 rounded-2xl bg-card border border-border">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To bridge the gap between academic curriculum and the tech industry by fostering innovation, technical mastery, and professional leadership.
                </p>
              </div>

              {/* Vision */}
              <div className="p-8 md:p-10 rounded-2xl bg-card border border-border">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading student computing hub in Northern Nigeria, known for producing disciplined, skilled, and employable graduates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-secondary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                The "Capacity & Aura" Philosophy
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-8 rounded-2xl bg-secondary-foreground/5 border border-secondary-foreground/10">
                  <Users className="h-10 w-10 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-3">Capacity</h3>
                  <p className="text-secondary-foreground/80">
                    Equipping students with industry-ready skills, professional certifications, and the technical prowess to excel in the global tech landscape.
                  </p>
                </div>
                <div className="p-8 rounded-2xl bg-secondary-foreground/5 border border-secondary-foreground/10">
                  <GraduationCap className="h-10 w-10 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-3">Aura</h3>
                  <p className="text-secondary-foreground/80">
                    Cultivating confidence, professionalism, and a commanding presence that sets FUDMA computing students apart.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

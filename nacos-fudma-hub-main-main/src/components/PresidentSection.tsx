import { Quote } from 'lucide-react';
import presidentImg from '@/assets/president.jpg';

const PresidentSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* President Image */}
          <div className="relative order-2 md:order-1">
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-3" />
              <img
                src={presidentImg}
                alt="President Muhammed Ishaq"
                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-xl"
              />
              {/* Name Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg">
                <div className="text-center">
                  <p className="font-bold">Muhammed Ishaq</p>
                  <p className="text-xs opacity-90">(MUAISHAQ)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Quote className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">President's Corner</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              From the Desk of the President
            </h2>

            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Welcome to the new digital era of the Faculty of Computing.
              </p>
              <p>
                As we navigate the rapidly evolving world of technology, our mission at FUDMA is clear: to move beyond theoretical knowledge and establish a culture of <strong className="text-foreground">practical excellence</strong>. My administration is dedicated to the <strong className="text-primary">'Capacity & Aura'</strong> roadmap—a strategic vision designed to equip every student with industry-ready skills, professional certifications, and the confidence to compete globally.
              </p>
              <p>
                Whether you are here to join the Tech Guild, verify your membership, or connect with our vibrant community, know that you are part of a faculty that is building the future.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="font-serif italic text-foreground text-lg">
                "Building Capacity. Owning the Aura."
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                — President, Faculty of Computing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresidentSection;

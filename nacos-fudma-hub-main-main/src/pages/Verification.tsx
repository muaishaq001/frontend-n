import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Search, CheckCircle, XCircle, User, BookOpen, GraduationCap, BadgeCheck } from 'lucide-react';

// Mock student data
const mockStudents: Record<string, {
  name: string;
  department: string;
  level: string;
  status: 'active' | 'inactive';
}> = {
  'FCP/CSC/22/1001': {
    name: 'Muhammed Ishaq',
    department: 'Computer Science',
    level: '300 Level',
    status: 'active',
  },
  'FCP/SWE/21/0056': {
    name: 'Fatima Abubakar',
    department: 'Software Engineering',
    level: '400 Level',
    status: 'active',
  },
  'FCP/CYS/23/0234': {
    name: 'Ibrahim Musa',
    department: 'Cybersecurity',
    level: '200 Level',
    status: 'active',
  },
  'FCP/IFT/22/0089': {
    name: 'Aisha Yusuf',
    department: 'Information Technology',
    level: '300 Level',
    status: 'inactive',
  },
};

const Verification = () => {
  const [matricNo, setMatricNo] = useState('');
  const [result, setResult] = useState<typeof mockStudents[string] | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setResult(null);
    setNotFound(false);

    // Simulate API call
    setTimeout(() => {
      const student = mockStudents[matricNo.toUpperCase()];
      if (student) {
        setResult(student);
      } else {
        setNotFound(true);
      }
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-primary-foreground">
              <BadgeCheck className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Verify Student Status
              </h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Enter a matriculation number to verify NACOS membership and student information.
              </p>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              {/* Search Form */}
              <form onSubmit={handleSearch} className="mb-12">
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Enter Matric Number (e.g., FCP/CSC/22/1001)"
                      value={matricNo}
                      onChange={(e) => setMatricNo(e.target.value)}
                      className="pl-12 h-14 text-lg"
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="h-14 px-8" disabled={isSearching}>
                    {isSearching ? 'Searching...' : 'Verify'}
                  </Button>
                </div>
              </form>

              {/* Results */}
              {result && (
                <Card className="animate-fade-in overflow-hidden">
                  <div className={`h-2 ${result.status === 'active' ? 'bg-primary' : 'bg-destructive'}`} />
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                          result.status === 'active' 
                            ? 'bg-primary/10 text-primary' 
                            : 'bg-destructive/10 text-destructive'
                        }`}>
                          {result.status === 'active' ? (
                            <><CheckCircle className="h-4 w-4" /> Active Member</>
                          ) : (
                            <><XCircle className="h-4 w-4" /> Inactive</>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/50">
                        <User className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Student Name</p>
                          <p className="font-semibold text-foreground">{result.name}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/50">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Department</p>
                          <p className="font-semibold text-foreground">{result.department}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/50">
                        <GraduationCap className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Level</p>
                          <p className="font-semibold text-foreground">{result.level}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="text-xs text-muted-foreground text-center">
                        Matric No: <span className="font-mono">{matricNo.toUpperCase()}</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {notFound && (
                <Card className="animate-fade-in border-destructive/50">
                  <CardContent className="p-8 text-center">
                    <XCircle className="h-12 w-12 mx-auto mb-4 text-destructive" />
                    <h3 className="text-lg font-bold text-foreground mb-2">No Record Found</h3>
                    <p className="text-muted-foreground">
                      The matric number "{matricNo}" was not found in our database. Please check and try again.
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Sample Matric Numbers */}
              <div className="mt-12 p-6 rounded-xl bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-3">Sample Matric Numbers (Demo)</h3>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(mockStudents).map((matric) => (
                    <button
                      key={matric}
                      onClick={() => setMatricNo(matric)}
                      className="px-3 py-1.5 rounded-md bg-accent text-accent-foreground text-sm font-mono hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {matric}
                    </button>
                  ))}
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

export default Verification;

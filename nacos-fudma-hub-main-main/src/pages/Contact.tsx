import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send, MessageCircle, Users, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { collaboratorApi } from '@/lib/api';

// Collaborator form schema
const collaboratorSchema = z.object({
  companyName: z.string().min(2, 'Company name must be at least 2 characters').max(150, 'Company name cannot exceed 150 characters'),
  contactPerson: z.string().min(2, 'Contact person name must be at least 2 characters').max(100, 'Contact person name cannot exceed 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  collaborationType: z.enum(['Tech', 'Sports', 'Events', 'Competitions'], {
    required_error: 'Please select a collaboration type',
  }),
});

type CollaboratorForm = z.infer<typeof collaboratorSchema>;

const collaborationTypes = [
  { value: 'Tech', label: 'Tech' },
  { value: 'Sports', label: 'Sports' },
  { value: 'Events', label: 'Events' },
  { value: 'Competitions', label: 'Competitions' },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittingCollaborator, setIsSubmittingCollaborator] = useState(false);

  // Collaborator form
  const collaboratorForm = useForm<CollaboratorForm>({
    resolver: zodResolver(collaboratorSchema),
    defaultValues: {
      companyName: '',
      contactPerson: '',
      email: '',
      collaborationType: undefined,
    },
  });

  // General contact form handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast.success('Message sent!', {
        description: "We'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  // Collaborator form submission
  const onSubmitCollaborator = async (data: CollaboratorForm) => {
    setIsSubmittingCollaborator(true);
    try {
      const response = await collaboratorApi.submit(data);

      if (response.success) {
        toast.success('Application submitted!', {
          description: 'Our NACOS admin team will review your application and contact you soon.',
        });
        collaboratorForm.reset();
      } else {
        toast.error('Submission failed', {
          description: response.message || 'An error occurred during submission.',
        });
      }
    } catch (error: any) {
      toast.error('Submission failed', {
        description: error.message || 'An unexpected error occurred.',
      });
    } finally {
      setIsSubmittingCollaborator(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-primary-foreground">
              <MessageCircle className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Have a question or want to collaborate? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground mb-8">
                    Whether you're a student, faculty member, or industry partner, we're here to answer your questions and explore collaboration opportunities.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <p className="text-muted-foreground">nacos@fudma.edu.ng</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Phone</h3>
                        <p className="text-muted-foreground">+234 800 000 0000</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Location</h3>
                        <p className="text-muted-foreground">
                          Faculty of Computing Complex<br />
                          Federal University Dutsin-Ma<br />
                          Katsina State, Nigeria
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Forms with Tabs */}
                <Card>
                  <CardHeader>
                    <CardTitle>Get in Touch</CardTitle>
                    <CardDescription>
                      Send us a message or submit a collaboration application
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="contact" className="w-full">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="contact">
                          <MessageCircle className="mr-2 h-4 w-4" />
                          General Contact
                        </TabsTrigger>
                        <TabsTrigger value="collaborator">
                          <Users className="mr-2 h-4 w-4" />
                          Collaborate/Sponsor
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="contact" className="space-y-4 mt-6">
                        <form onSubmit={handleSubmit} className="space-y-5">
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="firstName">First Name</Label>
                              <Input id="firstName" placeholder="John" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="lastName">Last Name</Label>
                              <Input id="lastName" placeholder="Doe" required />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" placeholder="john@example.com" required />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input id="subject" placeholder="How can we help?" required />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea 
                              id="message" 
                              placeholder="Your message..." 
                              rows={5}
                              required 
                            />
                          </div>

                          <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                            {isSubmitting ? (
                              <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Sending...
                              </>
                            ) : (
                              <>
                                <Send className="h-4 w-4" />
                                Send Message
                              </>
                            )}
                          </Button>
                        </form>
                      </TabsContent>

                      <TabsContent value="collaborator" className="space-y-4 mt-6">
                        <Form {...collaboratorForm}>
                          <form onSubmit={collaboratorForm.handleSubmit(onSubmitCollaborator)} className="space-y-5">
                            <FormField
                              control={collaboratorForm.control}
                              name="companyName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Company/Organization Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="TechNigeria Ltd" {...field} />
                                  </FormControl>
                                  <FormDescription>
                                    Enter your company or organization name
                                  </FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={collaboratorForm.control}
                              name="contactPerson"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Contact Person</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Ibrahim Hassan" {...field} />
                                  </FormControl>
                                  <FormDescription>
                                    Name of the person we should contact
                                  </FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={collaboratorForm.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email Address</FormLabel>
                                  <FormControl>
                                    <Input type="email" placeholder="contact@example.com" {...field} />
                                  </FormControl>
                                  <FormDescription>
                                    Email address for communication
                                  </FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={collaboratorForm.control}
                              name="collaborationType"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Collaboration Type</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select collaboration type" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {collaborationTypes.map((type) => (
                                        <SelectItem key={type.value} value={type.value}>
                                          {type.label}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormDescription>
                                    Select the type of collaboration you're interested in
                                  </FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <Button type="submit" className="w-full" size="lg" disabled={isSubmittingCollaborator}>
                              {isSubmittingCollaborator ? (
                                <>
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                  Submitting...
                                </>
                              ) : (
                                <>
                                  <Users className="mr-2 h-4 w-4" />
                                  Submit Application
                                </>
                              )}
                            </Button>
                          </form>
                        </Form>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

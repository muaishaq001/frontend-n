import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { GraduationCap, Mail, CheckCircle, ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';
import { studentApi } from '@/lib/api';

// Step 1: Student Details Schema
const studentDetailsSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name cannot exceed 100 characters'),
  registrationNumber: z.string().min(1, 'Registration number is required'),
  email: z.string().email('Please enter a valid email address'),
  department: z.enum(['Computer Science', 'Cyber Security', 'Software Engineering', 'Information Technology'], {
    required_error: 'Please select a department',
  }),
});

type StudentDetailsForm = z.infer<typeof studentDetailsSchema>;

const departments = [
  { value: 'Computer Science', label: 'Computer Science' },
  { value: 'Cyber Security', label: 'Cyber Security' },
  { value: 'Software Engineering', label: 'Software Engineering' },
  { value: 'Information Technology', label: 'Information Technology' },
];

const Register = () => {
  const [step, setStep] = useState<'details' | 'otp'>('details');
  const [studentData, setStudentData] = useState<StudentDetailsForm | null>(null);
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<StudentDetailsForm>({
    resolver: zodResolver(studentDetailsSchema),
    defaultValues: {
      name: '',
      registrationNumber: '',
      email: '',
      department: undefined,
    },
  });

  // Step 1: Submit student details
  const onSubmitStudentDetails = async (data: StudentDetailsForm) => {
    setIsLoading(true);
    try {
      const response = await studentApi.register(data);

      if (response.success) {
        setStudentData(data);
        setStep('otp');
        toast.success('Registration initiated!', {
          description: 'Please check your email for the OTP code.',
        });
      } else {
        toast.error('Registration failed', {
          description: response.message || 'An error occurred during registration.',
        });
      }
    } catch (error: any) {
      toast.error('Registration failed', {
        description: error.message || 'An unexpected error occurred.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      toast.error('Invalid OTP', {
        description: 'Please enter a 6-digit OTP code.',
      });
      return;
    }

    if (!studentData) {
      toast.error('Error', {
        description: 'Student data not found. Please start over.',
      });
      setStep('details');
      return;
    }

    setIsLoading(true);
    try {
      const response = await studentApi.verify({
        ...studentData,
        otp,
      });

      if (response.success) {
        toast.success('Registration complete!', {
          description: 'Your account has been verified successfully.',
        });
        // Reset form and go back to details step
        setTimeout(() => {
          form.reset();
          setStudentData(null);
          setOtp('');
          setStep('details');
        }, 2000);
      } else {
        toast.error('Verification failed', {
          description: response.message || 'Invalid or expired OTP.',
        });
      }
    } catch (error: any) {
      toast.error('Verification failed', {
        description: error.message || 'An unexpected error occurred.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Resend OTP
  const handleResendOtp = async () => {
    if (!studentData?.email) return;

    setIsLoading(true);
    try {
      const response = await studentApi.resendOtp(studentData.email);

      if (response.success) {
        toast.success('OTP resent!', {
          description: 'Please check your email for the new OTP code.',
        });
      } else {
        toast.error('Failed to resend OTP', {
          description: response.message || 'An error occurred.',
        });
      }
    } catch (error: any) {
      toast.error('Failed to resend OTP', {
        description: error.message || 'An unexpected error occurred.',
      });
    } finally {
      setIsLoading(false);
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
              <GraduationCap className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Student Registration
              </h1>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Register as a NACOS FUDMA member. Verify your email to complete registration.
              </p>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              {step === 'details' ? (
                <Card>
                  <CardHeader>
                    <CardTitle>Student Information</CardTitle>
                    <CardDescription>
                      Enter your details to begin registration
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmitStudentDetails)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormDescription>
                                Enter your full name as it appears on your student ID
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="registrationNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Registration Number</FormLabel>
                              <FormControl>
                                <Input placeholder="FUD/CS/22/0001" {...field} />
                              </FormControl>
                              <FormDescription>
                                Your matriculation or registration number
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@student.fudma.edu.ng" {...field} />
                              </FormControl>
                              <FormDescription>
                                We'll send an OTP to this email address
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="department"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Department</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select your department" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {departments.map((dept) => (
                                    <SelectItem key={dept.value} value={dept.value}>
                                      {dept.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormDescription>
                                Select one of the four Faculty departments
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                          {isLoading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Processing...
                            </>
                          ) : (
                            <>
                              Continue to Verification <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>Verify Your Email</CardTitle>
                    <CardDescription>
                      Enter the 6-digit code sent to <strong>{studentData?.email}</strong>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex justify-center">
                      <InputOTP
                        maxLength={6}
                        value={otp}
                        onChange={(value) => setOtp(value)}
                      >
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </div>

                    <div className="space-y-3">
                      <Button
                        onClick={handleVerifyOtp}
                        className="w-full"
                        size="lg"
                        disabled={isLoading || otp.length !== 6}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Verifying...
                          </>
                        ) : (
                          <>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Verify & Complete Registration
                          </>
                        )}
                      </Button>

                      <div className="flex gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          className="flex-1"
                          onClick={() => {
                            setStep('details');
                            setOtp('');
                          }}
                          disabled={isLoading}
                        >
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Back
                        </Button>

                        <Button
                          type="button"
                          variant="outline"
                          className="flex-1"
                          onClick={handleResendOtp}
                          disabled={isLoading}
                        >
                          <Mail className="mr-2 h-4 w-4" />
                          Resend OTP
                        </Button>
                      </div>
                    </div>

                    <div className="text-center text-sm text-muted-foreground">
                      <p>Didn't receive the code? Check your spam folder or click Resend OTP.</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Register;

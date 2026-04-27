import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/Button";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  }

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-section py-16 md:py-24 border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Contact CYBER NETWORK SECURITY</h1>
            <p className="text-xl text-muted-foreground">
              Reach out to CNS for industrial and corporate IT infrastructure, security, and support services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Registered Office</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Building2 className="h-6 w-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Aniruddh Complex, First Floor</h4>
                      <p className="text-muted-foreground">Near Jalaram Chowk, Gayatri Nagar,<br />Last Bus Stop, Gayatri Nagar Main Road,<br />Rajkot - 360002</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-accent shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-muted-foreground">+91 63515 53927</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-accent shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a href="mailto:cnsinfo7@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                        cnsinfo7@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-section rounded-xl border border-border">
                <h3 className="font-semibold mb-2">Business Details</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Website: <a href="https://www.cybernetworksecurity.in" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.cybernetworksecurity.in</a><br />
                  GSTIN: 24BSBPA9422L1ZV<br />
                  CISCO ID: CSCO13130744<br />
                  MICROSOFT ID: 13803808
                </p>
                <p className="text-sm font-medium text-accent">Serving Since 2015</p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center p-12 text-center bg-section rounded-2xl border border-border">
                  <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Request Received</h3>
                  <p className="text-muted-foreground">
                    Thank you for contacting CYBER NETWORK SECURITY. Our team will review your requirements and reach out shortly.
                  </p>
                  <Button 
                    className="mt-8" 
                    variant="outline" 
                    onClick={() => {
                      setIsSubmitted(false);
                      form.reset();
                    }}
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <div className="p-8 bg-card rounded-2xl border border-border shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Request a Service Consultation</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Vijay Adhiya" {...field} data-testid="input-name" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your Business Name" {...field} data-testid="input-company" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="name@company.com" {...field} data-testid="input-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Details / Requirements</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please describe your network, server, security, backup, or IT product requirements..." 
                                className="min-h-[150px] resize-y" 
                                {...field} 
                                data-testid="input-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" className="w-full md:w-auto" size="lg" data-testid="btn-submit-contact">
                        Submit Request
                      </Button>
                    </form>
                  </Form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

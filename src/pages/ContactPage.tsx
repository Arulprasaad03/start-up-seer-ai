
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Mail, MessageSquare, Building2, Phone, Users } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long' })
});

const ContactPage = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      message: ''
    }
  });
  
  function onSubmit(data: z.infer<typeof formSchema>) {
    // In a real app, this would send the form data to a backend API
    console.log(data);
    
    toast({
      title: "Message Sent!",
      description: "We've received your message and will get back to you soon.",
    });
    
    form.reset();
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container py-12">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-1.5 text-sm font-medium text-brand-600 mb-4">
              <MessageSquare className="h-4 w-4" />
              <span>Contact Us</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about our AI startup prediction tool? We're here to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
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
                            <Input placeholder="john@example.com" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="Your company" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 (555) 000-0000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="How can we help you?" 
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <p className="text-muted-foreground mb-6">
                  Our team is ready to answer your questions about our AI prediction tool and how it can help your startup.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-brand-500 mt-0.5" />
                    <div>
                      <div className="font-medium">Email</div>
                      <a href="mailto:info@startupseerai.com" className="text-muted-foreground hover:text-brand-500 transition-colors">
                        info@startupseerai.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-brand-500 mt-0.5" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <a href="tel:+15551234567" className="text-muted-foreground hover:text-brand-500 transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Building2 className="h-5 w-5 text-brand-500 mt-0.5" />
                    <div>
                      <div className="font-medium">Office</div>
                      <address className="text-muted-foreground not-italic">
                        123 Innovation Drive<br />
                        Tech Hub, CA 94103<br />
                        United States
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card className="bg-muted/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="h-5 w-5 text-brand-500" />
                    <h3 className="font-semibold">Enterprise Solutions</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Looking for custom AI solutions for your venture capital firm or incubator?
                    Our enterprise team can help with custom implementations and API access.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Request Enterprise Info
                  </Button>
                </CardContent>
              </Card>
              
              <div className="rounded-lg overflow-hidden h-[200px] bg-muted">
                {/* This would be replaced with an actual map in a real implementation */}
                <div className="h-full w-full flex items-center justify-center bg-accent/50 text-muted-foreground text-sm">
                  Interactive Map Would Appear Here
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;

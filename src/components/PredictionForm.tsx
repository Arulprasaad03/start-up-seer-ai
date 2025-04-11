
import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  companyName: z.string().min(2, { message: 'Company name is required' }),
  industry: z.string().min(1, { message: 'Industry is required' }),
  foundingYear: z.string().regex(/^\d{4}$/, { message: 'Please enter a valid year (YYYY)' }),
  teamSize: z.string().min(1, { message: 'Team size is required' }),
  founderExperience: z.string().min(1, { message: 'Founder experience is required' }),
  fundingAmount: z.string().min(1, { message: 'Funding amount is required' }),
  productStage: z.string().min(1, { message: 'Product stage is required' }),
  targetMarket: z.string().min(1, { message: 'Target market is required' }),
  competitionLevel: z.coerce.number().min(0).max(100),
  businessModel: z.string().min(5, { message: 'Please provide at least a brief description' }).max(500),
});

const PredictionForm = ({ onSubmit }: { onSubmit: (data: z.infer<typeof formSchema>) => void }) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      industry: "",
      foundingYear: new Date().getFullYear().toString(),
      teamSize: "",
      founderExperience: "",
      fundingAmount: "",
      productStage: "",
      targetMarket: "",
      competitionLevel: 50,
      businessModel: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      onSubmit(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem processing your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Company Name */}
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter company name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Industry */}
          <FormField
            control={form.control}
            name="industry"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Industry</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="tech">Technology/Software</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="finance">Finance/Fintech</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="service">Service</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Founding Year */}
          <FormField
            control={form.control}
            name="foundingYear"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Founding Year</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="YYYY" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Team Size */}
          <FormField
            control={form.control}
            name="teamSize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Team Size</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select team size" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="solo">Solo Founder</SelectItem>
                    <SelectItem value="2-5">2-5 Employees</SelectItem>
                    <SelectItem value="6-10">6-10 Employees</SelectItem>
                    <SelectItem value="11-20">11-20 Employees</SelectItem>
                    <SelectItem value="21-50">21-50 Employees</SelectItem>
                    <SelectItem value="50+">50+ Employees</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Founder Experience */}
          <FormField
            control={form.control}
            name="founderExperience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Founder Experience</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="first-time">First-time Founder</SelectItem>
                    <SelectItem value="prev-failed">Previous Failed Startup</SelectItem>
                    <SelectItem value="prev-success">Previous Successful Exit</SelectItem>
                    <SelectItem value="industry-expert">Industry Expert (10+ years)</SelectItem>
                    <SelectItem value="serial">Serial Entrepreneur</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Funding Amount */}
          <FormField
            control={form.control}
            name="fundingAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Funding Amount</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select funding amount" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="bootstrap">Bootstrapped</SelectItem>
                    <SelectItem value="angel">Angel Investment ($100K-$500K)</SelectItem>
                    <SelectItem value="seed">Seed Round ($500K-$2M)</SelectItem>
                    <SelectItem value="seriesA">Series A ($2M-$10M)</SelectItem>
                    <SelectItem value="seriesB">Series B ($10M+)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Product Stage */}
          <FormField
            control={form.control}
            name="productStage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Stage</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select product stage" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="idea">Idea/Concept</SelectItem>
                    <SelectItem value="mvp">Minimum Viable Product</SelectItem>
                    <SelectItem value="beta">Beta Testing</SelectItem>
                    <SelectItem value="launched">Launched/Market Entry</SelectItem>
                    <SelectItem value="growth">Growth/Scaling</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Target Market */}
          <FormField
            control={form.control}
            name="targetMarket"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Target Market</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select target market" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="b2c">B2C (Business to Consumer)</SelectItem>
                    <SelectItem value="b2b">B2B (Business to Business)</SelectItem>
                    <SelectItem value="b2b2c">B2B2C</SelectItem>
                    <SelectItem value="c2c">C2C (Consumer to Consumer)</SelectItem>
                    <SelectItem value="enterprise">Enterprise</SelectItem>
                    <SelectItem value="government">Government</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        {/* Competition Level */}
        <FormField
          control={form.control}
          name="competitionLevel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Competition Level</FormLabel>
              <FormControl>
                <div className="space-y-2">
                  <Slider
                    min={0}
                    max={100}
                    step={1}
                    value={[field.value]}
                    onValueChange={(value) => field.onChange(value[0])}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Low Competition</span>
                    <span>Value: {field.value}%</span>
                    <span>High Competition</span>
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* Business Model */}
        <FormField
          control={form.control}
          name="businessModel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Model Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Briefly describe your business model, revenue streams, and value proposition..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Provide details about how your startup generates or plans to generate revenue.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...
            </>
          ) : (
            "Predict Success"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default PredictionForm;

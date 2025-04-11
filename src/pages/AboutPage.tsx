
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, Code, Database, Users, TrendingUp, Lightbulb } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container py-16">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              How StartupSeerAI Works
            </h1>
            <p className="text-xl text-muted-foreground">
              Our AI model analyzes multiple factors to predict startup success probability with high accuracy.
            </p>
          </div>
          
          <Tabs defaultValue="model" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="model">Our Model</TabsTrigger>
              <TabsTrigger value="factors">Key Factors</TabsTrigger>
              <TabsTrigger value="methodology">Methodology</TabsTrigger>
            </TabsList>
            
            <TabsContent value="model" className="space-y-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="p-4 bg-secondary/50 rounded-lg md:w-1/3">
                      <Brain className="h-12 w-12 text-brand-500 mb-4" />
                      <h3 className="text-xl font-medium mb-2">AI Technology</h3>
                      <p className="text-muted-foreground">
                        Our prediction system uses advanced machine learning algorithms and neural networks trained on extensive startup data.
                      </p>
                    </div>
                    
                    <div className="space-y-4 md:w-2/3">
                      <h3 className="text-xl font-medium">How Our AI Model Works</h3>
                      <p>
                        StartupSeerAI uses a sophisticated machine learning model trained on data from thousands of startups across various industries. By analyzing patterns in this data, our model identifies the key factors that contribute to startup success or failure.
                      </p>
                      <p>
                        When you input your startup details, our AI:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Processes your data across multiple dimensions</li>
                        <li>Compares your profile against successful and failed startups</li>
                        <li>Calculates a weighted success probability score</li>
                        <li>Identifies key strengths and weaknesses</li>
                        <li>Generates actionable recommendations tailored to your situation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <Code className="h-8 w-8 text-brand-500 mb-2" />
                    <h3 className="text-lg font-medium mb-2">Algorithmic Precision</h3>
                    <p className="text-sm text-muted-foreground">
                      Our model employs ensemble learning techniques to combine multiple prediction algorithms for higher accuracy.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <Database className="h-8 w-8 text-brand-500 mb-2" />
                    <h3 className="text-lg font-medium mb-2">Extensive Dataset</h3>
                    <p className="text-sm text-muted-foreground">
                      Trained on data from 10,000+ startups across different sectors, funding stages, and outcomes.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <Lightbulb className="h-8 w-8 text-brand-500 mb-2" />
                    <h3 className="text-lg font-medium mb-2">Actionable Insights</h3>
                    <p className="text-sm text-muted-foreground">
                      Beyond predictions, we provide practical recommendations to improve your startup's chances of success.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="factors" className="space-y-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-4">Key Success Factors</h3>
                  <p className="mb-6">
                    Our AI model evaluates multiple critical factors that research has shown to significantly impact startup success rates. 
                    Here are the primary factors our algorithm analyzes:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex gap-4 items-start">
                        <div className="p-2 bg-secondary/70 rounded">
                          <Users className="h-5 w-5 text-brand-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">Team Composition</h4>
                          <p className="text-sm text-muted-foreground">
                            The size, diversity, and expertise balance of your founding team and early employees.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 items-start">
                        <div className="p-2 bg-secondary/70 rounded">
                          <Brain className="h-5 w-5 text-brand-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">Founder Experience</h4>
                          <p className="text-sm text-muted-foreground">
                            Previous entrepreneurial experience, industry expertise, and track record of the founding team.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 items-start">
                        <div className="p-2 bg-secondary/70 rounded">
                          <Database className="h-5 w-5 text-brand-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">Funding Status</h4>
                          <p className="text-sm text-muted-foreground">
                            Current funding level, funding source, and runway relative to your growth stage.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 items-start">
                        <div className="p-2 bg-secondary/70 rounded">
                          <Code className="h-5 w-5 text-brand-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">Product Maturity</h4>
                          <p className="text-sm text-muted-foreground">
                            Current development stage, feature completeness, and technical scalability.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex gap-4 items-start">
                        <div className="p-2 bg-secondary/70 rounded">
                          <TrendingUp className="h-5 w-5 text-brand-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">Industry & Market Trends</h4>
                          <p className="text-sm text-muted-foreground">
                            Growth rate and maturity of your industry, and alignment with emerging market trends.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 items-start">
                        <div className="p-2 bg-secondary/70 rounded">
                          <Lightbulb className="h-5 w-5 text-brand-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">Business Model Clarity</h4>
                          <p className="text-sm text-muted-foreground">
                            Clear revenue model, pricing strategy, and path to profitability or sustainable growth.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 items-start">
                        <div className="p-2 bg-secondary/70 rounded">
                          <Users className="h-5 w-5 text-brand-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">Target Market</h4>
                          <p className="text-sm text-muted-foreground">
                            Size, growth potential, and accessibility of your primary target market.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 items-start">
                        <div className="p-2 bg-secondary/70 rounded">
                          <TrendingUp className="h-5 w-5 text-brand-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">Competition Level</h4>
                          <p className="text-sm text-muted-foreground">
                            Number of competitors, market concentration, and barriers to entry.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="methodology">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-4">Our Methodology</h3>
                  <p className="mb-6">
                    StartupSeerAI uses a multi-step process to analyze your startup data and generate meaningful predictions:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="p-4 border border-border rounded-lg">
                      <h4 className="text-lg font-medium mb-2">1. Data Collection</h4>
                      <p className="text-muted-foreground">
                        We collect comprehensive information about your startup through our structured form. 
                        This includes quantitative data points and qualitative descriptions of your business model and approach.
                      </p>
                    </div>
                    
                    <div className="p-4 border border-border rounded-lg">
                      <h4 className="text-lg font-medium mb-2">2. Pattern Matching</h4>
                      <p className="text-muted-foreground">
                        Our ML model compares your startup's profile against thousands of historical data points from both successful 
                        and failed startups to identify relevant patterns.
                      </p>
                    </div>
                    
                    <div className="p-4 border border-border rounded-lg">
                      <h4 className="text-lg font-medium mb-2">3. Factor Weighting</h4>
                      <p className="text-muted-foreground">
                        Different factors are weighted based on their historical correlation with startup success. 
                        For example, team composition might be weighted more heavily than office location.
                      </p>
                    </div>
                    
                    <div className="p-4 border border-border rounded-lg">
                      <h4 className="text-lg font-medium mb-2">4. Success Probability Calculation</h4>
                      <p className="text-muted-foreground">
                        A comprehensive score is calculated using proprietary algorithms that combine all weighted factors 
                        into a single probability percentage.
                      </p>
                    </div>
                    
                    <div className="p-4 border border-border rounded-lg">
                      <h4 className="text-lg font-medium mb-2">5. Insight Generation</h4>
                      <p className="text-muted-foreground">
                        Based on your specific data, our system identifies key strengths and weaknesses, 
                        then generates actionable recommendations to improve your success probability.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;

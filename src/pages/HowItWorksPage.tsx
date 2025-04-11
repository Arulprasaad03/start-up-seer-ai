
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, FileSpreadsheet, ChartBar, Lightbulb, Github, Database, Workflow } from 'lucide-react';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container py-12">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-1.5 text-sm font-medium text-brand-600 mb-4">
              <Workflow className="h-4 w-4" />
              <span>Our Process</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              How Our AI Prediction Works
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover the technology and methodology behind our startup success prediction model
            </p>
          </div>
          
          {/* Process Steps */}
          <div className="space-y-16 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
              <div className="md:col-span-2">
                <div className="bg-muted p-6 rounded-xl aspect-square flex items-center justify-center">
                  <FileSpreadsheet className="h-24 w-24 text-brand-500/70" />
                </div>
              </div>
              <div className="md:col-span-3">
                <h2 className="text-2xl font-bold mb-3">1. Data Collection</h2>
                <p className="text-muted-foreground mb-4">
                  We collect comprehensive data about your startup, including funding information, 
                  team composition, market factors, product development stage, and business model.
                </p>
                <Card>
                  <CardContent className="p-4">
                    <p className="text-sm">
                      Our model analyzes over 15 key factors that research has shown to be
                      strong indicators of startup success or failure.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center md:flex-row-reverse">
              <div className="md:col-span-2 md:order-2">
                <div className="bg-muted p-6 rounded-xl aspect-square flex items-center justify-center">
                  <Database className="h-24 w-24 text-brand-500/70" />
                </div>
              </div>
              <div className="md:col-span-3 md:order-1">
                <h2 className="text-2xl font-bold mb-3">2. Data Processing</h2>
                <p className="text-muted-foreground mb-4">
                  The collected data is processed, normalized, and prepared for the machine learning model.
                  This ensures that all inputs are compatible with our prediction algorithms.
                </p>
                <Card>
                  <CardContent className="p-4">
                    <p className="text-sm">
                      Our data processing pipeline cleans, transforms, and enriches your data
                      to maximize the accuracy of predictions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
              <div className="md:col-span-2">
                <div className="bg-muted p-6 rounded-xl aspect-square flex items-center justify-center">
                  <Brain className="h-24 w-24 text-brand-500/70" />
                </div>
              </div>
              <div className="md:col-span-3">
                <h2 className="text-2xl font-bold mb-3">3. AI Model Analysis</h2>
                <p className="text-muted-foreground mb-4">
                  Our proprietary machine learning model, trained on data from thousands of startups,
                  analyzes your input data to identify patterns and predict outcomes.
                </p>
                <Card>
                  <CardContent className="p-4">
                    <p className="text-sm">
                      The AI model uses advanced algorithms including gradient boosting and neural networks
                      to identify complex patterns that humans might miss.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center md:flex-row-reverse">
              <div className="md:col-span-2 md:order-2">
                <div className="bg-muted p-6 rounded-xl aspect-square flex items-center justify-center">
                  <ChartBar className="h-24 w-24 text-brand-500/70" />
                </div>
              </div>
              <div className="md:col-span-3 md:order-1">
                <h2 className="text-2xl font-bold mb-3">4. Results Generation</h2>
                <p className="text-muted-foreground mb-4">
                  The model generates a comprehensive success prediction report, including
                  a success probability score, key strengths and weaknesses, and confidence level.
                </p>
                <Card>
                  <CardContent className="p-4">
                    <p className="text-sm">
                      Beyond a simple score, our model provides actionable insights into the most
                      influential factors affecting your startup's potential success.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
              <div className="md:col-span-2">
                <div className="bg-muted p-6 rounded-xl aspect-square flex items-center justify-center">
                  <Lightbulb className="h-24 w-24 text-brand-500/70" />
                </div>
              </div>
              <div className="md:col-span-3">
                <h2 className="text-2xl font-bold mb-3">5. Recommendations</h2>
                <p className="text-muted-foreground mb-4">
                  Based on the analysis, our system provides tailored recommendations to 
                  improve your startup's chances of success and mitigate identified risks.
                </p>
                <Card>
                  <CardContent className="p-4">
                    <p className="text-sm">
                      Our recommendations are actionable and specific, focusing on the factors
                      that have the highest impact on your success probability.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          {/* Model Information */}
          <div className="mt-20 max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>About Our AI Model</CardTitle>
                <CardDescription>
                  Technical details about our prediction technology
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Our prediction model is built using a combination of machine learning algorithms, including gradient boosting decision trees and neural networks. The model has been trained on a dataset of over 10,000 startups, with information about their founding, funding, team composition, market conditions, and ultimate outcomes.
                </p>
                <p>
                  The model achieves a prediction accuracy of approximately 78% on our validation dataset, which is significantly better than human expert predictions (typically around 55-60% accurate). We continuously improve our model by incorporating new data and refining our algorithms.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                  <Github className="h-4 w-4" />
                  <span>Our methodology is based on research published in peer-reviewed journals</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorksPage;

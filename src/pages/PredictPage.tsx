
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PredictionForm from '@/components/PredictionForm';
import PredictionResult from '@/components/PredictionResult';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { predictStartupSuccess } from '@/lib/predictionService';
import { Brain, ArrowRight } from 'lucide-react';

interface FormData {
  companyName: string;
  industry: string;
  foundingYear: string;
  teamSize: string;
  founderExperience: string;
  fundingAmount: string;
  productStage: string;
  targetMarket: string;
  competitionLevel: number;
  businessModel: string;
}

const PredictPage = () => {
  const [result, setResult] = useState<any>(null);

  const handleFormSubmit = async (data: FormData) => {
    try {
      const prediction = await predictStartupSuccess(data);
      setResult(prediction);
      
      // Scroll to results
      if (prediction) {
        setTimeout(() => {
          const resultsElement = document.getElementById('results-section');
          if (resultsElement) {
            resultsElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } catch (error) {
      console.error('Prediction failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container py-12">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-1.5 text-sm font-medium text-brand-600 mb-4">
              <Brain className="h-4 w-4" />
              <span>Startup Success Predictor</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              AI-Powered Startup Success Prediction
            </h1>
            <p className="text-lg text-muted-foreground">
              Fill out the form below with details about your startup to get an AI-generated prediction of your success probability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 max-w-3xl mx-auto">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Enter Your Startup Details</CardTitle>
                <CardDescription>
                  Provide accurate information to get the most relevant insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PredictionForm onSubmit={handleFormSubmit} />
              </CardContent>
            </Card>
            
            {result && (
              <div id="results-section" className="pt-6">
                <div className="flex items-center justify-center gap-2 mb-8 text-muted-foreground">
                  <span>Form Submitted</span>
                  <ArrowRight className="h-4 w-4" />
                  <span className="font-medium text-foreground">Results Generated</span>
                </div>
                <PredictionResult result={result} />
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PredictPage;


import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Brain, Network, Cpu, Sparkles } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Floating AI Icons (only visible on larger screens) */}
      <div className="hidden md:block absolute inset-0 overflow-hidden pointer-events-none z-0">
        <Brain className="absolute top-[30%] left-[10%] w-16 h-16 text-brand-500/5 animate-spin-slow" />
        <Network className="absolute top-[60%] right-[15%] w-20 h-20 text-purple-500/5 animate-spin-slow" style={{ animationDuration: '25s' }} />
        <Cpu className="absolute bottom-[25%] left-[20%] w-16 h-16 text-blue-500/5 animate-spin-slow" style={{ animationDuration: '20s' }} />
        <Sparkles className="absolute top-[20%] right-[20%] w-12 h-12 text-brand-400/5 animate-pulse-slow" />
      </div>
      
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <FeatureSection />
        
        {/* CTA Section */}
        <div className="bg-muted py-16 md:py-24 relative overflow-hidden">
          {/* Background Effect */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-purple-500/5"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
          </div>
          
          <div className="container max-w-4xl text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Ready to Predict Your Startup's Success?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Enter your startup details and get an AI-powered success prediction with actionable insights in minutes.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link to="/predict">
                Try the Prediction Tool
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, BarChart2, TrendingUp, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <div className="container py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-1.5 text-sm font-medium text-brand-600">
            <TrendingUp className="h-4 w-4" />
            <span>AI-Powered Startup Success Prediction</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight gradient-text">
            Predict Your Startup's Success with AI
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Get data-driven insights on your startup's potential success factors using our advanced AI prediction model.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link to="/predict">
                Try Prediction <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/about">
                Learn How It Works
              </Link>
            </Button>
          </div>
          
          <div className="pt-4 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background" />
              ))}
            </div>
            <span>Trusted by 1,000+ founders and investors</span>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative z-10 bg-white dark:bg-card rounded-xl border shadow-lg p-6 animate-slide-up">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-brand-500" />
                <span className="font-medium">Success Prediction</span>
              </div>
              <span className="text-xs bg-accent/50 text-brand-600 px-2 py-1 rounded-full">AI Powered</span>
            </div>
            
            <div className="space-y-4">
              <div className="h-2 w-full bg-secondary rounded">
                <div className="h-full bg-gradient-to-r from-green-400 to-brand-400 rounded" style={{width: '78%'}}></div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary/50 p-3 rounded-lg">
                  <div className="text-xs text-muted-foreground mb-1">Success Score</div>
                  <div className="text-xl font-bold text-green-500">78%</div>
                </div>
                <div className="bg-secondary/50 p-3 rounded-lg">
                  <div className="text-xs text-muted-foreground mb-1">Confidence</div>
                  <div className="text-xl font-bold">High</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary/50 p-3 rounded-lg">
                  <div className="text-xs text-muted-foreground mb-1">Top Factor</div>
                  <div className="text-sm font-medium">Team Expertise</div>
                </div>
                <div className="bg-secondary/50 p-3 rounded-lg">
                  <div className="text-xs text-muted-foreground mb-1">Risk Area</div>
                  <div className="text-sm font-medium">Market Timing</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-400/20 to-purple-400/20 rounded-xl blur-3xl transform translate-x-4 translate-y-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

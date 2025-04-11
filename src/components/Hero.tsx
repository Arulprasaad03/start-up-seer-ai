
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket, BarChart2, TrendingUp, Brain, Network } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* AI Background Elements */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Neural Network Lines */}
        <div className="hidden md:block">
          <div className="absolute top-20 left-40 w-0.5 h-40 bg-gradient-to-b from-brand-200/0 via-brand-200/20 to-brand-200/0 rotate-12"></div>
          <div className="absolute top-60 left-80 w-0.5 h-60 bg-gradient-to-b from-purple-200/0 via-purple-200/20 to-purple-200/0 -rotate-15"></div>
          <div className="absolute top-40 right-60 w-0.5 h-80 bg-gradient-to-b from-blue-200/0 via-blue-200/20 to-blue-200/0 rotate-45"></div>
          <div className="absolute bottom-20 right-40 w-80 h-0.5 bg-gradient-to-r from-brand-200/0 via-brand-200/20 to-brand-200/0"></div>
          <div className="absolute bottom-40 left-20 w-60 h-0.5 bg-gradient-to-r from-purple-200/0 via-purple-200/20 to-purple-200/0"></div>
        </div>
      </div>

      {/* Neural Network Nodes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="hidden md:block">
          <div className="absolute top-20 left-40 w-2 h-2 rounded-full bg-brand-300/30"></div>
          <div className="absolute top-60 left-80 w-3 h-3 rounded-full bg-purple-300/30"></div>
          <div className="absolute top-40 right-60 w-2 h-2 rounded-full bg-blue-300/30"></div>
          <div className="absolute bottom-20 right-40 w-3 h-3 rounded-full bg-brand-300/30"></div>
          <div className="absolute bottom-40 left-20 w-2 h-2 rounded-full bg-purple-300/30"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-blue-300/30"></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-brand-300/30"></div>
        </div>
      </div>

      <div className="container py-16 md:py-24 relative z-10">
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
    </div>
  );
};

export default Hero;


import React from 'react';
import { Brain, TrendingUp, Target, Users, LineChart, Shield } from 'lucide-react';

const features = [
  {
    icon: <Brain className="h-6 w-6 text-brand-500" />,
    title: 'AI-Powered Analysis',
    description: 'Our model uses advanced AI to analyze multiple factors that contribute to startup success.'
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-brand-500" />,
    title: 'Success Probability',
    description: 'Get a clear percentage score indicating your startup\'s potential for success.'
  },
  {
    icon: <Target className="h-6 w-6 text-brand-500" />,
    title: 'Factor Identification',
    description: 'Identify the key factors that are most likely to influence your startup\'s success.'
  },
  {
    icon: <Users className="h-6 w-6 text-brand-500" />,
    title: 'Team Assessment',
    description: 'Analysis of your team composition and how it impacts your success probability.'
  },
  {
    icon: <LineChart className="h-6 w-6 text-brand-500" />,
    title: 'Market Fit Analysis',
    description: 'Evaluate how well your product fits the current market needs and trends.'
  },
  {
    icon: <Shield className="h-6 w-6 text-brand-500" />,
    title: 'Risk Assessment',
    description: 'Identify potential risks and get suggestions on how to mitigate them.'
  }
];

const FeatureSection = () => {
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
          Predict Success with Confidence
        </h2>
        <p className="text-xl text-muted-foreground">
          Our AI analyzes key startup factors to provide accurate success predictions and actionable insights.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-card border rounded-lg p-6 hover:shadow-md transition-all group"
          >
            <div className="p-3 rounded-lg bg-secondary inline-block mb-4 group-hover:bg-accent transition-colors">
              {feature.icon}
            </div>
            <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;

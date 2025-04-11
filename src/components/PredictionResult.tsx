
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, AlertCircle, Lightbulb, TrendingUp, TrendingDown, BarChart3 } from 'lucide-react';

interface PredictionResultProps {
  result: {
    score: number;
    confidence: string;
    strengths: string[];
    weaknesses: string[];
    recommendations: string[];
    keyFactors: {
      name: string;
      score: number;
      impact: 'positive' | 'negative' | 'neutral';
    }[];
  };
}

const PredictionResult = ({ result }: PredictionResultProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 70) return 'text-green-500';
    if (score >= 50) return 'text-amber-500';
    return 'text-red-500';
  };
  
  const getProgressColor = (score: number) => {
    if (score >= 70) return 'bg-gradient-to-r from-green-400 to-brand-400';
    if (score >= 50) return 'bg-gradient-to-r from-amber-400 to-amber-500';
    return 'bg-gradient-to-r from-red-400 to-red-500';
  };

  const getImpactIcon = (impact: string) => {
    switch (impact) {
      case 'positive':
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'negative':
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      default:
        return <BarChart3 className="h-4 w-4 text-amber-500" />;
    }
  };

  return (
    <div className="animate-fade-in">
      <Card className="shadow-lg">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-2xl">Startup Success Prediction</CardTitle>
          <CardDescription>AI-generated analysis based on your inputs</CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Score Display */}
          <div className="flex flex-col items-center justify-center p-4">
            <div className="relative w-32 h-32 flex items-center justify-center mb-4">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                <circle 
                  cx="50" cy="50" r="45" 
                  fill="none" 
                  stroke="currentColor" 
                  className="text-muted/20" 
                  strokeWidth="10" 
                />
                <circle 
                  cx="50" cy="50" r="45" 
                  fill="none" 
                  stroke="currentColor" 
                  className={getScoreColor(result.score)}
                  strokeWidth="10" 
                  strokeDasharray={`${result.score * 2.83} 283`}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className={`text-4xl font-bold ${getScoreColor(result.score)}`}>
                  {result.score}%
                </span>
                <span className="text-sm text-muted-foreground">Success Score</span>
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground flex items-center gap-1.5">
              Confidence: 
              <span className="font-medium text-foreground">{result.confidence}</span>
            </div>
          </div>
          
          {/* Tabs for Different Sections */}
          <Tabs defaultValue="factors" className="w-full">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="factors">Key Factors</TabsTrigger>
              <TabsTrigger value="strengths">Assessment</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            </TabsList>
            
            {/* Key Factors Tab */}
            <TabsContent value="factors" className="space-y-4">
              {result.keyFactors.map((factor, index) => (
                <div key={index} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getImpactIcon(factor.impact)}
                      <span className="font-medium">{factor.name}</span>
                    </div>
                    <span className="text-sm">{factor.score}%</span>
                  </div>
                  <Progress 
                    value={factor.score} 
                    className={`h-2 ${getProgressColor(factor.score)}`} 
                  />
                </div>
              ))}
            </TabsContent>
            
            {/* Strengths & Weaknesses Tab */}
            <TabsContent value="strengths" className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-medium flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" /> Strengths
                </h4>
                <ul className="space-y-2 text-sm pl-6 list-disc">
                  {result.strengths.map((strength, index) => (
                    <li key={index}>{strength}</li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-red-500" /> Weaknesses
                </h4>
                <ul className="space-y-2 text-sm pl-6 list-disc">
                  {result.weaknesses.map((weakness, index) => (
                    <li key={index}>{weakness}</li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            
            {/* Recommendations Tab */}
            <TabsContent value="recommendations">
              <div className="space-y-3">
                <h4 className="font-medium flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-amber-500" /> Recommendations
                </h4>
                <ul className="space-y-2 text-sm pl-6 list-disc">
                  {result.recommendations.map((recommendation, index) => (
                    <li key={index}>{recommendation}</li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default PredictionResult;

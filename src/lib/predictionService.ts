
// Simulated prediction service (would connect to a real ML model in production)
import { sleep } from '@/lib/utils';

export interface PredictionFormData {
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

export interface PredictionResult {
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
}

export async function predictStartupSuccess(data: PredictionFormData): Promise<PredictionResult> {
  // Simulating API delay
  await sleep(2000);
  
  // Dummy algorithm for demo purposes
  // In a real app, this would call a backend API that runs the ML model
  
  let baseScore = 60; // Starting point
  
  // Adjust based on team size (larger teams might have better chance but higher burn rate)
  if (data.teamSize === '11-20' || data.teamSize === '21-50') baseScore += 5;
  if (data.teamSize === '50+') baseScore += 3;
  if (data.teamSize === 'solo') baseScore -= 5;
  
  // Adjust based on founder experience
  if (data.founderExperience === 'prev-success') baseScore += 15;
  if (data.founderExperience === 'industry-expert') baseScore += 10;
  if (data.founderExperience === 'serial') baseScore += 12;
  if (data.founderExperience === 'prev-failed') baseScore += 5; // Learning from mistakes is valuable
  
  // Adjust based on funding
  if (data.fundingAmount === 'bootstrap') baseScore -= 5;
  if (data.fundingAmount === 'angel') baseScore += 3;
  if (data.fundingAmount === 'seed') baseScore += 5;
  if (data.fundingAmount === 'seriesA') baseScore += 8;
  if (data.fundingAmount === 'seriesB') baseScore += 10;
  
  // Adjust based on product stage
  if (data.productStage === 'idea') baseScore -= 10;
  if (data.productStage === 'mvp') baseScore -= 5;
  if (data.productStage === 'beta') baseScore += 0;
  if (data.productStage === 'launched') baseScore += 8;
  if (data.productStage === 'growth') baseScore += 12;
  
  // Industry factor
  if (data.industry === 'tech') baseScore += 5;
  if (data.industry === 'healthcare') baseScore += 3;
  if (data.industry === 'finance') baseScore += 2;
  
  // Competition adjustment
  baseScore -= Math.floor(data.competitionLevel / 10);
  
  // Clamp the score between 0 and 100
  const finalScore = Math.max(0, Math.min(100, baseScore));
  
  // Determine confidence level
  let confidence = "Medium";
  if (finalScore > 75 || finalScore < 25) confidence = "High";
  if (finalScore > 40 && finalScore < 60) confidence = "Low";
  
  // Generate key factors
  const keyFactors = [
    {
      name: "Team & Leadership",
      score: getFactorScore(data.teamSize, data.founderExperience),
      impact: getImpact(data.founderExperience)
    },
    {
      name: "Funding",
      score: getFactorScore(data.fundingAmount),
      impact: getImpact(data.fundingAmount)
    },
    {
      name: "Market Opportunity",
      score: getFactorScore(data.targetMarket, data.industry),
      impact: getImpact(data.targetMarket)
    },
    {
      name: "Competition",
      score: 100 - data.competitionLevel,
      impact: data.competitionLevel > 70 ? 'negative' : 'positive'
    },
    {
      name: "Product Readiness",
      score: getFactorScore(data.productStage),
      impact: getImpact(data.productStage)
    }
  ];
  
  // Generate strengths
  const strengths = [];
  if (getFactorScore(data.founderExperience) > 70) 
    strengths.push("Strong founding team with relevant experience");
  if (getFactorScore(data.fundingAmount) > 70) 
    strengths.push("Well-funded with adequate runway");
  if (getFactorScore(data.productStage) > 60) 
    strengths.push("Product is mature and market-tested");
  if (data.competitionLevel < 40) 
    strengths.push("Operates in a market with limited competition");
  if (data.industry === 'tech' || data.industry === 'healthcare')
    strengths.push("Industry with strong growth potential");
  
  // Generate weaknesses
  const weaknesses = [];
  if (getFactorScore(data.founderExperience) < 50) 
    weaknesses.push("Limited founder experience in this industry");
  if (getFactorScore(data.fundingAmount) < 50) 
    weaknesses.push("Potential funding challenges or limited runway");
  if (getFactorScore(data.productStage) < 50) 
    weaknesses.push("Early product stage with unproven market fit");
  if (data.competitionLevel > 60) 
    weaknesses.push("Highly competitive market landscape");
  if (data.teamSize === 'solo' || data.teamSize === '2-5')
    weaknesses.push("Small team may struggle to scale quickly");
    
  // Generate recommendations
  const recommendations = [];
  if (getFactorScore(data.founderExperience) < 60) 
    recommendations.push("Consider bringing on advisors or mentors with industry experience");
  if (getFactorScore(data.fundingAmount) < 60) 
    recommendations.push("Explore additional funding options or optimize for capital efficiency");
  if (getFactorScore(data.productStage) < 60) 
    recommendations.push("Accelerate product development with focused MVP testing");
  if (data.competitionLevel > 50) 
    recommendations.push("Develop a clear differentiation strategy from competitors");
  recommendations.push("Focus on building a sustainable growth model with clear unit economics");
  
  return {
    score: finalScore,
    confidence,
    strengths: strengths.length ? strengths : ["No significant strengths detected"],
    weaknesses: weaknesses.length ? weaknesses : ["No significant weaknesses detected"],
    recommendations: recommendations.length ? recommendations : ["General recommendation: continue monitoring key metrics"],
    keyFactors
  };
}

// Helper functions
function getFactorScore(...factors: string[]): number {
  // Simple dummy algorithm
  const weightMap: Record<string, number> = {
    // Team size
    'solo': 40,
    '2-5': 60,
    '6-10': 75,
    '11-20': 85,
    '21-50': 80,
    '50+': 75,
    
    // Founder experience
    'first-time': 50,
    'prev-failed': 65,
    'prev-success': 90,
    'industry-expert': 85,
    'serial': 88,
    
    // Funding
    'bootstrap': 50,
    'angel': 65,
    'seed': 75,
    'seriesA': 85,
    'seriesB': 90,
    
    // Product stage
    'idea': 30,
    'mvp': 50,
    'beta': 70,
    'launched': 85,
    'growth': 90,
    
    // Industries
    'tech': 80,
    'healthcare': 75,
    'finance': 70,
    'ecommerce': 65,
    'education': 60,
    'manufacturing': 55,
    'service': 60,
    'other': 50,
    
    // Target market
    'b2c': 70,
    'b2b': 75,
    'b2b2c': 65,
    'c2c': 60,
    'enterprise': 80,
    'government': 65
  };
  
  let score = 0;
  let validFactors = 0;
  
  for (const factor of factors) {
    if (factor && weightMap[factor]) {
      score += weightMap[factor];
      validFactors++;
    }
  }
  
  return validFactors ? Math.round(score / validFactors) : 50;
}

function getImpact(factor: string): 'positive' | 'negative' | 'neutral' {
  const positiveFactors = ['prev-success', 'industry-expert', 'serial', 'seed', 'seriesA', 'seriesB', 'launched', 'growth', 'b2b', 'enterprise'];
  
  const negativeFactors = ['first-time', 'solo', 'idea', 'bootstrap'];
  
  if (positiveFactors.includes(factor)) return 'positive';
  if (negativeFactors.includes(factor)) return 'negative';
  return 'neutral';
}

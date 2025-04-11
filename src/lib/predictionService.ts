
import { delay } from '@/lib/utils';

interface StartupData {
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

interface PredictionResult {
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

// This is a mock prediction service for demo purposes
// In a real application, this would make API calls to a ML model
export const predictStartupSuccess = async (data: StartupData): Promise<PredictionResult> => {
  // Simulate API call
  await delay(2000);
  
  // For demo, generate a score based on the input data
  let baseScore = Math.floor(Math.random() * 40) + 30; // Random score between 30-70
  
  // Adjust score based on certain factors (simplified for demo)
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - parseInt(data.foundingYear);
  
  // Experience usually correlates with success
  if (data.founderExperience === 'expert') baseScore += 15;
  else if (data.founderExperience === 'intermediate') baseScore += 8;
  
  // Team size impact
  const teamSize = parseInt(data.teamSize);
  if (teamSize > 20) baseScore += 5;
  else if (teamSize > 10) baseScore += 3;
  else if (teamSize > 5) baseScore += 1;
  
  // Funding impact
  const fundingInK = parseInt(data.fundingAmount.replace(/[^0-9]/g, ''));
  if (fundingInK > 1000) baseScore += 10;
  else if (fundingInK > 500) baseScore += 6;
  else if (fundingInK > 100) baseScore += 3;
  
  // Industry-specific adjustments
  if (data.industry === 'Technology' || data.industry === 'Healthcare') {
    baseScore += 5;
  }
  
  // Product stage
  if (data.productStage === 'Launched with paying customers') {
    baseScore += 12;
  } else if (data.productStage === 'Beta with early users') {
    baseScore += 6;
  }
  
  // Competition level (higher competition means lower chance)
  baseScore -= Math.min(15, data.competitionLevel * 1.5);
  
  // Business model
  if (data.businessModel === 'Subscription (SaaS)') {
    baseScore += 8;
  }
  
  // Ensure score is within 0-100 range
  const finalScore = Math.max(0, Math.min(100, baseScore));
  
  // Generate confidence level
  let confidence = "Low";
  if (yearsInBusiness > 3) {
    confidence = "High";
  } else if (yearsInBusiness > 1) {
    confidence = "Medium";
  }
  
  // Generate key factors
  const keyFactors = [
    {
      name: "Founder Experience",
      score: data.founderExperience === 'expert' ? 85 : data.founderExperience === 'intermediate' ? 60 : 30,
      impact: data.founderExperience === 'expert' ? 'positive' : data.founderExperience === 'intermediate' ? 'neutral' : 'negative' as 'positive' | 'negative' | 'neutral'
    },
    {
      name: "Funding Level",
      score: fundingInK > 500 ? 75 : fundingInK > 100 ? 50 : 30,
      impact: fundingInK > 500 ? 'positive' : fundingInK > 100 ? 'neutral' : 'negative' as 'positive' | 'negative' | 'neutral'
    },
    {
      name: "Team Composition",
      score: teamSize > 10 ? 70 : teamSize > 5 ? 50 : 35,
      impact: teamSize > 10 ? 'positive' : teamSize > 5 ? 'neutral' : 'negative' as 'positive' | 'negative' | 'neutral'
    },
    {
      name: "Market Opportunity",
      score: data.targetMarket === 'Global' ? 80 : data.targetMarket === 'National' ? 60 : 40,
      impact: data.targetMarket === 'Global' ? 'positive' : data.targetMarket === 'National' ? 'neutral' : 'negative' as 'positive' | 'negative' | 'neutral'
    },
    {
      name: "Competitive Landscape",
      score: Math.max(0, 100 - data.competitionLevel * 10),
      impact: data.competitionLevel < 5 ? 'positive' : data.competitionLevel < 8 ? 'neutral' : 'negative' as 'positive' | 'negative' | 'neutral'
    }
  ];
  
  // Generate strengths
  const strengthPool = [
    `Strong ${data.founderExperience} level founder experience`,
    `Well-defined ${data.targetMarket} target market approach`,
    `Solid ${data.businessModel} business model`,
    `Adequate funding of $${data.fundingAmount}`,
    `Team of ${data.teamSize} members for execution capability`,
    `Product already in ${data.productStage} stage`,
    `Good positioning in the ${data.industry} industry`
  ];
  
  // Generate weaknesses
  const weaknessPool = [
    data.founderExperience !== 'expert' ? `Limited founder experience at ${data.founderExperience} level` : '',
    data.targetMarket === 'Local' ? 'Limited market reach with local focus' : '',
    data.businessModel === 'Not yet defined' ? 'Undefined business model' : '',
    fundingInK < 100 ? 'Insufficient funding for rapid growth' : '',
    teamSize < 5 ? 'Small team may struggle with scaling' : '',
    data.productStage === 'Idea/Concept' ? 'Very early product stage' : '',
    data.competitionLevel > 7 ? 'Highly competitive market landscape' : ''
  ].filter(item => item !== '');
  
  // Generate recommendations
  const recommendationPool = [
    data.founderExperience !== 'expert' ? 'Consider partnering with experienced advisors or mentors' : '',
    data.targetMarket !== 'Global' ? 'Explore opportunities to expand market reach' : '',
    data.businessModel === 'Not yet defined' ? 'Prioritize business model definition and validation' : '',
    fundingInK < 500 ? 'Develop a fundraising strategy for the next growth stage' : '',
    teamSize < 10 ? 'Identify key hiring needs for scaling operations' : '',
    data.productStage !== 'Launched with paying customers' ? 'Accelerate product development timeline' : '',
    data.competitionLevel > 5 ? 'Conduct detailed competitive analysis to identify unique positioning' : '',
    'Develop clear KPIs to measure business health and growth',
    'Build robust customer feedback mechanisms',
    'Create a detailed 18-month roadmap with milestones'
  ].filter(item => item !== '');
  
  // Select random items from each pool
  const getRandomItems = (pool: string[], count: number) => {
    const result: string[] = [];
    const poolCopy = [...pool];
    
    for (let i = 0; i < Math.min(count, poolCopy.length); i++) {
      const randomIndex = Math.floor(Math.random() * poolCopy.length);
      result.push(poolCopy[randomIndex]);
      poolCopy.splice(randomIndex, 1);
    }
    
    return result;
  };
  
  const strengths = getRandomItems(strengthPool, 3);
  const weaknesses = getRandomItems(weaknessPool, Math.min(3, weaknessPool.length));
  const recommendations = getRandomItems(recommendationPool, 4);
  
  return {
    score: Math.round(finalScore),
    confidence,
    strengths,
    weaknesses,
    recommendations,
    keyFactors
  };
};

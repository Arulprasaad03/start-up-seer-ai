
// This simulates an AI backend service for making predictions

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

// Simulates a prediction algorithm
export const predictStartupSuccess = (data: StartupData): Promise<PredictionResult> => {
  return new Promise((resolve) => {
    // Simulate processing time
    setTimeout(() => {
      // Base score calculation (this would be a complex ML model in a real app)
      let baseScore = 60; // Start with a moderate score
      let factorScores: {[key: string]: number} = {};
      
      // Industry factor (tech tends to have higher success rates)
      if (data.industry === 'tech') {
        baseScore += 5;
        factorScores['Industry Fit'] = 85;
      } else if (['healthcare', 'finance'].includes(data.industry)) {
        baseScore += 3;
        factorScores['Industry Fit'] = 75;
      } else {
        factorScores['Industry Fit'] = 60;
      }
      
      // Team size factor
      if (['2-5', '6-10'].includes(data.teamSize)) {
        baseScore += 4;
        factorScores['Team Composition'] = 80;
      } else if (data.teamSize === 'solo') {
        baseScore -= 5;
        factorScores['Team Composition'] = 40;
      } else {
        factorScores['Team Composition'] = 65;
      }
      
      // Founder experience factor
      if (['prev-success', 'serial'].includes(data.founderExperience)) {
        baseScore += 8;
        factorScores['Founder Experience'] = 90;
      } else if (data.founderExperience === 'industry-expert') {
        baseScore += 5;
        factorScores['Founder Experience'] = 78;
      } else if (data.founderExperience === 'first-time') {
        baseScore -= 3;
        factorScores['Founder Experience'] = 55;
      } else {
        factorScores['Founder Experience'] = 65;
      }
      
      // Funding factor
      if (['seriesA', 'seriesB'].includes(data.fundingAmount)) {
        baseScore += 6;
        factorScores['Funding Status'] = 85;
      } else if (data.fundingAmount === 'bootstrap') {
        baseScore -= 2;
        factorScores['Funding Status'] = 50;
      } else {
        factorScores['Funding Status'] = 65;
      }
      
      // Product stage factor
      if (['growth', 'launched'].includes(data.productStage)) {
        baseScore += 7;
        factorScores['Product Maturity'] = 80;
      } else if (data.productStage === 'idea') {
        baseScore -= 6;
        factorScores['Product Maturity'] = 35;
      } else {
        factorScores['Product Maturity'] = 60;
      }
      
      // Competition factor (higher competition reduces score)
      const competitionImpact = Math.floor((100 - data.competitionLevel) / 10);
      baseScore += competitionImpact;
      factorScores['Market Competition'] = 100 - data.competitionLevel;
      
      // Business model factor (simplified - would analyze text with NLP in real app)
      const wordCount = data.businessModel.split(' ').length;
      if (wordCount > 50) {
        baseScore += 4;
        factorScores['Business Model Clarity'] = 75;
      } else if (wordCount > 20) {
        baseScore += 2;
        factorScores['Business Model Clarity'] = 65;
      } else {
        factorScores['Business Model Clarity'] = 45;
      }
      
      // Ensure score is within 0-100 range
      const finalScore = Math.max(0, Math.min(100, baseScore));
      
      // Determine confidence level based on factors consistency
      const factorValues = Object.values(factorScores);
      const stdDev = calculateStdDev(factorValues);
      let confidence = 'Medium';
      
      if (stdDev < 10) {
        confidence = 'High';
      } else if (stdDev > 20) {
        confidence = 'Low';
      }
      
      // Generate key factors with scores
      const keyFactors = Object.entries(factorScores).map(([name, score]) => ({
        name,
        score,
        impact: score >= 70 ? 'positive' : score >= 50 ? 'neutral' : 'negative'
      })).sort((a, b) => b.score - a.score);
      
      // Generate strengths (top 3 factors)
      const strengths = keyFactors
        .filter(f => f.impact === 'positive')
        .slice(0, 3)
        .map(f => generateStrengthText(f.name, data));
      
      // Generate weaknesses (bottom 3 factors)
      const weaknesses = keyFactors
        .filter(f => f.impact === 'negative' || f.score < 60)
        .slice(0, 3)
        .map(f => generateWeaknessText(f.name, data));
      
      // Generate recommendations
      const recommendations = generateRecommendations(keyFactors, data);
      
      resolve({
        score: finalScore,
        confidence,
        strengths: strengths.length > 0 ? strengths : ["Strong market timing", "Well-defined target audience"],
        weaknesses: weaknesses.length > 0 ? weaknesses : ["Limited financial resources", "High competitive landscape"],
        recommendations,
        keyFactors,
      });
    }, 1000);
  });
};

// Helper functions
function calculateStdDev(values: number[]): number {
  const avg = values.reduce((sum, val) => sum + val, 0) / values.length;
  const squareDiffs = values.map(value => Math.pow(value - avg, 2));
  const avgSquareDiff = squareDiffs.reduce((sum, val) => sum + val, 0) / squareDiffs.length;
  return Math.sqrt(avgSquareDiff);
}

function generateStrengthText(factorName: string, data: StartupData): string {
  const strengthTexts: {[key: string]: string[]} = {
    'Industry Fit': [
      `Strong positioning in the ${data.industry} industry, which shows growth potential.`,
      `Well-aligned with current trends in the ${data.industry} sector.`
    ],
    'Team Composition': [
      `Strong team structure with a good balance of skills and experience.`,
      `Optimal team size for your current stage, allowing for agility and clear communication.`
    ],
    'Founder Experience': [
      `Founder's previous successes significantly increase likelihood of success.`,
      `Strong industry expertise among founding team members.`
    ],
    'Funding Status': [
      `Strong financial position with appropriate funding for your current stage.`,
      `Sufficient capital to execute your strategy and navigate early challenges.`
    ],
    'Product Maturity': [
      `Product development is at an optimal stage relative to market entry timing.`,
      `Market-ready product with demonstrated traction and user adoption.`
    ],
    'Market Competition': [
      `Favorable competitive landscape with space for market entry and growth.`,
      `Identified clear competitive advantages in a manageable market environment.`
    ],
    'Business Model Clarity': [
      `Well-articulated business model with clear revenue streams.`,
      `Strong value proposition that addresses specific market needs.`
    ]
  };
  
  const options = strengthTexts[factorName] || [`Strong ${factorName.toLowerCase()} provides a solid foundation for success.`];
  return options[Math.floor(Math.random() * options.length)];
}

function generateWeaknessText(factorName: string, data: StartupData): string {
  const weaknessTexts: {[key: string]: string[]} = {
    'Industry Fit': [
      `Challenging market conditions in the ${data.industry} sector may slow growth.`,
      `Limited differentiation in a crowded ${data.industry} market.`
    ],
    'Team Composition': [
      `Team size or composition may limit ability to execute rapidly.`,
      `Critical skill gaps identified in current team structure.`
    ],
    'Founder Experience': [
      `Limited founder experience in this specific industry vertical.`,
      `Lack of previous startup experience among founding team.`
    ],
    'Funding Status': [
      `Current funding level may be insufficient for aggressive growth plans.`,
      `Financial constraints could limit ability to pivot if needed.`
    ],
    'Product Maturity': [
      `Current product stage carries execution risks before achieving market fit.`,
      `Product development timeline may be longer than anticipated.`
    ],
    'Market Competition': [
      `High competition levels will require significant differentiation strategy.`,
      `Established competitors with significant market share present major challenges.`
    ],
    'Business Model Clarity': [
      `Business model requires further refinement for scalability.`,
      `Revenue model presents uncertainties in current market conditions.`
    ]
  };
  
  const options = weaknessTexts[factorName] || [`Challenges with ${factorName.toLowerCase()} may impact growth trajectory.`];
  return options[Math.floor(Math.random() * options.length)];
}

function generateRecommendations(factors: Array<{name: string, score: number, impact: string}>, data: StartupData): string[] {
  const recommendations: string[] = [];
  
  // Find the lowest scoring factors
  const weakestFactors = [...factors].sort((a, b) => a.score - b.score).slice(0, 3);
  
  weakestFactors.forEach(factor => {
    switch (factor.name) {
      case 'Team Composition':
        if (data.teamSize === 'solo') {
          recommendations.push("Consider bringing on co-founders with complementary skills to strengthen the leadership team.");
        } else {
          recommendations.push("Evaluate your team for skill gaps and consider strategic hires in key areas.");
        }
        break;
      case 'Founder Experience':
        recommendations.push("Consider bringing on advisors or mentors with industry expertise to complement founder experience.");
        break;
      case 'Funding Status':
        if (data.fundingAmount === 'bootstrap') {
          recommendations.push("Explore funding options or grants to accelerate growth while maintaining reasonable burn rate.");
        } else {
          recommendations.push("Review your funding strategy and consider if additional capital is needed before next major milestone.");
        }
        break;
      case 'Product Maturity':
        if (data.productStage === 'idea' || data.productStage === 'mvp') {
          recommendations.push("Accelerate product development through rapid prototyping and early user testing.");
        } else {
          recommendations.push("Focus on iterating based on customer feedback to improve product-market fit.");
        }
        break;
      case 'Market Competition':
        recommendations.push("Develop a clear differentiation strategy focused on your unique value proposition.");
        break;
      case 'Business Model Clarity':
        recommendations.push("Refine your business model with clearer revenue streams and scalability path.");
        break;
      default:
        recommendations.push(`Prioritize improvements in ${factor.name.toLowerCase()} to increase overall success probability.`);
    }
  });
  
  // Add some general recommendations if we don't have enough
  if (recommendations.length < 3) {
    const generalRecs = [
      "Regularly review and update your business plan as market conditions change.",
      "Build a network of industry connections and potential partners to accelerate growth.",
      "Focus on developing clear KPIs and measuring progress against milestones.",
      "Consider implementing a customer advisory board to provide feedback on product direction."
    ];
    
    while (recommendations.length < 3 && generalRecs.length > 0) {
      const randomRec = generalRecs.splice(Math.floor(Math.random() * generalRecs.length), 1)[0];
      recommendations.push(randomRec);
    }
  }
  
  return recommendations;
}

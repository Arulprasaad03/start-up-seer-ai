
import React, { useState } from 'react';
import { Upload, FileText, AlertCircle, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface AnalysisResponse {
  Business_Health_Assessment: string;
  Business_Reasoning: string;
  Recommended_Best_Actions: string[];
}

const AnalyzePdfPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<AnalysisResponse | null>(null);
  const [error, setError] = useState<string>("");
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile || null);
    setResponse(null);
    setError("");
  };

  const handleUpload = async () => {
    if (!file || file.type !== "application/pdf") {
      setError("Please upload a valid PDF file.");
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please upload a valid PDF file.",
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    setError("");
    setResponse(null);

    try {
      const res = await fetch("https://start-up-seer-ai.onrender.com/analyze-pdf/", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errMsg = await res.text();
        throw new Error(errMsg || "An error occurred while analyzing the PDF");
      }

      const data: AnalysisResponse = await res.json();
      setResponse(data);
      toast({
        title: "Success",
        description: "Your PDF has been analyzed successfully!",
      });
    } catch (err: any) {
      setError("Error: " + (err.message || "Failed to analyze PDF"));
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: err.message || "Failed to analyze PDF",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container py-12">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-1.5 text-sm font-medium text-brand-600 mb-4">
              <FileText className="h-4 w-4" />
              <span>PDF Startup Analyzer</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Analyze Your Startup Document
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Upload a PDF containing your startup's business plan, financial data, or company profile 
              to receive an AI-generated analysis and recommendations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 max-w-3xl mx-auto">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Upload Your Business PDF</CardTitle>
                <CardDescription>
                  The file should contain comprehensive information about your startup
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-6 text-center hover:border-muted-foreground/30 transition-colors">
                  <input 
                    id="pdf-upload" 
                    type="file" 
                    accept="application/pdf" 
                    onChange={handleFileChange} 
                    className="hidden" 
                  />
                  
                  <div className="flex flex-col items-center gap-3">
                    <Upload className="h-10 w-10 text-muted-foreground/70" />
                    <div>
                      {file ? (
                        <p className="font-medium text-foreground">{file.name}</p>
                      ) : (
                        <>
                          <p className="font-medium text-foreground">Click to upload or drag and drop</p>
                          <p className="text-sm text-muted-foreground mt-1">PDF (max 10MB)</p>
                        </>
                      )}
                    </div>
                    
                    <label 
                      htmlFor="pdf-upload" 
                      className="inline-flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors"
                    >
                      Select PDF
                    </label>
                  </div>
                </div>
                
                {error && (
                  <div className="flex items-center gap-2 text-destructive bg-destructive/10 px-3 py-2 rounded-md text-sm">
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    <p>{error}</p>
                  </div>
                )}
                
                <Button 
                  className="w-full" 
                  onClick={handleUpload} 
                  disabled={!file || loading}
                >
                  {loading ? "Analyzing..." : "Analyze PDF"}
                </Button>
              </CardContent>
            </Card>
            
            {response && (
              <div id="results-section" className="animate-fade-in">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Analysis Results
                    </CardTitle>
                    <CardDescription>
                      AI-generated insights based on your business document
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">🧠 Business Health Assessment</h3>
                        <p className="text-foreground bg-muted/50 p-3 rounded-md">
                          {response.Business_Health_Assessment}
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">💡 Business Reasoning</h3>
                        <p className="text-muted-foreground whitespace-pre-line bg-muted/50 p-3 rounded-md">
                          {response.Business_Reasoning}
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">✅ Recommended Actions</h3>
                        <ul className="space-y-2 list-disc pl-5">
                          {response.Recommended_Best_Actions.map((action, index) => (
                            <li key={index} className="text-muted-foreground">
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex justify-center pt-4">
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setFile(null);
                          setResponse(null);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                      >
                        Analyze Another PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AnalyzePdfPage;

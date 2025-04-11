import React, { useState, ChangeEvent } from 'react';
import './App.css';

interface AnalysisResponse {
  Business_Health_Assessment: string;
  Business_Reasoning: string;
  Recommended_Best_Actions: string[];
}

const App: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<AnalysisResponse | null>(null);
  const [error, setError] = useState<string>("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile || null);
    setResponse(null);
    setError("");
  };

  const handleUpload = async () => {
    if (!file || file.type !== "application/pdf") {
      setError("Please upload a valid PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    setError("");
    setResponse(null);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/analyze-pdf/`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errMsg = await res.text();
        throw new Error(errMsg);
      }

      const data: AnalysisResponse = await res.json();
      setResponse(data);
    } catch (err: any) {
      setError("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>📊 Startup Analyzer</h1>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <br />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Analyzing..." : "Upload & Analyze"}
      </button>

      {error && <div className="error">{error}</div>}

      {response && (
        <div className="output">
          <h2>🧠 Business Health: {response.Business_Health_Assessment}</h2>
          <h3>💡 Reasoning:</h3>
          <p>{response.Business_Reasoning}</p>
          <h3>✅ Recommendations:</h3>
          <ul>
            {response.Recommended_Best_Actions.map((action, index) => (
              <li key={index}>{action}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;

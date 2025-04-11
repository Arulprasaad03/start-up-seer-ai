from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from langchain_groq import ChatGroq
from langchain_core.prompts import PromptTemplate
from dotenv import load_dotenv
import os
import io
import PyPDF2 as pdf

def load_environment():
    """Load environment variables from .env file."""
    load_dotenv()
    groq_api_key = os.getenv("GROQ_API_KEY")
    if not groq_api_key:
        raise ValueError("GROQ_API_KEY is not set in the .env file.")
    return groq_api_key

def initialize_fastapi():
    """Initialize and configure FastAPI application."""
    app = FastAPI(
        title="Company Analysis API",
        description="Analyzes startup details from a PDF and provides structured business insights.",
        version="1.0.0"
    )
    return app



def configure_cors(app: FastAPI):
    """Configure CORS middleware for the FastAPI app."""
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],  
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

def initialize_llm(groq_api_key: str):
    """Initialize the Groq LLM with the specified model and API key."""
    return ChatGroq(
        model="llama-3.3-70b-versatile",
        temperature=0.5,
        groq_api_key=groq_api_key,
    )


def create_prompt_template():
    """Create and return the prompt template for company analysis."""
    return PromptTemplate.from_template("""
### Company Details:
{company_details}

### INSTRUCTION:
Analyze the provided startup company details and generate a structured business analysis with the following sections:

🧠 Business Health Assessment:
- Provide an overall assessment of the company's business health based on financial data, market position, growth stage, and other available indicators.

💡 Business Reasoning:
- Explain the reasoning behind the health assessment.
- Highlight strengths, weaknesses, market trends, and internal challenges or advantages.

✅ Recommended Best Actions:
- Offer 3-5 actionable recommendations to improve or sustain the startup's success.
- Base your suggestions on industry standards, financial health, product-market fit, or scalability.

### OUTPUT FORMAT (JSON):
{{
  "Business_Health_Assessment": "<summary of health: e.g., Stable, At Risk, Rapid Growth, Needs Improvement>",
  "Business_Reasoning": "<reasoned explanation with evidence from the company details>",
  "Recommended_Best_Actions": [
    "<Action 1>",
    "<Action 2>",
    "<Action 3>",
    "<Action 4>",
    "<Action 5>"
  ]
}}
""")

def extract_text_from_pdf(file_content: bytes) -> str:
    """Extract text from a PDF file content."""
    pdf_reader = pdf.PdfReader(io.BytesIO(file_content))
    return "\n".join(page.extract_text() or "" for page in pdf_reader.pages)

def analyze_company_details(company_text: str, analysis_chain):
    """Analyze company details using the provided analysis chain."""
    if not company_text.strip():
        raise HTTPException(status_code=400, detail="The uploaded PDF contains no extractable text.")
    
    response = analysis_chain.invoke({"company_details": company_text})
    content = response.content if hasattr(response, 'content') else str(response)
    print("Raw LLM content:", content)  # For debugging
    return content  # Return .content directly to inspect it

def setup_app():
    """Set up the FastAPI app with all configurations and dependencies."""
    # Load environment variables
    groq_api_key = load_environment()
    
    # Initialize FastAPI app
    app = initialize_fastapi()
    
    # Configure CORS
    configure_cors(app)
    
    # Initialize LLM and prompt
    llm = initialize_llm(groq_api_key)
    prompt_template = create_prompt_template()
    analysis_chain = prompt_template | llm
    
    @app.post("/analyze-pdf/")
    async def analyze_pdf(file: UploadFile = File(...)):
        """API endpoint to analyze a PDF file and return business insights."""
        if not file.filename.lower().endswith(".pdf"):
            raise HTTPException(status_code=400, detail="Only PDF files are supported.")
        
        try:
            content = await file.read()
            company_text = extract_text_from_pdf(content)
            response = analyze_company_details(company_text, analysis_chain)
            return JSONResponse(content=response)
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Processing failed: {str(e)}")
    
    return app

app = setup_app()
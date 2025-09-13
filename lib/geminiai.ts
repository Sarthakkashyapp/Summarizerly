import { SUMMARY_SYSTEM_PROMPT } from "@/utils/prompts";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export const generateSummaryFromGemini = async (pdfText: string) => {
  try {
    // Load the model
    const model = genAI.getGenerativeModel({ 
        model: "gemini-2.5-flash-lite",
        generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1500,
        },
     }); 

    // Build the prompt
    const prompt = {
        contents: [
            {
                role: 'user',
                parts: [
                    { text : SUMMARY_SYSTEM_PROMPT},
                    {
                        text: `Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting:\n\n${pdfText}`
                    }
                ]
            }
        ]
    }

    // Call Gemini
    const result = await model.generateContent(prompt);
    const response = await result.response;

    if(!response.text()) {
        throw new Error('Empty response from Gemini API');
    }

    // Get the text response
    return result.response.text();
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};

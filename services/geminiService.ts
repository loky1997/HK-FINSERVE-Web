
import { GoogleGenAI } from "@google/genai";
import { BUSINESS_INFO, ELIGIBILITY, DOCUMENTS, SPECIAL_CASES } from "../constants";

const systemInstruction = `
You are an AI assistant for HK FinServ, a professional loan provider.
Our details:
- Name: ${BUSINESS_INFO.name}
- Services: Personal Loans, Home Loans, Business Loans.
- Loan Amount: ${BUSINESS_INFO.loanRange}
- TAT: ${BUSINESS_INFO.tat}
- Documents Required: ${DOCUMENTS.join(", ")}
- Eligibility: ${ELIGIBILITY.map(e => `${e.label}: ${e.value}`).join(", ")}
- Special Cases: ${SPECIAL_CASES.join(", ")}
- Contact: ${BUSINESS_INFO.phone}, Email: ${BUSINESS_INFO.email}

Instructions:
1. Be professional, helpful, and polite.
2. Provide specific information about loan requirements when asked.
3. If a user asks for contact info, provide the phone number and email.
4. Keep responses concise and formatted with bullet points if helpful.
5. If you don't know something specific not mentioned in the info, tell them to call our team at ${BUSINESS_INFO.phone}.
`;

export async function getChatResponse(userMessage: string) {
  // Initialize GoogleGenAI right before the API call to use the latest API key
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });
    // Use .text property directly
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please call us directly at 9966992935 for immediate assistance.";
  }
}

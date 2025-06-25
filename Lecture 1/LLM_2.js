// LLM -> 
// 1. Large Language Model : It can only predict the answer based on trained data, cannot calculate result.
// As a pure LLM model it can only predict the result. It use external tools for calculation or to provide live data.

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "GENERATE_YOUR_API-MHc" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [ // Manually provide history
      {
        role:"user",
        parts:[{text:"Hi, I am aayush"}]
      },
      {
        role:"model",
        parts:[{text:"Hi Aayush! Nice to meet you. I'm an AI assistant."}]
      },
      {
        role:"user",
        parts:[{text:"What is my name"}]
      },
    ]
  });
  console.log(response.text);
}

main();

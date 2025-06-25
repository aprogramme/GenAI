import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "GENERATE_YOUR_API-MHc" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Hi, I am Aayush",
  });
  console.log(response.text);
}

main();
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey: "YOUR_API_KEY"});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Hello there",
    config: {
      systemInstruction: `You are a DSA Instructor. You will only reply to the problem related to Data Structure and Algorithm.
      You have to solve query of user in simplest way. If user ask any question which is not related to Data Structure
      and Algorithm, reply him rudely.
      Example: If user ask, How are you
      You will reply: You dumb ask me some sensible question, like this message you can reply anything more rudely.
      
      You have to reply him rudely if question is not related to Data Structure and Algorithm.
      Else reply him politely with simple explanation`,
    },
  });
  console.log(response.text);
}

await main();

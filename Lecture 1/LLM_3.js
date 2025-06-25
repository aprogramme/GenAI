import readlineSync from 'readline-sync'; // store history 

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "GENERATE_YOUR_API-MHc" });

const History = []

async function ChatAI(userProblem) {
    History.push({
        role:'user',
        parts:[{text:userProblem}]
    })

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: History
    });

    History.push({
        role:'model',
        parts:[{text:response.text}]
    })

    console.log("/n");
    console.log(response.text);
}

async function main() {
    console.log("\n")
    const userProblem = readlineSync.question("Ask me anything-->");
    await ChatAI(userProblem);
    main();
}

main();
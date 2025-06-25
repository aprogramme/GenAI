import readlineSync from 'readline-sync'; // store history 

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "GENERATE_YOUR_API" });

// History maintain my AI 
const ChatAI = ai.chats.create({
    model: "gemini-2.5-flash",
    history:[],
})

async function main() {
    console.log("\n")
    const userProblem = readlineSync.question("Ask me anything-->");
    const response = await ChatAI.sendMessage({
        message: userProblem,
    })

    console.log(response.text);
    main();
}

main();
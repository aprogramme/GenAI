# GENAI --> Generative AI
### LLM -> LARGE LANGUAGE MODEL :
LLM stands for Large Language Model. It is a type of artificial intelligence (AI) model that utilizes machine learning techniques, specifically deep learning, to process and generate human language. LLMs are trained on massive amounts of text data and can perform various natural language processing (NLP) tasks, such as text generation, translation, question answering, and more. 

## Basic principle of LLM --> Prediction not calculation


### To use LLM :
1. install node to setup environment to run npm commands

       npm init

3. install package "genAI"
   
        npm i @google/genai

5. Create api through google studio ai

<!-- LLM_1.js  -->
4. Dry code
   
       import { GoogleGenAI } from "@google/genai";

       const ai = new GoogleGenAI({ apiKey: "GEMINI_API_KEY" });

       async function main() {
       const response = await ai.models.generateContent({
         model: "gemini-2.5-flash",
         contents: "How does AI work?",
       });
       console.log(response.text);
       }

       await main();

<!-- LLM_2.js  -->
5. LLM only answer the present question. it doesn't store history. To store history, we have to provide history conversation in contents as array form.

       import { GoogleGenAI } from "@google/genai";

       const ai = new GoogleGenAI({ apiKey: "GEMINI_API_KEY" });

       async function main() {
         const response = await ai.models.generateContent({
           model: "gemini-2.5-flash",
           contents: [
             {
                role: "user",
                parts: [{ text: "Hello" }],
             },
             {
                role: "model",
                parts: [{ text: "Great to meet you. What would you like to know?" }],
             },
           ],
          });
          console.log(response.text);
        }

        await main();

<!-- LLM_3.js -->
6. To not enter history manually, and want to only ask question we use readline-sync

       npm i readline-sync

<!-- LLM_4.js -->
7. Want to not create history[] array manually, ai "ai.chats.create" maintain history automatically.
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

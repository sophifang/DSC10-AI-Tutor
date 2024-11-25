/*
    Install dependencies:
    pip install openai
    npm install openai
*/

import OpenAI from "openai";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey: apiKey,
  dangerouslyAllowBrowser: true
});

export const runPrompt = async (questions, answers) => {
    const prompt = `
    Here are some example exam questions and answers:
    ${JSON.stringify(questions)}

    Please generate a new similar exam question 
    with a **correct answer**. **Do not give incorrect answers**. 
    Ensure the solution is accurate.
    the answer is correct. Return response in the format:
    {
        "Question": "question",
        "Answer": "answer"
    } 
    `;
  
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { 
            role: "system", 
            content: "You are a tutor for a principles of data science college course." 
        },
        { 
            role: "user", 
            content: prompt 
        }
      ],
      max_tokens: 1000,
    });

    try {
        const parsableJSONresponse = response.choices[0].message.content;
        const parsedResponse = JSON.parse(parsableJSONresponse);
        console.log("Question: ", parsedResponse.Question);
        console.log("Answer: ", parsedResponse.Answer);
    } catch (error) {
        console.error("Error parsing response:", error);
    }
};
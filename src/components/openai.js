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
export const runPrompt = async (questionsAndAnswers, currentLectureSection, difficultyScore) => {
    const prompt = `

    Part 1
    Check if there are any questions in the examples that are related to the current lecture section. If related questions exist, skip option 1 and
    pick option 2, else pick option 1.

    Option 1: Generate a question based on the lecture section that has a difficulty level of ${difficultyScore}. If medium or hard, the answer
    should take multiple steps.
    
    Option 2: Pick a question from the examples that is similar to the current lecture section. Generate a new question similar 
    to the example you chose.
    
    Part 2
    Find the solution to the question carefully and correctly. If the question and solution involve math,
    ensure all math is correct. If the question asks for an expression, ensure that the answer is code.
    **Do not give incorrect solutions**. 
    
    Tell the user how they should find the solution as Answer_reasoning. If you make any assumption in Answer_reasoning, 
    include the assumption in your generated question. Give the final answer as Answer and ensure both question and 
    final answer matches the reasoning. If there is more than one correct answer, include both in the complete final answer based on reasoning.
    
    Return response in the format:
    {
        "Question": "question",
        "Answer_reasoning": "explanation for how answer was found",
        "Answer": "complete final answer based on reasoning"
    } 
    `;
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { 
            role: "system", 
            content: `You are a tutor for a principles of data science college course. 
                      Essentially you provide questions to the user with answers to test
                      the user's understanding of course content.  
                      
                      Here are some example exam questions and answers:
                      ${JSON.stringify(questionsAndAnswers)}
                      
                      Here is the current lecture section:
                      ${JSON.stringify(currentLectureSection)}` 
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
        console.log("Answer_reasoning: ", parsedResponse.Answer_reasoning);
        return  { 
            Question: parsedResponse.Question,
            Answer: parsedResponse.Answer,
            Answer_reasoning: parsedResponse.Answer_reasoning
        }
    } catch (error) {
        console.error("Error parsing response:", error);
        return  {
            Question: `Which of the following quantities must be known in order to construct a CLT-based confidence interval for the population mean? Select all that apply.
    
     Shape of the population (normal or not)
     Shape of the sample (normal or not)
     Mean of the population
     Mean of the sample
     Standard deviation of the population
     Standard deviation of the sample
     Size of the population
     Size of the sample`, 
            Answer: "Mean of the sample, Standard deviation of the sample, Size of the sample", 
            Answer_reasoning: "..."
        };
    }
};
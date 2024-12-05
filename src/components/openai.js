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

export const runPrompt = async (questionsAndAnswers) => {
    const prompt = `
    Pick a question from the examples.

    Then, please generate a new question similar to the example you chose. Find the solution to 
    the question carefully and correctly. If the question and solution involve math,
    ensure all math is correct.**Do not give incorrect solutions**. 
    
    Tell the user how they should find the solution as Answer_reasoning. If you make any assumption in Answer_reasoning, 
    include the assumption in your generated question. Give the final answer 
    as Answer and ensure both question and final answer matches the reasoning.

    Return the qustion type where the options are: "select one", "select all", "integer", "code", and "fill in the
    blank". If the quiz type is "select one" or "select all", return the quesiton options that
    can be selected as a list. 
    
    Return response in the format:
    {
        "Question": "question",
        "Question_type": "question type"
        "Question_options": "question options"
        "Answer_reasoning": "explanation for how answer was found"
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
                      ${JSON.stringify(questionsAndAnswers)}` 
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
        console.log("Question_type: ", parsedResponse.Question_type);
        console.log("Question_options: ", parsedResponse.Question_options);
        console.log("Answer: ", parsedResponse.Answer);
        console.log("Answer_reasoning: ", parsedResponse.Answer_reasoning);
        return  { 
            Question: parsedResponse.Question,
            Question_type: parsedResponse.Question_type,
            Question_options: parsedResponse.Question_options,
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
            Question_type: "...", 
            Question_options: "...", 
            Answer: "Mean of the sample, Standard deviation of the sample, Size of the sample", 
            Answer_reasoning: "..."
        };
    }
};
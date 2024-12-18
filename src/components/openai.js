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
    const prompt = `Generate a new question, answer, and reasoning`;
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { 
            role: "system", 
            content: `You are a tutor for a principles of data science college course. 
                      Essentially you provide questions to the user with answers to test
                      the user's understanding of course content.  

                      Follow these steps to generate a question, answer, and reasoning.

                      Step 1 -
                      Check if there are any questions in the following examples that are related to the current lecture section.
                      Here is the current lecture section:
                      ${JSON.stringify(currentLectureSection)}.

                      Here are some example exam questions and answers:
                      ${JSON.stringify(questionsAndAnswers)}.
                      
                      Step 2 -
                      Based on the current lecture section, generate a new question with a difficulty level of ${difficultyScore}. Use
                      the example exam questions as examples. If no related questions exist, simply generate a quesiton related to 
                      the current lecture section.

                      Step 3 -
                      Find the solution to the question carefully and correctly. If the question and solution involve math,
                      ensure all math is correct. If the question asks for an expression, ensure that the answer is code.
                      **Do not give incorrect solutions**. 
                      
                      Step 4 -
                      Ensure the question can be answered using information from the current lecture section. If not, return to step 2.

                      Step 5 -
                      Tell the user how they should find the solution as Answer_reasoning. Give the final answer as Answer and ensure both question and 
                      final answer matches the reasoning.
                    
                      Step 6 - 
                      If you make any assumption in Answer_reasoning, update your generated question to include the assumption.

                      Step 7 -
                      Check if your final answer is actually answering the question. For example, if the question asks for code, the final answer should have
                      code too. If more than one answer option is correct, include all correct answers in the final answer.

                      Step 8 -
                      Return response in the format:
                      {
                          "Question": "question",
                          "Answer_reasoning": "explanation for how answer was found",
                          "Answer": "complete final answer based on reasoning"
                      } 
                      ` 

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
        // console.log("Question: ", parsedResponse.Question);
        // console.log("Answer: ", parsedResponse.Answer);
        // console.log("Answer_reasoning: ", parsedResponse.Answer_reasoning);
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
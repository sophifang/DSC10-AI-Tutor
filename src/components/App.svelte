<script>
  import { onMount } from "svelte";
  import * as d3 from 'd3';
  import { runPrompt } from "./openai.js"

  let exams = [];
  onMount(async () => {
      const res = await fetch('exams/dsc10_exams.csv'); 
      const csv = await res.text();
      exams = d3.csvParse(csv, d3.autoType)
  });
  const handleClick = async () => {
    let questions = (exams
                  .filter(exam => exam.Exam_type === "Quiz" && exam.Quiz_type === 1)
                  .map(exam => exam.Question)
                );
    let answers = (exams
                    .filter(exam => exam.Exam_type === "Quiz" && exam.Quiz_type === 1)
                    .map(exam => exam.Answer)
              );

    await runPrompt(questions, answers);
  };
</script>

<main>
  <h1>DSC 10 AI Tutor</h1>

  <button on:click={handleClick}>
    Get a Question.
  </button>
  <p>
    Response is in the console.
  </p>
</main>

<style>
  /* Write your CSS here */
</style>

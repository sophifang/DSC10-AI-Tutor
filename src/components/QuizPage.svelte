<script>
    import { onMount } from "svelte";
    import * as d3 from 'd3';
    import { runPrompt } from "./openai.js"
    import Spinner from './Spinner.svelte';
	import { loader } from './loader';
	import { writable  }from 'svelte/store';

    let exams = [];
    let response = {
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
    let answer_hidden = true;
    let examSelected = false;
	let loading = writable(false);
    let refreshImg = "refresh.png"
    let quizImg = "quiz.png"

    onMount(async () => {
        const res = await fetch('exams/dsc10_exams.csv'); 
        const csv = await res.text();
        exams = d3.csvParse(csv, d3.autoType)
    });

    const handleGenerateQuestion = async () => {
        loading.set(true);

        let questionsAndAnswers = exams
            .filter(exam => exam.Exam_type === "Quiz" && exam.Quiz_type === 1)
            .map(exam => ({
                Question: exam.Question,
                Answer: exam.Answer
        }));
        answer_hidden = true;
        response = await runPrompt(questionsAndAnswers);
     };

     const displayAnswer = async () => {        
        answer_hidden = !answer_hidden;
     };
	
  </script>
  
  <main>
    <!-- Quiz Side Bar -->
    <aside class:examSelected>  
        <!-- New Quesiton Generator -->
        <div class="quiz-btn">
            <button id="quiz-btn" class:examSelected on:click="{() => examSelected = !examSelected}">
                <img src={quizImg} alt="Quiz!" width="50px"/>
            </button>
        </div>

        <!-- Quiz Popup -->
        <div class="quiz-popup">
            <div id="quiz-popup" class="popup">
                <h1 id="menu-heading">
                    Quiz Challenge
                </h1>
                <!-- Put your knowledge to the test! -->
                <!-- <br/> -->
                Powered by GPT-4o mini
                <div class="wrapper" use:loader={loading}>
                    <p id="question">
                        <b>Question</b><br/>{response.Question}
                    </p>
                    <textarea id="user-answer" type="text" placeholder="Enter your answer here!"/>
                    <br/>
                    <button id="submit-answer" on:click={displayAnswer}>See Solution</button>
                    <p id="solution" class="{answer_hidden ? "hidden" : "display"}">
                        <b>Answer</b><br/>{response.Answer}
                    </p>
                    {#if response.Answer_reasoning != '...'}
                    <p id="solution-reasoning" class="{answer_hidden ? "hidden" : "display"}">
                        <b>Reasoning</b><br/>{response.Answer_reasoning}
                    </p>
                    {/if}
                    <br/>
                    <button class="refresh" on:click={handleGenerateQuestion}>
                        <div class="btn">
                            Generate New Question
                            <img src={refreshImg} alt="Refresh" width="30px" style="margin-left: 5px;">
                        </div>
                    </button> 
                </div>
            </div>
        </div>
    </aside>
  </main>
  
  <style>
    p{
        text-align: left;
    }
	.wrapper {
		height: 100%;
		position: relative;
		color: black;
	}

    .examSelected{
        right: 0;
    }

    .quiz-btn{
        margin-top: 50px;
        width: auto;
        height: 100%;
        background-color: transparent;
    }

    #quiz-btn{
        background-color: white;
        border: 2px solid black;
        border-right: 0px solid black;
    }

    .quiz-popup{
        overflow-y: auto;
        box-shadow: 3px 6px 12px rgba(0, 0, 0, 0.25);
        z-index: -1;
        border-left: 2px solid black;
        background-color: white;
    }
    
    #quiz-popup{
        max-height: 100%;
    }

    .btn{
        display: flex;
        align-items: center;
    }

    aside{
        display: flex;
        position: fixed;
        top: 0;
        right: -404px;
        z-index: 3;
        transition: right 0.3s ease-in-out;
        height: 100%;
    }

    aside::after{
        content: '';
        display: block;
        height: 0%;
    }

    #menu-heading{
        text-align: center;
        margin: 0;
        color: black;
    }

    .refresh{
        background-color: #2dbba2;
        margin-top: 5%;
        border: none;
        color: white;
        border-radius: 10px;
        margin-bottom: 10%;
    }

    .popup {
        width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding-top: 20px;
        text-align: center;
        height: 100%;
		top: 0;
        height: 100%;   
		position: relative;
		color: black;
    }

    #question {
        max-width: 400px;
        white-space: pre-wrap;
        overflow-wrap: break-word;
        padding: 10px; 
    }

    @media (max-width: 450px) {
        aside {
            right: -254px;
        }

        .popup{
            width: 250px
        }
    }

    #solution {
        max-width: 100%;
        white-space: pre-wrap;
        overflow-wrap: break-word;
        padding: 10px; 
    }

    #solution-reasoning {
        max-width: 100%;
        white-space: pre-wrap;
        overflow-wrap: break-word;
        padding: 10px; 
    }

    #submit-answer{
        width: 100px;
        height: 30px;
        background-color: #5872d2;
        margin-top: 5%;
        border: none;
        color: white;
        border-radius: 10px;
    }

    .popup textarea {
        padding: 10px;
        width: 90%;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
        white-space: pre-wrap;
        height: 120px;
    }

    /* .popup button {
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
    } */

    /* .popup button:hover {
        background-color: #0056b3;
    } */

    .popup .hidden {
        display: none;
    }

    .popup #solution {
        color: #333;
    }
  </style>
  
<script>
    import { onMount } from "svelte";
    import * as d3 from 'd3';
	import { loader } from './loader';
	import { writable  }from 'svelte/store';
    import { runPrompt } from "./openai.js"
    import { currentLecture } from './currentLecture.js';
    import { currentSection } from './currentSection.js';

    let exams = [];
    let lec03 = [];
    let selectedDifficulty = "Easy";
    let lastClicked = 'N/A';
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

        const resLec = await fetch('lecture_notes/lec03_dataset.csv'); 
        const csvLec = await resLec.text();
        lec03 = d3.csvParse(csvLec, d3.autoType)
    });

    let section_name = "NumPy";
    // Generates a new question
    const handleGenerateQuestion = async () => {
        console.log($currentSection)
        console.log($currentLecture)

        loading.set(true);
        
        // Filters relevant questions
        let questionsAndAnswers = exams
            // .filter(exam => exam.Exam_type === "Quiz" && exam.Quiz_type === 1 && exam.Difficulty_score === selectedDifficulty)
            .filter(exam => exam.Difficulty_score === selectedDifficulty)
            .map(exam => ({
                Question: exam.Question,
                Answer: exam.Answer,
                Difficulty_score: exam.Difficulty_score
        }));
        // let currentLectureSection = lec03
        //     .filter(section => section.section_name === section_name )
        //     .map(section => ({
        //         Section: section.section_name,
        // }));
        let currentLectureSection = {};

        answer_hidden = true;
        
        // Generates questions
        response = await runPrompt(questionsAndAnswers, currentLectureSection, selectedDifficulty);
     };

    // Displays answer
    const displayAnswer = async () => {        
        answer_hidden = !answer_hidden;
     };

    // Handles quiz button
     const handleQuizButtonClick = () => {
        const now = new Date();

        if (examSelected){
            lastClicked = now.toLocaleString();
        } else{
            handleGenerateQuestion();
        }
        examSelected = !examSelected;
    };
	
  </script>
  
  <main>
    <div class="overlay {examSelected ? 'active' : ''}" class:hidden={!examSelected}></div>
    <!-- Quiz Side Bar -->
    <aside class:examSelected>          
        <!-- New Quesiton Generator -->
        <div class="quiz-btn">
            <button id="quiz-btn" class:examSelected on:click={handleQuizButtonClick}>
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
                Powered by GPT-4o mini
                
                <!-- Select difficulty level -->
                <div class="difficulty-selector">
                    <div class="difficulty-options">
                        <input type="radio" name="difficulty" value="Easy" id="easy" bind:group={selectedDifficulty} on:change={handleGenerateQuestion} checked/>
                        <label for="easy" class="easy">Easy</label>
                        <input type="radio" name="difficulty" value="Medium" id="medium" bind:group={selectedDifficulty} on:change={handleGenerateQuestion}/>
                        <label for="medium" class="medium">Medium</label>
                        <input type="radio" name="difficulty" value="Hard" id="hard" bind:group={selectedDifficulty} on:change={handleGenerateQuestion}/>
                        <label for="hard" class="hard">Hard</label>
                    </div>
                </div>

                <!-- Question section -->
                <div class="wrapper" use:loader={loading}>
                    <p id="question">
                        <b>Question</b><br/>{response.Question}
                    </p>
                    
                    <!-- Answer box -->
                    <textarea id="user-answer" type="text" placeholder="Enter your answer here!"/>
                    <br/>
                   
                    <!-- Answer -->
                    <p id="solution" class="{answer_hidden ? "hidden" : "display"}">
                        <b>Answer</b><br/>{response.Answer}
                    </p>

                    <!-- Answer reasoning -->
                    {#if response.Answer_reasoning != '...'}
                    <p id="solution-reasoning" class="{answer_hidden ? "hidden" : "display"}">
                        <b>Reasoning</b><br/>{response.Answer_reasoning}
                    </p>
                    {/if}

                    <!-- Display answer and reasoning -->
                    <div class="button-container">
                        <button id="submit-answer" on:click={displayAnswer}>{answer_hidden ? "See" : "Close"} Solution</button>
                        <button class="refresh" on:click={handleGenerateQuestion}>
                            <div class="btn">
                                Generate New Question
                                <img src={refreshImg} alt="Refresh" width="30px" style="margin-left: 5px;">
                            </div>
                        </button>
                    </div>
                    <br/>

                    <!-- Quiz timestamp -->
                    {#if lastClicked}
                        <p id="timestamp">Last Quiz Check: {lastClicked}</p>
                    {/if}
                </div>
            </div>
        </div>
    </aside>
  </main>
  
  <style>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 2;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    .overlay.active {
        opacity: 1; /* Fully visible */
        visibility: visible; /* Make it interactable */
    }

    p{
        text-align: left;
        max-width: 500px;
    }

    .button-container {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-top: 10px;
    }

    #timestamp {
        color: #333;
        text-align: center;
        padding-bottom: 10px;
    }

	.wrapper {
		width: 500px;
		height: 100%;
		position: relative;
		color: black;
	}

    .examSelected{
        right: 0;
        font-family: Arial, sans-serif;
    }

    .difficulty-selector {
        display: flex;
        align-items: center;
        gap: 15px;
        font-family: Arial, sans-serif;
        margin: 20px 0;
    }

    .difficulty-options {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .difficulty-options input[type="radio"] {
        display: none;
    }

    .difficulty-options label {
        padding: 8px 16px;
        font-size: 14px;
        border: 2px solid #ddd;
        border-radius: 20px;
        cursor: pointer;
        background-color: #f9f9f9;
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    }

    /* Selected/Checked Style */
    .difficulty-options input[type="radio"]:checked + label.easy {
        background-color: #2dbba2;
        color: white;
        border-color: #2dbba2;
    }

    .difficulty-options input[type="radio"]:checked + label.medium {
        background-color: #ffb300;
        color: white;
        border-color: #ffb300;
    }

    .difficulty-options input[type="radio"]:checked + label.hard {
        background-color: #e53935;
        color: white;
        border-color: #e53935;
    }


    .difficulty-options label:hover {
        background-color: #eef;
        border-color: #5872d2;
    }


    .quiz-btn {
        display: inline-block;
        margin-top: 50px;
        width: 60px;
        height: 60px;
        background-color: transparent;
        transition: width 0.3s ease;
        position: relative;
        text-align: center;
        background-color: white;
        border: 2px solid black;
        border-right: 0px solid black;
    }

    .quiz-btn:hover {
        width: 80px;
    }

    .quiz-btn img {
        width: 50px;
        height: 50px;
        transition: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    #quiz-btn{
        background-color: transparent;
        border: 0px solid black;
    }

    .quiz-popup{
        overflow-y: auto;
        box-shadow: 3px 6px 12px rgba(0, 0, 0, 0.25);
        z-index: -1;
        border-left: 2px solid black;
        background-color: white;
    }
    
    #quiz-popup{
        max-height: 95%;
    }

    .btn{
        display: flex;
        align-items: center;
    }

    aside{
        display: flex;
        position: fixed;
        top: 0;
        right: -504px;
        z-index: 3;
        transition: right 0.3s ease-in-out;
        height: 100%;
        padding-bottom: 20px;
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
        padding-top: 20px;
    }

    .refresh{
        background-color: #2dbba2;
        margin-top: 5%;
        border: none;
        color: white;
        border-radius: 10px;
        margin-bottom: 1%;
    }

    .popup {
        width: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        height: 100%;
		top: 0;
		position: relative;
		color: black;
    }

    #question {
        max-width: 500px;
        white-space: pre-wrap;
        overflow-wrap: break-word;
        padding: 10px; 
    }

    @media (max-width: 600px) {
        aside {
            right: -354px;
        }

        .popup{
            width: 350px;
        }

        .wrapper{
            width: 350px;
        }
    }

    @media (max-width: 400px) {
        aside {
            right: -254px;
        }

        .popup{
            width: 250px;
        }

        .wrapper{
            width: 250px;
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
        width: 120px;
        height: 32px;
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

    .popup .hidden {
        display: none;
    }

    .popup #solution {
        color: #333;
    }
  </style>
  
 <script>
  import App from '../App.svelte'
  import LecturePreview from '../components/LecturePreview.svelte';
  import LectureFullView from '../components/LectureFullView.svelte';
  import QuizPage from '../components/QuizPage.svelte';

  // Data for lecture files
  let lectureFiles = [
    { id: 1, title: "Lecture 1", file: "/html_files/lec01_contents.html" },
    { id: 2, title: "Lecture 3", file: "/html_files/lec03_contents.html" },
    { id: 3, title: "Lecture 4", file: "/html_files/lec04_contents.html" },
    // Add all lecture files here
  ];

  let selectedLecture = null; // Tracks the currently selected lecture
  let isFullScreen = false;   // Tracks whether the full-screen mode is active

  // Function to open a lecture in full-screen mode
  function openLecture(lecture) {
    selectedLecture = lecture;
    isFullScreen = true;
  }

  // Function to close the full-screen view
  function closeLecture() {
    selectedLecture = null;
    isFullScreen = false;
  }
  function loadLecture(file) {
    const iframe = document.getElementById("lecture-viewer");
    iframe.src = file;
  }
</script>


<QuizPage/>

<!-- Google Docs-style homepage -->
<div class="homepage" class:selected={!selectedLecture}>
  <h1>Lecture Notes</h1>
  <div class="lecture-grid">
    {#each lectureFiles as lecture}
      <div class="lecture-preview" on:click={() => (selectedLecture = lecture.file)}>
        <iframe src={lecture.file} title={lecture.title} class="preview-iframe"></iframe>
        <p>{lecture.title}</p>
      </div>
    {/each}
  </div>
</div>

<!-- Full-screen lecture view -->
{#if selectedLecture}
  <div class="full-screen-container">
    <!-- Lecture content (3/4 of the screen) -->
    <div class="lecture-content">
      <iframe src={selectedLecture} title="Lecture Content" class="full-screen-iframe"></iframe>
    </div>

    <!-- Side menu (1/4 of the screen) -->
    <div class="side-menu">
      <h2>Side Menu</h2>
      <p>This area is reserved for generating questions or additional tools.</p>
      <button on:click={() => (selectedLecture = null)}>Back to Homepage</button>
    </div>
  </div>
{/if}

<style>
  /* General Styles */
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  h1 {
    text-align: center;
    margin: 20px 0;
  }

  /* Homepage Layout */
  .homepage {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .lecture-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    width: 100%;
    max-width: 1200px;
  }

  .lecture-preview {
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  }

  .lecture-preview:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  .preview-iframe {
    width: 100%;
    height: 150px;
    border: none;
  }

  .lecture-preview p {
    margin: 10px 0;
    font-size: 14px;
    font-weight: bold;
  }

  /* Full-Screen Layout */
  .full-screen-container {
    display: flex;
    height: 100vh;
  }

  .lecture-content {
    flex: 3;
    background-color: #f9f9f9;
  }

  .full-screen-iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  .side-menu {
    flex: 1;
    background-color: #f0f0f0;
    border-left: 1px solid #ddd;
    padding: 20px;
    box-sizing: border-box;
  }

  .side-menu h2 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .side-menu p {
    font-size: 14px;
    margin-bottom: 20px;
  }

  .side-menu button {
    display: block;
    width: 100%;
    padding: 10px;
    font-size: 14px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
  }

  .side-menu button:hover {
    background-color: #0056b3;
  }
</style>
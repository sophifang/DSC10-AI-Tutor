<script>
  import LectureNotePreview from './LectureNotePreview.svelte';
  import LectureNotesPage from './LectureNotesPage.svelte';
  import Lecture20 from './Lecture20.svelte';
  import Lecture23 from './Lecture23.svelte';
  import Lecture03 from './Lecture03.svelte';
  import Lecture01 from './Lecture01.svelte';
  import Lecture04 from './Lecture04.svelte';
  import Lecture06 from './Lecture06.svelte';
  import Lecture08 from './Lecture08.svelte';
  import Lecture12 from './Lecture12.svelte';

  import Lecture15 from './Lecture15.svelte';
  import Lecture22 from './Lecture22.svelte';
  import { selectedLecture } from './currentLecture.js';

  // Define the available lectures and their corresponding components
  export let notes = [
      { id: 'lecture01', title: 'Introduction', component: Lecture01,  previewImage: "lecture_previews/lecture01.png"},
      { id: 'lecture03', title: 'Strings, Lists, and Arrays', component: Lecture03 ,  previewImage: "lecture_previews/lecture03.png"},
      { id: 'lecture04', title: 'Arrays and DataFrames', component: Lecture04 ,  previewImage: "lecture_previews/lecture04.png"},
      { id: 'lecture06', title: 'Grouping and Data Visualization', component: Lecture06 ,  previewImage: "lecture_previews/lecture06.png"},
      { id: 'lecture08', title: 'Functions and Applying', component: Lecture08 ,  previewImage: "lecture_previews/lecture08.png"},
      { id: 'lecture12', title: 'Simulation', component: Lecture12 ,  previewImage: "lecture_previews/lecture12.png"},
      { id: 'lecture15', title: 'Bootstrapping and Confidence Intervals', component: Lecture15 ,  previewImage: "lecture_previews/lecture15.png"},
      { id: 'lecture20', title: 'Hypothesis Testing', component: Lecture20 ,  previewImage: "lecture_previews/lecture20.png"},
      { id: 'lecture22', title: 'TVD, Hypothesis Testing, and Permutation Testing', component: Lecture22 ,  previewImage: "lecture_previews/lecture22.png"},
      { id: 'lecture23', title: 'Permutation Testing', component: Lecture23 ,  previewImage: "lecture_previews/lecture23.png"},
      
  ];

//   let selectedLecture = null; // Track the currently selected lecture

  function openLecture(note) {
      $selectedLecture = note; // Set the selected lecture
  }

  function closeLecture() {
      $selectedLecture = null; // Return to the hub
  }


</script>

<style>
  @import '../styles/global.css';

  .lecture-note-hub {
      padding: 20px;
  }

  .notes-container {
      display: grid;
      gap: 16px;
  }

  .gallery {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
</style>


<!-- Conditionally render the lecture notes page or the hub -->
{#if $selectedLecture}
  <LectureNotesPage 
      lecture={$selectedLecture} 
      on:goBack={closeLecture} />
{:else}
  <div class="lecture-note-hub">
      <header>
          <h1>Lecture Note Hub</h1>
      </header>
      <div class="notes-container gallery">
          {#each notes as note}
              <LectureNotePreview {note} on:click={() => openLecture(note)} />
          {/each}
      </div>
  </div>
{/if}

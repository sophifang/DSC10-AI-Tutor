<script>
  import { createEventDispatcher } from 'svelte';
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
  
  const dispatch = createEventDispatcher();

  // Define the available lectures and their corresponding components
  export let notes = [
      { id: 'lecture01', title: 'Introduction', component: Lecture01 },
      { id: 'lecture03', title: 'Strings, Lists, and Arrays', component: Lecture03 },
      { id: 'lecture04', title: 'Arrays and DataFrames', component: Lecture04 },
      { id: 'lecture06', title: 'Grouping and Data Visualization', component: Lecture06 },
      { id: 'lecture08', title: 'Functions and Applying', component: Lecture08 },
      { id: 'lecture12', title: 'Simulation', component: Lecture12 },
      { id: 'lecture15', title: 'Bootstrapping and Confidence Intervals', component: Lecture15 },
      { id: 'lecture20', title: 'Hypothesis Testing', component: Lecture20 },
      { id: 'lecture22', title: 'TVD, Hypothesis Testing, and Permutation Testing', component: Lecture22 },
      { id: 'lecture23', title: 'Permutation Testing', component: Lecture23 }
      
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

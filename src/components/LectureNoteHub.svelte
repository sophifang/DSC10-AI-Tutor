<script>
    import { createEventDispatcher } from 'svelte';
    import LectureNotePreview from './LectureNotePreview.svelte';
  
    const dispatch = createEventDispatcher();
  
    export let notes = [
      { id: 'lecture20', title: 'Lecture 20 – Hypothesis Testing' },
      { id: 'lecture23', title: 'Lecture 23 – Permutation Testing' },
      { id: 'lecture24', title: 'Lecture 24 – Correlation' }
    ];
  
    let viewMode = 'gallery';
  
    function toggleView() {
      viewMode = viewMode === 'gallery' ? 'list' : 'gallery';
    }
  
    function openLecture(lecture) {
      dispatch('openLecture', lecture);
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
    .list {
      grid-template-columns: 1fr;
    }
  </style>
  
  <div class="lecture-note-hub">
    <header>
      <h1>Lecture Note Hub</h1>
      <button on:click={toggleView}>Toggle View</button>
    </header>
    <div class="notes-container {viewMode}">
      {#each notes as note}
        <LectureNotePreview {note} on:click={() => openLecture(note)} />
      {/each}
    </div>
  </div>

  
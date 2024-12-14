<script>
  import LectureNoteHub from './components/LectureNoteHub.svelte';
  import LectureNotesPage from './components/LectureNotesPage.svelte';
  import Lecture20 from './components/Lecture20.svelte';
  import Lecture23 from './components/Lecture23.svelte';
  import Lecture03 from './components/Lecture03.svelte';
  import Lecture01 from './components/Lecture01.svelte';
  import Lecture04 from './components/Lecture04.svelte';
  import Lecture06 from './components/Lecture06.svelte';
  import Lecture08 from './components/Lecture08.svelte';
  import Lecture12 from './components/Lecture12.svelte';

  import Lecture15 from './components/Lecture15.svelte';
  import Lecture22 from './components/Lecture22.svelte';
  let currentLecture = null;

  function openLecture(lecture) {
    currentLecture = lecture;
  }

  function goBack() {
    currentLecture = null;
  }

  const lectures = [
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
</script>

{#if currentLecture}
  <LectureNotesPage lecture={currentLecture} on:goBack={goBack}>
    <svelte:component this={currentLecture.component} />
  </LectureNotesPage>
{:else}
  <LectureNoteHub notes={lectures} on:openLecture={openLecture} />
{/if}

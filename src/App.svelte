<script>
  import LectureNoteHub from './components/LectureNoteHub.svelte';
  import LectureNotesPage from './components/LectureNotesPage.svelte';
  import Lecture20 from './components/Lecture20.svelte';
  import Lecture23 from './components/Lecture23.svelte';
  import Lecture24 from './components/Lecture24.svelte';

  let currentLecture = null;

  function openLecture(lecture) {
    currentLecture = lecture;
  }

  function goBack() {
    currentLecture = null;
  }

  const lectures = [
    { id: 'lecture20', title: 'Lecture 20 – Hypothesis Testing', component: Lecture20, questions: ['What is hypothesis testing?', 'What is a null hypothesis?'] },
    { id: 'lecture23', title: 'Lecture 23 – Permutation Testing', component: Lecture23, questions: ['What is permutation testing?', 'What are randomization tests?'] },
    { id: 'lecture24', title: 'Lecture 24 – Correlation', component: Lecture24, questions: ['What is correlation?', 'What is a scatterplot?'] }
  ];
</script>

{#if currentLecture}
  <LectureNotesPage lecture={currentLecture} on:goBack={goBack}>
    <svelte:component this={currentLecture.component} />
  </LectureNotesPage>
{:else}
  <LectureNoteHub lectures={lectures} on:openLecture={openLecture} />
{/if}

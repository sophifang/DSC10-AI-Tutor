<script>
  export let selectedLecture;
</script>

<div class="side-menu">
  <h2>Generate Questions</h2>
  <p>This section is reserved for generating questions related to the lecture.</p>
  <p><strong>Lecture:</strong> {selectedLecture.title}</p>
</div>

<style>
  .side-menu {
    width: 25%;
    background: #f9f9f9;
    padding: 20px;
    border-left: 1px solid #ddd;
    overflow: auto;
  }

  h2 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  p {
    margin: 10px 0;
  }
</style>

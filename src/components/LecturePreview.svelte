<script>
  export let lecture;
  export let onClick; // Function passed as a prop for handling clicks
</script>

<div class="preview" on:click={onClick}>
  <div class="preview-content">
    <h2>{lecture.title}</h2>
    <iframe src={lecture.file} frameborder="0"></iframe>
  </div>
</div>

<style>
  .preview {
    display: block;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    background: #fff;
    transition: box-shadow 0.3s ease;
    cursor: pointer;
  }

  .preview:hover {
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
  }

  .preview-content {
    padding: 10px;
    text-align: center;
  }

  iframe {
    width: 100%;
    height: 150px;
    border: none;
  }

  h2 {
    font-size: 1.2em;
    margin: 10px 0;
  }
</style>

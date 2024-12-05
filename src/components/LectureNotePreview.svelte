<script>
    export let note;
  </script>
  
  <style>
    .note-preview {
      background-color: #e9e9e9;
      border-radius: 8px;
      padding: 10px;
      text-align: center;
      cursor: pointer;
      transition: transform 0.2s;
    }
  
    .note-preview:hover {
      transform: scale(1.05);
    }
  </style>
  
  <div class="note-preview" on:click>
    <div>{note.title}</div>
  </div>
  
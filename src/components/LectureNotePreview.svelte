<script>
  export let note;
</script>

<style>
.note-preview {
    background-color: #ffff;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    height: 250px; /* Adjust as needed */
}

.note-preview:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.image-preview {
    width: 100%;
    height: 175px; /* Adjust height as needed */
    object-fit: cover; /* Ensures the image fits nicely */
}

.note-title {
    padding: 10px;
    text-align: center;
    background-color: #f5f5f5;
    border-top: 1px solid #ddd;
    font-size: 16px;
    font-weight: bold;
    height: 40px; /* Set a fixed height for the title area */
    display: flex;
    align-items: center; /* Vertically center the text */
    justify-content: center; /* Center the text horizontally */
}

</style>

<div class="note-preview" on:click>
  <img class="image-preview" src={note.previewImage || 'lecture_previews/lecture01.png'} alt="Lecture Preview" />
  <div class="note-title">{note.title}</div>
</div>

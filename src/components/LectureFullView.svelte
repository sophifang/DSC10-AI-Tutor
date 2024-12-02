<script>
    import SideMenu from './SideMenu.svelte';
  
    export let selectedLecture;
    export let close; // Event to handle closing the full-screen view
  </script>
  
  <div class="lecture-container">
    <!-- Lecture Content -->
    <div class="lecture-content">
      <button class="close-btn" on:click={close}>Close</button>
      <iframe src={selectedLecture.file} frameborder="0"></iframe>
    </div>
  
    <!-- Side Menu -->
    <SideMenu {selectedLecture} />
  </div>
  
  <style>
    .lecture-container {
      display: flex;
      width: 100%;
      height: 100vh;
    }
  
    .lecture-content {
      width: 75%;
      overflow: auto;
      position: relative;
    }
  
    .close-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      background: #ff4c4c;
      border: none;
      color: white;
      padding: 10px 20px;
      cursor: pointer;
      border-radius: 5px;
    }
  
    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  </style>
  
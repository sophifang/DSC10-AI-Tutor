<script>
    export let sections;
    export let currentSection;
  </script>
  
  <style>
    .sidebar {
      flex: 1;
      border-left: 1px solid #ddd;
      padding: 20px;
      overflow-y: auto;
    }
  </style>
  
  <div class="sidebar">
    <h2>Question Sidebar</h2>
    <ul>
      {#each sections as section}
        <li on:click={() => (currentSection = section)}>{section.title}</li>
      {/each}
    </ul>
  </div>
  
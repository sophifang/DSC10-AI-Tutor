<script>
    export let sections;
    export let currentSection;
  </script>
  
  <style>
    .progress-bar {
      height: 5px;
      background-color: #4caf50;
      width: 0%;
      transition: width 0.2s;
    }
  </style>
  
  <div
    class="progress-bar"
    style="width: {(sections.indexOf(currentSection) / sections.length) * 100}%"
  ></div>
  
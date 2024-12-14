<script>
    import { createEventDispatcher, onMount } from 'svelte';
    export let lecture;
    const dispatch = createEventDispatcher();

    let currentSection = ''; // Tracks the section being viewed
    let totalSections = 0;
    let progress = 0;
    let sections = []; // Holds the table of contents

    function goBack() {
        dispatch('goBack');
    }

    // Scroll to the section by index
    function scrollToSection(index) {
        const section = document.querySelectorAll('.section')[index];
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            console.error(`Section at index ${index} not found.`);
        }
    }

    function updateProgress() {
        const notesContainer = document.querySelector('.notes');
        const sections = document.querySelectorAll('.section');
        totalSections = sections.length;

        let currentIndex = 0;
        let notesRect = notesContainer.getBoundingClientRect();

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < notesRect.top + notesRect.height / 2) {
                currentIndex = index;
            }
        });

        progress = ((currentIndex + 1) / totalSections) * 100;
        currentSection = sections[currentIndex]?.querySelector('h1, h2, h3')?.textContent || '';
    }

    onMount(() => {
        // Wait for the content to render and extract section headings
        setTimeout(() => {
            sections = Array.from(document.querySelectorAll('.section')).map((section, index) => ({
                index: index,
                title: section.querySelector('h1, h2, h3')?.textContent.trim() || 'Untitled'
            }));
        }, 0);
    });
</script>

<main>
    <header>
        <button on:click={goBack}>← Back</button>
        <h1>{lecture.title || 'Lecture'}</h1>
    </header>
    <div class="progress-bar" style="width: {progress}%;"></div>

    <div class="content">
        <div class="notes" on:scroll={updateProgress}>
            <svelte:component this={lecture.component} />
        </div>
        

        <aside class="sidebar">
            <h2>Current Section</h2>
            <p>{currentSection || 'Introduction'}</p>

            <h3>Table of Contents</h3>
            <ul>
                {#each sections as section}
                    <li>
                        <button on:click={() => scrollToSection(section.index)}>{section.title}</button>
                    </li>
                {/each}
            </ul>
        </aside>
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
    }

    .progress-bar {
        height: 5px;
        background-color: #4caf50;
    }

    .content {
        display: flex;
        flex: 1;
        overflow: hidden;
    }

    .notes {
        flex: 2;
        overflow-y: auto;
        padding: 20px;
        max-height: 80vh;
        overflow-x: hidden;
    }
    .notes::-webkit-scrollbar {
        display: none;
    }

    .sidebar {
        flex: 1;
        position: sticky;
        top: 0;
        max-height: 80vh;
        overflow-y: auto;
        padding: 20px;
        border-left: 1px solid #ddd;
    }
    .sidebar::-webkit-scrollbar {
        display: none;
    }
    button {
        all: unset;
        cursor: pointer;
        color: #007bff;
        text-decoration: underline;
    }

    button:hover {
        color: #0056b3;
    }
    img {
    width: 100%;
    }
</style>

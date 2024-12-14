import { writable } from 'svelte/store';

export let selectedLecture = writable(null);
export let currentLecture = writable(null);
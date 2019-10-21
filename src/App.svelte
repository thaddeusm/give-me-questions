<script>
	export let query;

	import TopBar from './components/TopBar.svelte';
	import Question from './components/Question.svelte';
	import { onMount } from 'svelte';

	import ReflectionQuestions from './reflectionQuestions.json';
	import VA from './vaPeerInterviewQuestions.json';
	import VB from './vbPeerInterviewQuestions.json';
	import VC from './vcPeerInterviewQuestions.json';
	import VD from './vdPeerInterviewQuestions.json';

	let Questions;

	if (!query.hasOwnProperty('course')) {
		Questions = ReflectionQuestions;
	} else if (query.course == 'va') {
		Questions = VA;
	} else if (query.course == 'vb') {
		Questions = VB;
	} else if (query.course == 'vc') {
		Questions = VC;
	} else {
		Questions = VD;
	}
	

	export let theme = 'light';
	export let categories = Object.keys(Questions);

	function setThemePreference() {
		let str = JSON.stringify(theme)

    	localStorage.setItem('theme', str)
	}

	function retrieveThemePreference() {
		let storedStr = localStorage.getItem('theme')
		let storedPreference = JSON.parse(storedStr)

		
		if (storedPreference !== null) {
			if (theme !== storedPreference) {
				toggleTheme()
			}
		}
	}

	function toggleTheme() {
		console.log('theme is now', theme);
		if (theme === 'light') {
			theme = 'dark';
			theme = theme;

			document.body.style.backgroundColor = "#000000";
			document.body.style.color = "#E5E5E5";
		} else {
			theme = 'light';
			theme = theme;

			document.body.style.backgroundColor = "#E5E5E5";
			document.body.style.color = "#000000";
		}

		setThemePreference()
	}

	onMount(() => {
		retrieveThemePreference()

		console.log(query)
	})
</script>

<style>
#app {
	height: 100%;
	width: 100%;
}

main {
	padding-bottom: 20px;
}
</style>


<div id="app" class="{theme === 'light' ? 'light-theme' : 'dark-theme'}">
	<TopBar {theme} on:change={toggleTheme} />
	<main>
		{#each categories as category}
			<Question title={category} questions={Questions[category]} {theme} />
		{/each}
	</main>
</div>

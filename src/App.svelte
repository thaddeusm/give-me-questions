<script>
	import TopBar from './components/TopBar.svelte';
	import Question from './components/Question.svelte';
	import Questions from './questions.json';
	import { onMount } from 'svelte';

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

			document.body.style.backgroundColor = "#0F0326";
			document.body.style.color = "#F5F7DC";
		} else {
			theme = 'light';
			theme = theme;

			document.body.style.backgroundColor = "#F5F7DC";
			document.body.style.color = "#0F0326";
		}

		setThemePreference()
	}

	onMount(() => {
		retrieveThemePreference()
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
			<Question title={category} questions={Questions[category]}/>
		{/each}
	</main>
</div>

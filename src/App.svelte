<script>
	import TopBar from './components/TopBar.svelte';
	import Question from './components/Question.svelte';
	import Questions from './questions.json';
	import { onMount } from 'svelte';

	export let theme = 'light';
	export let categories = Object.keys(Questions);

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
	}

	onMount(() => {
		document.body.style.backgroundColor = "#F5F7DC";
		document.body.style.color = "#0F0326";
	})
</script>

<style>
:global(html, body) {
	margin: 0;
	padding: 0;
	height: 100%;
	width: 100%;
}

:global(.light-theme) {
	color: #0F0326;
	background: #F5F7DC;;
}

:global(.dark-theme) {
	color: #F5F7DC;
	background: #0F0326;
}

:global(@font-face) {
	font-family: "ArchivoNarrow";
	src: url("./ArchivoNarrow.ttf");
}

:global(h1) {
	font-size: 1.5em;
}

:global(h2) {
	font-size: 1.4em;
}

:global(h3) {
	font-size: 1.4em;
}

:global(h4) {
	font-size: 1.4em;
}

:global(h5) {
	font-size: 1.2em;
}

:global(h6) {
	font-size: 1.2em;
}

:global(p, li, button, a) {
	font-size: 1em;
}

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

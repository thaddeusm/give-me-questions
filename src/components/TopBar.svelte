<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function changeTheme() {
		dispatch('change')
	}

	export let theme;
</script>

<style>
header {
	display: grid;
	grid-template-columns: 5% 1fr auto 5%;
	grid-template-areas: ". title themeButton .";
	height: 12%;
	align-items: center;
}

h1 {
	margin: 0;
	grid-area: title;
	color: var(--red);
}

button {
	cursor: pointer;
	background: transparent;
	outline: none;
	border: none;
	text-align: right;
	grid-area: themeButton;
}

img {
	vertical-align: middle;
	width: 2em;
}
</style>

<header>
	<h1>Questions</h1>
	<button on:click={changeTheme}>
		<img src="images/nightday.svg" alt="theme choice icon">
	</button>
</header>
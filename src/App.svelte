<script>
	import { Router } from 'svelte-router-spa';
	import { routes } from './routes';

	let theme;

	function retrieveThemePreference() {
		let storedStr = localStorage.getItem('theme');
		let storedPreference = JSON.parse(storedStr);

		
		if (storedPreference !== null) {
			if (theme !== storedPreference) {
				toggleTheme();
			}
		}
	}
</script>

<style>
#app {
	height: 100%;
	width: 100%;
}
</style>


<div id="app" class="{theme === 'light' ? 'light-theme' : 'dark-theme'}">
	<Router {routes} />
</div>

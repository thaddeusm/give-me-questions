<script>
	import { Router, Route } from 'svero';
	import VideoResponse from './views/VideoResponse.svelte';
	import VA from './views/VA.svelte';
	import VB from './views/VB.svelte';
	import VC from './views/VC.svelte';
	import VD from './views/VD.svelte';

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
	<Router>
		<Route path="*" component={VideoResponse} />
		<Route path="/va" component={VA} />
		<Route path="/vb" component={VB} />
		<Route path="/vc" component={VC} />
		<Route path="/vd" component={VD} />
	</Router>
</div>

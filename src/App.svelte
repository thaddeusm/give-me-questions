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

</style>

<Router>
	<Route path="*" component={VideoResponse} />
	<Route exact path="/" component={VideoResponse} />
	<Route exact path="/va" component={VA} />
	<Route exact path="/vb" component={VB} />
	<Route exact path="/vc" component={VC} />
	<Route exact path="/vd" component={VD} />
</Router>

<script>
	import VideoResponse from './views/VideoResponse.svelte';

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

<VideoResponse />

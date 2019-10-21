import App from './App.svelte';

const href = window.location.href;

// if query is present, pass as prop
let query = {};

if (href.indexOf('?') !== -1) {
	let queryStr = href.split('?')[1];

	let arr = queryStr.split('=');

	let key = arr[0];
	let value = arr[1];

	query[key] = value;
}

const app = new App({
	target: document.body,
	props: {
		query: query
	}
});

export default app;
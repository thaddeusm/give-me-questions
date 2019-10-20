import App from './App.svelte';

const href = window.location.href

// if query param is present, pass as prop
let query = {}

if (href.indexOf('?') !== -1) {
	let paramStr = href.split('?')[1]

	let param = paramStr.split('=')

	let key = param[0]
	let value = param[1]

	query[key] = value
}

const app = new App({
	target: document.body,
	props: {
		query: query
	}
});

export default app;
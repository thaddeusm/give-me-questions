<script>
	import { onMount } from 'svelte';

	export let title;
	export let questions;

	export let question = "loading";

	onMount(() => {
		let randomQuestionIndex = Math.floor(Math.random(questions) * questions.length);

		question = questions[randomQuestionIndex]
	})
</script>

<style>
@media screen and (max-width: 449px) {
	section {
		border-top: 2px solid var(--yellow);
		border-bottom: 2px solid var(--yellow);
	}
}

@media screen and (min-width: 450px) {
	section {
		border: 2px solid var(--yellow);
		border-radius: 5px;
	}
}

section {
	max-width: 450px;
	margin: 50px auto;
	padding: 0 5%;
	box-shadow: 0px 0px 3px var(--black);
}

h3 {
	font-style: italic;
	opacity: .8;
	color: var(--gray);
}
</style>

<section>
	<h3>
		{title}
	</h3>
	<p>
		{question}
	</p>
</section>
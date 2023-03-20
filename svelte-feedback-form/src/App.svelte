<script>
	export let name;
	let first = 'Svelte';
	let last = 'App';
	$: legal = first + ' ' + last;
	let color = 'blue';
	let showText = true;

	
	  
	const changeColor = () => {
		color = color === 'blue' ? 'red' : 'blue';
		showText = !showText;
	}
</script>

<main>
	<h1 style="color: {color}">Hello {name}! This is a {legal}</h1>
	{#if showText}
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	{:else}
		<p>Other text in an else statement</p>
	{/if}
	<button on:click={changeColor}>Click me!</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
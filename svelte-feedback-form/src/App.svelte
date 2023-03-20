<script>
	// import { FeedbackList, FeedbackItem } from './components/imports.svelte'; // might be wrong?
	import FeedbackList from './components/FeedbackList.svelte';

	let feedback = [
	{
		id: 1,
		rating: 10,
		text: 'Test1'
	},
	{
		id: 2,
		rating: 9,
		text: 'Test12'
	},
	{
		id: 3,
		rating: 8,
		text: 'Test123'
	}
	];

	const deleteFeedback = (e) => {
		console.log(e.detail);
	}
</script>

<main class="container">
	<h1>Feedback</h1>
	<FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>
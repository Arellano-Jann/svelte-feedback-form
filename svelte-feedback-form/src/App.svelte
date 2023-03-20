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

	$: count = feedback.length;
	$: average = feedback.reduce((a, {rating}) => a + rating, 0) / count;

	const deleteFeedback = (e) => {
		const itemId = e.detail;
		feedback = feedback.filter((item) => item.id != itemId)
	}
</script>

<main class="container">
	<h1>Feedback</h1>
	<h3>Total Reviews: {count}</h3>
	<h3>Average Rating: {average}</h3>
	<FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>
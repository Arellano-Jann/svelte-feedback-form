<script>
	// import { FeedbackList, FeedbackItem } from './components/imports.svelte'; // might be wrong?
	import FeedbackList from './components/FeedbackList.svelte';
	import FeedbackStats from './components/FeedbackStats.svelte';
	import FeedbackForm from './components/FeedbackForm.svelte';

	// let feedback = [{
	// 	id: 1,
	// 	rating: 10,
	// 	text: 'Test1'
	// },
	// {
	// 	id: 2,
	// 	rating: 9,
	// 	text: 'Test12'
	// },
	// {
	// 	id: 3,
	// 	rating: 8,
	// 	text: 'Test123'
	// }
	// ];

	// const addFeedback = (e) => {
	// 	console.log(e.detail)
	// 	const newFeedback = e.detail;
	// 	feedback = [...feedback, newFeedback];
	// }
	// const deleteFeedback = (e) => {
	// 	const itemId = e.detail;
	// 	feedback = feedback.filter((item) => item.id != itemId)
	// }
</script>

<main class="container">
	<h1>Feedback</h1>
	<FeedbackForm />
	<FeedbackStats />
	<FeedbackList />
	<!-- <FeedbackForm on:add-feedback={addFeedback} />
	<FeedbackStats {count} {average} /> -->
	<!-- <FeedbackList {feedback} on:delete-feedback={deleteFeedback} /> -->
</main>
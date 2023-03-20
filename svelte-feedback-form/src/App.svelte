<script>
	import { FeedbackList, FeedbackItem } from './components/*'; // might be wrong?

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
</script>

<main>
	<FeedbackList {feedback} />
	<h1>Feedback</h1>
	<p>Thank you for your feedback!</p>
</main>
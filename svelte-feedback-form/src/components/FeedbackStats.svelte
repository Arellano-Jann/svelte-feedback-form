<script>
    import { FeedbackStore } from '../stores';

	$: count = $FeedbackStore.length;
	$: average = $FeedbackStore.reduce((a, {rating}) => a + rating, 0) / count;
</script>

<div class="feedback-stats">
    <h4>Total Reviews: {count}</h4>
    <h4>Average Rating: {average}</h4>
</div>

<style>
    .feedback-stats{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
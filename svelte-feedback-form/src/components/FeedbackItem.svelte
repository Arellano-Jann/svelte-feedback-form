<script>
    // import { createEventDispatcher } from 'svelte';
    import { FeedbackStore } from "../stores";
    import Card from "./Card.svelte";
    export let item;

    // const dispatch = createEventDispatcher();

    // const handleDelete = (itemId) => {
    //     dispatch('delete-feedback', itemId);
    // }
    
    const handleDelete = (itemId) => {
        FeedbackStore.update((currentFeedback) => {
            return currentFeedback.filter(item => itemId != item.id);
        })
    }
</script>

<Card>
    <div class="num-display">
        {item.rating}
    </div>

    <button 
        on:click={ () => handleDelete(item.id) }
        class="close">
    x
    </button>
    <p class="text-display">
        {item.text}
    </p>

</Card>

<style>
  .num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background: #ff6a95;
    color: #fff;
    /* border: 1px #eee solid; */
    border-radius: 40%;
    padding: 10px;
    text-align: center;
    font-size: 20px;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
  }
</style>
import {writable} from 'svelte/store';

export const FeedbackStore = writable([
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
]);
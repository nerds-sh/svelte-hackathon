<script>
    import { testimonials } from "$lib/testimonials/testimonials.js"
    import Card from './card.svelte'
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each testimonials as testimonial, i}
        <Card {testimonial} index={i} />
    {/each}
</div>

<style>
    .flex-container {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: center;
    }
    .flex-item {
        width: calc(25%);
        margin-bottom: 30px;
        margin-right: 15px;
        margin-left: 15px;
        padding: 24px;
    }
    @media (min-width: 240px) and (max-width: 1023px) {
        .flex-item {
            width: 50%;
        }
        .flex-item:nth-child(3n) {
            margin-right: 30px;
        }
    }
</style>
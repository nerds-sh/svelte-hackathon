<script>
    import { testimonials } from "$lib/home/testimonials/testimonials.js"
    import Card from './card.svelte'
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each testimonials as testimonial}
        <Card {testimonial} />
    {/each}
</div>
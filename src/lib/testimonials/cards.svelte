<script>
    import src from '$lib/assets/fi-rr-user.svg'
    import { testimonials } from "$lib/testimonials/testimonials.js"
</script>

<div class="flex-container">
{#each testimonials as testimonial, i}
<div class="block p-6 bg-[#FFFFFF0D] rounded-[20px] flex-item">
    <svelte:component this={testimonials[i].text} />
    <div class="flex flex-row mt-[20px]">
        <div class="block p-3 bg-blue-500 rounded-[12px]">
            <svelte:component this={src} />
        </div>
        <div class="ml-[16px]">
            <p class="text-[#FFFFFF]">{testimonials[i].name}</p>
            <p class="text-[#236AF5]">{testimonials[i].organization}</p>
        </div>
    </div>
</div>
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
        margin-right: 30px;
        padding: 24px;
    }

    .flex-item:nth-child(3n) {
        margin-right: 0;
    }
    
    .flex-item:nth-child(4) {
        margin-top: -45px;
    }

    .flex-item:nth-child(6) {
        margin-top: -70px;
    }
</style>

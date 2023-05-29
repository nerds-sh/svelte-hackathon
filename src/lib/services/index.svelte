<script>
    import Card from './card.svelte'
    import {services} from './services.js'
    import CurliedText from '$lib/components/curlied-text.svelte'
</script>

<div class="flex flex-col justify-center items-center text-white">
    <CurliedText braceColor="text-white" textColor="text-blue-500">
        our services
    </CurliedText>
    <div class="text-5xl font-bold mt-2 mb-6">
        We provide
    </div>
    <div class="max-w-screen-md text-center mb-7">
        Always ready for the next challenge, wired to find the best technical solutions for your business. You do the
        dreaming, we do the coding.
    </div>
    <button class="rounded-lg bg-white text-black py-3 px-8 font-bold mb-14">
        Let's talk
    </button>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-5 gap-6">
        {#each services as service}
            <Card {...service}/>
        {/each}
    </div>
</div>

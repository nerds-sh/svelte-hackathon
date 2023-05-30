<script>
    import rocket from '$lib/assets/rocket.webp'
    import CurliedText from '$lib/components/curlied-text.svelte'
    import Card from './card.svelte'
    import {topics} from './topics.js'
</script>

<div class="shadow-lg rounded-2xl flex pl-20 pt-20 pb-20 pr-20 md:pr-0 justify-between background">
    <div class="flex flex-col items-center">
        <CurliedText>
            our pleasure
        </CurliedText>
        <div class="text-white font-bold text-4xl mb-5">
            We enjoy the most
        </div>
        <div class="text-figmaGray mb-10">
            The team is specialized in several technologies and architectures
            but these are the ones that caught our attention.
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            {#each topics as {text}}
                <Card {text}/>
            {/each}
        </div>
    </div>

    <img src={rocket} alt="rocket-illustration" class="hidden lg:block">
</div>

<style lang="scss">
    .background {
        background: linear-gradient(#0089DFB5, #236AF573);
    }

</style>
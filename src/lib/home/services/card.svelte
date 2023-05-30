<script>
    import CurliedText from '$lib/components/curlied-text.svelte'

    export let icon
    export let title
    export let description
</script>

<div class="rounded-lg shadow-md bg-gray-600 flex flex-col p-8 bg-opacity-30 border-2 border-gray-600 border-opacity-30 backdrop-filter backdrop-blur-sm">
    <svelte:component this={icon} class="mb-6" />
    <CurliedText>
        {title}
    </CurliedText>
    <div class="w-4/6 text-ellipsis text-[#818EA4] text-xs lg:text-sm xl:text-md 2xl:text-lg">
        {description}
    </div>
    <div class="absolute right-0 bottom-0 z-[-1] mr-12 mb-12 blur-sm">
        <svelte:component this={icon} class="blurred-icon" />
    </div>
</div>

<style lang="scss">
    :global(.blurred-icon > path) {
      stroke: #818EA4;
      opacity: 30%;
    }
    :global(.blurred-icon) {
      transform: scale(3);
    }
</style>

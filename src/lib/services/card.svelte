<script>
    import CurliedText from '$lib/components/curlied-text.svelte'

    export let icon
    export let title
    export let description
</script>

<div class="rounded-lg shadow-md bg-gray-600 flex flex-col p-8 bg-opacity-30 border-2 border-gray-600 border-opacity-30 backdrop-filter backdrop-blur-sm">
    <img alt={`${title}-icon`} src={icon} class="w-1/6 mb-6">
    <CurliedText>
        {title}
    </CurliedText>
    <div class="w-4/6 text-ellipsis text-[#818EA4] text-lg">
        {description}
    </div>
    <div class="absolute right-0 bottom-0 z-[-1] mr-2 mb-2 blur-sm">
        <img alt={`${title}-icon`} src={icon} class="w-[98px] fill-white">
    </div>
</div>

<style>

</style>

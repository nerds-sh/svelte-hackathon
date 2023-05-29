<script>
    import CurliedText from '$lib/components/curlied-text.svelte'

    export let textContainer
    export let title
    export let description
    export let left

    const defaultClassName = "text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold flex items-center gap-2 mb-3"
    $: className = left ? `${defaultClassName} justify-start lg:justify-end` : defaultClassName
</script>


<div class={`${textContainer}`}>
    <div class="title">
        <h3 class="-translate-y-1/2">
            <CurliedText
                    {className}
                    braceColor="text-blue-500 text-3xl font-bold"
                    textColor="text-white text-3xl">
                {title}
            </CurliedText>
        </h3>
    </div>
    <p class="text-figmaGray">
        {description}
    </p>
</div>

<style>
    .title {
        margin-top: 35px;
    }
</style>

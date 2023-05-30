<script>
    import AngledText from '$lib/components/angled-text.svelte'

    export let text

    const className = "text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold flex items-center gap-2"
</script>

<div class="rounded-lg px-5 py-1 border-2 border-blue-500 flex items-center justify-center">
    <AngledText {className}>
        {text}
    </AngledText>
</div>
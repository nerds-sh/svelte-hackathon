<script>
    import LineSvg from '$lib/assets/home/line.svg'

    export let iconContainer
    export let flip
    export let icon
</script>

<div class={`items-center -ms-px hidden md:flex ${iconContainer}`}>
    <div class={`mb-6 ${flip}`}>
        <LineSvg />
    </div>
    <svelte:component this={icon} />
</div>
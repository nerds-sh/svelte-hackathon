<script>
    export let className = "text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold flex items-center gap-2 mb-3"
    export let angleColor = "text-blue-500"
    export let textColor = "text-white"

</script>
<div class={className}>
    <div class={angleColor}>{'<'}</div>
    <div class={`${textColor} whitespace-nowrap`}>
        <slot/>
    </div>
    <div class={angleColor}>{'>'}</div>
</div>

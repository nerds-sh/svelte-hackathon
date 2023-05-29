<script>
    export let className = "text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold flex items-center gap-2 mb-3"
    export let braceColor = "text-blue-500"
    export let textColor = "text-white"

</script>
<div class={className}>
    <div class={braceColor}>{'{'}</div>
    <div class={`${textColor} whitespace-nowrap`}>
        <slot/>
    </div>
    <div class={braceColor}>{'}'}</div>
</div>

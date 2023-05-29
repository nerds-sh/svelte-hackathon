<script>
    export let className = "text-2xl font-bold flex gap-2 mb-3"
    export let braceColor = "text-blue-500"
    export let textColor = "text-white"
</script>
<div class={className}>
    <div class={braceColor}>{'{'}</div>
    <div class={textColor}>
        <slot/>
    </div>
    <div class={braceColor}>{'}'}</div>
</div>

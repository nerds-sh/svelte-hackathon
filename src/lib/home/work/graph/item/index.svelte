<script lang="ts">
    import Icon from '$lib/home/work/graph/item/icon.svelte'
    import Content from '$lib/home/work/graph/item/content.svelte'

    export let left = false
    export let title
    export let description
    export let icon

    const containerMargin = left ? 'lg:me-auto lg:flex-row-reverse' : 'flex-end lg:ms-auto lg:flex-row lg:me-0'
    const flexDirection = left ? 'flex-row lg:flex-row-reverse' : ''
    const iconContainer = left ? 'flex-row lg:flex-row-reverse -me-px' : '-ms-px'
    const flip = left ? 'lg:-scale-x-100' : ''
    const textContainer = left ? 'md:ms-6 lg:ms-0 lg:me-6 lg:text-right' : 'md:ms-6'

</script>

<div class={`flex md:ps-[6.2rem] lg:ps-0 ${containerMargin} ${flexDirection} w-full lg:w-1/2 items-start`}>
    <Icon {flip} {iconContainer} {icon} />
    <Content {left} {title} {description} {textContainer} />
</div>

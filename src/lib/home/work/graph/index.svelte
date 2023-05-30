<script lang="ts">
    import GraphRootSvg from '$lib/assets/home/graph-root.svg'
    import Item from '$lib/home/work/graph/item/index.svelte'
    import { items } from '$lib/home/work/graph/items'

</script>

<div class="mb-20 relative w-full flex flex-col items-center lg:items-center md:items-start max-w-screen-xl px-8">
   <GraphRootSvg />
   <div class="absolute w-0.5 left-[8.1rem] lg:left-1/2 lg:-translate-x-1/2 top-28 z-0 line bg-figmaBlue hidden md:block">
      <div class="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-figmaBlue"></div>
   </div>
   {#each items as item}
      <Item left={item.left} title={item.title} description={item.description} icon={item.icon} />
   {/each}
</div>

<style>
   .line {
      height: calc(100% - 112px);
   }
</style>
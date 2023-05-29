
<script>
    import MenuItem from "$lib/top-navigation/menu-item.svelte";
    const menuItems = [
        {link:'case-studies', text:"Case Studies"},
        {link:'services', text:"Services"},
        {link:'products', text:"Products"},
        {link:'carriers', text:"Carriers"},
        {link:'blog', text:"Blog"},
        {link:'contact', text:"Contact"}
    ]
</script>

<div class="hidden w-full md:block md:w-auto" id="navbar-default">
    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

    {#each menuItems as menuItem}
            <MenuItem to="{menuItem.to}" text="{menuItem.text}"/>
        {/each}
    </ul>
</div>

<script>
    import NerdsLogo from '../assets/nerds_logo.svg?component'
    import {Dropdown, DropdownItem, NavBrand, NavHamburger} from "flowbite-svelte";
    import LanguageSelector from "$lib/header/LanguageSelector.svelte";
    import MenuItem from "$lib/header/MenuItem.svelte";

    const menuItems = [
        {link: '/', text: "Case Studies"},
        {link: '/services', text: "Services"},
        {link: '/products', text: "Products"},
        {link: '/carrers', text: "Carrers"},
        {link: '/blog', text: "Blog"},
        {link: '/contact', text: "Contact"}
    ]
</script>

<div class="w-full flex justify-between items-center bg-primary">
    <NavBrand href="/" class="p-4 px-4">
        <NerdsLogo/>
    </NavBrand>
    <div class="w-full justify-center items-center bg-primary space-x-5 hidden lg:flex">
        {#each menuItems as menuItem}
            <MenuItem text={menuItem.text} to={menuItem.link}/>
        {/each}
    </div>
    <div id="dropdown">
        <Dropdown frameClass="link-dropdown" placement="bottom" triggeredBy="#dropdown button">
            {#each menuItems as menuItem}
                <DropdownItem defaultClass="bg-primary hover:bg-primary">
                    <MenuItem text={menuItem.text} to={menuItem.link}/>
                </DropdownItem>
            {/each}
        </Dropdown>
        <NavHamburger btnClass="text-white lg:hidden bg-primary hover:bg-primary"/>
    </div>
    <LanguageSelector className="hidden lg:flex"/>
</div>

<style lang="scss">
    :global(.link-dropdown ) {
        background-color: #0F1A2B;
        @apply px-3;
        @apply py-2;
    }
</style>

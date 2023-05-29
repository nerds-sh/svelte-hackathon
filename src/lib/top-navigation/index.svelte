<script>
    import NerdsLogo from '../assets/nerds_logo.svg?component'
    import {Navbar, NavBrand, NavHamburger, NavUl} from "flowbite-svelte";
    import LanguageSelector from "$lib/top-navigation/LanguageSelector.svelte";
    import MenuItem from "$lib/top-navigation/MenuItem.svelte";
    const menuItems = [
        {link:'/', text:"Case Studies"},
        {link:'/services', text:"Services"},
        {link:'/products', text:"Products"},
        {link:'/carrers', text:"Carrers"},
        {link:'/blog', text:"Blog"},
        {link:'/contact', text:"Contact"}
    ]
</script>

<Navbar let:hidden let:toggle>
    <NavBrand href="/" class="p-4 px-4">
       <NerdsLogo/>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
        {#each menuItems as menuItem}
            <MenuItem text={menuItem.text} to={menuItem.link}/>
        {/each}
    </NavUl>
    <LanguageSelector/>
</Navbar>



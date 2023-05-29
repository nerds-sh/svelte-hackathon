<script>
    import NerdsLogo from './nerds_logo.svg?component'
    import {Navbar, NavBrand, NavHamburger, NavLi, NavUl} from "flowbite-svelte";
    import LanguageSelector from "$lib/top-navigation/LanguageSelector.svelte";
    const menuItems = [
        {link:'case-studies', text:"Case Studies"},
        {link:'services', text:"Services"},
        {link:'products', text:"Products"},
        {link:'carriers', text:"Carriers"},
        {link:'blog', text:"Blog"},
        {link:'contact', text:"Contact"}
    ]
</script>

<Navbar let:hidden let:toggle>
    <NavBrand href="/">
       <NerdsLogo/>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
        {#each menuItems as menuItem}
            <NavLi href="{menuItem.to}">{menuItem.text}</NavLi>
        {/each}
    </NavUl>
    <LanguageSelector/>
</Navbar>



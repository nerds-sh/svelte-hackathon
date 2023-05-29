<script>
    import {NavLi} from "flowbite-svelte";
    import {page} from "$app/stores";

    export let to;
    export let text;
    console.log($page.url.pathname);
    const isActive = $page.url.pathname === to
</script>

<NavLi href={to}>
    <span class:navActive="{isActive}">
        {text}
    </span>
</NavLi>

<style>
    .navActive {
        color: white;
    }

    .navActive:before {
        content: "{";
        padding: 5px;
        color: #44A6F5;
    }
    .navActive:after {
        content: "}";
        padding: 5px;
        color: #44A6F5;
    }
</style>

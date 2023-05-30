<script>
    import {page} from "$app/stores";

    export let to;
    export let text;

    $: isActive = $page.url.pathname === to
</script>

<a href={to}>
    <span class="text-white" class:navActive="{isActive}">
        {text}
    </span>
</a>

<style lang="scss">
    .navActive {
        color: white;
    }

    .navActive:before {
        content: "{";
        padding: 5px;
        @apply text-blue-500;
    }
    .navActive:after {
        content: "}";
        padding: 5px;
        @apply text-blue-500;
    }
</style>

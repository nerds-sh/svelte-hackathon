<script>
    import "../app.css";
    import Header from '$lib/header/index.svelte'
    import Footer from '$lib/footer/index.svelte'
</script>

<div class="page">
    <Header />
    <slot />
    <Footer/>

</div>

<style>
    .page {
        background: linear-gradient(108.43deg, #0F1A2B 0.28%, #0F1A2B 100%);
    }
</style>

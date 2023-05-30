<script>
    import CurliedText from '$lib/components/curlied-text.svelte'
    import HashTag from './hashtag.svelte'
</script>

<div class="w-full flex flex-col my-40 items-center md:items-baseline">
    <CurliedText braceColor="text-white" textColor="text-blue-500">
        about us
    </CurliedText>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div class="text-5xl text-white font-bold mb-5 text-center md:text-left">
            Meet the Nerds
        </div>
        <div class="flex items-center justify-evenly flex-col md:flex-row">
            <HashTag>
                #software development
            </HashTag>
            <HashTag>
                #tech-savy
            </HashTag>
            <HashTag>
                #polyglots
            </HashTag>
        </div>
        <div class="text-white">
            We are a team of polyglots which are specialized in a wide range of technologies.
            The one thing we have in common is that we’re always ready to learn something new.
            This is what technology is all about – chasing the newest way to serve people better.
        </div>
        <div class="text-white">
            Staying true to our authenticity is important to us because, with this authenticity,
            we have constructed our common unity, represented by the space where we can develop and grow as
            individuals together and reflect it into our code, our way of working, and our way of life.
        </div>
    </div>
</div>

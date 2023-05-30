<script>
import src from "$lib/assets/fi-rr-user.svg";

export let testimonial

const className = "block w-full p-6 bg-[#FFFFFF0D] rounded-[20px]"

</script>
<div>
    <div class={className}>
        <svelte:component this={testimonial.text} />
        <div class="flex flex-row mt-4">
            <div class="block p-3 bg-blue-500 rounded-[12px] max-h-[50px]">
                <svelte:component this={src} />
            </div>
            <div class="ml-4">
                <p class="text-white">{testimonial.name}</p>
                <p class="text-blue-500">{testimonial.organization}</p>
            </div>
        </div>
    </div>
</div>
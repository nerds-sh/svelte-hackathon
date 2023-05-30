import firstText from "$lib/home/testimonials/firstText.svelte"
import secondText from "$lib/home/testimonials/secondText.svelte"
import thirdText from "$lib/home/testimonials/thirdText.svelte";
import fourthText from "$lib/home/testimonials/fourthText.svelte";
import fifthText from "$lib/home/testimonials/fifthText.svelte";
import sixthText from "$lib/home/testimonials/sixthText.svelte";
export const testimonials = [
    { text: firstText, name: 'Radu Piloiu', organization: 'ODU' },
    { text: secondText, name: 'Dragomir Draganov', organization: 'Fundraising Platform' },
    { text: thirdText, name: 'Katie Bright', organization: 'Ferry Booking Aggregator' },
    { text: fourthText, name: 'Remus Moldovan', organization: 'FlaGav' },
    { text: fifthText, name: 'Bogdan Marcu', organization: 'Okapi Dev' },
    { text: sixthText, name: 'Rahul Yadav', organization: 'Archibus' },
]
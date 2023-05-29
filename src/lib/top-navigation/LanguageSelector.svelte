<script>
    import { Button, Dropdown, DropdownItem, Chevron } from 'flowbite-svelte'
    import Language from '../assets/language.svg?component'
    export let className = "";
</script>

<Button class={`dark:text-white p-0 ${className}`}><Chevron><Language/></Chevron></Button>
<Dropdown >
    <DropdownItem>EN</DropdownItem>
    <DropdownItem>RO</DropdownItem>
</Dropdown>


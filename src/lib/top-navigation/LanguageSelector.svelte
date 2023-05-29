<script>
    import { Button, Dropdown, DropdownItem, Chevron } from 'flowbite-svelte'
    import Language from './language.svg?component'
</script>

<Button class="dark:text-white p-4" size="lg"><Chevron><Language/></Chevron></Button>
<Dropdown >
    <DropdownItem>EN</DropdownItem>
    <DropdownItem>RO</DropdownItem>
</Dropdown>


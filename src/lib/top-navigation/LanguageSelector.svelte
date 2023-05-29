<script>
    import { Button, Dropdown, DropdownItem, Chevron } from 'flowbite-svelte'
    import Language from './language.svg?component'
</script>

<Button size="lg"><Chevron><Language/></Chevron></Button>
<Dropdown >
    <DropdownItem>EN</DropdownItem>
    <DropdownItem>RO</DropdownItem>
</Dropdown>


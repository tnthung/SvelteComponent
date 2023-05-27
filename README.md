This library is built for the purpose of reducing code duplication in the
multiple projects that I work on. The components are written as generic as
possible, so that they can be used in different projects.


# Actions

1. [clickOut](#clickOut)


## clickOut

This action is used to detect if a click event is happened outside of the
element. To use this action, simply add `use:clickOut={callback}` to the
DOM element. The callback function takes no arguments and will be called
when a click event is detected outside of the element.

```svelte
<script>
  import { clickOut } from '@svelte-use/actions'
  let show = false
</script>

<button on:click={() => show = true}>Show</button>

{#if show}
  <div use:clickOut={() => show = false}>
    <p>Click outside of this element to close it</p>
  </div>
{/if}
```

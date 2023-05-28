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
  import { clickOut } from 'svelte-components'
  let show = false
</script>

<button on:click={() => show = true}>Show</button>

{#if show}
  <div use:clickOut={() => show = false}>
    <p>Click outside of this element to close it</p>
  </div>
{/if}
```


# Component

1. [Divisor](#divisor)


## Divisor

This component is used to create a simple divisor line with rounded edge.

### Props

| Name         | Type     | Default      | Description                                                  |
| ---          | ---      | ---          | ---                                                          |
| `gap?`       | `number` | `5` (in px)  | The gap between the line and the text                        |
| `color?`     | `string` | `#888`       | The color of the line                                        |
| `thickness?` | `number` | `3` (in px)  | The thickness of the line                                    |
| `direction?` | `string` | `horizontal` | The direction of the line. Can be `horizontal` or `vertical` |

```svelte
<script>
  import { Divisor } from 'svelte-components'
</script>

<Divisor />
```

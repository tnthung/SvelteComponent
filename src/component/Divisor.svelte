<script lang="ts">
  import { onMount  } from "svelte/internal";
  import { stylable } from "../common/stylable.js";


  export let gap      : number = 5;
  export let color    : string = "#888"
  export let thickness: number = 3;
  export let direction:
    | "vertical"
    | "horizontal"
    = "horizontal";


  onMount(() => {
    if (gap       < 0) gap       = 0;
    if (thickness < 1) thickness = 1;
  });
</script>


<div {...stylable($$props, "", "", `
  // dimension
  width     : ${direction === "vertical"   ? `${thickness}px` : "100%"};
  height    : ${direction === "horizontal" ? `${thickness}px` : "100%"};
  margin    : ${direction === "horizontal" ? `${gap}px 0`: `0 ${gap}px`};
  box-sizing: border-box;

  // style
  background   : ${color};
  border-radius: ${thickness}px;
`)}/>

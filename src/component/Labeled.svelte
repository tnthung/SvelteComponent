<script lang="ts">
  import { stylable } from "../util";

  type LabelPosition =
    | "top"
    | "left"
    | "right"
    | "bottom"
    | "hidden"
    ;

  export let gap     : number        = 5;
  export let label   : string        = "";
  export let position: LabelPosition = "left";

  const componentDefaultStyle = stylable(
    $$props, "", "", `
      // layout
      gap        : ${gap}px;
      display    : flex;
      flex-flow  : nowrap ${
        ["left", "right"].includes(position)
          ? "row"
          : "column"
      };
      align-items: center;
    `);

  const labelDefaultStyle = stylable(
    $$props, "label", "", `
      // layout
      order: ${["top", "left"].includes(position) ? 0 : 1};
    `);
</script>


<label {...componentDefaultStyle}>
{#if position !== "hidden"}
  <span {...labelDefaultStyle}>{ label }</span>
{/if}
  <span><slot/></span>
</label>

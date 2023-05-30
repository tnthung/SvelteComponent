<script lang="ts">
  export let color : string = "#0000";
  export let zIndex: number = 1000;
</script>


<div style:color style:zIndex><slot/></div>


<style lang="scss">
  div {
    inset    : 0;
    position : fixed;
    isolation: isolate;
  }
</style>
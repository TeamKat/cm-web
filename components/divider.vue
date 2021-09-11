<template>
  <div :class="vertical ? 'divider-wrapper-vertical ' : 'divider-wrapper-horizontal'">
    <div :class="vertical ? 'divider-vertical ' : 'divider-horizontal'"/>
  </div>
</template>

<script>
export default {
  name: "divider",
  props: {
    vertical: false
  }
}
</script>

<style scoped lang="scss">
.divider-wrapper-vertical {
  padding: 10px;
  display: inline-block;
}

.divider-wrapper-horizontal {
  padding: 10px;
}

.divider-vertical {
  background: #e8e8e8;
  width: 1px;
  height: 100%;
}

.divider-horizontal {
  background: #e8e8e8;
  height: 1px;
  width: 100%;
}
</style>

<template>
  <a :href="localePath(url)">
    <slot/>
  </a>
</template>
<script>
export default {
  name: "locale-link",
  props: {
    url: "",
  },
};
</script>
<style scoped lang="scss">
</style>

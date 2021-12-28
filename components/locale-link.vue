<template>
  <nuxt-link :to="localePath(url)">
    <slot/>
  </nuxt-link>
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

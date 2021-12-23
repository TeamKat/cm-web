<template>
  <img class="lazy-img" :src="src" alt="" loading="lazy">
</template>

<script>

export default {
  name: "lazy-img",
  props: {
    src: "",
  },
}
</script>

<style scoped lang="scss">

.lazy-img {
  background-color: #eceff5;
}
</style>

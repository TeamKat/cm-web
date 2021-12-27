<template>
  <img class="lazy-img" :src="src" alt="" loading="lazy" v-on:load="onload">
</template>

<script>

export default {
  name: "lazy-img",
  props: {
    src: "",
  },
  methods: {
    onload() {
      this.$emit('load')
    }
  }
}
</script>

<style scoped lang="scss">

.lazy-img {
  background-color: #eceff5;
}
</style>

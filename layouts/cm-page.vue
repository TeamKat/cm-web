<template>
  <div>
    <a-spin :spinning="loading"/>
    <lazy-img :src="src" v-on:load="onload" v-bind:class="loading ? '' : 'show'"/>
  </div>
</template>

<script>

import LazyImg from "@/components/lazy-img";
export default {
  name: "cm-page",
  components: {LazyImg},
  props: {
    src: "",
    showLoading: false
  },
  data() {
    return {
      loading: this.showLoading,
    }
  },
  methods: {
    onload() {
      this.loading = false
    }
  }
}
</script>

<style scoped lang="scss">
:deep .ant-spin {
  position: relative;
  background: #eceff5;
  width: 100%;
  height: 0;
  padding: 40% 0;
  margin: 5px 0;
}

.lazy-img {
  width: 100%;
  opacity: 0;
  transition: opacity 1s;
  -webkit-transition: opacity 1s;
}

.show {
  opacity: 1;
}
</style>

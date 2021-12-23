<template>
  <a-spin :spinning="loading">
    <div class="spin-content">
      <lazy-img style="width: 100%" :src="src"/>
    </div>
  </a-spin>
</template>

<script>
import LazyImg from "@/components/lazy-img";
export default {
  name: "cm-page",
  components: {LazyImg},
  props: {
    src: "",
  },
  data() {
    return {
      loading: false
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .ant-spin {
  max-height: unset !important;
}
</style>

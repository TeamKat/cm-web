<template>
  <div>
    <cm-title :title="$t('text.all_chapters')"/>
    <div class="chapter-list">
      <cp-item v-for="(item, index)  in new Array(200)" :key="index" :index="index"/>
    </div>
  </div>
</template>

<script>
import CmTitle from "@/components/cm-title";
import CpItem from "@/layouts/cp-item";

export default {
  name: "cp-list",
  components: {CpItem, CmTitle},
  props: {
    title: String,
    items: Array,
  },
}
</script>

<style scoped lang="scss">
.chapter-list {
  padding: 5px;
}
</style>

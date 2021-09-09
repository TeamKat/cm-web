<template>
  <a-row type="flex">
    <a-col v-for="(item, index)  in new Array(1)" :key="index" :xl="4" :sm="6" :xs="12">
      <cm-item :id="index"/>
    </a-col>
  </a-row>
</template>

<script>
import CmItem from "@/layouts/cm-item";

export default {
  name: "cm-list",
  components: {CmItem},
}
</script>

<style scoped lang="scss">
</style>

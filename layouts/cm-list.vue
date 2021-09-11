<template>
  <div>
    <cm-title :title="title" :total="total"/>
    <a-row type="flex">
      <a-col v-for="(item, index)  in items" :key="index" :xl="4" :sm="6" :xs="12">
        <cm-item :id="index"/>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import CmItem from "@/layouts/cm-item";
import CmTitle from "@/components/cm-title";

export default {
  name: "cm-list",
  components: {CmTitle, CmItem},
  props: {
    title: String,
    total: Number,
    items: Array,
  },
}
</script>

<style scoped lang="scss">
</style>

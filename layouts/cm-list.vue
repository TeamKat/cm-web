<template>
  <div>
    <header>
      <div class="title">{{ title }}</div>
      <div class="total">{{ total }}</div>
    </header>
    <a-row type="flex">
      <a-col v-for="(item, index)  in items" :key="index" :xl="4" :sm="6" :xs="12">
        <cm-item :id="index"/>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import CmItem from "@/layouts/cm-item";

export default {
  name: "cm-list",
  components: {CmItem},
  props: {
    title: String,
    total: Number,
    items: Array,
  },
}
</script>

<style scoped lang="scss">
header {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 18px;
  font-weight: 500;
  color: var(--color-primary);
  padding-left: 10px;
  border-left: solid 4px var(--color-theme);
  line-height: 1.25;
  align-self: center;
  text-transform: capitalize;
}

.total {
  padding: 0 5px;
  font-weight: 500;
  color: var(--color-primary);
}
</style>

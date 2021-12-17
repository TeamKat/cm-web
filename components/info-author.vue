<template>
  <span>
    <span v-for="(value, index)  in values" :key="index">
      <info-link :url="'/authors/' + value.name + '/' + value.id" :name="value.name"/>
      <span class="separation" v-if="index < values.length - 1">,</span>
    </span>
  </span>
</template>
<script>
import InfoLink from "@/components/info-link";
export default {
  name: "info-author",
  components: {InfoLink},
  props: {
    values: Array,
  },
};
</script>
<style scoped lang="scss">
.separation {
  margin-left: -0.25ex;
  margin-right: 0.5ex;
  color: var(--color-primary);
}
</style>

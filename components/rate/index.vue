<template>
  <span>
    <a-rate v-model="value" :tooltips="desc" count="10" />
    <span class="ant-rate-text">{{ desc[value - 1] }}</span>
  </span>
</template>
<script>
export default {
  data() {
    return {
      value: 5,
      desc: this.$t("text.rates"),
    };
  },
};
</script>
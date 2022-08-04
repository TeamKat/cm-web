<template>
  <span>
    <a-rate class="rate" v-model="rate" :tooltips="$t('text.rate_desc')" allow-half disabled/>
    <span class="rate-text">{{ total + ' ' + $t("text.rate_times") }}</span>
  </span>
</template>
<script>
export default {
  name: "info-rate",
  props: {
    rate: Number,
    total: Number
  },
  data() {
    return {
      rate_desc: this.$t("text.rate_desc"),
    };
  },
};
</script>
<style scoped lang="scss">
:deep(.rate) {
  font-size: 16px;

  .ant-rate-star:not(:last-child) {
    margin-right: 4px;
  }
}

.rate-text {
  font-size: 13px;
  margin-left: 4px;
}
</style>

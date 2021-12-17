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
::v-deep .rate {
  font-size: 16px;
}
.rate-text {
  font-size: 13px;
  padding: 0 8px;
}
</style>

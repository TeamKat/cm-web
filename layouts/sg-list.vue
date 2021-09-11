<template>
  <div>
    <cm-title :title="$t('text.recommend')"/>
    <a-row>
      <a-col v-for="(item, index)  in new Array(10)" :key="index" :md="24" :sm="12" :xs="24">
        <sg-item :id="index"/>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import SgItem from "@/layouts/sg-item";
import CmTitle from "@/components/cm-title";

export default {
  name: "sg-list",
  components: {CmTitle, SgItem, VueSlickCarousel},
  props: {
    items: Array,
  },
}
</script>

<style scoped lang="scss">
</style>

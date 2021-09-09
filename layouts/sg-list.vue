<template>
  <a-row>
    <a-col v-for="(item, index)  in new Array(10)" :key="index" :md="24" :sm="12" :xs="24">
      <sg-item :id="index"/>
    </a-col>
  </a-row>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import SgItem from "@/layouts/sg-item";

export default {
  name: "sg-list",
  components: {SgItem, VueSlickCarousel},
}
</script>

<style scoped lang="scss">
</style>

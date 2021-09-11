<template>
  <div>
    <cm-title :title="title" :total="total" :list-url="listUrl" :previous="previous" :next="next"/>
    <VueSlickCarousel v-bind="settings" ref="carousel">
      <cm-item v-for="(item, index)  in items" :key="index" :id="index"/>
    </VueSlickCarousel>
  </div>
</template>

<script>
import CmItem from "@/layouts/cm-item";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import CmTitle from "@/components/cm-title";

export default {
  name: "cm-slider",
  components: {CmTitle, CmItem, VueSlickCarousel},
  props: {
    title: String,
    total: Number,
    listUrl: String,
    items: Array,
  },
  data() {
    return {
      settings: {
        "arrows": false,
        "infinity": true,
        "slidesToShow": 6,
        "swipeToSlide": true,
        "autoplay": true,
        "autoplaySpeed": 3000,
        "waitForAnimate": true,
        "responsive": [
          {
            "breakpoint": 1200,
            "settings": {
              "slidesToShow": 4,
            }
          },
          {
            "breakpoint": 576,
            "settings": {
              "slidesToShow": 2,

            }
          },
        ]
      },
    }
  },
  methods: {
    previous() {
      this.$refs.carousel.prev()
    },
    next() {
      this.$refs.carousel.next()
    }
  }
}
</script>

<style scoped lang="scss">
</style>

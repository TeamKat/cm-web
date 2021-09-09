<template>
  <div>
    <header>
      <div class="title">Featured</div>
      <div class="control">
        <div class="total">84</div>
        <div class="see-all">See all</div>
        <div class="previous" @click="previous">
          <a-icon type="caret-left"/>
        </div>
        <div class="next">
          <a-icon type="caret-right" @click="next"/>
        </div>
      </div>
    </header>
    <VueSlickCarousel v-bind="settings" ref="carousel">
      <cm-item v-for="(item, index)  in new Array(8)" :key="index" :id="index"/>
    </VueSlickCarousel>
  </div>
</template>

<script>
import CmItem from "@/layouts/cm-item";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  name: "cm-slider",
  components: {CmItem, VueSlickCarousel},
  data() {
    return {
      settings: {
        "arrows": false,
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
}

.control {
  display: flex;

  .total {
    padding: 0 5px;
    font-weight: 500;
    color: var(--color-primary);
  }

  .see-all {
    padding: 2px 5px;
    margin: 0 10px;
    background: var(--color-theme);
    color: white;
    text-transform: capitalize;
    font-size: 12px;
    border-radius: 5px;
    align-self: center;
    cursor: pointer;
  }

  .next, .previous {
    cursor: pointer;

    &:hover {
      color: var(--color-theme);
    }
  }
}

.anticon {
  font-size: 16px;
  padding: 0 5px;
}
</style>

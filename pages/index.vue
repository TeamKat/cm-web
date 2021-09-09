<template>
  <main>
    <div class="home">
      <div class="container">
        <a-row>
          <a-col :lg="18" :md="16" :xs="24">
            <VueSlickCarousel v-bind="settings" class="carousel">
              <cm-item :id="1"/>
              <cm-item :id="2"/>
              <cm-item :id="3"/>
              <cm-item :id="4"/>
              <cm-item :id="5"/>
              <cm-item :id="6"/>
              <cm-item :id="7"/>
              <cm-item :id="8"/>
              <cm-item :id="6"/>
              <cm-item :id="7"/>
              <cm-item :id="8"/>
            </VueSlickCarousel>
            <a-row type="flex">
              <a-col v-for="(item, index)  in new Array(1)" :key="index" :xl="4" :sm="6" :xs="12">
                <cm-item :id="index"/>
              </a-col>
            </a-row>
          </a-col>
          <a-col :lg="6" :md="8" :xs="24">
            <div class="suggestion">
              <a-row>
                <a-col v-for="(item, index)  in new Array(1)" :key="index" :md="24" :sm="12" :xs="24">
                  <suggest-item :id="index"/>
                </a-col>
                <a-col v-for="(item, index)  in new Array(1)" :key="index" :md="24" :sm="12" :xs="24">
                  <suggest-item :id="index"/>
                </a-col>
              </a-row>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <top-bar class="top-bar"></top-bar>
  </main>
</template>

<script>
import TopBar from "@/layouts/top-bar";
import CmItem from "@/layouts/cm-item";
import SuggestItem from "@/layouts/suggest-item";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  components: {SuggestItem, CmItem, TopBar, VueSlickCarousel},
  data() {
    return {
      settings: {
        "arrows": false,
        "infinite": true,
        "slidesToShow": 6,
        "swipeToSlide": true,
        "autoplay": true,
        "autoplaySpeed": 5000,
        "waitForAnimate": false,
        // "variableWidth": true,
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
      }
    }
  },
}
</script>
<style scoped lang="scss">

.home {
  margin-top: 60px;
}

.container {
  background: white;
  margin: auto;
}

.content {
  flex-grow: 1;
  margin: 10px;
}

</style>

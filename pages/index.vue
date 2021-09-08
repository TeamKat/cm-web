<template>
  <main>
    <div class="home">
      <div class="container">
        <div class="content">
          <VueSlickCarousel v-bind="settings" style="width: 100%; max-width: 1000px">
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
            <a-col v-for="(item, index)  in new Array(12)" :key="index" :xl="4" :md="6" :sm="8" :xs="12">
              <cm-item :id="index"/>
            </a-col>
          </a-row>
        </div>
        <a-divider type="vertical"/>
        <div class="suggestion">
          <suggest-item v-for="(item, index)  in new Array(10)" :key="index" :id="index"/>
        </div>
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
        "autoplay": true,
        "slidesToScroll": 1,
        "swipeToSlide": true,
        "autoplaySpeed": 5000,
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 6,
            }
          },
          {
            "breakpoint": 992,
            "settings": {
              "slidesToShow": 4,

            }
          },
          {
            "breakpoint": 992,
            "settings": {
              "slidesToShow": 4,

            }
          },
          {
            "breakpoint": 768,
            "settings": {
              "slidesToShow": 3,

            }
          },
          {
            "breakpoint": 0,
            "settings": {
              "slidesToShow": 2,

            }
          }
        ]
      }
    }
  },
}
</script>
<style scoped lang="scss">
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
}

.container {
  display: flex;
  background: white;
  align-items: stretch;
  padding: unset;

  .ant-divider-vertical {
    height: unset;
    margin: unset;
  }
}

.content {
  flex-grow: 1;
  margin: 10px;
}

.suggestion {
  min-width: 260px;
  width: 260px;
  margin: 10px;
}
</style>

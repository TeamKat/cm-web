<template>
  <div>
    <cm-title :title="$t('text.all_chapters')"/>
    <div class="chapter-list">
      <a class="chapter" v-for="(item, index)  in new Array(200)" :key="index" :md="24" :sm="12" :xs="24">
        {{ 200 - index }}
      </a>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import SgItem from "@/layouts/sg-item";
import CmTitle from "@/components/cm-title";

export default {
  name: "cp-list",
  components: {CmTitle, SgItem, VueSlickCarousel},
  props: {
    title: String,
    items: Array,
  },
}
</script>

<style scoped lang="scss">
.chapter-list {
  padding: 5px;

  .chapter {
    background: #eceff5;
    display: inline-block;
    margin: 5px;
    padding: 5px;
    width: 50px;
    border-radius: 5px;
    text-align: center;
    color: var(--color-primary);
    transition-duration: unset;
    font-size: 13px;

    &:hover {
      color: white;
      background: var(--color-theme);
    }
  }
}
</style>

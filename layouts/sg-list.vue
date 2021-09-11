<template>
  <div>
    <cm-title :title="title"/>
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
    title: String,
    items: Array,
  },
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
  text-transform: capitalize;
}
</style>

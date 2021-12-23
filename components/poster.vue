<template>
  <div class="poster">
    <div class="image">
      <lazy-img :src="src"/>
    </div>
  </div>
</template>

<script>
import LazyImg from "@/components/lazy-img";
export default {
  name: "poster",
  components: {LazyImg},
  props: {
    src: String
  }
}
</script>

<style scoped lang="scss">


.image {
  aspect-ratio: auto 5 / 7;
  background-size: cover;
  border-radius: 5px;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: -webkit-transform .3s;
    transition: transform .3s;
  }
}
</style>

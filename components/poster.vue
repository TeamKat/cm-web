<template>
  <div class="poster">
    <div class="image">
      <img :src="src" alt=""/>
    </div>
  </div>
</template>

<script>
export default {
  name: "poster",
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
  background: #eceff5;
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

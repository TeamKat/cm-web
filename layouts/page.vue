<template>
  <main>
    <div class="home">
      <Nuxt/>
    </div>
    <top-bar class="top-bar"></top-bar>
  </main>
</template>

<script>
import TopBar from "@/layouts/top-bar";

export default {
  name: "page",
  components: {TopBar},
}
</script>

<style scoped lang="scss">
.home {
  margin-top: 64px;
}

@media screen and (max-width: 768px) {
  .home {
    margin-top: 116px;
  }
}
</style>

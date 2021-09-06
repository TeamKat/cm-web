<template>
  <main>
    <top-bar></top-bar>
    <div class="home">
      <div class="container">
        <div style="background: gray"></div>
        <div style="background: blue"></div>
      </div>
    </div>
  </main>
</template>

<script>
import TopBar from "@/layouts/top-bar";

export default {
  components: {TopBar},
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
  height: 1000px;
  background: white;
}
</style>

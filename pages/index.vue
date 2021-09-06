<template>
  <main>
    <top-bar></top-bar>
    <div class="home">
      <div class="container">
        <div class="content"></div>
        <div class="suggestion"></div>
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
  display: flex;
  background: white;
  height: 1000px;
}

.content {
  flex-grow: 1;
  background: red;
}

.suggestion {
  width: 256px;
  background: green;
}
</style>

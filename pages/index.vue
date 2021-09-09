<template>
  <main>
    <div class="home">
      <div class="container">
        <a-row>
          <a-col :lg="18" :md="16" :xs="24">
            <cm-slider/>
            <cm-list/>
          </a-col>
          <a-col :lg="6" :md="8" :xs="24">
            <sg-list/>
          </a-col>
        </a-row>
      </div>
    </div>
    <top-bar class="top-bar"></top-bar>
  </main>
</template>

<script>
import TopBar from "@/layouts/top-bar";
import SgList from "@/layouts/sg-list";
import CmSlider from "@/layouts/cm-slider";
import CmList from "@/layouts/cm-list";

export default {
  components: {CmSlider, CmList, SgList, TopBar},
}
</script>
<style scoped lang="scss">
.home {
  margin-top: 62px;
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

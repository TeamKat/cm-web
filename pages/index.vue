<template>
  <main>
    <div class="home">
      <div class="container">
        <div class="content">
          <a-row type="flex">
            <a-col v-for="item in new Array(12)" :key="item" :xl="4" :md="6" :sm="8" :xs="12">
              <cm-item/>
            </a-col>
          </a-row>
        </div>
        <a-divider type="vertical"/>
        <div class="suggestion">
          <suggest-item />
          <suggest-item />
          <suggest-item />
          <suggest-item />
          <suggest-item />
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

export default {
  components: {SuggestItem, CmItem, TopBar},
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

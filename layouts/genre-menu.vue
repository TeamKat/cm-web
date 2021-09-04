<template>
  <a-row class="layout">
    <a-col :span="8">
      col-8
    </a-col>
    <a-col :span="8">
      col-8
    </a-col>
    <a-col :span="8">
      col-8
    </a-col>
    <a-col :span="8">
      col-8
    </a-col>
    <a-col :span="8">
      col-8
    </a-col>
  </a-row>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "genre-menu",

})
</script>

<style scoped>
.layout {
  padding: 8px 12px;
  max-width: 500px;
}
</style>

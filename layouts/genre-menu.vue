<template>
  <a-row class="layout">
    <a-col v-for="genre in genres" :key="genre" :xs="{span: 12}" :sm="{span: 8}">
      <nuxt-link class="genre-item" :to="localePath(`/genre/${genre.toLowerCase()}/1`)">
        <a-icon type="caret-right"/>
        {{ genre }}
      </nuxt-link>
    </a-col>
  </a-row>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "genre-menu",
  props: {
    genres: Array
  },
})
</script>

<style scoped lang="scss">
.layout {
  padding: 8px 12px;
  max-width: 450px;
  background: #f5f7fa;
  border-radius: 4px;
  margin-top: 16px;
  opacity: 0.96;
}

.genre-item {
  margin: 8px;
  text-transform: capitalize;
  color: var(--color-primary);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  font-size: 13px;

  &:hover {
    color: var(--color-theme);
    text-decoration: underline;
  }
}
</style>

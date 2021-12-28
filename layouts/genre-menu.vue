<template>
  <a-row class="layout">
    <a-col v-for="genre in genres" :key="genre.key" :xs="12" :sm="8">
      <locale-link class="genre-item" :url="`/search/genre/${genre.key}`">
        <a-icon type="caret-right"/>
        {{ genre.name }}
      </locale-link>
    </a-col>
  </a-row>
</template>

<script>
import LocaleLink from "@/components/locale-link";
export default {
  name: "genre-menu",
  components: {LocaleLink},
  props: {
    genres: Array
  },
}
</script>

<style scoped lang="scss">
.layout {
  padding: 8px 12px;
  max-width: 450px;
  background: rgba(255, 255, 255, 0.99);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
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
  font-size: 14px;

  &:hover {
    color: var(--color-theme);
    text-decoration: underline;
  }
}
</style>

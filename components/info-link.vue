<template>
  <span>
      <a :href="url">{{ name }}</a>
  </span>
</template>
<script>
export default {
  name: "info-link",
  props: {
    url: String,
    name: String,
  },
};
</script>
<style scoped lang="scss">
a {
  text-decoration: underline;
  display: inline-block;
  font-size: 13px;
  color: var(--color-primary);
  text-transform: capitalize;

  &:hover {
    color: var(--color-theme);
  }
}
</style>

<template>
  <span>
    <locale-link :url="url"><slot/></locale-link>
  </span>
</template>
<script>
import LocaleLink from "@/components/locale-link";

export default {
  name: "info-link",
  components: {LocaleLink},
  props: {
    url: "",
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

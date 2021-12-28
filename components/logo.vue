<template>
  <locale-link url="/">
    <img class="logo" src="@/assets/images/logo.jpg" alt="logo"/>
  </locale-link>
</template>

<script>
import LocaleLink from "@/components/locale-link";
export default {
  name: "logo",
  components: {LocaleLink}
}
</script>

<style scoped lang="scss">
.logo {
  height: 64px;
}
</style>

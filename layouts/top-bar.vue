<template>
  <header class="header">
    <div class="container menu">
      <div>
        <nuxt-link :to="localePath('/')">
          <img class="logo" src="@/assets/images/logo.png" alt="logo"/>
        </nuxt-link>
        <nuxt-link class="menu-item" :to="localePath('/')">{{ $t('text.home') }}</nuxt-link>
        <a-dropdown :trigger="['click']">
          <a class="menu-item" @click="e => e.preventDefault()">{{ $t('text.genre') }}
            <a-icon type="caret-down"/>
          </a>
          <a-card slot="overlay" @click="onClick" style="margin-top: 12px">
            <genre-menu/>
          </a-card>
        </a-dropdown>
        <nuxt-link class="menu-item" :to="localePath('/most-view')">{{ $t('text.most_view') }}</nuxt-link>
      </div>
      <div class="search-wrapper">
        <a-input-search :placeholder="$t('text.search')"/>
      </div>
    </div>
  </header>
</template>
<script>
import Vue from 'vue'
import GenreMenu from "@/layouts/genre-menu";

export default Vue.extend({
  name: 'top-bar',
  components: {GenreMenu},
  methods: {
    onClick({ key }) {
      console.log(`Click on item ${key}`);
    }
  },
});
</script>

<style scoped lang="scss">

.header {
  z-index: 104;
  -webkit-box-shadow: 0 10px 5px -7px rgba(0, 0, 0, 0.09);
  box-shadow: 0 10px 5px -7px rgba(0, 0, 0, 0.09);
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu {
  display: flex;
  justify-content: space-between;
}

.search-wrapper {
  display: flex;
  align-items: center;
}

.menu-item {
  padding: 3px 12px;
  margin: 0 8px;
  display: inline-block;
  text-transform: capitalize;
  transition-duration: unset;
  color: var(--color-primary);
  border-radius: 12px;

  &:hover {
    background: var(--color-theme);
    color: #fff;
  }
}

.logo {
  margin: 16px 16px 16px 0;
  height: 28px;
}

/*::v-deep*/
::v-deep .ant-input-search .ant-input {
  background: #f5f7fa;
  border: 1px solid #eceff5;
  border-radius: 12px;

  &:focus {
    box-shadow: unset;
  }
}
</style>

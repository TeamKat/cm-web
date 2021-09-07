<template>
  <div v-bind:style="topBarStyle">
    <header class="header">
      <div class="container">
        <div>
          <nuxt-link :to="localePath('/')">
            <img class="logo" src="@/assets/images/logo.png" alt="logo"/>
          </nuxt-link>
          <nuxt-link class="menu-item" :to="localePath('/')">{{ $t('text.home') }}</nuxt-link>
          <nuxt-link class="menu-item" :to="localePath('/most-view')">{{ $t('text.most_view') }}</nuxt-link>
          <a-dropdown>
            <a class="menu-item-dropdown">{{ $t('text.genre') }}
              <a-icon type="caret-down"/>
            </a>
            <div slot="overlay">
              <genre-menu :genres="genres"/>
            </div>
          </a-dropdown>
        </div>
        <div class="search-wrapper">
          <a-input-search :placeholder="$t('text.search')"/>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
import Vue from 'vue'
import GenreMenu from "@/layouts/genre-menu";

export default Vue.extend({
  name: 'top-bar',
  components: {GenreMenu},
  data() {
    return {
      opacity: 1,
      scrollY: 0,
      genres: ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary'],
    };
  },
  computed: {
    topBarStyle: function () {
      return {
        'transition-duration': '0.3s',
        'opacity': this.opacity
      }
    }
  },
  methods: {
    handleScroll: function (event) {
      const newScrollY = window.top.scrollY
      const newOpacity = (this.opacity + (this.scrollY - newScrollY) / 120)
      if (this.opacity !== newOpacity) {
        this.opacity = (newOpacity < 0) ? 0 : (newOpacity > 1 ? 1 : newOpacity)
        this.scrollY = newScrollY
      }
      console.log(newOpacity, this.opacity)
    }
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
});
</script>

<style scoped lang="scss">

.header {
  -webkit-box-shadow: 0 10px 5px -7px rgba(0, 0, 0, 0.09);
  box-shadow: 0 10px 5px -7px rgba(0, 0, 0, 0.09);
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  float: left;
  top: 0;
  position: fixed;
  width: 100%;
}

.container {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
}

.search-wrapper {
  display: flex;
  align-items: center;
  width: 240px;
}

.menu-item, .menu-item-dropdown {
  padding: 5px 10px;
  margin: 5px;
  display: inline-block;
  text-transform: capitalize;
  //transition-duration: unset;
  //border-radius: 15px;
  color: var(--color-primary);
  font-weight: 500;

  &:hover {
    //background: var(--color-theme);
    //color: white;
    color: var(--color-theme);

  }
}

.menu-item {
  &:hover {
    text-decoration: underline;
  }
}

.logo {
  margin-right: 20px;
  height: 30px;
}

/*::v-deep*/
::v-deep .ant-input-search .ant-input {
  background: #f5f7fa;
  border: 1px solid #eceff5;
  border-radius: 12px;

  &:focus {
    box-shadow: unset;
  }
  &:hover {
    border: 1px solid #eceff5;
  }
}
</style>

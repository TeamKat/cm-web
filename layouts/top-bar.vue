<template>
  <div v-bind:style="topBarStyle">
    <header class="header">
      <div class="container">
        <a-row>
          <a-col :lg="18" :md="16" :xs="24" class="menu-pc">
            <logo/>
            <locale-link class="menu-item-first" url="/">{{ $t('text.home') }}</locale-link>
            <locale-link class="menu-item" url="/search/most-view">{{ $t('text.most_view') }}</locale-link>
            <a-dropdown>
              <a class="menu-item-dropdown">{{ $t('text.genre') }}
                <a-icon type="caret-down"/>
              </a>
              <div slot="overlay">
                <genre-menu :genres="genres"/>
              </div>
            </a-dropdown>
          </a-col>
          <a-col :lg="18" :md="16" :xs="24" class="menu-sm">
            <div class="nav">
              <a-icon type="menu"/>
            </div>
            <logo/>
            <div class="user"></div>
          </a-col>
          <a-col :lg="6" :md="8" :xs="24" class="search-col">
            <div class="search-wrapper">
              <a-input-search :placeholder="$t('text.search')"/>
            </div>
          </a-col>
        </a-row>
      </div>
    </header>
  </div>
</template>
<script>
import Vue from 'vue'
import GenreMenu from "@/layouts/genre-menu";
import Logo from "@/components/logo";
import LocaleLink from "@/components/locale-link";

export default Vue.extend({
  name: 'top-bar',
  components: {LocaleLink, Logo, GenreMenu},
  data() {
    return {
      opacity: 1,
      scrollY: 0,
      display: true,
      genres: [
        {key: 'action', name: 'Action'},
        {key: 'adventure', name: 'Adventure'},
        {key: 'animation', name: 'Animation'},
        {key: 'comedy', name: 'Comedy'},
        {key: 'crime', name: 'Crime'},
        {key: 'documentary', name: 'Documentary'}
      ],
    };
  },
  computed: {
    topBarStyle: function () {
      return {
        'transition-duration': '0.3s',
        'opacity': this.opacity,
        'display': this.display ? 'flex' : 'none'
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
      this.display = this.opacity !== 0
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
  width: 100%;
  padding: 0 10px;
}

.search-wrapper {
  padding: 10px;
}

.menu-item, .menu-item-first, .menu-item-dropdown {
  padding: 5px 10px;
  margin: 5px;
  display: inline-block;
  text-transform: capitalize;
  //transition-duration: unset;
  //border-radius: 15px;
  color: var(--color-primary);
  font-weight: 500;
  font-size: 16px;

  &:hover {
    //background: var(--color-theme);
    //color: white;
    color: var(--color-theme);

  }
}

.menu-item, .menu-item-first {
  &:hover {
    text-decoration: underline;
  }
}

.menu-item-first {
  margin-left: 20px;
}

/*:deep*/
:deep(.ant-input-search .ant-input) {
  background: #f5f7fa;
  border-radius: 12px;

  &:focus {
    box-shadow: unset;
  }
}

.search-col {
  align-self: center;
}

.menu-sm {
  display: none;
  text-align: center;
  justify-content: space-between;

  .nav {
    font-size: 30px;
    align-self: center;
    padding: 10px;
  }

  .user {
    width: 50px;
  }
}

@media screen and (max-width: 768px) {
  .menu-pc {
    display: none;
  }
  .menu-sm {
    display: flex;
  }
}
</style>

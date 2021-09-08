<template>
  <nuxt-link class="item" :to="'https://hdonline.cc/tvshows/el-dragn-return-of-a-warrior/'">

    <div class="image">
      <img
        :src="'https://placeimg.com/'+getRandomArbitrary(200, 1000) + '/'+getRandomArbitrary(200, 1000)+'/any?' + id">
    </div>
    <div class="data">
      <div>
        <nuxt-link class="name" :to="'https://hdonline.cc/tvshows/el-dragn-return-of-a-warrior/'">
          El Dragón: Return of a Warrior
        </nuxt-link>
        <div class="author">
          <nuxt-link :to="'https://hdonline.cc/tvshows/el-dragn-return-of-a-warrior/'">Lapham</nuxt-link>
          ,
          <nuxt-link :to="'https://hdonline.cc/tvshows/el-dragn-return-of-a-warrior/'">Johnson</nuxt-link>
        </div>
      </div>
      <div class="info">
        <div class="view">
          <a-icon type="read" theme="filled"/>
          12.345
        </div>
        <div class="rate">
          <a-icon type="star" theme="filled"/>
          7.3
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "suggest-item",
  props: {
    id: Number
  },
  methods: {
    getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
  }
}
</script>

<style scoped lang="scss">

.item {
  height: 100px;
  display: inline-flex;
  margin: 10px;
  background: #f5f7fa;
  border-radius: 5px;

  &:hover {
    background: #eceff5;

    img {
      transform: scale(1.1);
      -webkit-transform: scale(1.1);
    }

    .name {
      color: var(--color-theme) !important;
    }

    .view {
      .anticon {
        color: var(--color-theme);
      }
    }

    .rate {
      .anticon {
        color: #ffd600;
      }
    }
  }

  .image {
    background: #eceff5;
    overflow: hidden;
    width: 70px;
    min-width: 70px;
    border-radius: 5px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: -webkit-transform .3s;
      transition: transform .3s;
      border-radius: 5px;
    }
  }

  .data {
    flex-grow: 1;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .name {
      font-weight: 500;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      color: var(--color-primary);

      &:hover {
        color: var(--color-theme);
        text-decoration: underline;
      }
    }

    .author, .author a {
      color: var(--color-primary);
      font-size: 12px;
      display: inline-block;
      font-weight: 500;
    }

    .author a {
      &:hover {
        color: var(--color-theme);
      }
    }

    .info {
      display: flex;
      margin-top: 5px;

      .view, .rate {
        color: var(--color-primary);
        font-size: 12px;
        font-weight: 500;
      }

      .rate {
        margin-left: 15px;
      }
    }
  }
}
</style>

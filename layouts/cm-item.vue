<template>
  <div class="item">
    <nuxt-link class="poster" :to="'https://hdonline.cc/tvshows/el-dragn-return-of-a-warrior/'">
      <div class="image">
        <img src="https://image2.hdonline.cc/2019/18732/el-dragn-return-of-a-warrior_w185.jpg">
      </div>
      <div class="read">
        <a-icon type="read" theme="filled"></a-icon>
      </div>
      <div class="view">
        <a-icon type="read" theme="filled"/>
        12.345
      </div>
      <div class="rate">
        <a-icon type="star" theme="filled"/>
        7.3
      </div>
    </nuxt-link>
    <nuxt-link class="name" :to="'https://hdonline.cc/tvshows/el-dragn-return-of-a-warrior/'">
      El Dragón: Return of a Warrior
    </nuxt-link>
    <div class="author">
      <nuxt-link :to="'https://hdonline.cc/tvshows/el-dragn-return-of-a-warrior/'">
        Lapham
      </nuxt-link>,
      <nuxt-link :to="'https://hdonline.cc/tvshows/el-dragn-return-of-a-warrior/'">
        Johnson
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "cm-item"
}
</script>

<style scoped lang="scss">

.item {
  padding: 10px;

  &:hover {
    img {
      transform: scale(1.1);
      -webkit-transform: scale(1.1);
    }

    .read {
      opacity: 1 !important;
    }

    .name {
      color: var(--color-theme) !important;
    }
  }

  .poster {
    position: relative;
    display: block;

    .image {
      overflow: hidden;

      img {
        width: 100%;
        transition: -webkit-transform .3s;
        transition: transform .3s;
      }
    }

    .read {
      opacity: 0;
      transition: opacity 0.3s;
      transition: -webkit-opacity 0.3s;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;

      .anticon {
        color: rgba(255, 255, 255, 0.8);
        font-size: 30px;
      }
    }

    .view {
      position: absolute;
      top: 0;
      left: 0;
      background: var(--color-theme);
      font-size: 12px;
      color: white;
      padding: 2px 5px;

    }

    .rate {
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 12px;
      background: rgba(0, 0, 0, .8);
      color: white;
      padding: 2px 5px;

      .anticon {
        color: #ffd600;
      }
    }
  }

  .name {
    font-weight: 500;
    margin-top: 5px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    color: var(--color-primary);

    &:hover {
      color: var(--color-theme);
      text-decoration: underline;
    }
  }

  .author a {
    color: var(--color-primary);
    font-size: 12px;
    display: inline-block;
    font-weight: 500;

    &:hover {
      color: var(--color-theme);
      //text-decoration: underline;
    }
  }
}
</style>

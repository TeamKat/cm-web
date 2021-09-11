<template>
  <div class="item">
    <a class="poster-wrapper" draggable="false" :href="'/naruto/123'">
      <poster
        :src="'https://placeimg.com/'+getRandomArbitrary(200, 1000) + '/'+getRandomArbitrary(200, 1000)+'/any?' + id"/>
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
    </a>
    <a class="name" draggable="false" :href="'/naruto/123'">
      El Dragón: Return of a Warrior
    </a>
    <div class="author">
      <a draggable="false" :href="'/authors/lapham/123'">
        Lapham
      </a>,
      <a draggable="false" :href="'/authors/johnson/234'">
        Johnson
      </a>
    </div>
  </div>
</template>

<script>
import Poster from "@/components/poster";

export default {
  name: "cm-item",
  components: {Poster},
  props: {
    id: Number
  },
  data() {
    return {
      drag: false,
      click: false
    }
  },
  methods: {
    getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
  }
}
</script>

<style scoped lang="scss">
.item {
  padding: 10px;

  &:hover {
    ::v-deep .poster img {
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

  .poster-wrapper {
    position: relative;
    display: flex;

    .poster {
      width: 100%;
    }

    .read {
      opacity: 0;
      display: flex;
      transition: opacity 0.3s;
      transition: -webkit-opacity 0.3s;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      justify-content: center;
      align-items: center;
      border-radius: 5px;

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
      border-radius: 5px;

    }

    .rate {
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 12px;
      background: rgba(0, 0, 0, .8);
      color: white;
      padding: 2px 5px;
      border-radius: 5px;

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
    }
  }
}
</style>

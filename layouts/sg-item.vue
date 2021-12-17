<template>
  <div class="item">
    <div class="layout">
      <a draggable="false" :href="'https://hdonline.cc/tvshows/el-dragn-return-of-a-warrior/'">
        <div class="content">
          <poster
            :src="'https://placeimg.com/'+getRandomArbitrary(200, 1000) + '/'+getRandomArbitrary(200, 1000)+'/any?' + id"/>
          <div class="data">
            <div>
              <a class="name" draggable="false" :href="'https://hdonline.cc/tvshows/el-dragn-return-of-a-warrior/'">
                El Dragón: Return of a Warrior
              </a>
              <info-author class="author" :values="[{key: 'lapham', name: 'lapham'}, {key: 'johnson', name: 'johnson'}]"/>
            </div>
            <div class="info">
              <div class="view">
                <a-icon type="read" theme="filled"/>
                12.345
              </div>
              <div class="rate">
                <a-icon type="star" theme="filled"/>
                4.5
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import Poster from "@/components/poster";
import InfoAuthor from "@/components/info-author";

export default {
  name: "sg-item",
  components: {InfoAuthor, Poster},
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
  padding: 10px;

  .layout {
    height: 100px;
    background: #f5f7fa;
    border-radius: 5px;
    width: 100%;

    &:hover {
      background: #eceff5;

      ::v-deep .poster img {
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

    .content {
      height: 100%;
      width: 100%;
      display: inline-flex;

      .poster {
        width: 70px;
        min-width: 70px;
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

        ::v-deep .author a {
          font-size: 12px;
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

  }
}

</style>

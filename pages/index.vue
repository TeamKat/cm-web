<template>
  <main>
    <div class="home">
      <div class="container">
        <div class="content">
          <a-row type="flex">
            <a-col v-for="item in new Array(12)" :key="item" :lg="4" :md="6" :sm="8" :xs="12">
              <div class="item">
                <nuxt-link class="poster" :to="'https://hdonline.cc/tvshows/el-dragn-return-of-a-warrior/'">
                  <img src="https://image2.hdonline.cc/2019/18732/el-dragn-return-of-a-warrior_w185.jpg">
                  <div class="read">
                    <a-icon type="read" theme="filled"></a-icon>
                  </div>
                  <div class="view">12.345</div>
                  <div class="rate">
                    <a-icon type="star" theme="filled"/>
                    7.3
                  </div>
                </nuxt-link>
                <nuxt-link class="name" :to="'https://hdonline.cc/tvshows/el-dragn-return-of-a-warrior/'">
                  El Dragón: Return of a Warrior
                </nuxt-link>
                <div class="year">2019</div>
              </div>
            </a-col>
          </a-row>
        </div>
        <a-divider type="vertical"/>
        <div class="suggestion"></div>
      </div>
    </div>
    <top-bar class="top-bar"></top-bar>
  </main>
</template>

<script>
import TopBar from "@/layouts/top-bar";

export default {
  components: {TopBar},
}
</script>
<style scoped lang="scss">
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
}

.container {
  display: flex;
  background: white;
  height: 1000px;
  align-items: stretch;
  padding: unset;

  .ant-divider-vertical {
    height: unset;
    margin: unset;
  }
}

.content {
  flex-grow: 1;
  margin: 10px;

  .item {
    padding: 10px;

    .poster {
      position: relative;
      display: block;

      img {
        width: 100%;
      }

      .read {
        display: none;
      }

      &:hover {
        .read {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;

          .anticon-read {
            color: rgba(255, 255, 255, 0.8);
            font-size: 30px;
          }
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

        .anticon-star {
          color: #ffd600;
        }
      }
    }

    .name {
      font-weight: 500;
      margin-top: 10px;
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

    .year {
      color: var(--color-secondary);
      font-size: 12px;
      margin-top: 5px;
    }
  }
}

.suggestion {
  min-width: 240px;
  margin: 20px;
  background: burlywood;
  //background: green;
}
</style>

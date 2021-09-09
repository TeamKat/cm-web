<template>
  <main>
    <div class="home">
      <div class="container">
        <a-row :gutter="10">
          <a-col class="content" :lg="18" :md="16" :xs="24">
            <div class="info">
              <div class="image-wrapper">
                <div class="image">
                  <img src="https://placeimg.com/872/227/any?1">
                </div>
              </div>
              <div class="detail">
                <div class="name">Naruto</div>
              </div>
            </div>
          </a-col>
          <a-col class="suggest" :lg="6" :md="8" :xs="24">
            <divider class="suggest-divider"/>
            <sg-list :title="$t('text.recommend')" :items="new Array(8)"/>
          </a-col>
        </a-row>
      </div>
    </div>
    <top-bar class="top-bar"></top-bar>
  </main>
</template>

<script>
import TopBar from "@/layouts/top-bar";
import SgList from "@/layouts/sg-list";
import CmSlider from "@/layouts/cm-slider";
import CmList from "@/layouts/cm-list";
import Divider from "@/layouts/divider";

export default {
  components: {Divider, CmSlider, CmList, SgList, TopBar},
}
</script>
<style scoped lang="scss">
.home {
  margin-top: 64px;
}

.container {
  background: white;
  margin: auto;
}

.content {
  margin-right: -1px;
  border-right: solid 1px #e8e8e8;
}

.info {
  display: flex;

  .image-wrapper {
    padding: 10px;

    .image {
      background: #eceff5;

      img {
        width: 140px;
        height: 196px;
        object-fit: cover;
        border-radius: 5px;
      }
    }

  }

  .detail {
    padding: 10px;

    .name {
      font-size: 24px;
      font-weight: 500;
      color: var(--color-primary);
      line-height: 1;
      text-transform: capitalize;
    }
  }
}


.suggest {
  border-left: solid 1px #e8e8e8;
}

.suggest-divider {
  display: none;
}

@media screen and (max-width: 768px) {
  .home {
    margin-top: 116px;
  }
  .content {
    margin-right: unset;
    border-right: unset;
  }
  .suggest {
    border-left: unset;
  }
  .suggest-divider {
    display: block;
  }
}

</style>

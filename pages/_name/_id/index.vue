<template>
  <main>
    <div class="home">
      <div class="container">
        <a-row :gutter="10">
          <a-col class="content" :lg="18" :md="16" :xs="24">
            <div class="info">
              <poster :src="'https://placeimg.com/872/227/any?1'"/>
              <div class="detail">
                <div class="name">Naruto</div>
                <div class="author">
                  <div class="info-block">
                    <div class="title">Author:</div>
                    <a :href="'/authors/lapham/123'">
                      Lapham
                    </a>,
                    <a :href="'/authors/johnson/234'">
                      Johnson
                    </a>
                  </div>
                  <div class="info-block">
                    <div class="title">View:</div>
                    12,505
                  </div>
                </div>
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
import Divider from "@/components/divider";
import Poster from "@/components/poster";

export default {
  components: {Poster, Divider, CmSlider, CmList, SgList, TopBar},
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

  .poster {
    padding: 10px;
    width: 140px;
  }

  .detail {
    padding: 10px;

    .name {
      font-size: 30px;
      font-weight: 500;
      color: var(--color-primary);
      line-height: 1;
      text-transform: capitalize;
      margin-bottom: 10px;
    }

    .info-block {
      font-size: 13px;
      line-height: 20px;
      padding: 5px 0;
      color: var(--color-primary);
      //font-weight: 500;

      .title {
        display: inline-block;
        font-weight: bolder;
        margin-right: 5px;
      }
    }

    .author a {
      text-decoration: underline;
      display: inline-block;
      color: var(--color-primary);

      &:hover {
        color: var(--color-theme);
      }
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

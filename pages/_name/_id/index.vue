<template>
  <main>
    <div class="home">
      <div class="container">
        <a-row :gutter="10">
          <a-col class="content" :lg="18" :md="16" :xs="24">
            <div class="info-layout">
              <poster
                :src="'https://s199.imacdn.com/tt24/2020/03/11/c4a87a86026745b4_9772640cc500cbc1_27918158389142881.jpg'"/>
              <div class="detail">
                <div class="name">One Punch Man, Cú Đấm Hủy Diệt</div>
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
                  <div class="info-block">
                    <div class="title">News:</div>
                    <a :href="'/authors/johnson/234'">
                      Chapter 200
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <divider/>
            <div class="description-layout">
              <header>
                <div class="title">{{ title }}</div>
              </header>
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

  .container {
    background: white;
    margin: auto;

    .content {
      margin-right: -1px;
      border-right: solid 1px #e8e8e8;

      .info-layout {
        display: flex;

        .poster {
          padding: 10px;
          width: 160px;
        }

        .detail {
          padding: 10px;

          .name {
            font-size: 24px;
            font-weight: 500;
            color: var(--color-primary);
            line-height: 1;
            text-transform: capitalize;
            margin-bottom: 10px;
          }

          .info-block {
            font-size: 13px;
            margin-top: 5px;
            //font-weight: 500;
            color: var(--color-primary);

            .title {
              display: inline-block;
              font-weight: bolder;
              margin-right: 5px;
              //color: var(--color-primary);
            }

            a {
              text-decoration: underline;
              display: inline-block;
              color: var(--color-primary);

              &:hover {
                color: var(--color-theme);
              }
            }
          }
        }
      }

      .description-layout {

      }
    }

    .suggest {
      border-left: solid 1px #e8e8e8;

      .suggest-divider {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .home {
    margin-top: 116px;

    .container {

      .content {
        margin-right: unset;
        border-right: unset;

        .info .poster {
          width: 120px;
        }
      }

      .suggest {
        border-left: unset;

        .suggest-divider {
          display: block;
        }
      }
    }
  }
}

</style>

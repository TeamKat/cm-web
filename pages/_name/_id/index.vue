<template>
  <main>
    <div class="home">
      <div class="container">
        <a-row :gutter="10">
          <a-col class="content" :lg="18" :md="16" :xs="24">
            <div class="info-layout">
              <poster
                :src="'https://s199.imacdn.com/tt24/2020/03/11/c4a87a86026745b4_9772640cc500cbc1_27918158389142881.jpg'"
              />
              <div class="detail">
                <div class="name">Naruto</div>
                <div class="author">
                  <div class="info-block">
                    <a-icon type="user"/>
                    <div class="title">{{ $t("text.author") }}:</div>
                    <info-author :values="[{id: 123, name: 'lapham'}, {id: 234, name: 'johnson'}]"></info-author>
                  </div>
                  <div class="info-block">
                    <a-icon type="eye"/>
                    <div class="title">{{ $t("text.view") }}:</div>
                    12,505
                  </div>
                </div>
                <div class="info-block">
                  <a-icon type="fire"/>
                  <div class="title">{{ $t("text.newest") }}:</div>
                  <info-link url="/authors/johnson/234" name="Chapter 200"/>
                </div>

                <div class="info-block">
                  <a-icon type="heart"/>
                  <div class="title">{{ $t("text.rate") }}:</div>
                  <info-rate :rate="4.5" :total="120"></info-rate>
                </div>
              </div>
            </div>
            <divider/>
            <div class="description-layout">
              <cm-title :title="$t('text.description')"/>
              <div class="description">
                Onepunch-Man là một Manga thể loại siêu anh hùng với đặc trưng
                phồng tôm đấm phát chết luôn… Lol!!! Nhân vật chính trong
                Onepunch-man là Saitama, một con người mà nhìn đâu cũng thấy
                “tầm thường”, từ khuôn mặt vô hồn, cái đầu trọc lóc, cho tới thể
                hình long tong. Tuy nhiên, con người nhìn thì tầm thường này lại
                chuyên giải quyết những vấn đề hết sức bất thường. Anh thực chất
                chính là một siêu anh hùng luôn tìm kiếm cho mình một đối thủ
                mạnh. Vấn đề là, cứ mỗi lần bắt gặp một đối thủ tiềm năng, thì
                đối thủ nào cũng như đối thủ nào, chỉ ăn một đấm của anh là…
                chết luôn. Liệu rằng Onepunch-Man Saitaman có thể tìm được cho
                mình một kẻ ác dữ dằn đủ sức đấu với anh? Hãy theo bước Saitama
                trên con đường một đấm tìm đối cực kỳ hài hước của anh!!
              </div>
            </div>
            <divider/>
            <cp-list/>
            <divider/>
            <cm-slider :title="$t('text.similar')" :items="new Array(8)"/>
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
import CmTitle from "@/components/cm-title";
import CpList from "@/layouts/cp-list";
import InfoAuthor from "@/components/info-author";
import InfoLink from "@/components/info-link";
import InfoRate from "@/components/info-rate";

export default {
  components: {
    InfoRate,
    InfoLink,
    InfoAuthor,
    CpList,
    CmTitle,
    Poster,
    Divider,
    CmSlider,
    CmList,
    SgList,
    TopBar,
  },
};
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
          }
        }
      }

      .description-layout {
        .description {
          padding: 10px;
          line-height: 23px;
          color: var(--color-primary);
        }
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

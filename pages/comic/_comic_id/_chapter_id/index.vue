<template>
  <main>
    <div class="home">
      <div class="container">
        <div class="info-layout">
          <poster
            :src="'https://s199.imacdn.com/tt24/2020/03/11/c4a87a86026745b4_9772640cc500cbc1_27918158389142881.jpg'"
          />
          <div class="detail">
            <div class="name">Naruto Chapter 120</div>
            <div class="author">
              <div class="info-block">
                <a-icon type="user"/>
                <div class="title">{{ $t("text.author") }}:</div>
                <info-author
                  :values="[{key: 'lapham', name: 'lapham'}, {key: 'johnson', name: 'johnson'}]"></info-author>
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
        <divider class="description-divider"/>
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
      </div>


      <div class="container" style="background: unset; padding: unset">
        <div class="cp-control">
          <span class="previous">
            <a-icon type="caret-left"/>
          </span>
          <a-dropdown class="dropdown" placement="bottomCenter">
            <a-button>{{ 200 }}</a-button>
            <a-menu slot="overlay">
              <a-menu-item v-for="(item, index)  in new Array(200)" :key="index">
                <a target="_blank" rel="noopener noreferrer" href="/"
                >{{ 200 - index }}</a
                >
              </a-menu-item>
            </a-menu>
          </a-dropdown>
          <span class="next">
            <a-icon type="caret-right"/>
          </span>
        </div>
        <div>
          <cm-page v-for="(item, index)  in new Array(20)" :key="index"
                    :show-loading="true"
                    :src="'https://placeimg.com/'+1000 + '/'+getRandomArbitrary(200, 1000)+'/any?' + getRandomArbitrary(200, 1000)"/>
        </div>

        <div class="cp-control">
          <span class="previous">
            <a-icon type="caret-left"/>
          </span>
          <span class="next">
            <a-icon type="caret-right"/>
          </span>
        </div>
      </div>

      <div class="container">
        <cm-slider :title="$t('text.similar')" :items="new Array(8)"/>
      </div>
      <top-bar class="top-bar"></top-bar>
    </div>
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
import CmImg from "@/components/lazy-img";
import CmPage from "@/layouts/cm-page";
import LazyImg from "@/components/lazy-img";

export default {
  components: {
    LazyImg,
    CmPage,
    CmImg,
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
  head() {
    return {
      title: "Naruto Chapter 120"
    };
  },
  methods: {
    getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
  }
};
</script>
<style lang="scss">
.home {
  margin-top: 64px;

  .container {
    background: white;
    margin: auto;

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

    .suggest {
      border-left: solid 1px #e8e8e8;

      .suggest-divider {
        display: none;
      }
    }
  }

  .cp-control {
    text-align: center;
    padding: 20px;

    .next, .previous {
      cursor: pointer;
      padding: 8px 20px;
      margin: 0 10px;
      background: var(--color-theme);
      color: white;
      font-size: 12px;
      border-radius: 5px;
      align-self: center;
    }
  }
}

.ant-dropdown {
  max-height: 250px;
  overflow: auto;
}

//::-webkit-scrollbar {
//  display: none;
//}

@media screen and (max-width: 768px) {
  .home {
    margin-top: 116px;

    .container {
      .info .poster {
        width: 120px;
      }

      .description-divider, .description-layout {
        display: none;
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

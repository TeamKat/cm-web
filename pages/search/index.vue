<template>
  <div class="container">
    <a-row :gutter="10">
      <a-col class="content" :lg="18" :md="16" :xs="24">
        <cm-slider :title="$t('text.featured')" :total="84" :list-url="'/featured'" :items="new Array(8)"/>
        <divider/>
        <cm-list :title="$t('text.list')" :total="84" :items="new Array(8)"/>
      </a-col>
      <a-col class="suggest" :lg="6" :md="8" :xs="24">
        <divider class="suggest-divider"/>
        <sg-list :items="new Array(8)"/>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import SgList from "@/layouts/sg-list";
import CmSlider from "@/layouts/cm-slider";
import CmList from "@/layouts/cm-list";
import Divider from "@/components/divider";

export default {
  name: 'search',
  layout: 'page',
  components: {Divider, CmSlider, CmList, SgList},
  head() {
    return {
      title: this.$t('text.search')
    };
  }
}
</script>
<style scoped lang="scss">

.container {
  background: white;
  margin: auto;

  .content {
    margin-right: -1px;
    border-right: solid 1px #e8e8e8;
  }

  .suggest {
    border-left: solid 1px #e8e8e8;

    .suggest-divider {
      display: none;
    }
  }
}

@media screen and (max-width: 768px) {

  .container {

    .content {
      margin-right: unset;
      border-right: unset;
    }

    .suggest {
      border-left: unset;

      .suggest-divider {
        display: block;
      }
    }
  }
}

</style>

<template>
  <header>
    <div class="title">{{ title }}</div>
    <div class="control">
      <div v-if="total" class="total">{{ total }}</div>
      <nuxt-link v-if="listUrl" class="see-all" :to="localePath(listUrl)">{{ $t('text.see_all') }}</nuxt-link>
      <div v-if="previous" class="previous" @click="previous">
        <a-icon type="caret-left"/>
      </div>
      <div v-if="next" class="next" @click="next">
        <a-icon type="caret-right"/>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "cm-title",
  props: {
    title: String,
    total: Number,
    listUrl: String,
    previous: Function,
    next: Function,
  }
}
</script>

<style scoped lang="scss">
header {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 18px;
    font-weight: 500;
    color: var(--color-primary);
    padding-left: 10px;
    border-left: solid 4px var(--color-theme);
    line-height: 1.25;
    align-self: center;
    text-transform: capitalize;
  }

  .control {
    display: flex;

    .total {
      padding: 0 5px;
      font-weight: 500;
      color: var(--color-primary);
    }

    .see-all {
      padding: 2px 5px;
      margin: 0 10px;
      background: var(--color-theme);
      color: white;
      text-transform: capitalize;
      font-size: 12px;
      border-radius: 5px;
      align-self: center;
      cursor: pointer;
    }

    .next, .previous {
      cursor: pointer;

      &:hover {
        color: var(--color-theme);
      }
    }

    .anticon {
      font-size: 16px;
      padding: 0 5px;
    }
  }
}
</style>

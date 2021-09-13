<template>
  <div class="layout">
    <a-popover placement="top">
      <div slot="content">
        <div class="name">Side Story – The Path Shone By The Full Moon’s Light</div>
        <div class="info-block">
          <div class="title">{{ $t('text.view') + ':' }}</div>
          12,505
        </div>
        <div class="info-block">
          <div class="title">{{ $t('text.updated') + ':' }}</div>
          2021-05-30
        </div>
      </div>
      <a class="cp-button" :href="'/'">
        {{ 200 - index }}
      </a>
    </a-popover>
  </div>
</template>

<script>

export default {
  name: "cp-item",
  props: {
    index: Number,
    chapter: Object,
  },
}
</script>

<style scoped lang="scss">
.layout {
  display: inline-block;
  margin: 5px;

  .cp-button {
    background: #eceff5;
    display: inline-block;
    padding: 5px;
    width: 50px;
    border-radius: 5px;
    text-align: center;
    color: var(--color-primary);
    transition-duration: unset;
    font-size: 13px;

    &:hover {
      color: white;
      background: var(--color-theme);
    }
  }
}

.name {
  font-weight: 500;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: var(--color-primary);
  margin-bottom: 10px;
}

.info-block {
  font-size: 13px;
  margin-top: 5px;
  color: var(--color-primary);

  .title {
    display: inline-block;
    font-weight: 500;
    margin-right: 5px;
  }
}
</style>

<template>
  <div class="section">
    <div class="header">
      <Icon iconName="logo" type="image" />
      <Button class="header__button">
        <Icon iconName="box" @click.native="$emit('toggleCartModal')" />
        <Icon iconName="ellipse" class="header__card-indicator" />
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      console.log('@@@')
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/fonts.scss';
@import '@/assets/styles/colors.scss';
@import '@/assets/styles/extends.scss';

.section {
  @extend .card-bs;
  border-radius: 0px 0px 8px 8px;
}

.header {
  width: 1265px;
  height: 66px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__button {
    position: relative;
    background-color: $white;
    padding: 0;
    border: none;
    outline: none;
  }
  &__card-indicator {
    position: absolute;
    top: -5px;
    right: -5px;
  }
}
</style>

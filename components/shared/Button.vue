<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '@/assets/styles/colors.scss';

.btn {
  padding: 0;
  border: none;
  outline: none;
  background-color: $white;
}

.icon {
  &:hover {
    opacity: 0.9;
  }
}

.main-btn {
  height: 50px;
  width: 100%;
  background-color: $black;
  color: $white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  &:hover {
    background-color: $grey;
  }
}
</style>

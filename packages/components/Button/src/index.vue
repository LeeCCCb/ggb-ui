<template>
  <div class="ggb-button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ggb-button",
  props: {
    type: {
      type: String,
      default: "primary",
    },
  },
};
</script>

<style lang="scss" scoped>
.ggb-button {
  width: 80px;
  height: 32px;
  border-radius: 4px;
  background: #282c34;
  color: #ffffff;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

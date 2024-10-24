<template>
  <div>
    <ggb-button>按钮</ggb-button>
    <ggb-notice-bar :value="message"></ggb-notice-bar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      color: "#ff0000",
      message: "12311121311231112131123111213112311121311231112131123111213112311121311231112131",
    };
  },
  methods: {},
};
</script>

<style></style>

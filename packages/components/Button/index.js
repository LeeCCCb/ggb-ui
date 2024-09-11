import GGBButton from "./src/index.vue";

GGBButton.install = function (Vue) {
  Vue.component(GGBButton.name, GGBButton);
};

export default GGBButton;

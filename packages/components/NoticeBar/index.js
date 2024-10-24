import GGBNoticeBar from "./src/index.vue";

GGBNoticeBar.install = function (Vue) {
  Vue.component(GGBNoticeBar.name, GGBNoticeBar);
};

export default GGBNoticeBar;

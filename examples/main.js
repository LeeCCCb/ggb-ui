import Vue from "vue";
import App from "./App.vue";
import ggbui from "../packages/index";

Vue.use(ggbui)

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

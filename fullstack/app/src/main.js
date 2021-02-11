import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@schirrel/satis/dist/satis.css";
import "@/assets/style.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

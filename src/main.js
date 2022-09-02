import Vue from "vue";
import App from "@/App.vue";
import "normalize.css";

if (process.env.NODE_ENV == "development") {
  require("@/useCase.js");
}

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

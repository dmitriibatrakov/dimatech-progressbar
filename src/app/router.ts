import { createRouter, createWebHistory } from "vue-router";
import ProgressPage from "@/pages/ProgressPage.vue";
import RoundChartPage from "@/pages/RoundChartPage.vue";

export const  router = createRouter({
  routes: [{
    path: '/', component: ProgressPage
  }, {
    path: '/roundchart', component: RoundChartPage
  }],
  history: createWebHistory(),
})

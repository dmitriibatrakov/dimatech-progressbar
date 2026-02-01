import { createRouter, createWebHistory } from "vue-router";
import ProgressPage from "@/2. pages/ProgressPage.vue";
import RoundChartPage from "@/2. pages/RoundChartPage.vue";

export const  router = createRouter({
  routes: [{
    path: '/', component: ProgressPage
  }, {
    path: '/roundchart', component: RoundChartPage
  }],
  history: createWebHistory(),
})

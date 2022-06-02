import { createRouter, createWebHashHistory } from "vue-router";

import GuessView from "./views/GuessView.vue";
import PokeListView from "./views/PokeListView.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: GuessView,
      path: "/guess",
    },
    {
      component: PokeListView,
      path: "/",
    },
  ],
});

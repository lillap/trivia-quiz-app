import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "./components/HomePage.vue";
import QuizContainer from "./components/QuizContainer.vue";
import ScorePage from "./components/ScorePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/QuizContainer",
    name: "QuizContainer",
    component: QuizContainer,
  },
  {
    path: "/ScorePage",
    name: "ScorePage",
    component: ScorePage,
  },
];

const router = new VueRouter({ routes });

export default router;

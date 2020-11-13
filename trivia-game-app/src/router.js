import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from './components/HomePage.vue';
import QuizContainer from './components/QuizContainer.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: "HomePage",
        component: HomePage
    },
    {
        path: '/QuizContainer',
        name: "QuizContainer",
        component: QuizContainer
    }
]

const router = new VueRouter({ routes });

export default router;
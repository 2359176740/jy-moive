import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import center from './routes/center'
import cinema from './routes/cinema'
import films from './routes/films'

const routes = [
  {path:'/',redirect:'/films'},
  center,
  cinema,
  films,
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

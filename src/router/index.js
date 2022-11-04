import Vue from "vue";
import VueRouter from "vue-router";
import Class10 from "@/views/Class10";
import Class11 from "@/views/Class11";
import Class12 from "@/views/Class12";
import Class13 from "@/views/Class13";
import Class14 from "@/views/Class14";
import Class15 from "@/views/Class15";
import Class16 from "@/views/Class16";
import Class17 from "@/views/Class17";
import Class18 from "@/views/Class18";

Vue.use(VueRouter);

const routes = [
  {
    path: "/aula10",
    component: Class10,
  },
  {
    path: "/aula11",
    component: Class11,
  },
  {
    path: "/aula12",
    component: Class12,
  },
  {
    path: "/aula13",
    component: Class13,
  },
  {
    path: "/aula14",
    component: Class14,
  },
  {
    path: "/aula15",
    component: Class15,
  },
  {
    path: "/aula16",
    component: Class16,
  },
  {
    path: "/aula17",
    component: Class17,
  },
  {
    path: "/aula18",
    component: Class18,
  },
  {
    path: "/aula19",
    component: undefined,
  },
  {
    path: "/aula20",
    component: undefined,
  },
  {
    path: "/aula21",
    component: undefined,
  },
  {
    path: "/aula22",
    component: undefined,
  },
  {
    path: "/aula23",
    component: undefined,
  },
  {
    path: "/aula24",
    component: undefined,
  },
  {
    path: "/aula25",
    component: undefined,
  },
  {
    path: "/aula26",
    component: undefined,
  },
  {
    path: "/aula27",
    component: undefined,
  },
  {
    path: "/aula28",
    component: undefined,
  },
  {
    path: "/aula29",
    component: undefined,
  },
  {
    path: "/aula30",
    component: undefined,
  },
  {
    path: "/aula31",
    component: undefined,
  },
  {
    path: "/aula32",
    component: undefined,
  },
  {
    path: "/aula33",
    component: undefined,
  },
  {
    path: "/aula34",
    component: undefined,
  },
  {
    path: "/aula35",
    component: undefined,
  },
  {
    path: "/aula36",
    component: undefined,
  },
  {
    path: "/aula37",
    component: undefined,
  },
  {
    path: "/aula38",
    component: undefined,
  },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = new VueRouter({
  routes,
});

export default router;

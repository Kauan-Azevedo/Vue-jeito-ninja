import Vue from "vue";
import VueRouter from "vue-router";
import Class01 from "@/views/Class01";
import Class02 from "@/views/Class02";
import Class03 from "@/views/Class03";
import Class04 from "@/views/Class04";
import Class05 from "@/views/Class05";
import Class06 from "@/views/Class06";
import Class07 from "@/views/Class07";
import Class08 from "@/views/Class08";
import Class09 from "@/views/Class09";
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
    path: "/aula01",
    component: Class01,
  },
  {
    path: "/aula02",
    component: Class02,
  },
  {
    path: "/aula03",
    component: Class03,
  },
  {
    path: "/aula04",
    component: Class04,
  },
  {
    path: "/aula05",
    component: Class05,
  },
  {
    path: "/aula06",
    component: Class06,
  },
  {
    path: "/aula07",
    component: Class07,
  },
  {
    path: "/aula08",
    component: Class08,
  },
  {
    path: "/aula09",
    component: Class09,
  },
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

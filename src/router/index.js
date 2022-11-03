import Vue from 'vue'
import VueRouter from 'vue-router'
import AulaDez from '@/views/AulaDez'
import AulaOnze from '@/views/AulaOnze'
import AulaDoze from '@/views/AulaDoze'
import AulaTreze from '@/views/AulaTreze'
import AulaQuatorze from '@/views/AulaQuatorze'
import AulaQuinze from '@/views/AulaQuinze'
import AulaDezesseis from '@/views/AulaDezesseis'
import AulaDezessete from '@/views/AulaDezessete'
import AulaDezoito from '@/views/AulaDezoito'

Vue.use(VueRouter)

const routes = [
  {
    path: '/aula10',
    component: AulaDez
  },
  {
    path: '/aula11',
    component: AulaOnze
  },
  {
    path: '/aula12',
    component: AulaDoze
  },
  {
    path: '/aula13',
    component: AulaTreze
  },
  {
    path: '/aula14',
    component: AulaQuatorze
  },
  {
    path: '/aula15',
    component: AulaQuinze
  },
  {
    path: '/aula16',
    component: AulaDezesseis
  },
  {
    path: '/aula17',
    component: AulaDezessete
  },
  {
    path: '/aula18',
    component: AulaDezoito
  },
  {
    path: '/aula19',
    component: undefined
  },
  {
    path: '/aula20',
    component: undefined
  },
  {
    path: '/aula21',
    component: undefined
  },
  {
    path: '/aula22',
    component: undefined
  },
  {
    path: '/aula23',
    component: undefined
  },
  {
    path: '/aula24',
    component: undefined
  },
  {
    path: '/aula25',
    component: undefined
  },
  {
    path: '/aula26',
    component: undefined
  },
  {
    path: '/aula27',
    component: undefined
  },
  {
    path: '/aula28',
    component: undefined
  },
  {
    path: '/aula29',
    component: undefined
  },
  {
    path: '/aula30',
    component: undefined
  },
  {
    path: '/aula31',
    component: undefined
  },
  {
    path: '/aula32',
    component: undefined
  },
  {
    path: '/aula33',
    component: undefined
  },
  {
    path: '/aula34',
    component: undefined
  },
  {
    path: '/aula35',
    component: undefined
  },
  {
    path: '/aula36',
    component: undefined
  },
  {
    path: '/aula37',
    component: undefined
  },
  {
    path: '/aula38',
    component: undefined
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
]

const router = new VueRouter({
  routes
})

export default router

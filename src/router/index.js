import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// 引入 vuex
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'BMW M',
      login: false,
    },
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'BMW M',
      login: false,
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/kith',
    name: 'Kith',
    meta: {
      title: 'M4 COMPETITION X KITH',
      login: false,
    },
    component: () => import(/* webpackChunkName: "kith" */ '../views/Kith.vue'),
  },
  {
    path: '/m4',
    name: 'M4',
    meta: {
      title: 'THE ALL-NEW M4',
      login: false,
    },
    component: () => import(/* webpackChunkName: "m4" */ '../views/M4.vue'),
  },
  {
    path: '/m3',
    name: 'M3',
    meta: {
      title: 'THE ALL-NEW M3',
      login: false,
    },
    component: () => import(/* webpackChunkName: "m3" */ '../views/M3.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: 'Login',
      login: false,
    },
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      title: 'Register',
      login: false,
    },
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
  },
  {
    path: '/member',
    name: 'Member',
    meta: {
      // title: 'Member page',
      login: false,
    },
    component: () => import(/* webpackChunkName: "member" */ '../views/Member.vue'),
  },
  {
    path: '/checkout',
    name: 'Checkout',
    meta: {
      title: 'Checkout Page',
      login: false,
    },
    component: () => import(/* webpackChunkName: "checkout" */ '../views/Checkout.vue'),
  },
]

const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  // ! 若要去的頁面需要登入且使用者未登入的話
  if (to.meta.login && !StorageEvent.state.user.id) {
    // ! 就丟到 login 頁面
    next('/login')
  } else {
    next()
  }
})

router.afterEach((to) => {
  let title = ''
  if (to.name === 'Member') {
    title = store.state.user.name + ' | Member Page'
  } else {
    title = to.meta.title
  }
  document.title = title
})

export default router

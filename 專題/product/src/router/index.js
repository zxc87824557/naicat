import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首頁',
      transition: 'fade',
      login: false
    }
  },
  {
    path: '/product',
    name: 'Product',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "product" */ '../views/Product.vue'),
    meta: {
      title: '商品頁',
      transition: 'fade',
      login: false
    }
  },
  {
    path: '/size',
    name: 'Size',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "size" */ '../views/Size.vue'),
    meta: {
      title: '尺寸頁',
      transition: 'fade',
      login: false
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
    meta: {
      title: '尺寸頁',
      transition: 'fade',
      login: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      title: '會員登入',
      transition: 'fade',
      login: false
    }
  },
  {
    path: '/buy',
    name: 'Buy',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "buy" */ '../views/Buy.vue'),
    meta: {
      title: '購買流程',
      transition: 'fade',
      login: false
    }
  },
  {
    path: '/buyNeedToKnow',
    name: 'BuyNeedToKnow',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "buyNeedToKnow" */ '../views/BuyNeedToKnow.vue'),
    meta: {
      title: '購買須知',
      transition: 'fade',
      login: false
    }
  },
  {
    path: '/reg',
    name: 'Reg',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "reg" */ '../views/Reg.vue'),
    meta: {
      title: '註冊',
      transition: 'fade',
      login: false
    }
  },
  {
    path: '/back',
    name: 'Back',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "back" */ '../views/Back.vue'),
    meta: {
      title: '後臺管理',
      transition: 'fade',
      login: 'control'
    }
  },
  {
    path: '/back-product',
    name: 'Back-Product',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "back-product" */ '../views/Back-Product.vue'),
    meta: {
      title: '商品管理',
      transition: 'fade',
      login: 'control'
    }
  },
  {
    path: '/back-user',
    name: 'Back-User',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "back-user" */ '../views/Back-User.vue'),
    meta: {
      title: '後臺管理',
      transition: 'fade',
      login: 'control'
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.login !== 'control') {
    if (to.meta.login && store.state.account.length === 0) {
      next('/login')
    } else {
      next()
    }
  } else {
    if (store.state.account === 'zxc87824557') {
      next()
    } else {
      next('/login')
    }
  }
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首頁',
      transition: 'fade'
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
      transition: 'fade'
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
      transition: 'fade'
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
      transition: 'fade'
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
      transition: 'fade'
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
      transition: 'fade'
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
      transition: 'fade'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router

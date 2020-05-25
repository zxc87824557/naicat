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
      title: '首頁'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '關於'
    }
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import(/* webpackChunkName: "product" */'../views/Product.vue'),
    meta: {
      title: '商品'
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */'../views/Cart.vue'),
    meta: {
      title: '購物車'
    }
  }
]

const router = new VueRouter({
  routes
})

// 進入頁面後，設定網頁標題
// to 進去的那頁
// from 從哪頁過來
router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router

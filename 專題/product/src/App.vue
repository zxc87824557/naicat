<template lang="pug">
  #app
    b-navbar(toggleable='lg' type='light' variant='light')
      b-navbar-nav.navflex
        img.logo(src="../src/assets/shoesimg/白底貓2.png" height="100px" @click="redirect" :style="{cursor:'pointer'}")
        span.pos Hi~
          span(v-if="account.length != 0") {{ account }}
          span(v-else) 遊客
          b-button.mx-2(v-if="account.length!=0" @click="logout" variant="outline-primary") 登出
      b-collapse#nav-collapse(is-nav)
    b-navbar(toggleable='lg' type='light' variant='light')
      //- b-navbar-brand(to='/') NavBar
      font-awesome-icon#click(:icon="['fas', 'bars']" v-b-toggle.sidebar-border) Click
      b-collapse#nav-collapse(is-nav)
        b-navbar-nav.navflex
          b-nav-item.size(to='/product') 賣場商品
          b-nav-item.size(to='/size') 尺寸指南
          b-nav-item.size(to='/buy') 購買流程
          b-nav-item.size(to='/buyNeedToKnow') 購買須知
          b-nav-item.size(v-if="account === 'zxc87824557'" to='/back') 後台管理
          b-nav-item.size(to='/cart')
            font-awesome-icon.size(:icon="['fas', 'cart-plus']")
          b-nav-item.size(v-if="account.length==0" to='/login')
            font-awesome-icon.size(:icon="['fas', 'user']")
          b-nav-form
            b-form-input.mr-sm-2(size='sm' placeholder='Search' v-if='toggle')
            font-awesome-icon.ml-2.size(:icon="['fas', 'search']" @click='search' type='submit')
            //- b-button.my-2.my-sm-0(size='sm' type='submit' @click='search') Search
      b-sidebar#sidebar-border(sidebar-class='border-right border-danger').px-3.py-2
        b-navbar-nav.ml-auto
        b-nav-item(to='/product') 賣場商品
        b-nav-item(to='/size') 尺寸指南
        b-nav-item(to='/cart') 購物車
        b-nav-item(v-if="account.length==0" to='/login') 會員登入
        b-nav-item(to='/back') 後台管理
    vue-page-transition
      router-view
    #footer
      div
        b-row.mx-0
          b-col.d-flex.justify-content-center.align-items-center.bgdark
            h5.textwhite.size 奶貓鞋店歡迎光臨
            a(href="#")
              font-awesome-icon.size.textwhite.mx-2(:icon="['fab', 'line']")
              font-awesome-icon.size.textwhite.mx-2(:icon="['fab', 'facebook']")
              font-awesome-icon.size.textwhite.mx-2(:icon="['fab', 'instagram']")
          b-col.d-flex.justify-content-center.align-items-center.bgdark
            h6.textwhite.size Copyright © 2020 Naicat All rights reserved
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      toggle: false
    }
  },
  methods: {
    search () {
      this.toggle = !this.toggle
    },
    redirect () {
      this.$router.push('/')
    },
    logout () {
      this.$store.commit('logout')
      alert('已登出')
    }
  },
  computed: {
    account () {
      return this.$store.getters.account
    }
  },
  watch: {
    account: function (value) {
      return this.$store.getters.account
    }
  }
}
</script>
<style>
#click {
  display: none;
}

@media (max-width: 992px) {
  #click {
    display: inline-block;
  }
}
</style>

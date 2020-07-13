<template lang="pug">
  #app
    b-navbar(toggleable='lg' type='light' variant='light')
      b-navbar-nav.navflex
        img(src="../src/assets/shoesimg/白底貓.png" height="100px" @click="redirect" :style="{cursor:'pointer'}")
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
          b-nav-item.size(to='/cart')
            font-awesome-icon.size(:icon="['fas', 'cart-plus']")
          b-nav-item.size(to='/login')
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
        b-nav-item(to='/login') 會員登入
    vue-page-transition
      router-view
    #footer
      b-container-fluid
        b-row.mx-0
          b-col.d-flex.justify-content-center.align-items-center.bgdark
            h5.textwhite.size 奶貓鞋店歡迎光臨
          b-col.d-flex.justify-content-center.align-items-center.bgdark
            h6.textwhite.size Copyright © 2020 miniAttic All rights reserved
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

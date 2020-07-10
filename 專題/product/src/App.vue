<template lang="pug">
  #app
    b-navbar(toggleable='lg' type='light' variant='light')
      b-navbar-nav.navflex
        b-nav-item(to='/') LOGO
      b-collapse#nav-collapse(is-nav)
    b-navbar(toggleable='lg' type='light' variant='light')
      //- b-navbar-brand(to='/') NavBar
      font-awesome-icon#click(:icon="['fas', 'bars']" v-b-toggle.sidebar-border) Click
      b-collapse#nav-collapse(is-nav)
        b-navbar-nav.navflex
          b-nav-item(to='/product') 賣場商品
          b-nav-item(to='/size') 尺寸指南
          b-nav-item(to='/buy') 購買流程
          b-nav-item(to='/buyNeedToKnow') 購買須知
          b-nav-item(to='/cart')
            font-awesome-icon.size(:icon="['fas', 'cart-plus']")
          b-nav-item(to='/login')
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
      b-container
        b-row
          b-col
            h5 小閣樓私嚐手作版權所有
            h6 Copyright © 2020 miniAttic All rights reserved
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
    }
  }
}

</script>
<style>
#click{
  display: none;
}

@media (max-width:992px) {
  #click{
    display: inline-block;
  }
}
</style>

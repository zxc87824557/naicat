<template lang="pug">
  #app
    b-navbar(toggleable='lg' type='light' variant='light')
      b-navbar-brand(to='/') NavBar
      font-awesome-icon#click(:icon="['fas', 'bars']" v-b-toggle.sidebar-border) Click
      b-collapse#nav-collapse(is-nav)
        b-navbar-nav.ml-auto
          b-nav-item(to='/product') 賣場商品
          b-nav-item(to='/size') 尺寸指南
          b-nav-item(to='/cart')
            font-awesome-icon.size(:icon="['fas', 'cart-plus']")
          b-nav-item(to='/login')
            font-awesome-icon.size(:icon="['fas', 'user']")
          b-nav-form
            b-form-input.mr-sm-2(size='sm' placeholder='Search')
            b-button.my-2.my-sm-0(size='sm' type='submit') Search
      b-sidebar#sidebar-border(sidebar-class='border-right border-danger').px-3.py-2
        b-navbar-nav.ml-auto
        b-nav-item(to='/product') 賣場商品
        b-nav-item(to='/size') 尺寸指南
        b-nav-item(to='/cart') 購物車
        b-nav-item(to='/login') 會員登入
    vue-page-transition
      router-view
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      show: false
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

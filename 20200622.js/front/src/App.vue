<template lang="pug">
  #app
    b-navbar(toggleable='lg' type='dark' variant='info')
      b-container
        b-navbar-brand(to='/') 相簿
        b-navbar-toggle(target='nav-collapse')
        b-collapse#nav-collapse(is-nav)
          b-navbar-nav.ml-auto
            b-nav-item(v-if="user.length === 0" to="/login") 登入
            b-nav-item(v-if="user.length === 0" to="/reg") 註冊
            b-nav-item(v-else) 登出
    b-container
      router-view
</template>

<script>
export default {
  name: 'app',
  computed: {
    user () {
      return this.$store.getters.user
    }
  }
}
</script>

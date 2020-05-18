<template lang="pug">
  #app
    top
    #left
      Menu
      Update
    #right
      Marquee
      #content
        Main
    Footer
</template>

<script>
import top from './components/top.vue'
import Menu from './components/menu.vue'
import Update from './components/update.vue'
import Marquee from './components/marquee.vue'
import Main from './components/main.vue'
import Footer from './components/footer.vue'
export default {
  name: 'App',
  components: {
    top,
    Menu,
    Update,
    Marquee,
    Main,
    Footer
  }
}
</script>

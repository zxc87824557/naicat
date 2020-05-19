<template lang="pug">
  #app
    Top
    Marquee
    Content
    Footer
</template>

<script>
import Top from './components/Top.vue'
import Marquee from './components/Marquee.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Top,
    Marquee,
    Content,
    Footer
  }
}
</script>

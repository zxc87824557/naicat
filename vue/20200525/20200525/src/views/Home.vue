<template lang="pug">
  #home
    h1 Home
    b-form-input(v-model="textInput")
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      textInput: ''
    }
  },
  mounted () {
    // setTimeout(() => {
    //   console.log('5秒')
    // }, 5000)
  }
}
</script>

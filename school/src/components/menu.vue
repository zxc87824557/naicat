<template lang="pug">
  #menu
    h1 社團介紹
    table
      tr(v-for="(club, index) in clubs" :key="index")
        td {{ club }}
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
      clubs: ['吉他社', '熱舞社', '棒球社', '羽球社', '足球社', '童軍社']
    }
  }
}
</script>

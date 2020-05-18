<template>
  <div id="app">
    <h1>{{text}}</h1>
    <div class="cards">
    <Card v-for="(card, index) in cards" :key="index" :data="card"></Card>
    </div>
  </div>
</template>

<script>
// import元件名稱from路徑
import Card from './components/card.vue'
export default {
  data () {
    return {
      text: 'aaa',
      cards: [
        {
          img: 'https://dinbendon.kento520.tw/assets/img/res/pic/1.jpg',
          title: '太師傅'
        },
        {
          img: 'https://dinbendon.kento520.tw/assets/img/res/pic/2.jpg',
          title: '吉野烤肉飯'
        },
        {
          img: 'https://dinbendon.kento520.tw/assets/img/res/pic/3.jpg',
          title: '烤飯糰'
        },
        {
          img: 'https://dinbendon.kento520.tw/assets/img/res/pic/4.jpg',
          title: '池上飯包'
        }
      ]
    }
  },
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
// 元件用css
// h1
//   color red
</style>

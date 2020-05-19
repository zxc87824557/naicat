<template lang="pug">
  #App
    //- .container
    //-   .row
    //-     .col-3.bg-success
    //-     .col-3.bg-danger
    //-     .col-3.bg-warning
    //-     .col-3.bg-primary
    b-container
      b-row(align-h='center')
        b-col.d-flex.my-2(cols="12" md="6" lg="4" xl="3" v-for="(card, index) in cards" :key="index")
          b-card(:img-src="card.image" img-top)
            b-card-text {{ card.description }}
            b-btn(variant="primary" pill :href="card.link")
              font-awesome-icon(:icon="['fas', 'address-card']")
              |   貼文連結
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      cards: []
    }
  },
  mounted () {
    this.axios.get('https://api.kento520.tw/zack/')
      .then(result => {
        this.cards = result.data.slice(0, 10)
        console.log(this.cards)
      })
  }
}

</script>

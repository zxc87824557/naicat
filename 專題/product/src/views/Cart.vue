<template lang="pug">
  #cart
    b-container
      b-row
        b-col
          h1.text-center 購物車
          b-table(:items="cart" :fields="fields")
            template(v-slot:cell(action)="data")
              b-btn.text-danger(variant="link" @click="delCart(data.index)")
                font-awesome-icon(:icon="['fas', 'times']")
</template>

<script>
export default {
  data () {
    return {
      fields: [
        {
          key: 'src',
          label: '商品圖片'
        },
        {
          key: 'discription',
          label: '商品名稱'
        },
        {
          key: 'price',
          label: '價格'
        },
        {
          key: 'id',
          label: ''
        }
      ]
    }
  },
  computed: {
    cart () {
      return this.$store.getters.cart
    }
  },
  methods: {
    delCart (data) {
      this.$store.commit('delCart', data)
    }
  }
}
</script>

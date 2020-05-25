<template lang="pug">
  #Cart
    h1 購物車
    b-table(:items="cart" :fields="fields")
      template(v-slot:cell(action)="data")
        b-btn(variant="danger" @click="delCart(data.index)")
          font-awesome-icon(:icon="['fas', 'undo']")
          | 不買了
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      fields: [
        {
          key: 'name',
          label: '商品名'
        },
        {
          key: 'price',
          label: '價格'
        },
        {
          key: 'action',
          label: '購物車'
        }
      ]
    }
  },
  computed: {
    cart () {
      // 以 getters 取得資料
      return this.$store.getters.cart
    },
    totalPrice () {
      let price = 0
      for (const item of this.cart) {
        price += item.price
      }
      return price
    }
  },
  methods: {
    delCart (index) {
      this.$store.commit('delCart', index)
    }
  }
}
</script>

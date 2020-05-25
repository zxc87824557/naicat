<template lang="pug">
  #cart
    h1 購物車
    //- 官方不推薦直接用
    //- | {{ $store.state.cart }}
    //- | {{ $store.getters.cart }}
    b-table(:items="cart" :fields="fields")
      template(v-slot:cell(action)="data")
        b-btn(variant="danger" @click="delCart(data.index)") 移除
    h1.text-center 總共 {{ cart.length }} 個商品
    h1.text-center 總共 {{ totalPrice }} 元
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      fields: [
        {
          // json 的 key
          key: 'name',
          // 顯示文字
          label: '商品名'
        },
        {
          key: 'price',
          label: '價格'
        },
        {
          // 也可以使用不存在的 key，自己去定義內容
          key: 'action',
          label: '動作'
        }
      ]
    }
  },
  // 建議用 computed 使用 vuex 資料
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

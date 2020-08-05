<template lang="pug">
  #cart
    b-container
      b-row
        b-col
          h1 購物車
          b-table(:items="cart" :fields="fields")
            template(v-slot:cell(action)="data")
              b-btn(variant="danger" @click="delCart(data.index)") 刪除
            template(v-slot:cell(index)="data")
            template(v-slot:cell(src)="data")
              img(controls :src="data.item.src" style="width:100px")
          hr
          h3.text-center 總金額:{{ totalprice }}
          p.text-right 因時間技術關係購買後請截圖+粉專私訊
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
          key: 'name',
          label: '商品名稱'
        },
        {
          key: 'price',
          label: '價格'
        },
        {
          key: 'action',
          label: '刪除'
        }
      ]
    }
  },
  computed: {
    cart () {
      return this.$store.getters.cart
    },
    totalprice () {
      let result = 0
      for (const i of this.cart) {
        result += i.price
      }
      return result
    }
  },
  methods: {
    delCart (data) {
      this.$store.commit('delCart', data)
    }
  }
}
</script>

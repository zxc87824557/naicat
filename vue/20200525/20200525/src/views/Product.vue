<template lang="pug">
  #product
    //- items 是表格資料的陣列
    //- fields 是欄位設定陣列
    b-table(:items="products" :fields="fields" hover striped)
      template(v-slot:cell(price)="data")
        | NT$
        span.text-primary {{ data.value }}
      template(v-slot:cell(action)="data")
        b-btn(variant="success" @click="addCart(data.item)") 加入購物車
</template>

<script>
export default {
  name: 'product',
  data () {
    return {
      products: [
        {
          id: 1,
          name: 'Lenovo 9代i5雙碟電競機',
          price: 21990
        },
        {
          id: 2,
          name: 'Lenovo 15吋窄邊電競',
          price: 28990
        },
        {
          id: 3,
          name: '金士頓A400 480G',
          price: 1690
        }
      ],
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
  methods: {
    addCart (data) {
      // 呼叫 vuex 名為 addCart 的 mutations
      // 將進來 methods 的資料傳過去
      this.$store.commit('addCart', data)
    }
  }
}
</script>

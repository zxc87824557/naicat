<template lang="pug">
  #product
    h1 商品
      b-table(:items="products" :fields="fields" hover striped)
        template(v-slot:cell(price)="data")
          | NT$ {{ data.value }}
        template(v-slot:cell(action)="data")
          b-btn(variant="success" @click="addCart(data.item)")
            font-awesome-icon(:icon="['fas', 'shopping-cart']")
            | 加入購物車
</template>

<script>
export default {
  name: 'product',
  data () {
    return {
      products: [
        {
          id: 1,
          name: 'Nextbit Robin 智慧型手機(Mint)',
          price: 2990
        },
        {
          id: 2,
          name: 'OPPO AX7 Pro 摩卡紅',
          price: 11990
        },
        {
          id: 3,
          name: 'Samsung Galaxy Note10 Lite (8G/128G) 6.7吋智慧手機',
          price: 16590
        },
        {
          id: 4,
          name: 'Apple iPhone 11 Pro Max (256G)-夜幕綠(全新福利品)',
          price: 40888
        }
      ],
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
          label: '購買'
        }
      ]
    }
  },
  methods: {
    addCart (data) {
      this.$store.commit('addCart', data)
    }
  }
}
</script>

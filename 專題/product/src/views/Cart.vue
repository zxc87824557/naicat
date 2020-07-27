<template lang="pug">
  #cart
    b-container
      b-row
        b-col
          div.item_header
            div.item_detail 商品
            div.price 價格
            div.count 數量
            div.amount 總計
            div.operate 操作
          div.item_container(v-for="(item, index) in itemList" :key="item.id")
            div.item_header.item_body
              div.item_detail
                img(:src="item.src")
                div.name {{ item.itemName }}
              div.price
                span $ {{ item.price }}
              div.count
                b-button(@click="cart(item)") -
                span.mx-2 {{ item.count }}
                b-button(@click="handleplus(item)") +
              div.amount {{ item.price * item.count }}
              div.operate
                b-button(@click="delCart(data.index)") 刪除
</template>

<script>
export default {
  data () {
    return {
      // itemList: [
      //   {
      //     id: 1,
      //     src: 'shoesimg/nike/dunk-low-brazil-release-date.jpg',
      //     type: 'NIKE',
      //     discription: 'nike sb dunk-low-brazil-release-date',
      //     price: '3680',
      //     link: '/',
      //     popupActivo: false,
      //     count: '1'
      //   },
      //   {
      //     id: 2,
      //     src: 'shoesimg/nike/dunk-low-champ-colors-release-date.jpg',
      //     type: 'NIKE',
      //     discription: 'nike sb dunk-low-champ-colors',
      //     price: '3680',
      //     link: '/',
      //     popupActivo: false,
      //     count: '1'
      //   },
      //   {
      //     id: 3,
      //     src: 'shoesimg/nike/nike-x-travis-scott-air-max-270-cactus-trails-release-date.jpg',
      //     type: 'NIKE',
      //     discription: 'nike-x-travis-scott-air-max-270',
      //     price: '15000',
      //     link: '/',
      //     popupActivo: false,
      //     count: '5'
      //   },
      //   {
      //     id: 4,
      //     src: 'shoesimg/nike/Sacai x Nike LDV Waffle 藍紅 復古慢跑鞋.png',
      //     type: 'NIKE',
      //     discription: 'Sacai x Nike LDV Waffle 藍紅 復古慢跑鞋',
      //     price: '15000',
      //     link: '/',
      //     popupActivo: false,
      //     count: '1'
      //   },
      //   {
      //     id: 5,
      //     src: 'shoesimg/nike/OFF-WHITE X NIKE AIR MAX 90 “BLACK”.png',
      //     type: 'NIKE',
      //     discription: 'OFF-WHITE X NIKE AIR MAX 90 “BLACK”',
      //     price: '15000',
      //     link: '/',
      //     popupActivo: false,
      //     count: '1'
      //   },
      //   {
      //     id: 6,
      //     src: 'shoesimg/nike/Off-White x Nike Vapor Street 黑紫 釘鞋 女款.png',
      //     type: 'NIKE',
      //     discription: 'Off-White x Nike Vapor Street 黑紫 釘鞋',
      //     price: '15000',
      //     link: '/',
      //     popupActivo: false,
      //     count: '1'
      //   }
      // ]
    }
  },
  methods: {
    handleplus (item) {
      item.count++
    },
    handlesub (item) {
      if (item.count > 1) {
        item.count--
      }
    },
    delCart (data) {
      this.$store.commit('delCart', data)
    }
  },
  computed: {
    cart () {
      return this.$store.getters.cart
    }
  }
}
</script>

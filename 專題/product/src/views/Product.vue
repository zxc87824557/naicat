<template lang="pug">
  #product
    b-container#main
      b-row
        b-col(cols="4" sm="2" v-for="(item, index) in items" :key="index" @click="select(item.brand)").mb-5.p-1.d-flex.flex-wrap.justify-content-center.bg1
          b-link.items
            img(:src="item.src" :style="{objectFit: 'cover',maxWidth: '100%'}")
      b-row
        b-col(cols="3" v-for="(menu, index) in menus" :key="index" v-if="judge===menu.type").mb-5.p-1.d-flex.flex-wrap.justify-content-center.align-items-center
          img(:src="menu.src" @click="menu.popupActivo=true").mb-3.p-0.d-flex.flex-wrap.justify-content-center
          p.text-center {{ menu.discription }}
          p.text-center {{ menu.count }}
        b-col(cols="3" v-for="(menu, index) in menus" :key="index" v-if="judge==='ALL'").mb-5.p-1.d-flex.flex-wrap.justify-content-center.align-items-center
          img(:src="menu.src" @click="menu.popupActivo=true").mb-3.p-0.d-flex.flex-wrap.justify-content-center
          p.text-center {{ menu.discription }}
          p.text-center {{ menu.count }}
    vs-popup.holamundo(:active.sync="menu.popupActivo" v-for="(menu, index) in menus" :key="index")
      img(:src="menu.src" :style="{objectFit:'cover',maxWidth:'100%'}")
</template>

<script>
export default {
  data () {
    return {
      judge: 'ALL',
      menus: [
        {
          src: 'shoesimg/nike/dunk-low-brazil-release-date.jpg',
          type: 'NIKE',
          discription: 'nike sb dunk',
          count: 'NT$ 3680',
          link: '/',
          popupActivo: false
        },
        {
          src: 'shoesimg/nike/dunk-low-champ-colors-release-date.jpg',
          type: 'NIKE',
          discription: 'nike sb dunk',
          count: 'NT$ 3680',
          link: '/',
          popupActivo: false
        },
        {
          src: 'shoesimg/nike/nike-x-travis-scott-air-max-270-cactus-trails-release-date.jpg',
          type: 'NIKE',
          discription: 'nike sb dunk',
          count: 'NT$ 15000',
          link: '/',
          popupActivo: false
        },
        {
          src: 'shoesimg/nike/air-jordan-1-white-royal-release-date.jpg',
          type: 'JORDAN',
          discription: 'nike sb dunk',
          count: 'NT$ 6300',
          link: '/',
          popupActivo: false
        },
        {
          src: 'shoesimg/nike/air-jordan-5-fire-red-release-date.jpg',
          type: 'JORDAN',
          discription: 'nike sb dunk',
          count: 'NT$ 6300',
          link: '/',
          popupActivo: false
        },
        {
          src: 'shoesimg/nike/air-jordan-7-retro-se-款-Hn4sV0.jpg',
          type: 'JORDAN',
          discription: 'nike sb dunk',
          count: 'NT$ 6300',
          link: '/',
          popupActivo: false
        },
        {
          src: 'shoesimg/adidas/Adidas Yeezy Boost 700 nertia 慣性 灰橘.png',
          type: 'ADIDAS',
          discription: 'nike sb dunk',
          count: 'NT$ 8800',
          link: '/',
          popupActivo: false
        },
        {
          src: 'shoesimg/adidas/ADIDAS Yeezy Boost 700 Wave Runner.png',
          type: 'ADIDAS',
          discription: 'nike sb dunk',
          count: 'NT$ 8800',
          link: '/',
          popupActivo: false
        },
        {
          src: 'shoesimg/adidas/ALPHAEDGE 4D SPACERACE 跑鞋.jpg',
          type: 'ADIDAS',
          discription: 'nike sb dunk',
          count: 'NT$ 2980',
          link: '/',
          popupActivo: false
        },
        {
          src: 'shoesimg/new balance/new balance_灰色_M990GL5-2E楦_(美製鞋).jpg',
          type: 'NEWBALANCE',
          discription: 'nike sb dunk',
          count: 'NT$ 2980',
          link: '/',
          popupActivo: false
        },
        {
          src: 'shoesimg/new balance/new balance_白色_ML850YSF-D楦.jpg',
          type: 'NEWBALANCE',
          discription: 'nike sb dunk',
          count: 'NT$ 2980',
          link: '/',
          popupActivo: false
        },
        {
          src: 'shoesimg/new balance/new balance_米白_ML373AC2-D楦.jpg',
          type: 'NEWBALANCE',
          discription: 'nike sb dunk',
          count: 'NT$ 2980',
          link: '/',
          popupActivo: false
        },
        {
          src: 'shoesimg/vans/BIG CHECK OLD SKOOL.png',
          type: 'VANS',
          discription: 'nike sb dunk',
          count: 'NT$ 2980',
          link: '/',
          popupActivo: false
        },
        {
          src: 'shoesimg/vans/BIG CHECK OLD SKOOL.png',
          type: 'VANS',
          discription: 'nike sb dunk',
          count: 'NT$ 2980',
          link: '/',
          popupActivo: false
        },
        {
          src: 'shoesimg/vans/ULTRARANGE EXO.png',
          type: 'VANS',
          discription: 'nike sb dunk',
          count: 'NT$ 2980',
          link: '/',
          popupActivo: false
        }
      ],
      items: [
        { src: 'shoesimg/商標/ALL.png', brand: 'ALL' },
        { src: 'shoesimg/商標/nike-logo.png', brand: 'NIKE' },
        { src: 'shoesimg/商標/jordan-logo.png', brand: 'JORDAN' },
        { src: 'shoesimg/商標/adidas-logo.png', brand: 'ADIDAS' },
        { src: 'shoesimg/商標/vans-logo.png', brand: 'VANS' },
        { src: 'shoesimg/商標/newbalance-logo.png', brand: 'NEWBALANCE' }
      ]
    }
  },
  methods: {
    select (x) {
      this.judge = x
      console.log(x)
    }
  }
}
</script>

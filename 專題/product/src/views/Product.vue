<template lang="pug">
  #product
    b-container#main
      b-row
        b-col(cols="4" sm="2" v-for="item in items" @click="select(item.brand)").mb-5.p-1.d-flex.flex-wrap.justify-content-center.bg1
          b-link.items
            img(:src="item.src" :style="{objectFit: 'cover',maxWidth: '100%'}")
        b-col(cols="3" v-for="(menu, index) in menus" :key="index" v-if="judge===menu.type").mb-5.p-1.d-flex.flex-wrap.justify-content-center.align-items-center.imghover
          img(:src="menu.src" @click="menu.popupActivo=true").mb-3.p-0.d-flex.flex-wrap.justify-content-center
          p.text-center {{ menu.discription }}
          p.text-center {{ menu.count }}
        b-col(cols="3" v-for="menu in menus" v-if="judge==='ALL'").mb-5.p-1.d-flex.flex-wrap.justify-content-center.align-items-center.imghover
          img(:src="menu.src" @click="menu.popupActivo=true").mb-3.p-0.d-flex.flex-wrap.justify-content-center
          p.text-center {{ menu.discription }}
          p.text-center {{ menu.count }}
    vs-popup.holamundo(:active.sync="menu.popupActivo" v-for="menu in menus")
      img(:src="menu.src" :style="{objectFit:'cover',maxWidth:'100%'}")
      h5.text-center {{ menu.discription }}
      h3.text-center {{ menu.count }}
      h5 尺寸
      div.d-flex.flex-wrap
        b-button.mx-2.mb-2(v-for="size in sizes" variant="outline-dark" @click="e=>e.target.classList.toggle('active')" ) {{ size.us }}
        vs-input-number(color="success" v-model="number")
      div.d-flex.justify-content-center
        b-button(variant="primary") 加入購物車
</template>

<script>
export default {
  data () {
    return {
      judge: 'ALL',
      number: 1,
      isActive: true,
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
          discription: 'nike-x-travis-scott-air-max-270',
          count: 'NT$ 15000',
          link: '/',
          popupActivo: false
        },
        {
          src: 'shoesimg/nike/air-jordan-1-white-royal-release-date.jpg',
          type: 'JORDAN',
          discription: 'air jordan 1 white royal release',
          count: 'NT$ 6300',
          link: '/',
          popupActivo: false
        },
        {
          src: 'shoesimg/nike/air-jordan-5-fire-red-release-date.jpg',
          type: 'JORDAN',
          discription: 'air jordan 5 fire red release',
          count: 'NT$ 6300',
          link: '/',
          popupActivo: false
        },
        {
          src: 'shoesimg/nike/air-jordan-7-retro-se-款-Hn4sV0.jpg',
          type: 'JORDAN',
          discription: 'air jordan 7 retro',
          count: 'NT$ 6300',
          link: '/',
          popupActivo: false
        },
        {
          src: 'shoesimg/adidas/Adidas Yeezy Boost 700 nertia 慣性 灰橘.png',
          type: 'ADIDAS',
          discription: 'Adidas Yeezy Boost 700 nertia',
          count: 'NT$ 8800',
          link: '/',
          popupActivo: false
        },
        {
          src: 'shoesimg/adidas/ADIDAS Yeezy Boost 700 Wave Runner.png',
          type: 'ADIDAS',
          discription: 'ADIDAS Yeezy Boost 700 Wave',
          count: 'NT$ 8800',
          link: '/',
          popupActivo: false
        },
        {
          src: 'shoesimg/adidas/ALPHAEDGE 4D SPACERACE 跑鞋.jpg',
          type: 'ADIDAS',
          discription: 'ADIDAS ALPHAEDGE 4D SPACERACE',
          count: 'NT$ 2980',
          link: '/',
          popupActivo: false
        },
        {
          src: 'shoesimg/new balance/new balance_灰色_M990GL5-2E楦_(美製鞋).jpg',
          type: 'NEWBALANCE',
          discription: 'new balance M990',
          count: 'NT$ 2980',
          link: '/',
          popupActivo: false
        },
        {
          src: 'shoesimg/new balance/new balance_白色_ML850YSF-D楦.jpg',
          type: 'NEWBALANCE',
          discription: 'new balance ML850',
          count: 'NT$ 2980',
          link: '/',
          popupActivo: false
        },
        {
          src: 'shoesimg/new balance/new balance_米白_ML373AC2-D楦.jpg',
          type: 'NEWBALANCE',
          discription: 'new balance ML373',
          count: 'NT$ 2980',
          link: '/',
          popupActivo: false
        },
        {
          src: 'shoesimg/vans/BIG CHECK OLD SKOOL.png',
          type: 'VANS',
          discription: 'vans BIG CHECK OLD SKOOL',
          count: 'NT$ 2980',
          link: '/',
          popupActivo: false
        },
        {
          src: 'shoesimg/vans/OLD SKOOL PLATFORM.png',
          type: 'VANS',
          discription: 'vans OLD SKOOL PLATFORM',
          count: 'NT$ 2980',
          link: '/',
          popupActivo: false
        },
        {
          src: 'shoesimg/vans/ULTRARANGE EXO.png',
          type: 'VANS',
          discription: 'vans ULTRARANGE EXO',
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
      ],
      sizes: [
        { us: 'US 6' },
        { us: 'US 6.5' },
        { us: 'US 7' },
        { us: 'US 7.5' },
        { us: 'US 8' },
        { us: 'US 8.5' },
        { us: 'US 9' },
        { us: 'US 9.5' },
        { us: 'US 10' },
        { us: 'US 10.5' },
        { us: 'US 11' },
        { us: 'US 11.5' },
        { us: 'US 12' },
        { us: 'US 12.5' }
      ]
    }
  },
  methods: {
    select (x) {
      this.judge = x
      console.log(x)
    }
    // add (index) {
    // }
  }
}
</script>

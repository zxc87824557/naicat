<template lang="pug">
  #product
    b-container#main
      b-row
        //- 上面品牌選單
        b-col(cols="4" sm="2" v-for="item in items" @click="select(item.brand)").mb-5.p-1.d-flex.flex-wrap.justify-content-center.bg1
          b-link.items
            img(:src="item.src" :style="{objectFit: 'cover',maxWidth: '100%'}")
        //- 商品
        b-col(cols="3" v-if="judge===menu.type" v-for="menu in menus").mb-5.p-1.d-flex.flex-wrap.justify-content-center.align-items-center.imghover
          img(:src="menu.src" @click="menu.popupActivo=true").mb-3.p-0.d-flex.flex-wrap.justify-content-center
          p.text-center {{ menu.discription }}
          p.text-center NT${{ menu.price }}
        //- 全部商品的if
        b-col(cols="3" v-for="(menu,index) in paginatedmenus" v-if="judge==='ALL'").mb-5.p-1.d-flex.flex-wrap.justify-content-center.align-items-center.imghover
          img(:src="menu.src" @click="menu.popupActivo=true").mb-3.p-0.d-flex.flex-wrap.justify-content-center
          p.text-center {{ menu.discription }}
          p.text-center NT${{ menu.price }}
        //- 頁碼
        b-col(v-if="judge==='ALL'")
          b-pagination(v-model='currentPage' :total-rows='rows' :per-page='perPage' @change="onPageChanged" align="center" :number-of-pages="numberOfPages")
    //- popup
    vs-popup(:active.sync="menu.popupActivo" v-for="menu in menus")
      img(:src="menu.src" :style="{objectFit:'cover',maxWidth:'100%'}")
      h5.text-center {{ menu.discription }}
      h3.text-center NT${{ menu.price }}
      h5 尺寸
      div.d-flex.flex-wrap
        b-button.mx-2.mb-2(v-for="size in sizes" variant="outline-dark" @click="e=>e.target.classList.toggle('active')" ) {{ size.us }}
      div.d-flex.justify-content-center
        b-button(variant="primary" @click="addCart(menu)") 加入購物車
</template>

<script>
export default {
  data () {
    return {
      judge: 'ALL',
      isActive: true,
      menus: [
        {
          id: 1,
          src: 'shoesimg/nike/dunk-low-brazil-release-date.jpg',
          type: 'NIKE',
          discription: 'nike sb dunk-low-brazil-release-date',
          price: '3680',
          popupActivo: false
        },
        {
          id: 2,
          src: 'shoesimg/nike/dunk-low-champ-colors-release-date.jpg',
          type: 'NIKE',
          discription: 'nike sb dunk-low-champ-colors',
          price: '3680',
          popupActivo: false
        },
        {
          id: 3,
          src: 'shoesimg/nike/nike-x-travis-scott-air-max-270-cactus-trails-release-date.jpg',
          type: 'NIKE',
          discription: 'nike-x-travis-scott-air-max-270',
          price: '16000',

          popupActivo: false
        },
        {
          id: 4,
          src: 'shoesimg/nike/Sacai x Nike LDV Waffle 藍紅 復古慢跑鞋.png',
          type: 'NIKE',
          discription: 'Sacai x Nike LDV Waffle 藍紅 復古慢跑鞋',
          price: '22000',

          popupActivo: false
        },
        {
          id: 5,
          src: 'shoesimg/nike/OFF-WHITE X NIKE AIR MAX 90 “BLACK”.png',
          type: 'NIKE',
          discription: 'OFF-WHITE X NIKE AIR MAX 90 “BLACK”',
          price: '11000',

          popupActivo: false
        },
        {
          id: 6,
          src: 'shoesimg/nike/Off-White x Nike Vapor Street 黑紫 釘鞋 女款.png',
          type: 'NIKE',
          discription: 'Off-White x Nike Vapor Street 黑紫 釘鞋',
          price: '10000',
          popupActivo: false
        },
        {
          id: 7,
          src: 'shoesimg/nike/space-hippie-03-this-is-trash-release-date.jpg',
          type: 'NIKE',
          discription: 'space-hippie-03-this-is-trash-release-date',
          price: '7000',
          popupActivo: false
        },
        {
          id: 8,
          src: 'shoesimg/nike/air-jordan-1-white-royal-release-date.jpg',
          type: 'JORDAN',
          discription: 'air-jordan-1-white-royal-release-date',
          price: '6800',
          popupActivo: false
        },
        {
          id: 9,
          src: 'shoesimg/nike/air-jordan-5-fire-red-release-date.jpg',
          type: 'JORDAN',
          discription: 'air jordan 5 fire red release-date',
          price: '6300',
          popupActivo: false
        },
        {
          id: 10,
          src: 'shoesimg/nike/Travis Scott x Air Jordan 6 GS「Cactus Jack」橄欖綠.png',
          type: 'JORDAN',
          discription: 'Travis Scott x Air Jordan 6 GS「Cactus Jack」橄欖綠',
          price: '23000',
          popupActivo: false
        },
        {
          id: 11,
          src: 'shoesimg/nike/Travis Scott x Jordan 1 聯名款 倒鈎.png',
          type: 'JORDAN',
          discription: 'Travis Scott x Jordan 1 聯名款 倒鈎',
          price: '35000',
          popupActivo: false
        },
        {
          id: 12,
          src: 'shoesimg/nike/air-jordan-7-retro-se-款-Hn4sV0.jpg',
          type: 'JORDAN',
          discription: 'air-jordan-7-retro-se-款-Hn4sV0',
          price: '6300',
          popupActivo: false
        },
        {
          id: 13,
          src: 'shoesimg/adidas/CONTINENTAL 80 經典鞋.jpg',
          type: 'ADIDAS',
          discription: 'ADIDAS CONTINENTAL 80 經典鞋',
          price: '3090',
          popupActivo: false
        },
        {
          id: 14,
          src: 'shoesimg/adidas/NMD_R1 PRIMEKNIT 經典鞋.jpg',
          type: 'ADIDAS',
          discription: 'ADIDAS NMD_R1 PRIMEKNIT 經典鞋',
          price: '4000',
          popupActivo: false
        },
        {
          id: 15,
          src: 'shoesimg/adidas/ALPHAEDGE 4D SPACERACE 跑鞋.jpg',
          type: 'ADIDAS',
          discription: 'ADIDAS ALPHAEDGE 4D SPACERACE 跑鞋',
          price: '3800',
          popupActivo: false
        },
        {
          id: 16,
          src: 'shoesimg/adidas/NMD_R1 V2 經典鞋.jpg',
          type: 'ADIDAS',
          discription: 'ADIDAS NMD_R1 V2 經典鞋',
          price: '4390',
          popupActivo: false
        },
        {
          id: 17,
          src: 'shoesimg/adidas/ULTRABOOST 跑鞋.jpg',
          type: 'ADIDAS',
          discription: 'ADIDAS ULTRABOOST 跑鞋',
          price: '3400',
          popupActivo: false
        },
        {
          id: 18,
          src: 'shoesimg/adidas/ADIDAS Yeezy Boost 700 Wave Runner.png',
          type: 'ADIDAS',
          discription: 'ADIDAS Yeezy Boost 700 Wave Runner',
          price: '11000',
          popupActivo: false
        },
        {
          id: 19,
          src: 'shoesimg/adidas/Adidas Yeezy Boost 700 nertia 慣性 灰橘.png',
          type: 'ADIDAS',
          discription: 'ADIDAS Yeezy Boost 700 nertia 慣性 灰橘E',
          price: '10000',
          popupActivo: false
        },
        {
          id: 20,
          src: 'shoesimg/adidas/Yeezy Boost 350 V2 Cloud White.jpg',
          type: 'ADIDAS',
          discription: 'ADIDAS Yeezy Boost 350 V2 Cloud White',
          price: '12800',
          popupActivo: false
        },
        {
          id: 21,
          src: 'shoesimg/adidas/Yeezy Boost 700 V2 Vanta sneakers.jpg',
          type: 'ADIDAS',
          discription: 'ADIDAS Yeezy Boost 700 V2 Vanta sneakers',
          price: '9000',
          popupActivo: false
        },
        {
          id: 22,
          src: 'shoesimg/new balance/new balance_灰色_M990GL5-2E楦_(美製鞋).jpg',
          type: 'NEWBALANCE',
          discription: 'new balance M990',
          price: '7850',
          popupActivo: false
        },
        {
          id: 23,
          src: 'shoesimg/new balance/new balance_白色_ML850YSF-D楦.jpg',
          type: 'NEWBALANCE',
          discription: 'new balance ML850',
          price: '2600',
          popupActivo: false
        },
        {
          id: 24,
          src: 'shoesimg/new balance/new balance_米白_ML373AC2-D楦.jpg',
          type: 'NEWBALANCE',
          discription: 'new balance ML373',
          price: '2300',
          popupActivo: false
        },
        {
          id: 25,
          src: 'shoesimg/new balance/new balance_淺綠_MS327SFA-D楦.jpg',
          type: 'NEWBALANCE',
          discription: 'new balance MS327',
          price: '3100',
          popupActivo: false
        },
        {
          id: 26,
          src: 'shoesimg/new balance/new balance_黑色_M992BL-D楦.jpg',
          type: 'NEWBALANCE',
          discription: 'new balance M992BL',
          price: '7850',
          popupActivo: false
        },
        {
          id: 27,
          src: 'shoesimg/new balance/new balance_粉藍_WL574SUO-B楦.jpg',
          type: 'NEWBALANCE',
          discription: 'new balance WL574',
          price: '2600',
          popupActivo: false
        },
        {
          id: 28,
          src: 'shoesimg/new balance/new balance_藍色_CM997HAK-D楦.jpg',
          type: 'NEWBALANCE',
          discription: 'new balance CM997',
          price: '3200',
          popupActivo: false
        },
        {
          id: 29,
          src: 'shoesimg/vans/BIG CHECK OLD SKOOL.png',
          type: 'VANS',
          discription: 'vans BIG CHECK OLD SKOOL',
          price: '2200',
          popupActivo: false
        },
        {
          id: 30,
          src: 'shoesimg/vans/OLD SKOOL PLATFORM.png',
          type: 'VANS',
          discription: 'vans OLD SKOOL PLATFORM',
          price: '2200',
          popupActivo: false
        },
        {
          id: 31,
          src: 'shoesimg/vans/ULTRARANGE EXO.png',
          type: 'VANS',
          discription: 'vans ULTRARANGE EXO',
          price: '2200',
          popupActivo: false
        }
      ],
      paginatedmenus: this.menus,
      perPage: 12,
      currentPage: 1,
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
    },
    paginate (pageSize, pageNumber) {
      const menusToParse = this.menus
      this.paginatedmenus = menusToParse.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize)
    },
    onPageChanged (page) {
      this.paginate(this.perPage, page - 1)
    },
    addCart (data) {
      this.$store.commit('addCart', data)
    }
  },
  computed: {
    rows () {
      return this.menus.length
    },
    numberOfPages () {
      return parseInt(this.rows / this.perPage) + 1
    }
  },
  mounted () {
    this.paginate(this.perPage, 0)
  }
}
</script>

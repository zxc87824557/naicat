<template lang="pug">
  #product
    b-container#main
      b-row
        //- 上面品牌選單
        b-col(cols="4" sm="2" v-for="item in items" @click="select(item.brand)").mb-5.p-1.d-flex.flex-wrap.justify-content-center.bg1
          b-link.items
            img(:src="item.src" :style="{objectFit: 'cover',maxWidth: '100%'}")
        //- 商品
        b-col(cols="3" v-if="judge===product.brand" v-for="product in products").mb-5.p-1.d-flex.flex-wrap.justify-content-center.align-items-center.imghover
          img(:src="product.src" @click="product.popupActivo=true").mb-3.p-0.d-flex.flex-wrap.justify-content-center
          p.text-center {{ product.name }}
          p.text-center NT${{ product.price }}
        //- 全部商品的if
        b-col(cols="3" v-for="(product,index) in paginatedprodcut" v-if="judge==='ALL'").mb-5.p-1.d-flex.flex-wrap.justify-content-center.align-items-center.imghover
          img(:src="product.src" @click="product.popupActivo=true").mb-3.p-0.d-flex.flex-wrap.justify-content-center
          p.text-center {{ product.name }}
          p.text-center NT${{ product.price }}
        //- 頁碼
        b-col(v-if="judge==='ALL'").mb-5
          b-pagination(v-model='currentPage' :total-rows='rows' :per-page='perPage' @change="onPageChanged" align="center" :number-of-pages="numberOfPages")
    //- popup
    vs-popup(:active.sync="product.popupActivo" v-for="product in products")
      img(:src="product.src" :style="{objectFit:'cover',maxWidth:'100%'}")
      h5.text-center {{ product.name }}
      h3.text-center NT${{ product.price }}
      h5 尺寸
      div.d-flex.flex-wrap
        b-button.mx-2.mb-2(v-for="size in sizes" variant="outline-dark" @click="e=>e.target.classList.toggle('active')" ) {{ size.us }}
      div.d-flex.justify-content-center
        b-button(variant="primary" @click="addCart(product)") 加入購物車
</template>

<script>
export default {
  data () {
    return {
      judge: 'ALL',
      isActive: true,
      products: [
        {
          src: 'shoesimg/nike/dunk-low-brazil-release-date.jpg',
          brand: 'NIKE',
          name: 'nike sb dunk-low-brazil-release-date',
          price: 3680,
          popupActivo: false
        },
        {
          src: 'shoesimg/nike/dunk-low-champ-colors-release-date.jpg',
          brand: 'NIKE',
          name: 'nike sb dunk-low-champ-colors',
          price: 3680,
          popupActivo: false
        },
        {
          src: 'shoesimg/nike/nike-x-travis-scott-air-max-270-cactus-trails-release-date.jpg',
          brand: 'NIKE',
          name: 'nike-x-travis-scott-air-max-270',
          price: 16000,
          popupActivo: false
        },
        {
          src: 'shoesimg/nike/Sacai x Nike LDV Waffle 藍紅 復古慢跑鞋.png',
          brand: 'NIKE',
          name: 'Sacai x Nike LDV Waffle 藍紅 復古慢跑鞋',
          price: 22000,
          popupActivo: false
        },
        {
          src: 'shoesimg/nike/OFF-WHITE X NIKE AIR MAX 90 “BLACK”.png',
          brand: 'NIKE',
          name: 'OFF-WHITE X NIKE AIR MAX 90 “BLACK”',
          price: 11000,
          popupActivo: false
        },
        {
          src: 'shoesimg/nike/Off-White x Nike Vapor Street 黑紫 釘鞋 女款.png',
          brand: 'NIKE',
          name: 'Off-White x Nike Vapor Street 黑紫 釘鞋',
          price: 10000,
          popupActivo: false
        },
        {
          src: 'shoesimg/nike/space-hippie-03-this-is-trash-release-date.jpg',
          brand: 'NIKE',
          name: 'space-hippie-03-this-is-trash-release-date',
          price: 7000,
          popupActivo: false
        },
        {
          src: 'shoesimg/nike/air-jordan-1-white-royal-release-date.jpg',
          brand: 'JORDAN',
          name: 'air-jordan-1-white-royal-release-date',
          price: 6800,
          popupActivo: false
        },
        {
          src: 'shoesimg/nike/air-jordan-5-fire-red-release-date.jpg',
          brand: 'JORDAN',
          name: 'air jordan 5 fire red release-date',
          price: 6300,
          popupActivo: false
        },
        {
          src: 'shoesimg/nike/Travis Scott x Air Jordan 6 GS「Cactus Jack」橄欖綠.png',
          brand: 'JORDAN',
          name: 'Travis Scott x Air Jordan 6 GS「Cactus Jack」橄欖綠',
          price: 23000,
          popupActivo: false
        },
        {
          src: 'shoesimg/nike/Travis Scott x Jordan 1 聯名款 倒鈎.png',
          brand: 'JORDAN',
          name: 'Travis Scott x Jordan 1 聯名款 倒鈎',
          price: 35000,
          popupActivo: false
        },
        {
          src: 'shoesimg/nike/air-jordan-7-retro-se-款-Hn4sV0.jpg',
          brand: 'JORDAN',
          name: 'air-jordan-7-retro-se-款-Hn4sV0',
          price: 6300,
          popupActivo: false
        },
        {
          src: 'shoesimg/adidas/CONTINENTAL 80 經典鞋.jpg',
          brand: 'ADIDAS',
          name: 'ADIDAS CONTINENTAL 80 經典鞋',
          price: 3090,
          popupActivo: false
        },
        {
          src: 'shoesimg/adidas/NMD_R1 PRIMEKNIT 經典鞋.jpg',
          brand: 'ADIDAS',
          name: 'ADIDAS NMD_R1 PRIMEKNIT 經典鞋',
          price: 4000,
          popupActivo: false
        },
        {
          src: 'shoesimg/adidas/ALPHAEDGE 4D SPACERACE 跑鞋.jpg',
          brand: 'ADIDAS',
          name: 'ADIDAS ALPHAEDGE 4D SPACERACE 跑鞋',
          price: 3800,
          popupActivo: false
        },
        {
          src: 'shoesimg/adidas/NMD_R1 V2 經典鞋.jpg',
          brand: 'ADIDAS',
          name: 'ADIDAS NMD_R1 V2 經典鞋',
          price: 4390,
          popupActivo: false
        },
        {
          src: 'shoesimg/adidas/ULTRABOOST 跑鞋.jpg',
          brand: 'ADIDAS',
          name: 'ADIDAS ULTRABOOST 跑鞋',
          price: 3400,
          popupActivo: false
        },
        {
          src: 'shoesimg/adidas/ADIDAS Yeezy Boost 700 Wave Runner.png',
          brand: 'ADIDAS',
          name: 'ADIDAS Yeezy Boost 700 Wave Runner',
          price: 11000,
          popupActivo: false
        },
        {
          src: 'shoesimg/adidas/Adidas Yeezy Boost 700 nertia 慣性 灰橘.png',
          brand: 'ADIDAS',
          name: 'ADIDAS Yeezy Boost 700 nertia 慣性 灰橘E',
          price: 10000,
          popupActivo: false
        },
        {
          src: 'shoesimg/adidas/Yeezy Boost 350 V2 Cloud White.jpg',
          brand: 'ADIDAS',
          name: 'ADIDAS Yeezy Boost 350 V2 Cloud White',
          price: 12800,
          popupActivo: false
        },
        {
          src: 'shoesimg/adidas/Yeezy Boost 700 V2 Vanta sneakers.jpg',
          brand: 'ADIDAS',
          name: 'ADIDAS Yeezy Boost 700 V2 Vanta sneakers',
          price: 9000,
          popupActivo: false
        },
        {
          src: 'shoesimg/new balance/new balance_灰色_M990GL5-2E楦_(美製鞋).jpg',
          brand: 'NEWBALANCE',
          name: 'new balance M990',
          price: 7850,
          popupActivo: false
        },
        {
          src: 'shoesimg/new balance/new balance_白色_ML850YSF-D楦.jpg',
          brand: 'NEWBALANCE',
          name: 'new balance ML850',
          price: 2600,
          popupActivo: false
        },
        {
          src: 'shoesimg/new balance/new balance_米白_ML373AC2-D楦.jpg',
          brand: 'NEWBALANCE',
          name: 'new balance ML373',
          price: 2300,
          popupActivo: false
        },
        {
          src: 'shoesimg/new balance/new balance_淺綠_MS327SFA-D楦.jpg',
          brand: 'NEWBALANCE',
          name: 'new balance MS327',
          price: 3100,
          popupActivo: false
        },
        {
          src: 'shoesimg/new balance/new balance_黑色_M992BL-D楦.jpg',
          brand: 'NEWBALANCE',
          name: 'new balance M992BL',
          price: 7850,
          popupActivo: false
        },
        {
          src: 'shoesimg/new balance/new balance_粉藍_WL574SUO-B楦.jpg',
          brand: 'NEWBALANCE',
          name: 'new balance WL574',
          price: 2600,
          popupActivo: false
        },
        {
          src: 'shoesimg/new balance/new balance_藍色_CM997HAK-D楦.jpg',
          brand: 'NEWBALANCE',
          name: 'new balance CM997',
          price: 2300,
          popupActivo: false
        },
        {
          src: 'shoesimg/new balance/new balance_灰色_WL996WS-B楦.png',
          brand: 'NEWBALANCE',
          name: 'new balance WL996',
          price: 2500,
          popupActivo: false
        },
        {
          src: 'shoesimg/vans/BIG CHECK OLD SKOOL.png',
          brand: 'VANS',
          name: 'vans BIG CHECK OLD SKOOL',
          price: 2200,
          popupActivo: false
        },
        {
          src: 'shoesimg/vans/OLD SKOOL PLATFORM.png',
          brand: 'VANS',
          name: 'vans OLD SKOOL PLATFORM',
          price: 2200,
          popupActivo: false
        },
        {
          src: 'shoesimg/vans/ULTRARANGE EXO.png',
          brand: 'VANS',
          name: 'vans ULTRARANGE EXO',
          price: 2200,
          popupActivo: false
        }
      ],
      paginatedprodcut: this.products,
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
      const prodcutsToParse = this.products
      this.paginatedprodcut = prodcutsToParse.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize)
    },
    onPageChanged (page) {
      this.paginate(this.perPage, page - 1)
    },
    addCart (data) {
      data.popupActivo = false
      this.$store.commit('addCart', data)
    }
  },
  computed: {
    rows () {
      return this.products.length
    },
    numberOfPages () {
      return parseInt(this.rows / this.perPage) + 1
    }
  },
  mounted: function () {
    this.paginate(this.perPage, 0)
    this.axios.get('http://localhost:3000/product')
      .then(res => {
        this.product = res.data.result.map(d => {
          return {
            _id: d._id,
            name: d.name,
            price: d.price,
            count: d.count,
            brand: d.brand,
            description: d.description,
            src: process.env.VUE_APP_APIURL + '/product/' + d.image,
            popupActivo: false
          }
        })
      })
      .catch(error => {
        console.log(error.response.data.message)
      })
  }
}
</script>

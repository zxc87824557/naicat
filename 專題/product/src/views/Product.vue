<template lang="pug">
  #product
    b-container#main
      b-row
        b-col(cols="12").d-flex.flex-wrap
          b-col(cols="4" sm="2" v-for="(item,index) in product" :key="index").mb-3.p-0.d-flex.justify-content-center
            b-link(:to='item.link')
              img(:src="item.src" :style="{objectFit: 'cover',maxWidth: '100%'}")
        b-col(cols="12")
          div.imgbox(v-for="(menu, index) in menus" :key="index")
            img(:src="menu.src")
            p {{ menu.discription }}
</template>

<script>
export default {
  data () {
    return {
      menus: [{
        src: 'shoesimg/nike/dunk-low-brazil-release-date.jpg',
        type: 'NIKE',
        discription: 'nike sb dunk',
        count: 'NT$ 3680'
      },
      {
        src: 'shoesimg/nike/dunk-low-champ-colors-release-date.jpg',
        type: 'NIKE',
        discription: 'nike sb dunk',
        count: 'NT$ 3680'
      },
      {
        src: 'shoesimg/nike/nike-x-travis-scott-air-max-270-cactus-trails-release-date.jpg',
        type: 'NIKE',
        discription: 'nike sb dunk',
        count: 'NT$ 15000'
      },
      {
        src: 'shoesimg/nike/air-jordan-1-white-royal-release-date.jpg',
        type: 'JORDAN',
        discription: 'nike sb dunk',
        count: 'NT$ 6300'
      },
      {
        src: 'shoesimg/nike/air-jordan-5-fire-red-release-date.jpg',
        type: 'JORDAN',
        discription: 'nike sb dunk',
        count: 'NT$ 6300'
      },
      {
        src: 'shoesimg/nike/air-jordan-7-retro-se-款-Hn4sV0.jpg',
        type: 'JORDAN',
        discription: 'nike sb dunk',
        count: 'NT$ 6300'
      },
      {
        src: 'shoesimg/adidas/Adidas Yeezy Boost 700 nertia 慣性 灰橘.png',
        type: 'ADIDAS',
        discription: 'nike sb dunk',
        count: 'NT$ 8800'
      },
      {
        src: 'shoesimg/adidas/Adidas Yeezy Boost 700 nertia 慣性 灰橘.png',
        type: 'ADIDAS',
        discription: 'nike sb dunk',
        count: 'NT$ 8800'
      },
      {
        src: 'shoesimg/adidas/Adidas Yeezy Boost 700 nertia 慣性 灰橘.png',
        type: 'ADIDAS',
        discription: 'nike sb dunk',
        count: 'NT$ 2980'
      }
      ],
      product: [
        { src: 'https://picsum.photos/80/80/?random=1', link: '/' },
        { src: 'https://picsum.photos/80/80/?random=2', link: '/' },
        { src: 'https://picsum.photos/80/80/?random=3', link: '/' },
        { src: 'https://picsum.photos/80/80/?random=4', link: '/' },
        { src: 'https://picsum.photos/80/80/?random=5', link: '/' },
        { src: 'https://picsum.photos/80/80/?random=6', link: '/' }
      ]
    }
  }
}
</script>

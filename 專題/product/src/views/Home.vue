<template>
<div id="home">
  <div id="main" class="p-0">
    <b-row class="mx-0">
      <b-col class="p-0">
        <b-carousel
        id="carousel-1"
        :interval="4000"
        controls
        indicators
        style="text-shadow: 1px 1px 2px #333;">
          <b-carousel-slide class="w" img-src="../assets/shoesimg/輪播圖/big1.png"></b-carousel-slide>
          <b-carousel-slide class="w" img-src="../assets/shoesimg/輪播圖/big2.jpg"></b-carousel-slide>
          <b-carousel-slide class="w" img-src="../assets/shoesimg/輪播圖/big3.jpg"></b-carousel-slide>
        </b-carousel>
      </b-col>
    </b-row>
    <h1 class="text-center mt-5">最新商品</h1>
      <b-row id="news" class="mb-5 mx-0 justify-content-center">
        <b-col cols="12">
        </b-col>
          <flipbook class="flipbook" :pages='array' :singlePage='false'></flipbook>
        <!-- <b-col class="d-flex justify-content-center col-12 col-lg-3 p-0">
          <b-card
            title="Travis Scott x Air Jordan 6"
            img-src="../assets/shoesimg/nike/Travis Scott x Air Jordan 6「Cactus Jack」橄欖綠.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 mt-5">
            <b-button href="#" variant="primary" class="d-block align-middle">加入購物車</b-button>
          </b-card>
        </b-col>
        <b-col class="d-flex justify-content-center col-12 col-lg-3 p-0">
          <b-card
            title="ADIDAS Yeezy Boost 700 "
            img-src="../assets/shoesimg/adidas/ADIDAS Yeezy Boost 700 Wave Runner.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 mt-5">
            <b-button href="#" variant="primary" class="d-block align-middle">加入購物車</b-button>
          </b-card>
        </b-col>
        <b-col class="d-flex justify-content-center col-12 col-lg-3 p-0">
          <b-card
            title="ADIDAS YEEZY BOOST 350 V2 "
            img-src="../assets/shoesimg/adidas/ADIDAS YEEZY BOOST 350 V2 GID GLOW 螢光.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 mt-5">
            <b-button href="#" variant="primary" class="d-block align-middle">加入購物車</b-button>
          </b-card>
        </b-col>
        <b-col class="d-flex justify-content-center col-12 col-lg-3 p-0">
          <b-card
            title="Travis Scott x Air Jordan 1 High 倒鉤"
            img-src="../assets/shoesimg/nike/Travis Scott x Jordan 1 聯名款 倒鈎.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 mt-5">
            <b-button href="#" variant="primary" class="d-block align-middle">加入購物車</b-button>
          </b-card>
        </b-col> -->
      </b-row>
            <vue-marquee style="height:200px" :showProgress="false" class="marquee" :duration="8000">
        <vue-marquee-slide>
          <img src="../assets/shoesimg/nike/dunk-low-brazil-release-date.jpg" class="marquee-img">
        </vue-marquee-slide>
        <vue-marquee-slide>
          <img src="../assets/shoesimg/nike/air-jordan-5-fire-red-release-date.jpg" class="marquee-img">
        </vue-marquee-slide>
        <vue-marquee-slide>
          <img src="../assets/shoesimg/nike/air-jordan-7-retro-se-款-Hn4sV0.jpg" class="marquee-img">
        </vue-marquee-slide>
        <vue-marquee-slide>
          <img src="../assets/shoesimg/nike/dunk-low-champ-colors-release-date.jpg" class="marquee-img">
        </vue-marquee-slide>
        <vue-marquee-slide>
          <img src="../assets/shoesimg/nike/air-jordan-1-white-royal-release-date.jpg" class="marquee-img">
        </vue-marquee-slide>
        <vue-marquee-slide>
          <img src="../assets/shoesimg/nike/nike-x-travis-scott-air-max-270-cactus-trails-release-date.jpg" class="marquee-img">
        </vue-marquee-slide>
        <vue-marquee-slide>
          <img src="../assets/shoesimg/nike/dunk-low-brazil-release-date.jpg" class="marquee-img">
        </vue-marquee-slide>
        <vue-marquee-slide>
          <img src="../assets/shoesimg/nike/air-jordan-5-fire-red-release-date.jpg" class="marquee-img">
        </vue-marquee-slide>
        <vue-marquee-slide>
          <img src="../assets/shoesimg/nike/air-jordan-7-retro-se-款-Hn4sV0.jpg" class="marquee-img">
        </vue-marquee-slide>
        <vue-marquee-slide>
          <img src="../assets/shoesimg/nike/dunk-low-champ-colors-release-date.jpg" class="marquee-img">
        </vue-marquee-slide>
        <vue-marquee-slide>
          <img src="../assets/shoesimg/nike/air-jordan-1-white-royal-release-date.jpg" class="marquee-img">
        </vue-marquee-slide>
        <vue-marquee-slide>
          <img src="../assets/shoesimg/nike/nike-x-travis-scott-air-max-270-cactus-trails-release-date.jpg" class="marquee-img">
        </vue-marquee-slide>
      </vue-marquee>
      <div id="zen-preamble" class="mr-0">
        <a href="#" class="bg d-flex col-12 col-md-6"><h3>限量商品</h3></a>
        <a href="#" class="bg1 d-flex col-12 col-md-6"><h3>一般商品</h3></a>
      </div>
  </div>
</div>
</template>

<script>
import Flipbook from 'flipbook-vue'
import { Marquee, Slide } from 'vue-marquee-component'
export default {
  components: {
    [Marquee.name]: Marquee,
    [Slide.name]: Slide,
    Flipbook
  },
  data () {
    return {
      array: [
        '',
        'https://cdna.artstation.com/p/assets/images/images/028/613/226/large/michal-sawtyruk-sketch-134-plaza.jpg?1594970869',
        'https://cdnb.artstation.com/p/assets/images/images/028/576/283/large/james-w-cain-autumn-1.jpg?1594858559',
        'https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg',
        'https://gc.meepcloud.com/meepshop/36b610b1-13ec-4e07-8f12-97130c4096fa/files/cd3dcd20-c44f-4e1a-b12c-52152f4c3855.jpeg?w=960'
      ]
    }
  }
}
</script>

<style>
  .flipbook {
    width: 200%;
    height: 60vh;
  }
</style>

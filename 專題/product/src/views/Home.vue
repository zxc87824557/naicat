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
        <b-col cols="12" class="d-flex justify-content-center align-items-center">
          <flipbook class="flipbook" style="left: 1px; top: 0px; width: 956px; height: 717px; cursor: zoom-in;" :pages='array' :singlePage='false'></flipbook>
        </b-col>
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
        <router-link to="/product" class="bg d-flex col-12 col-md-6"><h3>限量商品</h3></router-link>
        <router-link to="/product" class="bg1 d-flex col-12 col-md-6"><h3>一般商品</h3></router-link>
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
        'shoesimg/nike/air-jordan-1-white-royal-release-date.jpg',
        'shoesimg/nike/nike-x-travis-scott-air-max-270-cactus-trails-release-date.jpg',
        'shoesimg/nike/dunk-low-champ-colors-release-date.jpg',
        'shoesimg/nike/dunk-low-brazil-release-date.jpg',
        'shoesimg/nike/OFF-WHITE X NIKE AIR MAX 90 “BLACK”.png',
        'shoesimg/nike/Off-White x Nike Vapor Street 黑紫 釘鞋 女款.png',
        'shoesimg/nike/Sacai x Nike LDV Waffle 藍紅 復古慢跑鞋.png',
        'shoesimg/nike/space-hippie-03-this-is-trash-release-date.jpg',
        'shoesimg/nike/Travis Scott x Air Jordan 6 GS「Cactus Jack」橄欖綠.png',
        'shoesimg/nike/Travis Scott x Jordan 1 聯名款 倒鈎.png'
      ]
    }
  }
}
</script>

<style>
  .flipbook {
    height: 60vh;
  }
</style>

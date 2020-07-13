<template>
<div id="home">
  <b-container-fulid id="main" class="p-0">
    <b-row class="mx-0">
      <b-col class="p-0">
        <b-carousel
        id="carousel-1"
        v-model="slide"
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
      <b-row id="news" class="mb-5 mx-0 justify-content-around">
        <b-col class="d-flex justify-content-center col-12 col-lg-3 p-0">
          <b-card
            title="Travis Scott x Air Jordan 6"
            img-src="../assets/shoesimg/nike/Travis Scott x Air Jordan 6「Cactus Jack」橄欖綠.png"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 mt-5">
            <b-button href="#" variant="primary" class=" align-middle">加入購物車</b-button>
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
        </b-col>
      </b-row>
            <vue-marquee style="height:200px" :showProgress="false" class="marquee" :duration="8000">
        <vue-marquee-slide v-for="i in 1" :key="i">
          <img src="../assets/shoesimg/nike/dunk-low-brazil-release-date.jpg" class="marquee-img">
        </vue-marquee-slide>
        <vue-marquee-slide v-for="i in 1" :key="i">
          <img src="../assets/shoesimg/nike/air-jordan-5-fire-red-release-date.jpg" class="marquee-img">
        </vue-marquee-slide>
        <vue-marquee-slide v-for="i in 1" :key="i">
          <img src="../assets/shoesimg/nike/air-jordan-7-retro-se-款-Hn4sV0.jpg" class="marquee-img">
        </vue-marquee-slide>
        <vue-marquee-slide v-for="i in 1" :key="i">
          <img src="../assets/shoesimg/nike/dunk-low-champ-colors-release-date.jpg" class="marquee-img">
        </vue-marquee-slide>
        <vue-marquee-slide v-for="i in 1" :key="i">
          <img src="../assets/shoesimg/nike/air-jordan-1-white-royal-release-date.jpg" class="marquee-img">
        </vue-marquee-slide>
        <vue-marquee-slide v-for="i in 1" :key="i">
          <img src="../assets/shoesimg/nike/nike-x-travis-scott-air-max-270-cactus-trails-release-date.jpg" class="marquee-img">
        </vue-marquee-slide>
        <vue-marquee-slide v-for="i in 1" :key="i">
          <img src="../assets/shoesimg/nike/dunk-low-brazil-release-date.jpg" class="marquee-img">
        </vue-marquee-slide>
        <vue-marquee-slide v-for="i in 1" :key="i">
          <img src="../assets/shoesimg/nike/air-jordan-5-fire-red-release-date.jpg" class="marquee-img">
        </vue-marquee-slide>
        <vue-marquee-slide v-for="i in 1" :key="i">
          <img src="../assets/shoesimg/nike/air-jordan-7-retro-se-款-Hn4sV0.jpg" class="marquee-img">
        </vue-marquee-slide>
        <vue-marquee-slide v-for="i in 1" :key="i">
          <img src="../assets/shoesimg/nike/dunk-low-champ-colors-release-date.jpg" class="marquee-img">
        </vue-marquee-slide>
        <vue-marquee-slide v-for="i in 1" :key="i">
          <img src="../assets/shoesimg/nike/air-jordan-1-white-royal-release-date.jpg" class="marquee-img">
        </vue-marquee-slide>
        <vue-marquee-slide v-for="i in 1" :key="i">
          <img src="../assets/shoesimg/nike/nike-x-travis-scott-air-max-270-cactus-trails-release-date.jpg" class="marquee-img">
        </vue-marquee-slide>
      </vue-marquee>
      <div id="zen-preamble" class="mr-0">
        <a href="#" class="bg d-flex col-12 col-md-6"><h3>限量商品</h3></a>
        <a href="#" class="bg1 d-flex col-12 col-md-6"><h3>一般商品</h3></a>
      </div>
  </b-container-fulid>
</div>
</template>

<script>
import { Marquee, Slide } from 'vue-marquee-component'
export default {
  components: {
    [Marquee.name]: Marquee,
    [Slide.name]: Slide
  }
}
</script>

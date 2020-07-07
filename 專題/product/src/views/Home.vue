<template>
  <b-container-fulid id="home">
    <b-row class="m-0">
      <b-col>
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
    <h1 class="text-center">最新消息</h1>
      <b-row class="m-0 justify-content-around">
        <b-col class="d-flex justify-content-center">
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 mt-5">
          <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-col>
        <b-col class="d-flex justify-content-center">
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 mt-5">
          <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-col>
        <b-col class="d-flex justify-content-center">
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 mt-5">
          <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-col>
        <b-col class="d-flex justify-content-center">
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 mt-5">
          <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-col>
      </b-row>
  </b-container-fulid>
</template>

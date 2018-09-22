<template>
  <section class="gallery">
    <h1 class="title-gallery">Galeria de fotos</h1>
    <div class="card-carousel-wrapper">
      <div class="card-carousel--nav__left" @click="moveCarousel(-1)" :disabled="atHeadOfList"></div>

      <div class="card-carousel">
        <div class="card-carousel--overflow-container">
          <div class="card-carousel-cards" :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}">
            <div class="card-carousel--card" v-for="img in images">
              <img :src="`data:image/png;base64,${img.base64img}`">
              <!-- <img src="../../../static/images/pitaya-head.png" class="opacity-logo"> -->
            </div>
          </div>
        </div>
      </div>

      <div class="card-carousel--nav__right" @click="moveCarousel(1)" :disabled="atEndOfList"></div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  data() {
   return {
     currentOffset: 0,
     windowSize: 3,
     paginationFactor: 220,
     images: '',
   }
 },

 created(){
   this.getPhoto();
 },

 computed: {
   atEndOfList() {
     return this.currentOffset <= (this.paginationFactor * -1) * (this.images.length - this.windowSize);
   },
   atHeadOfList() {
     return this.currentOffset === 0;
   },
 },

 methods: {
   moveCarousel(direction) {
     // Find a more elegant way to express the :style. consider using props to make it truly generic
     if (direction === 1 && !this.atEndOfList) {
       this.currentOffset -= this.paginationFactor;
     } else if (direction === -1 && !this.atHeadOfList) {
       this.currentOffset += this.paginationFactor;
     }
   },

   getPhoto(){
     axios.get('http://pitayabeachapi.herokuapp.com/apart/galery').then(res => {
       this.images = res.data.reverse()
       console.log(this.images);
     })
   }
 }
}
</script>

<style lang="scss">

.title-gallery
{
    font-size: 2.4em;
    text-align: center;
    margin: 4% 0;
}


.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px 0;
  width: 100vw;
}

.card-carousel {
  position: relative;
  display: flex;
  justify-content: center;
  width: 70%;

  &--overflow-container {
    overflow: hidden;
  }

  &--nav__left,
  &--nav__right {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    border-top: 2px solid black;
    border-right: 2px solid black;
    cursor: pointer;
    margin: 0 10px;
    transition: transform 150ms linear;
    &[disabled] {
      opacity: 0.2;
      border-color: black;
    }
  }

  &--nav__left {
    transform: rotate(-135deg);
    &:active {
      transform: rotate(-135deg) scale(0.9);
    }
  }

  &--nav__right {
    transform: rotate(45deg);
    &:active {
      transform: rotate(45deg) scale(0.9);
    }
  }
}

.card-carousel-cards {
  display: flex;
  transition: transform 150ms ease-out;
  transform: translatex(0px);

  .card-carousel--card {
    margin: 0 10px;
    cursor: pointer;
    box-shadow: 0 4px 15px 0 rgba(40,44,53,.06), 0 2px 2px 0 rgba(40,44,53,.08);
    background-color: #fff;
    border-radius: 4px;
    z-index: 3;
    margin-bottom: 2px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    img {
      vertical-align: bottom;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      transition: opacity 150ms linear;
      width: 21em;
      height: 17em;
      object-fit: cover;

      &:hover {
        opacity: 0.5;
      }
    }
  }
}

</style>

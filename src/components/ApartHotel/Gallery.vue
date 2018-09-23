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
     axios.get('http://pitayabeachapi.herokuapp.com/apart/gallery').then(res => {
       this.images = res.data.reverse()
       console.log(this.images);
     })
   }
 }
}
</script>

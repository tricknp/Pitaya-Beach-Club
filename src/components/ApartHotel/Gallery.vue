<template>
  <section class="gallery">
    <h1 class="title-gallery">Galeria de fotos</h1>
    <div class="card-carousel-wrapper">
      <div class="card-carousel--nav__left" @click="moveCarousel(-1)" :disabled="atHeadOfList"></div>

      <div class="card-carousel">
        <div class="card-carousel--overflow-container">
          <div class="card-carousel-cards" :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}">
            <img v-if="!images" src="../../../static/loadingGallery.gif">
            <div v-if="images" class="card-carousel--card" v-for="img in images" :key="img._id">
              <img :src="`data:image/png;base64,${img.base64img}`" class="opacity-logo">
            </div>
          </div>
        </div>
      </div>

      <div class="card-carousel--nav__right" @click="moveCarousel(1)" :disabled="atEndOfList"></div>
    </div>
  </section>
</template>

<script>
  import axios from "axios";
  import {
    baseUrl
  } from "../../service/api";

  export default {
    props: {
      directory: String
    },

    data() {
      return {
        currentOffset: 0,
        windowSize: 3,
        paginationFactor: 220,
        images: false
      };
    },

    created() {
      this.getPhoto();
    },

    computed: {
      atEndOfList() {
        return (
          this.currentOffset <=
          this.paginationFactor * -1 * (this.images.length - this.windowSize)
        );
      },
      atHeadOfList() {
        return this.currentOffset === 0;
      }
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

      getPhoto() {
        axios.get(baseUrl + this.directory).then(res => {
          this.images = res.data.reverse();
        });
      }
    }
  };

</script>

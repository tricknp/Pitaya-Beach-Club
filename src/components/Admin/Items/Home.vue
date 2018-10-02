<template>
  <section class="admin-home">
    <div class="admin-home__container">
      <div class="adminSlider">

        <div class="adminSlider__head">
          <h2 class="adminSlider__head--title">Slider</h2>
          <span class="adminSlider__head__buttons">
            <button class="adminSlider__head__buttons--btn" >+</button>
            <button class="adminSlider__head__buttons--btn" >-</button>
          </span>
        </div>

        <div class="adminSlider__images">
          <div class="adminSlider__images__content">

            <img v-if="imagesLoaded" v-for="(img, index) in images" :key="index" class="adminSlider__images__content--img"
             :src="`data:image/png;base64,${img.base64img}`">
          </div>
        </div>

      </div>

      <div class="adminSlider br">
        <div class="adminSlider__head">
          <h2 class="adminSlider__head--title">Descrição</h2>
          <span class="adminSlider__head__buttons">
            <button class="adminSlider__head__buttons--edit" >Editar</button>
          </span>
        </div>

        <textarea>aqui vai a descrição da home</textarea>
      </div>

    </div>
  </section>
</template>

<script>

import {homeService} from '../../../service/api.js';

export default {
  data () {
     return {
       images: '',
       imagesLoaded: false
     }
   },

   created(){
     this.getPhoto()
   },

methods:{
  getPhoto(){
    homeService.slider.get((data) => {
      this.images = data.reverse();
      this.imagesLoaded = true;
    })
  }
}
}
</script>

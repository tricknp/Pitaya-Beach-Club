<template>
<div class="">
  <h1>kkk {{ images }} </h1>
  <slider animation="fade" class="container__slider">
     <slider-item v-for="(img, index) in images" :key="index" class="container__slider__item">
         <img :src="`data:image/png;base64,${img.base64img}`" class="container__slider__item--img">
     </slider-item>
   </slider>
</div>
</template>

<script>
import axios from 'axios'
import { Slider, SliderItem } from 'vue-easy-slider'

export default {
  components: { Slider, SliderItem },

  data () {
     return {
       images: '',
     }
   },

   created(){
     this.getImages()
   },

  methods:{
    getImages(){
      axios.get('http://pitayabeachapi.herokuapp.com/slider').then(res => {
        this.images = res.data.reverse()
        console.log(this.images);
      })
    }
  }

  }
</script>

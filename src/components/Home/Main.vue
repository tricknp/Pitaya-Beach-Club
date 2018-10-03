<template>
  <main class="container">

    <slider animation="fade" class="container__slider">
       <slider-item v-for="(img, index) in images" :key="index" class="container__slider__item">
           <img :src="`data:image/png;base64,${img.base64img}`" class="container__slider__item--img">
       </slider-item>
       <!-- <slider-item class="container__slider__item">
         <img src="../../../static/images/menu_item-2.jpg" class="container__slider__item--img">
       </slider-item> -->
     </slider>


      <div class="container__check">
        <div class="container__check__content">

          <div class="container__check__content--title">
            <h2 class="text">Check Availability</h2>
            <span class="border"></span>
            <button class="btn-check">Check Now</button>
          </div>


        </div>

        <div class="container__check__triangle"></div>
      </div>
  </main>
</template>

<script>
import axios from 'axios'
import { Slider, SliderItem } from 'vue-easy-slider'

export default {
  components:
  {
    Slider,
    SliderItem
  },

  data () {
     return {
       images: '',
     }
   },

   created(){
     this.getPhoto()
   },

methods:{
  getPhoto(){
    axios.get('http://pitayabeachapi.herokuapp.com/home/slider').then(res => {
      this.images = res.data.reverse()
    })
  }
}

}
</script>

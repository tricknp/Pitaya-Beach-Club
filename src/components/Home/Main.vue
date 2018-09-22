<template>
  <main class="container">

    <slider animation="fade" class="container__slider">
       <slider-item v-for="(img, index) in images" :key="index" class="container__slider__item">
           <img :src="`data:image/png;base64,${img.base64img}`" class="container__slider__item--img">
       </slider-item>
     </slider>


      <div class="container__check">
        <div class="container__check__content">

          <div class="container__check__content--title">
            <h2 class="text">Check Availability</h2>
            <span class="border"></span>
          </div>

          <form class="container__check__content--form">
            <span class="cf-item">
              <label for="checkin">Check in</label>
              <input  class="calendar" type="date" name="checkin">
            </span>

            <span class="cf-item">
              <label for="checkin">Check Out</label>
              <input  class="calendar" type="date" name="checkout">
            </span>

            <span class="cf-item">
              <label for="guests">Guests</label>
              <input  class="in-number" type="number" name="guests">
            </span>

            <button class="check-btn"> Check </button>
          </form>

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
      console.log(this.images);
    })
  }
}

}
</script>

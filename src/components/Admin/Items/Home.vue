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
            <img
              v-for="(img, index) in slider"
              :key="index"
              class="adminSlider__images__content--img"
              @click="selectPhoto(index)"
              ref="sliderImage"
              :src="`data:image/png;base64,${img.base64img}`"
            >
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
import baseURL from '../../_mixins/url'
import axios from 'axios'

export default {

  mixins: [ baseURL ],

  data(){
    return{
      lastClicked:  '',
      selected: [ { item: '' }],
      slider: '',
      description: '',
    }
  },

  created(){
    this.getSlider()
    this.getDesc()
  },

  methods: {
    getSlider(){
      axios.get(`${this.baseURL}home/slider`).then(res => {
        this.slider = res.data
      })
    },

    getDesc(){
      axios.get(`${this.baseURL}home/desc`).then(res => {

      })
    },

    selectPhoto(index){
      this.lastClicked = index
      this.$refs.sliderImage[index].classList.toggle('imageSelected')
    }
  }

}
</script>

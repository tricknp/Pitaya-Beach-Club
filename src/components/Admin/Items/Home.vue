<template>
  <section class="admin-home">
    <div class="admin-home__container">
      <div class="adminSlider">

        <div class="adminSlider__head">
          <h2 class="adminSlider__head--title">Slider</h2>
          <span class="adminSlider__head__buttons">
            <button class="adminSlider__head__buttons--btn" @click="inputFileModal = true">+</button>
            <button class="adminSlider__head__buttons--btn" @click="proceed(deleteSliders)">-</button>
          </span>
        </div>

        <div class="adminSlider__images">
          <div class="adminSlider__images__content">
            <img v-for="(img, index) in slider" :key="index" class="adminSlider__images__content--img" @click="selectPhoto(index)"
              ref="sliderImage" :src="`data:image/png;base64,${img.base64img}`">
          </div>
        </div>

      </div>

      <div class="adminSlider br">
        <div class="adminSlider__head">
          <h2 class="adminSlider__head--title">Descrição</h2>
          <span class="adminSlider__head__buttons">
            <button @click="proceed(updateDesc)" class="adminSlider__head__buttons--edit">Salvar descrição</button>
          </span>
        </div>

        <tinymce id="d1" v-model="description.text"></tinymce>

        <div></div>

        <div class="adminSlider__head">
          <h2 class="adminSlider__head--title">Faça seu evento (descrição)</h2>
          <span class="adminSlider__head__buttons">
            <button @click="proceed(updateEvdesc)" class="adminSlider__head__buttons--edit">Salvar descrição</button>
          </span>
        </div>

        <tinymce id="d2" v-model="evdescription.text"></tinymce>

        <modal v-if="inputFileModal">
          <h4 slot="header">Selecione uma foto para enviar.</h4>
          <input slot="content" type="file" accept="image/x-png,image/jpeg,image/jpg" class="modal--btn-file" id="file" multiple>
          <div slot="footer">
            <div class="modalBtn">
              <button class="modalBtn--btn" @click="newSlider">enviar</button>
              <button class="modalBtn--btn" @click="inputFileModal=false">cancelar</button>
            </div>
          </div>
        </modal>

        <modal v-if="confirmModal">
          <h1 slot="header">Confirmar alteração?</h1>
          <div slot="content"></div>
          <div slot="footer">
            <div class="modalBtn">
              <button class="modalBtn--btn" @click="confirm">Sim</button>
              <button class="modalBtn--btn" @click="confirmModal=false">Não</button>
            </div>
          </div>
        </modal>

      </div>

    </div>
  </section>
</template>

<script>
import baseURL from "../../_mixins/url";
import { homeService } from "../../../service/api.js";
import modal from "../../Modal";
import tinymce from 'vue-tinymce-editor'


export default {
  components: {
    modal,
    tinymce
  },

  data() {
    return {
      selected: [],
      slider: "",
      description: {},
      evdescription: {},
      inputFileModal: false,
      confirmModal: false,
      proceedMethod: Function
    };
  },

  created() {
    this.getSlider();
    this.getDesc();
  },

  methods: {
    getSlider() {
      homeService.slider.get(data => {
        this.slider = data.reverse();
      });
    },

    newSlider() {
      let inputFile = document.querySelector("#file");
      homeService.slider.post(inputFile, res => {
        this.inputFileModal = false;
        this.getSlider();
      });
    },

    getDesc() {
      homeService.desc.get(data => {
        this.description = data;
      });
      homeService.evdesc.get(data => {
        this.evdescription = data;
      });
    },

    updateDesc() {
      homeService.desc.put(this.description._id, this.description, res => {
        this.getDesc();
      });
    },
    updateEvdesc() {
      homeService.evdesc.put(this.evdescription._id, this.evdescription, res => {
        this.getDesc();
      });
    },

    deleteSliders() {
      let count = 0;
      this.selected.forEach(element => {
        homeService.slider.delete(this.slider[element]._id, res => {
          count++;
          if (count === this.selected.length) {
            this.getSlider();
          }
        });
      });
    },

    selectPhoto(index) {
      if (this.selected.includes(index)) {
        for (let i = 0; i < this.selected.length; i++) {
          if (this.selected[i] === index) {
            this.selected.splice(i, 1);
            break;
          }
        }
      } else {
        this.selected.push(index);
      }
      this.$refs.sliderImage[index].classList.toggle("imageSelected");
    },

    proceed(method) {
      this.proceedMethod = method;
      this.confirmModal = true;
    },

    confirm() {
      this.proceedMethod();
      this.confirmModal = false;
    }
  }
};
</script>

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

        <textarea v-model="description.text"></textarea>

        <modal v-if="inputFileModal">
          <h4 slot="header">Selecione uma foto para enviar.</h4>
          <input slot="content" type="file" accept="image/x-png,image/jpeg,image/jpg" id="file" multiple>
          <div slot="footer">
            <div>
              <button class="modal-default-button" @click="newSlider">enviar</button>
            </div>
            <div>
              <button class="modal-default-button" @click="inputFileModal=false">cancelar</button>
            </div>
          </div>
        </modal>

        <modal v-if="confirmModal">
          <h1 slot="header">Prosseguir?</h1>
          <div slot="content"></div>
          <div slot="footer">
            <div>
              <button class="modal-default-button" @click="confirm">SIM</button>
            </div>
            <div>
              <button class="modal-default-button" @click="confirmModal=false">CANCELAR</button>
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

export default {
  components: {
    modal
  },

  data() {
    return {
      selected: [],
      slider: "",
      description: {},
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
    },

    updateDesc() {
      homeService.desc.put(this.description._id, this.description, res => {
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

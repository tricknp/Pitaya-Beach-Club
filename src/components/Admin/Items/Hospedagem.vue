<template>
  <section class="admin-home">
    <div class="admin-home__container">
      <div class="adminSlider">

        <div class="adminSlider__head">
          <h2 class="adminSlider__head--title">Background</h2>
          <span class="adminSlider__head__buttons">
            <button @click="editBanner()" class="adminSlider__head__buttons--edit">Editar</button>
          </span>
        </div>

        <div class="adminSlider__images">
          <div class="adminSlider__images__content">
            <img v-if="banner.img" class="adminSlider__images__content--f-img" :src="`data:image/png;base64,${banner.img}`">
          </div>
        </div>

      </div>

      <div class="adminSlider br">
        <div class="adminSlider__head">
          <h2 class="adminSlider__head--title">Descrição</h2>
          <span class="adminSlider__head__buttons">
            <button @click="editDesc()" class="adminSlider__head__buttons--edit">Editar</button>
          </span>
        </div>

        <tinymce id="d1" v-model="desc.text"></tinymce>

      </div>

      <div class="adminSlider br bb">

        <div class="adminSlider__head">
          <h2 class="adminSlider__head--title">Quarto</h2>
          <span class="adminSlider__head__buttons">
            <button @click="editRoom" class="adminSlider__head__buttons--edit">Editar</button>
          </span>
        </div>

        <div class="adminSlider__images">
          <div class="adminSlider__images__content">
            <img v-if="room.img" class="adminSlider__images__content--f-img" :src="`data:image/png;base64,${room.img}`">
          </div>
        </div>

      </div>

      <div class="adminSlider br bb">

        <div class="adminSlider__head">
          <h2 class="adminSlider__head--title">Galeria</h2>
          <span class="adminSlider__head__buttons">
            <button @click="addGallery()" class="adminSlider__head__buttons--btn">+</button>
            <button @click="proceed(deleteGallery)" class="adminSlider__head__buttons--btn">-</button>
          </span>
        </div>

        <div class="adminSlider__images">
          <div class="adminSlider__images__content">
            <img v-if="gallery.length > 0" v-for="(img, index) in gallery" :key="index" class="adminSlider__images__content--img"
              @click="selectSlider(index, 'gallery')" ref="sliderImage" :src="`data:image/png;base64,${img.base64img}`">
          </div>
        </div>

      </div>

    </div>

    <modal v-if="roomModal">
      <h4 slot="header">Selecione uma foto para enviar.</h4>
      <div slot="content" class="modalInput">
        <input class="modalInput--input" placeholder="escolha sua foto" type="file" ref="eventImg" accept="image/x-png,image/jpeg,image/jpg">
        Nome do Quarto?<input class="modalInput--input" type="test" v-model="modalData.name" placeholder="Quarto X">
        Possui Wifi?<input class="modalInput--input" type="test" v-model="modalData.wifi" placeholder="sim">
        Ar Condicionado?<input class="modalInput--input" type="text" v-model="modalData.air" placeholder="sim">
        Café?<input class="modalInput--input" type="text" v-model="modalData.coffee" placeholder="todas as manhãs">
        Cama?<input class="modalInput--input" type="text" v-model="modalData.cama" placeholder="casal">
        Ocupação Máxima?<input class="modalInput--input" type="text" v-model="modalData.maxOcupation" placeholder="2 pessoas">
        Pernoite?<input class="modalInput--input" type="text" v-model="modalData.perNight" placeholder="99,99">
      </div>
      <div slot="footer">
        <div class="modalBtn">
          <button class="modalBtn--btn" @click="proceedMethod">enviar</button>
          <button class="modalBtn--btn" @click="roomModal=false">cancelar</button>
        </div>
      </div>
    </modal>

    <modal v-if="galleryModal">
      <h4 slot="header">Selecione uma foto para enviar.</h4>
      <input v-if="proceedMethod == postGallery" slot="content" type="file" ref="galleryImg" accept="image/x-png,image/jpeg,image/jpg"
        class="modal--btn-file" multiple>
      <input v-if="proceedMethod == putBanner" slot="content" type="file" ref="galleryImg" accept="image/x-png,image/jpeg,image/jpg"
        class="modal--btn-file">
      <div slot="footer">
        <div class="modalBtn">
          <button class="modalBtn--btn" @click="proceedMethod">enviar</button>
          <button class="modalBtn--btn" @click="galleryModal = false">cancelar</button>
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

  </section>
</template>

<script>
  import {
    hospService
  } from "../../../service/api.js";
  import modal from "../../Modal";
  import tinymce from 'vue-tinymce-editor'


  export default {
    components: {
      modal,
      tinymce
    },

    data() {
      return {
        banner: {},
        desc: {},
        room: {},
        gallery: [],
        selectedSlider: [],
        selectedEvent: [],
        modalData: {},
        roomModal: false,
        galleryModal: false,
        confirmModal: false,
        proceedMethod: Function
      };
    },

    created() {
      this.getBanner();
      this.getDesc();
      this.getRoom();
      this.getGallery();
    },

    methods: {
      // GETs
      // =============================================================================
      getRoom() {
        hospService.room.get(room => {
          this.room = room;
        });
      },
      getGallery() {
        hospService.gallery.get(gallery => {
          this.gallery = gallery;
        });
      },
      getBanner() {
        hospService.banner.get(banner => {
          this.banner = banner[0];
        });
      },
      getDesc() {
        hospService.desc.get(desc => {
          this.desc = desc;
        });
      },

      //POSTs
      // =============================================================================

      addGallery() {
        this.proceedMethod = this.postGallery;
        this.galleryModal = true;
      },
      postGallery() {
        let inputFile = this.$refs.galleryImg;
        hospService.gallery.post(inputFile, res => {
          this.galleryModal = false;
          this.getGallery();
        });
      },

      // PUTs
      // =============================================================================
      editRoom() {
        this.modalData = this.room;
        this.proceedMethod = this.putRoom;
        this.roomModal = true;
      },
      putRoom() {
        let data = {
          inputFile: this.$refs.eventImg,
          wifi: this.modalData.wifi,
          coffee: this.modalData.coffee,
          air: this.modalData.air,
          cama: this.modalData.cama,
          maxOcupation: this.modalData.maxOcupation,
          perNight: this.modalData.perNight
        };
        hospService.room.put(this.room._id, data, res => {
          this.getRoom();
          this.roomModal = false;
          //this.modalData = {};
        });
      },

      putBanner() {
        let data = {
          inputFile: this.$refs.galleryImg
        };
        hospService.banner.put(this.modalData._id, data, res => {
          this.getBanner();
          this.galleryModal = false;
        });
      },

      editBanner() {
        this.modalData = this.banner;
        this.proceedMethod = this.putBanner;
        this.galleryModal = true;
      },

      putDesc() {
        hospService.desc.put(this.modalData, res => {
          this.getDesc();
        });
      },

      editDesc() {
        this.modalData = this.desc;
        this.proceedMethod = this.putDesc;
        this.confirmModal = true;
      },

      // DELETEs
      // =============================================================================
      deleteGallery() {
        let count = 0;
        this.selectedSlider.forEach(element => {
          hospService.gallery.delete(this.gallery[element]._id, res => {
            count++;
            if (count === this.selectedSlider.length) {
              this.getGallery();
            }
          });
        });
      },

      // MODAL FUNCTIONs
      // =============================================================================
      proceed(method) {
        this.proceedMethod = method;
        this.confirmModal = true;
      },

      confirm() {
        this.proceedMethod();
        this.confirmModal = false;
      },

      // SELECTs
      // =============================================================================
      selectSlider(index) {
        if (this.selectedSlider.includes(index)) {
          for (let i = 0; i < this.selectedSlider.length; i++) {
            if (this.selectedSlider[i] === index) {
              this.selectedSlider.splice(i, 1);
              break;
            }
          }
        } else {
          this.selectedSlider.push(index);
        }
        this.$refs.sliderImage[index].classList.toggle("imageSelected");
      }
    }
  };

</script>

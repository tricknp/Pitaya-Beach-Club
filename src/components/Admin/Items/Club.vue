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
            <button @click="editDesc()" class="adminSlider__head__buttons--edit">Salvar descrição</button>
          </span>
        </div>

        <textarea v-model="desc.text"></textarea>
      </div>

      <div class="adminSlider br">
        <div class="adminSlider__head">
          <h2 class="adminSlider__head--title">Eventos</h2>
          <span class="adminSlider__head__buttons">
            <button @click="eventsModal=true" class="adminSlider__head__buttons--btn"> + </button>
            <button @click="proceed(deleteEvent)" class="adminSlider__head__buttons--btn"> - </button>
          </span>
        </div>
        <!-- event -->
        <div class="adminSlider__event">
          <div @click="selectEvent(index)" ref="event" v-if="events" v-for="(event, index) in events" :key="index"
            class="adminSlider__event__container">
            <span class="adminSlider__event__container--name">{{event.title}}</span>
            <button class="adminSlider__event__container--btn" @click="editEvent(index)">Editar</button>
          </div>
        </div>

        <!-- <form class="event">

            <div class="">
              <label for="image">Foto do evento:</label>
              <input type="file" name="image">
            </div>

            <input type="text" placeholder="Nome do evento">
            <input type="text" placeholder="00 de Janeiro">
            <input type="text" placeholder="Sabado | 19H">
            <input type="text" placeholder="Link para redirecionamento">
          </form> -->
      </div>

      <div class="adminSlider br bb">

        <div class="adminSlider__head">
          <h2 class="adminSlider__head--title">Galeria</h2>
          <span class="adminSlider__head__buttons">
            <button @click="galleryModal=true" class="adminSlider__head__buttons--btn">+</button>
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

    <modal v-if="eventsModal">
      <h4 slot="header">Selecione uma foto para enviar.</h4>
      <div slot="content" class="modalInput">
        <input class="modalInput--input" placeholder="escolha sua foto" type="file" ref="eventImg" accept="image/x-png,image/jpeg,image/jpg">
        <input class="modalInput--input" type="text" v-model="modalData.title" placeholder="titulo">
        <input class="modalInput--input" type="text" v-model="modalData.date" placeholder="02/12/2018 as 20:00">
        <input class="modalInput--input" type="text" v-model="modalData.link" placeholder="www.example.com">
      </div>
      <div slot="footer">
        <div class="modalBtn">
          <button class="modalBtn--btn" @click="postEvent">enviar</button>
          <button class="modalBtn--btn" @click="eventsModal=false">cancelar</button>
        </div>
      </div>
    </modal>

    <modal v-if="galleryModal">
      <h4 slot="header">Selecione uma foto para enviar.</h4>
      <input slot="content" type="file" ref="galleryImg" accept="image/x-png,image/jpeg,image/jpg" class="modal--btn-file"
        multiple>
      <div slot="footer">
        <div class="modalBtn">
          <button class="modalBtn--btn" @click="postGallery">enviar</button>
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
    clubService
  } from "../../../service/api.js";
  import modal from "../../Modal";

  export default {
    components: {
      modal
    },

    data() {
      return {
        banner: {},
        desc: {},
        events: [],
        gallery: [],
        selectedSlider: [],
        selectedEvent: [],
        modalData: {},
        eventsModal: false,
        galleryModal: false,
        confirmModal: false,
        proceedMethod: Function
      };
    },

    created() {
      this.getBanner();
      this.getDesc();
      this.getEvents();
      this.getGallery();
    },

    methods: {
      // GETs
      // =============================================================================
      getEvents() {
        clubService.events.get(events => {
          this.events = events;
        });
      },
      getGallery() {
        clubService.gallery.get(gallery => {
          this.gallery = gallery;
        });
      },
      getBanner() {
        clubService.banner.get(banner => {
          this.banner = banner[0];
        });
      },
      getDesc() {
        clubService.desc.get(desc => {
          this.desc = desc;
        });
      },

      //POSTs
      // =============================================================================
      postEvent() {
        let data = {
          inputFile: this.$refs.eventImg,
          title: this.modalData.title,
          date: this.modalData.date,
          link: this.modalData.link
        };
        clubService.events.post(data, res => {
          this.getEvents();
          this.eventsModal = false;
          this.modalData = {};
        });
      },
      postGallery() {
        let inputFile = this.$refs.galleryImg;
        clubService.gallery.post(inputFile, res => {
          this.galleryModal = false;
          this.getGallery();
        });
      },

      // PUTs
      // =============================================================================
      putEvent() {
        let data = {
          inputFile: this.$refs.eventImg,
          title: this.modalData.title,
          date: this.modalData.date,
          link: this.modalData.link
        };
        clubService.events.put(this.modalData._id, data, res => {
          this.getEvents();
          this.eventsModal = false;
          this.modalData = {};
        });
      },

      editEvent(index) {
        this.modalData = this.events[index];
        this.proceedMethod = this.putEvent;
        this.eventsModal = true;
      },

      putBanner() {
        let data = {
          inputFile: this.$refs.galleryImg
        };
        clubService.banner.put(this.modalData._id, data, res => {
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
        clubService.desc.put(this.modalData, res => {
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
      deleteEvent() {
        let count = 0;
        this.selectedEvent.forEach(element => {
          clubService.events.delete(this.events[element]._id, res => {
            count++;
            if (count === this.selectedEvent.length) {
              this.getEvents();
            }
          });
        });
      },

      deleteGallery() {
        let count = 0;
        this.selectedSlider.forEach(element => {
          clubService.gallery.delete(this.gallery[element]._id, res => {
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
      },
      selectEvent(index) {
        if (this.selectedEvent.includes(index)) {
          for (let i = 0; i < this.selectedEvent.length; i++) {
            if (this.selectedEvent[i] === index) {
              this.selectedEvent.splice(i, 1);
              break;
            }
          }
        } else {
          this.selectedEvent.push(index);
        }
        this.$refs.event[index].classList.toggle("imageSelected");
        console.log(this.selectedEvent);
      }
    }
  };

</script>

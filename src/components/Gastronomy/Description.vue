<template>
  <main class="apartHotel__main">

    <Banner>
      <img v-if="banner" :src="`data:image/png;base64,${banner}`" class="banner__bg" slot="bg">
      <div slot="content">
        <svg class="banner__content--icon" version="1.1" viewBox="0 0 470 470" xmlns="http://www.w3.org/2000/svg">
          <path d="m327.39 160.81c-3.292 2.515-3.922 7.222-1.407 10.513 14.076 18.423 21.515 40.443 21.515 63.678 0 57.897-47.103 105-105 105s-105-47.103-105-105 47.103-105 105-105c23.235 0 45.255 7.439 63.679 21.516 3.29 2.515 7.998 1.885 10.513-1.407 2.515-3.291 1.885-7.998-1.407-10.513-21.061-16.091-46.23-24.596-72.785-24.596-66.168 0-120 53.832-120 120s53.832 120 120 120 120-53.832 120-120c0-26.555-8.505-51.724-24.596-72.784-2.514-3.291-7.22-3.922-10.512-1.407z"/>
          <path d="m242.5 75c-88.224 0-160 71.775-160 160s71.776 160 160 160c88.225 0 160-71.775 160-160s-71.775-160-160-160zm0 305c-79.953 0-145-65.047-145-145s65.047-145 145-145 145 65.047 145 145-65.047 145-145 145z"/>
          <path d="M67.5,75c-4.142,0-7.5,3.357-7.5,7.5V145H45V82.5c0-4.143-3.358-7.5-7.5-7.5S30,78.357,30,82.5V145H15V82.5   c0-4.143-3.358-7.5-7.5-7.5S0,78.357,0,82.5v90c0,18.11,12.904,33.261,30,36.745V387.5c0,4.143,3.358,7.5,7.5,7.5   s7.5-3.357,7.5-7.5V209.245c17.096-3.484,30-18.635,30-36.745v-90C75,78.357,71.642,75,67.5,75z M37.5,195   C25.093,195,15,184.906,15,172.5V160h45v12.5C60,184.906,49.907,195,37.5,195z"/>
          <path d="m462.5 75c-20.678 0-37.5 16.822-37.5 37.5v137.5c0 4.143 3.357 7.5 7.5 7.5h22.5v130c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-305c0-4.143-3.357-7.5-7.5-7.5zm-7.5 167.5h-15v-130c0-9.778 6.27-18.119 15-21.215v151.22z"/>
        </svg>
        <h1 class="banner__content--title">Gastronomia</h1>
      </div>
    </Banner>

     <div class="description__container">
       <img src="../../../static/images/logo_beach_club-01.png" class="pitaya-logo">
     
      <p ref="desc" class="description__container--text">
          
      </p>

      <!-- <div class="divider"></div> -->
    </div>

  </main>
</template>



<script>
import Banner from "../FixedComponents/Banner";
import url from "../_mixins/url";
import { gastroService } from "../../service/api";

export default {
  components: { Banner },

  data() {
    return {
      banner: false,
      desc: false
    };
  },

  mixins: [url],

  created() {
    this.getBanner();
    this.getDesc();
  },

  methods: {
    getBanner() {
      gastroService.banner.get(res => {
        this.banner = res[0].img;
      });
    },
    getDesc() {
      gastroService.desc.get(desc => {
        this.desc = desc;
        let nodes = this.createElementsFromHTML(desc.text);
        nodes.forEach(element => {
          this.$refs.desc.appendChild(element);
        });
      });
    },
    createElementsFromHTML(htmlString) {
      var div = document.createElement("div");
      div.innerHTML = htmlString.trim();
      return div.childNodes;
    }
  }
};
</script>


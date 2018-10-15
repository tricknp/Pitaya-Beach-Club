<template>
  <main class="apartHotel__main">

    <Banner>
      <img v-if="banner" :src="`data:image/png;base64,${banner.img}`" class="banner__bg" slot="bg">
      <div slot="content">
        <svg class="banner__content--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114.013 77.736">
          <path class="a" d="M32.094,46.459A15.547,15.547,0,1,0,16.547,30.912,15.526,15.526,0,0,0,32.094,46.459ZM94.283,15.365H52.824V51.642H11.365V5H1V82.736H11.365V67.189h93.283V82.736h10.365V36.094A20.724,20.724,0,0,0,94.283,15.365Z" transform="translate(-1 -5)"/>
        </svg>
        <h1 class="banner__content--title">Apart Hotel</h1>
      </div>
    </Banner>

    <div class="dc br">

    <img src="../../../static/images/logo_beach_club-01.png" class="description--img">
     <div class="description__container justify">
      <p ref="desc" class="description__container--text">
      </p>
    </div>
  </div>
    <!-- <div class="divider"></div> -->

  </main>
</template>

<script>
import Banner from "../FixedComponents/Banner";
import url from "../_mixins/url";
import { hospService } from "../../service/api";

export default {
  components: { Banner },

  data() {
    return {
      banner: false
    };
  },

  created() {
    this.getBanner(), this.getDesc();
  },

  methods: {
    getBanner() {
      hospService.banner.get(res => {
        this.banner = res[0];
      });
    },
    getDesc() {
      hospService.desc.get(desc => {
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

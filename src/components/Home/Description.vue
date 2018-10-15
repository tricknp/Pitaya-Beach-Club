<template>
  <section class="description br">

    <div class="dc">
      <img src="../../../static/images/logo_beach_club-01.png" class="description--img">

      <div class="description__container justify">
        <p ref="desc" class="description__container--text"></p>
      </div>
    </div>
    <!-- <div class="divider"></div> -->

  </section>
</template>

<script>

import {homeService} from '../../service/api'

export default {
  created() {
    this.getDesc();
  },
  methods: {
    getDesc() {
      homeService.desc.get(desc => {
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

<style media="screen">
.description--img {
  width: 12em;
  margin-right: 3%;
}
</style>

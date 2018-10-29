<template>
  <section class="last-event">

    
    <h1 class="last-event__title">Proximo Evento</h1>

    <Card />

    <div class="last-event__text gs">
      <h2 class="last-event__text--title">Faça seu evento</h2>
      <p ref="desc" class="last-event__text--paragraph"></p>
      <p class="last-event__text--paragraph"></p>
    </div>

    <router-link :to="{ name: 'Club' }">
      <button class="head__btn br"> Saiba mais </button>
    </router-link>

  </section>
</template>

<script>
import Card from './Card'
import {homeService} from '../../service/api'

export default {
  components: { Card },
  created() {
    this.getDesc();
  },
  methods: {
    getDesc() {
      homeService.evdesc.get(desc => {
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
}
</script>

<style lang="scss" scoped>
  .br { margin-top: 1em;}
 // .last-event__title { margin-top:  10% !important;  }
</style>

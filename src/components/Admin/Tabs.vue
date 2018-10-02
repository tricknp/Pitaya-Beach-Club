<template>
<section class="admin-sec">
  <aside class="aside">
    <div class="aside__container">

    <div class="aside__container__head">
      <h1 class="aside__container__head--title">Admin</h1>
    </div>

    <div class="aside__container__items">
      <span class="aside__container__items--item" @click="showHome()" >Home</span>
      <span class="aside__container__items--item" @click="showHospedagem()" >Hospedagem</span>
      <span class="aside__container__items--item" @click="showClub()" >Club</span>
      <span class="aside__container__items--item" @click="showGastronomia()" >Gastronomia</span>
      <span class="aside__container__items--item" @click="showGaropaba()">Garopaba</span>
    </div>
  </div>
  </aside>

  <div class="admin-items">
    <Home        v-if="home" />
    <Hospedagem  v-if="hospedagem" />
    <Club        v-if="club" />
    <Gastronomia v-if="gastronomia" />
    <Garopaba    v-if="garopaba" />
  </div>

</section>
</template>

<script>
import Home from './Items/Home'
import Hospedagem from './Items/Hospedagem'
import Club from './Items/Club'
import Gastronomia from './Items/Gastronomia'
import Garopaba from './Items/Garopaba'

export default {
  components:
  {
    Home,
    Hospedagem,
    Club,
    Gastronomia,
    Garopaba
  },

  data(){
    return{
      home: true,
      hospedagem: false,
      club: false,
      gastronomia: false,
      garopaba: false,
    }
  },

  methods:{
    showHome(){
      this.home = true
      this.hospedagem = false
      this.gastronomia = false
      this.club = false
      this.garopaba = false
    },

    showHospedagem(){
      this.home = false
      this.hospedagem = true
      this.gastronomia = false
      this.club = false
      this.garopaba = false
    },

    showGastronomia(){
      this.home = false
      this.hospedagem = false
      this.gastronomia = true
      this.club = false
      this.garopaba = false
    },

    showClub(){
      this.home = false
      this.hospedagem = false
      this.gastronomia = false
      this.club = true
      this.garopaba = false
    },

    showGaropaba(){
      this.home = false
      this.hospedagem = false
      this.gastronomia = false
      this.club = false
      this.garopaba = true
    },

  }
}
</script>

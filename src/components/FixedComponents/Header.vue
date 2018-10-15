<template>
  <header class="head">

    <router-link :to="{ name: 'Home' }">
      <img src="../../../static/images/black-logo.png" alt="logo" class="head__img">
    </router-link>

    <nav class="head__items" ref="nav">
      <router-link v-for="(item, index) in items" :key="index" :to="{ name: item.route }" class="head__items--item">
        <div class="active-item" @click="activeItem(index)">
          <span>{{item.name}}</span>
          <span :class="{mark: item.active}"></span>
        </div>
      </router-link>
    </nav>

    <div class="rw">
      <button v-if="isLoged" clauss="head__btn" @click="logoff"> Sair </button>
      <button class="head__btn">Book Now</button>
      <div class="hamburguer" @click="activeMenu">
        <div class="line line--top"></div>
        <div class="line line--middle"></div>
        <div class="line line--bottom"></div>
      </div>
    </div>


  </header>
</template>

<script>
export default {
  data(){
    return{
      items: [
        { name: 'Home',        route: 'Home',        active: true  },
        { name: 'Hospedagem',  route: 'ApartHotel',  active: false },
        { name: 'Club',        route: 'Club',        active: false },
        { name: 'Gastronomia', route: 'Gastronomy',  active: false },
        { name: 'Shopping',    route: 'Shopping',    active: false },
        { name: 'Garopaba',    route: 'Garopaba',    active: false },
      ]
    }
  },

  computed:{
    isLoged: () => {
      if (localStorage.length > 1) {
        return true
      }else{
        return false
      }
    }
  },

  methods: {
    activeItem(index){
      // console.log(this.items[index].active);
      for(let i = 0; i < this.items.length; i++){
        this.items[i].active = false
        // console.log(this.items[i]);
        if (index) {
          this.items[index].active = true
        }
      }
    },

    activeMenu(){
      console.log(this.$refs.nav.classList.toggle('isActive'));
    },

    logoff(){
      localStorage.clear()
      this.$router.push('/')
    }

  }
}
</script>

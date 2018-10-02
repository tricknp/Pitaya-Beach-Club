<template>
  <header class="head">

    <router-link :to="{ name: 'Home' }">
      <img src="../../../static/images/black-logo.png" alt="logo" class="head__img">
    </router-link>

    <nav class="head__items">
      <router-link v-for="(item, index) in items" :key="index" :to="{ name: item.route }" class="head__items--item">
        <div class="active-item" @click="activeItem(index)">
          <span>{{item.name}}</span>
          <span :class="{mark: item.active}"></span>
        </div>
      </router-link>
    </nav>

    <button v-if="!isLoged" class="head__btn">Book Now</button>
    <button v-else class="head__btn" @click="logoff"> Sair </button>

  </header>
</template>

<script>
export default {
  data(){
    return{
      items: [
        { name: 'Home',        route: 'Home',        active: true  },
        { name: 'Hospedagem', route: 'ApartHotel',   active: false },
        { name: 'Club',        route: 'Club',        active: false },
        { name: 'Gastronomia', route: 'Gastronomy',  active: false },
        { name: 'Garopaba',    route: 'Garopaba',    active: false },
        { name: 'Shopping',    route: 'Shopping',    active: false },
      ]
    }
  },

  computed:{
    isLoged: () => {
      if (localStorage.token.length > 10) {
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

    logoff(){
      localStorage.clear()
      this.$router.push('/')
    }

  }
}
</script>

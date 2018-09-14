<template>
  <header class="head">

    <img src="../../../static/images/black-logo.png" alt="logo" class="head__img">

    <nav class="head__items">
      <router-link v-for="(item, index) in items" :key="index" :to="{ name: item.route }" class="head__items--item">
        <div class="active-item" @click="activeItem(index)">
          <span>{{item.name}}</span>
          <span :class="{mark: item.active}"></span>
        </div>
      </router-link>
    </nav>

    <button class="head__btn">Book Now</button>

  </header>
</template>

<script>
export default {
  data(){
    return{
      items: [
        { name: 'Home',        route: 'Home',        active: true  },
        { name: 'Apart Hotel', route: 'ApartHotel',  active: false },
        { name: 'Club',        route: 'Club',        active: false },
        { name: 'Gastronomia', route: 'Home',        active: false },
        { name: 'Eventos',     route: 'Home',        active: false },
        { name: 'Garopaba',    route: 'Home',        active: false },
      ]
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
    }

  }
}
</script>

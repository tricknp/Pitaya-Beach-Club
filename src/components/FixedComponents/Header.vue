<template>
  <header class="head">

    <img src="../../../static/images/logo.png" alt="logo" class="head__img">

    <nav class="head__items">
      <router-link :to="{ name: '' }" class="head__items--item"> 
        <span>Home</span> 
        <span class="mark"></span>
      </router-link>
      <router-link :to="{ name: '' }" class="head__items--item"> Apart Hotel </router-link>
      <router-link :to="{ name: '' }" class="head__items--item"> Club </router-link>
      <router-link :to="{ name: '' }" class="head__items--item"> Gastronomia </router-link>
      <router-link :to="{ name: '' }" class="head__items--item"> Eventos </router-link>
      <router-link :to="{ name: '' }" class="head__items--item"> Garopaba </router-link>
    </nav>

    <button class="head__btn">Book Now</button>

  </header>
</template>

<script>
export default {
}
</script>

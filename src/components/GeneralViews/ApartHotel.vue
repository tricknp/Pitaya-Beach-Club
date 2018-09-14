<template>
  <section >

    <Header />
    <div class="apartHotel-page">
      <Description />
      <Rooms />
    </div>

  </section>
</template>

<script>
import Header from '../FixedComponents/Header'
import Description from '../ApartHotel/Description'
import Rooms from '../ApartHotel/Rooms'

export default {

  components:
  {
    Header,
    Description,
    Rooms
  }

}
</script>

<style media="screen">
  .apartHotel-page
  {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;
  }
</style>

<template>
  <section >

    <Header />

    <div class="apartHotel-page">
      <Description />
      <Rooms />
      <Galery directory="/apart/gallery" />
    </div>

    <Footer />
  </section>
</template>

<script>
import Header      from '../FixedComponents/Header'
import Footer      from '../FixedComponents/Footer'
import Description from '../ApartHotel/Description'
import Rooms       from '../ApartHotel/Rooms'
import Galery      from '../ApartHotel/Gallery'

export default {

  components:
  {
    Header,
    Description,
    Rooms,
    Galery,
    Footer
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
  }
</style>

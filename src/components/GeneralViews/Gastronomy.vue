<template>
  <section>

    <Header />

    <div class="gastronomy-page">
      <Description />
    </div>
   
       <gallery directory="/gastro/slider" class="gg" />

    <Footer />

  </section>
</template>

<script>
import Header from '../FixedComponents/Header'
import Footer from '../FixedComponents/Footer'
import Description from '../Gastronomy/Description'
import Gallery from '../ApartHotel/Gallery'

export default {
  components:
  {
    Header,
    Description,
    Gallery,
    Footer
  }
}
</script>

<style media="screen">
  .gastronomy-page
  {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .gg{
    margin-top: -5%;
  }
</style>

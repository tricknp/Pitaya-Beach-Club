<template>
  <section >

    <Header />

    <div class="shopping-page">
      <Description />
      <Gallery directory="/shopping/slider" class="br"></Gallery>
    </div>

    <Footer />

  </section>
</template>

<script>
import Header from '../FixedComponents/Header'
import Footer from '../FixedComponents/Footer'
import Description from '../Shopping/Description'
import Gallery from '../ApartHotel/Gallery'

export default {

  components:
  {
    Header,
    Description,
    Footer,
    Gallery
  }

}
</script>

<style>
  .shopping-page
  {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .br{
    margin-top: 3%;
  }
</style>

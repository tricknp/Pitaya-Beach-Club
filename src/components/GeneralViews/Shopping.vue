<template>
  <section >

    <Header />

    <div class="club-page">
      <Description />
      <Gallery class="gs" />
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
  .club-page
  {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>

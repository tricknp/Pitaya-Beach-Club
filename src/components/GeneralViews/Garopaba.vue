<template>
  <section>

    <Header />

    <div class="garopaba-page">
      <Description />
      <Gallery directory="/garopaba/slider" class="btt" />
    </div>

    <Footer />

  </section>
</template>

<script>
import Header from '../FixedComponents/Header'
import Footer from '../FixedComponents/Footer'
import Description from '../Garopaba/Description'
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

<style lang="scss" >
.garopaba-page
{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btt{ margin-top: 7%;}

</style>

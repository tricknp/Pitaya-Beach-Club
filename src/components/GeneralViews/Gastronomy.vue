<template>
  <section>

    <Header />

    <div class="gastronomy-page">
      <Description />

    </div>

    <Footer />

  </section>
</template>

<script>
import Header from '../FixedComponents/Header'
import Footer from '../FixedComponents/Footer'
import Description from '../Gastronomy/Description'

export default {
  components:
  {
    Header,
    Description,
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
</style>

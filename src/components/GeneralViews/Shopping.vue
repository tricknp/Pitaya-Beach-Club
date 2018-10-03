<template>
  <section >

    <Header />

    <div class="club-page">
      <Description />
    </div>

    <Footer />

  </section>
</template>

<script>
import Header from '../FixedComponents/Header'
import Footer from '../FixedComponents/Footer'
import Description from '../Shopping/Description'


export default {

  components:
  {
    Header,
    Description,
    Footer
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

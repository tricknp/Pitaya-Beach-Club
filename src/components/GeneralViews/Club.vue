<template>
  <section >

    <Header />

    <div class="club-page">
      <Description />
      <Events />
      <Photos />
      <YourEvent />
    </div>

    <Footer />

  </section>
</template>

<script>
import Header from '../FixedComponents/Header'
import Footer from '../FixedComponents/Footer'
import Description from '../Club/Description'
import Events from '../Club/Event'
import Photos from '../Club/Photos'
import YourEvent from '../Club/YourEvent'

export default {

  components:
  {
    Header,
    Description,
    Events,
    Photos,
    YourEvent,
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

<template>
  <section class="home-page">

    <Header />
    <Main />
    <Menu />
    <Events />
    <Footer />

  </section>
</template>

<script>
import Header from  '../FixedComponents/Header'
import Footer from  '../FixedComponents/Footer'
import Main   from  '../Home/Main'
import Menu   from  '../Home/Menu'
import Events from  '../Home/Events'

export default {

  components:
  {
    Header,
    Main,
    Menu,
    Events,
    Footer
  }

}
</script>

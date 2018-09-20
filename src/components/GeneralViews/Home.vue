<template>
  <section class="home-page">

    <Header />
    <Main />
    <Description />
    <Menu />
    <Events />
    <Footer />

  </section>
</template>

<script>
import Header       from   '../FixedComponents/Header'
import Footer       from   '../FixedComponents/Footer'
import Description  from   '../Home/Description'
import Main         from   '../Home/Main'
import Menu         from   '../Home/Menu'
import Events       from   '../Home/LastEvent'

export default {

  components:
  {
    Header,
    Main,
    Menu,
    Events,
    Footer,
    Description
  }

}
</script>

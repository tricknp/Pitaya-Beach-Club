<template>
  <section class="home-page">

    <Header />
    <Main />
    <Menu />
    <Events />

  </section>
</template>

<script>
import Header from  '../FixedComponents/Header'
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
  }

}
</script>

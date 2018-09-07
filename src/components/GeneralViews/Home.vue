<template>
  <section class="home-page">

    <Header />
    <Main />
    <Menu />


  </section>
</template>

<script>
import Header from  '../FixedComponents/Header'
import Main   from  '../Home/Main'
import Menu   from  '../Home/Menu'
export default {

  components:
  {
    Header,
    Main,
    Menu,
  }

}
</script>

<template>
  <section>

    <Header />

    <div class="garopaba-page">
      <Description />
    </div>

    <Footer />

  </section>
</template>

<script>
import Header from '../FixedComponents/Header'
import Footer from '../FixedComponents/Footer'
import Description from '../Garopaba/Description'

export default {
  components:
  {
    Header,
    Description,
    Footer
  }
}
</script>

<style lang="scss">
.garopaba-page
{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

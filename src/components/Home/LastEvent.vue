<template>
  <section class="last-event">

    <h1 class="last-event__title">Proximo Evento</h1>

    <Card />

    <div class="last-event__text">
      <h2 class="last-event__text--title">Faça seu evento</h2>
      <p class="last-event__text--paragraph">Um complexo completo, com hotel, club e praça gastronômica</p>
      <p class="last-event__text--paragraph">Estrutura de palco e projeção, permitindo a realização de casamentos, aniversários e eventos corporativos, para até mil pessoas.</p>
    </div>

    <router-link :to="{ name: 'Club' }">
      <button class="head__btn br"> Saiba mais </button>
    </router-link>

  </section>
</template>

<script>
import Card from './Card'

export default {
  components: { Card }
}
</script>

<style lang="scss" scoped>
  .br { margin-top: 1em;}
</style>

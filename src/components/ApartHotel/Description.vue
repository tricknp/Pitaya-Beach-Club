<template>
  <main class="apartHotel__main">

    <Banner>
      <img src="../../../static/images/room.jpg" class="banner__bg" slot="bg">
      <div slot="content">
        <svg class="banner__content--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114.013 77.736">
          <path class="a" d="M32.094,46.459A15.547,15.547,0,1,0,16.547,30.912,15.526,15.526,0,0,0,32.094,46.459ZM94.283,15.365H52.824V51.642H11.365V5H1V82.736H11.365V67.189h93.283V82.736h10.365V36.094A20.724,20.724,0,0,0,94.283,15.365Z" transform="translate(-1 -5)"/>
        </svg>
        <h1 class="banner__content--title">Apart Hotel</h1>
      </div>
    </Banner>


     <div class="apartHotel__main__text">
       <img src="../../../static/images/logo_beach_club-01.png" class="pitaya-logo">
      <p>
        Com 17 apartamentos localizados no coração da Praia da Ferrugem, nossas acomodações contam com um ambiente espaçoso e acolhedor. São complemento ideal para tudo que acontece em seu exterior. Assim como a fruta, o Pitaya surpreende por fora e encanta por dentro.
      </p>

      <p>
        Esse refúgio foi preparado para quem deseja recarregar suas energias. Para completar esse ciclo de lazer e relaxamento, contamos com o nosso delicioso café da manhã colonial, servido em nosso anexo, Pytaia Restaurante.
      </p>

      <p>
        <b class="last-text"> Pensamos em todos os detalhes para que sua estadia seja repleta de bons momentos e experiências únicas.</b>
      </p>

      <div class="divider"></div>
    </div>

  </main>
</template>

<script>
import Banner from '../FixedComponents/Banner'

export default {
  components: { Banner }

}
</script>

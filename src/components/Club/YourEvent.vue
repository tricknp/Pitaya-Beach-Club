<template>
  <section class="yourEvent">

    <h1 class="yourEvent--title">Seu evento no Pitaya Club</h1>

    <div class="yourEvent__card">
      <div class="yourEvent__card__image">
        <img src="https://www.casamentosparasempre.pt/backoffice/public/appfiles/art_imgs/0112/0112.jpg" class="yourEvent__card__image--img">
      </div>
      <div class="yourEvent__card__content">
        <h2 class="yourEvent__card__content--name">Casamentos</h2>
        <p class="yourEvent__card__content--desc">O seu grande dia em uma das localizações mais paradisíacas de Santa Catarina. Acomodações confortáveis para convidados, infraestrutura completa de som, projeção e luzes, espaço para festas e paisagens deslumbrantes esperam por você.</p>
      </div>
    </div>

    <div class="divider"></div>

    <div class="yourEvent__card">
      <div class="yourEvent__card__content">
        <h2 class="yourEvent__card__content--name">Eventos Corporativos</h2>
        <p class="yourEvent__card__content--desc">Espaço para eventos corporativos, com estrutura hoteleira, praça de alimentação, som, projeção e todo o suporte necessário para receber convenções profissionais, palestras e workshops.</p>
      </div>
      <div class="yourEvent__card__image">
        <img src="https://www.investujeme.cz/wp-content/uploads/2017/02/finfest.jpg" class="yourEvent__card__image--img">
      </div>
    </div>

    <div class="divider"></div>

    <div class="yourEvent__card">
      <div class="yourEvent__card__image">
        <img src="https://static.wixstatic.com/media/944141_e1df905f970d427281426295f3c77fef~mv2_d_4800_3200_s_4_2.jpg/v1/fill/w_630,h_420,al_c,q_80,usm_0.66_1.00_0.01/944141_e1df905f970d427281426295f3c77fef~mv2_d_4800_3200_s_4_2.webp" class="yourEvent__card__image--img">
      </div>
      <div class="" class="yourEvent__card__content">
        <h2 class="yourEvent__card__content--name">Aniversários</h2>
        <p class="yourEvent__card__content--desc">Faça sua festa de aniversário no Pitaya Hotel, uma estrutura preparada com palco, sonorização, projeção e espaço para receber até 1000 convidados. Celebre a vida em grande estilo!</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .yourEvent
  {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4%;

    .divider { margin: 3% }

    &--title
    {
      font-size: 2em;
      margin-bottom: 3%;
    }

    &__card
    {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      height: 45vh;
      width: 79%;
      background: rgba(0, 0, 0, .02);

      &__image
      {
        width: 50%;
        height: 100%;

        &--img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &__content
      {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        text-align: center;
        width: 50%;
        height: 100%;

        &--name
        {
          font-size: 2em;
          font-weight: 400;
          margin-bottom: 1em;
          margin-top: 10%;
          color: rgba(0, 0, 0, .6);
        }

        &--desc
        {
          width: 60%;
          font-size: 1.45em;
          color: rgba(0, 0, 0, .4);
        }
      }

    }
  }
</style>

<template>
  <section class="room-container"> 

  <h2 class="room-title">Escolha seu quarto</h2>

  <div class="box">

    <div class="box__image">
      <img src="../../../static/images/room.jpg" class="box__image--photo">
    </div>

    <div class="box__desc">
        <h1 class="box__desc__title">Nome do quarto</h1>

        <div class="box__desc__item">
          <svg class="box__desc__item--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114.013 77.736">
            <path class="a" d="M32.094,46.459A15.547,15.547,0,1,0,16.547,30.912,15.526,15.526,0,0,0,32.094,46.459ZM94.283,15.365H52.824V51.642H11.365V5H1V82.736H11.365V67.189h93.283V82.736h10.365V36.094A20.724,20.724,0,0,0,94.283,15.365Z" transform="translate(-1 -5)"/>
          </svg>
          <b>Cama: </b>
          <span>Tipo de cama</span>
        </div>

        <div class="box__desc__item">
          <svg class="box__desc__item--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123.859 87.56">
            <path class="a" d="M1,30.078l11.26,11.26a71.664,71.664,0,0,1,101.339,0l11.26-11.26A87.634,87.634,0,0,0,1,30.078Zm45.04,45.04,16.89,16.89,16.89-16.89A23.854,23.854,0,0,0,46.04,75.118ZM23.52,52.6l11.26,11.26a39.824,39.824,0,0,1,56.3,0l11.26-11.26A55.8,55.8,0,0,0,23.52,52.6Z" transform="translate(-1 -4.448)"/>
          </svg>
          <b>Wifi: </b>
          <span>Tipo de cama</span>
        </div>

        <div class="box__desc__item">
          <svg class="box__desc__item--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102.945 133.323">
            <path class="a" d="M12.377,85.475H97.607V48.948H12.377ZM48.9.55V18.509H61.08V.55ZM97.85,15.77l-10.9,10.9,8.584,8.584,10.958-10.9L97.85,15.77Zm-36.77,118.1V115.914H48.9v17.959Zm45.354-23.8-10.958-10.9-8.584,8.584,10.9,10.958,8.645-8.645ZM3.55,24.353l10.9,10.9,8.584-8.584-10.9-10.9Zm8.584,94.3,10.9-10.958-8.584-8.584-10.9,10.9,8.584,8.645Z" transform="translate(-3.55 -0.55)"/>
          </svg>
          <b>Ar Condicionado: </b>
          <span>Tamanho</span>
        </div>

        <div class="box__desc__item">
          <svg class="box__desc__item--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 104.363 104.363"><g transform="translate(0 0)">
            <path class="a" d="M96.767,3H4V60.979A23.185,23.185,0,0,0,27.192,84.171H61.979A23.185,23.185,0,0,0,85.171,60.979V43.585h11.6a11.593,11.593,0,0,0,11.6-11.6V14.6A11.556,11.556,0,0,0,96.767,3Zm0,28.99h-11.6V14.6h11.6ZM4,95.767H96.767v11.6H4Z" transform="translate(-4 -3)"/></g>
          </svg>
          <b>Café da manhã: </b>
          <span>Tipo de cama</span>
        </div>

        <div class="box__desc__item">
          <svg class="box__desc__item--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117.198 75.362">
            <path class="a" d="M80.907,37.3A16,16,0,0,0,96.836,21.149a15.956,15.956,0,1,0-31.91,0A16.044,16.044,0,0,0,80.907,37.3Zm-42.617,0A16,16,0,0,0,54.218,21.149a15.956,15.956,0,1,0-31.91,0A16.044,16.044,0,0,0,38.29,37.3Zm0,10.766C25.878,48.064,1,54.362,1,66.9V80.362H75.58V66.9C75.58,54.362,50.7,48.064,38.29,48.064Zm42.617,0c-1.545,0-3.3.108-5.167.269,6.18,4.522,10.494,10.6,10.494,18.571V80.362H118.2V66.9C118.2,54.362,93.32,48.064,80.907,48.064Z" transform="translate(-1 -5)"/>
          </svg>
          <b>Ocupação maxima: </b>
          <span>Tipo de cama</span>
        </div>

        <div class="box__footer">
            <span>
              <b>R$</b>Valor/ <span class="small-text">noite</span>
            </span>

            <button class="box__footer--btn"> Book Now > </button>
        </div>
    </div>

  </div>
</section>
</template>

<script>
export default {
}
</script>

<template>
  <section class="admin-home">
    <div class="admin-home__container">
      <div class="adminSlider">

        <div class="adminSlider__head">
          <h2 class="adminSlider__head--title">Background</h2>
          <span class="adminSlider__head__buttons">
            <button class="adminSlider__head__buttons--edit" >Editar</button>
          </span>
        </div>

        <div class="adminSlider__images">
          <div class="adminSlider__images__content">
            <img class="adminSlider__images__content--f-img" src="../../../../static/images/club.jpg">
          </div>
        </div>

      </div>

      <div class="adminSlider br">
        <div class="adminSlider__head">
          <h2 class="adminSlider__head--title">Descrição</h2>
          <span class="adminSlider__head__buttons">
            <button class="adminSlider__head__buttons--edit" >Editar</button>
          </span>
        </div>

        <textarea>aqui vai a descrição da home</textarea>
      </div>

      <div class="adminSlider br">
        <div class="adminSlider__head">
          <h2 class="adminSlider__head--title">Eventos</h2>
          <span class="adminSlider__head__buttons">
            <button class="adminSlider__head__buttons--btn" > + </button>
            <button class="adminSlider__head__buttons--btn" > - </button>
          </span>
        </div>
        <!-- event -->
        <div class="adminSlider__event">
          <div class="adminSlider__event__container">
            <span class="adminSlider__event__container--name">Example</span>
            <button class="adminSlider__event__container--btn">editar</button>
          </div>

          <div class="adminSlider__event__container">
            <span class="adminSlider__event__container--name">Example</span>
            <button class="adminSlider__event__container--btn">editar</button>
          </div>

          <div class="adminSlider__event__container">
            <span class="adminSlider__event__container--name">Example</span>
            <button class="adminSlider__event__container--btn">editar</button>
          </div>

        </div>

          <!-- <form class="event">

            <div class="">
              <label for="image">Foto do evento:</label>
              <input type="file" name="image">
            </div>

            <input type="text" placeholder="Nome do evento">
            <input type="text" placeholder="00 de Janeiro">
            <input type="text" placeholder="Sabado | 19H">
            <input type="text" placeholder="Link para redirecionamento">
          </form> -->
      </div>

      <div class="adminSlider br bb">

        <div class="adminSlider__head">
          <h2 class="adminSlider__head--title">Galeria</h2>
          <span class="adminSlider__head__buttons">
            <button class="adminSlider__head__buttons--btn" >+</button>
            <button class="adminSlider__head__buttons--btn" >-</button>
          </span>
        </div>

        <div class="adminSlider__images">
          <div class="adminSlider__images__content">
            <img class="adminSlider__images__content--img" src="../../../../static/images/gallery.jpg">
            <img class="adminSlider__images__content--img" src="../../../../static/images/gallery.jpg">
            <img class="adminSlider__images__content--img" src="../../../../static/images/gallery.jpg">
            <img class="adminSlider__images__content--img" src="../../../../static/images/gallery.jpg">
            <img class="adminSlider__images__content--img" src="../../../../static/images/gallery.jpg">
            <img class="adminSlider__images__content--img" src="../../../../static/images/gallery.jpg">
            <img class="adminSlider__images__content--img" src="../../../../static/images/gallery.jpg">
            <img class="adminSlider__images__content--img" src="../../../../static/images/gallery.jpg">
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
}
</script>

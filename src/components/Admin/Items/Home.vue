<template>
  <section class="admin-home">
    <div class="admin-home__container">
      <div class="adminSlider">

        <div class="adminSlider__head">
          <h2 class="adminSlider__head--title">Slider</h2>
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

      <div class="adminSlider br">
        <div class="adminSlider__head">
          <h2 class="adminSlider__head--title">Descrição</h2>
          <span class="adminSlider__head__buttons">
            <button class="adminSlider__head__buttons--edit" >Editar</button>
          </span>
        </div>

        <textarea>aqui vai a descrição da home</textarea>
      </div>

    </div>
  </section>
</template>

<script>
export default {
}
</script>

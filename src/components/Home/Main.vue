<template>
  <main class="container">
     <div class="container__background">
       <!-- <img src="../../../static/images/hotel-generic.jpg" class="container__background--item"> -->
       <div id="slider">

         <div class="slides">

            <div class="slider" v-for="img in images">
              <div class="image">
                <img :src="`data:image/png;base64,${img.base64img}`">
              </div>
            </div>

         </div>


         <div class="switch">
           <ul>
             <li>
               <div class="on"></div>
             </li>
             <li></li>
             <li></li>
             <li></li>
           </ul>
         </div>
       </div>
      </div>



    <div class="container__desc">
        <img src="../../../static/images/logo.png" class="container__desc--img">
        <div class="container__desc--text">
          <h2 class="title">Pitaya Beach Club</h2>
          <p>Inspirado na união dos quatro elementos, nasceu o Complexo Pitaya Beach Club.</p>
          <p> <b>A poucos metros do mar</b>, o empreendimento tem como proposta acolher aos turistas e nativos com o melhor da hospitalidade, gastronomia, compras e entretenimento.  </p>
          <p>Convidamos a todos para ficarem hospedados em nosso Apart Hotel e ter uma tarde de lazer em nosso Open Shopping. Deliciar-se com a culinária local do Pitaya Restaurant e a noite, vivenciar sensações únicas em nossa balada <b>Pitaya Club.</b> </p>
          <h3 class="slogan">Tudo o que você precisa, em um só lugar.</h3>
        </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'

export default {

data(){
  return{
    images: ''
  }
},

created(){
  this.getPhoto()
},

methods:{
  getPhoto(){
    axios.get('http://pitayabeachapi.herokuapp.com/slider').then(res => {
      this.images = res.data.reverse()
      console.log(res.data[1]);
    })
  }
}

}
</script>

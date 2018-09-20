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

      <div class="container__check">
        <div class="container__check__content">

          <div class="container__check__content--title">
            <h2 class="text">Check Availability</h2>
            <span class="border"></span>
          </div>

          <form class="container__check__content--form">
            <span class="cf-item">
              <label for="checkin">Check in</label>
              <input  class="calendar" type="date" name="checkin">
            </span>

            <span class="cf-item">
              <label for="checkin">Check Out</label>
              <input  class="calendar" type="date" name="checkout">
            </span>

            <span class="cf-item">
              <label for="rooms">Rooms</label>
              <input  class="in-number" type="number" name="rooms">
            </span>

            <button class="check-btn"> Check </button>
          </form>

        </div>

        <div class="container__check__triangle"></div>
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
      // console.log(res.data[1].base64img);
    })
  }
}

}
</script>

<template>
  <div class="last-event__box">
    <img src="../../../static/images/dazaranha.jpg" class="last-event__box__image">

    <div class="last-event__box__info">
        <h3 class="last-event__box__info--title">{{ event.title }}</h3>
        <span class="last-event__box__info--date">Sábado | 23H</span>
        <span class="last-event__box__info--date">{{ event.date }}</span>
        <a :href="event.link" target="_blank" class="last-event__box__info--btn">Ingressos</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import url from '../_mixins/url'

export default {

  data(){
    return{
      event: ''
    }
  },

  mixins: [ url ],

  created(){
    this.getEvent()
  },

  methods:{
     getEvent(){
       axios.get(`${this.baseURL}club/event`).then(res => {
         this.event = res.data[0]
       })
     }
  }

}
</script>

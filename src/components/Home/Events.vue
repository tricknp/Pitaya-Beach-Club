<template>
  <section class="events">

    <h1 class="events__title">Eventos</h1>

    <div class="events__container">

      <div class="events__container__card" v-for="(event, index) in events" :key="index">
        <img src="../../../static/images/event.jpg" class="events__container__card--img">

        <div class="events__container__card--text">
          <h2 class="title">{{ event.title }}</h2>
          <p class="date">{{ event.date }}</p>
        </div>

        <button class="events__container__card--btn">Ir para</button>
      </div>

  </div>

  </section>
</template>

<script>
export default {
  data(){
    return{
      events: [
        {title: 'Pitaya Beach Party', date: '16 de setembro, 19:30 horas.'},
        {title: 'Pitaya Beach Party', date: '16 de setembro, 19:30 horas.'},
        {title: 'Pitaya Beach Party', date: '16 de setembro, 19:30 horas.'},
        {title: 'Pitaya Beach Party', date: '16 de setembro, 19:30 horas.'},
        {title: 'Pitaya Beach Party', date: '16 de setembro, 19:30 horas.'},
        {title: 'Pitaya Beach Party', date: '16 de setembro, 19:30 horas.'},
      ]
    }
  }
}
</script>

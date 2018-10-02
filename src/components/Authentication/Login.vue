<template>
  <section class="login">

    <form class="login__form">
      <h2 class="login__form--title">Login</h2>
      <input class="login__form--input" type="text" v-model="username" placeholder="username">
      <input class="login__form--input" type="text" v-model="password" placeholder="password">
      <button class="login__form--btn" @click.prevent="sendLogin()" >Entrar</button>
      <span ref="err"></span>
    </form>

  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },

  created() {
  },

  methods: {
    sendLogin() {
      let errorComp = this.$refs.err;
      axios
        .post("http://pitayabeachapi.herokuapp.com/login", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          localStorage.setItem("token", res.data.token);
          this.$router.push("admin");
        })
        .catch(function(error) {
          errorComp.innerHTML = "Usuário inválido.";
        });
    }
  }
};
</script>

<style lang="scss">
  .login
  {
    width: 100%;
    height: 100vh;
    background: #ddd;
    &__form{

    }
  }
</style>

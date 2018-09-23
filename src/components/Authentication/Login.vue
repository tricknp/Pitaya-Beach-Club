<template lang="html">
  <section>
    <ul>
      <li>
    <input type="text" name="username" v-model="username" placeholder="username">
    </li>
      <li>
    <input type="text" name="password" v-model="password" placeholder="password">
    </li>
      <li><button @click="sendLogin()" >login</button></li>
    </li>
      <li><span ref="err"></span></li>
    </ul>
    </ul>

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

<style lang="css">
html,
body,
#app {
  height: 100%;
}
li {
  list-style: none;
  color: darkslategrey;
}
ul {
  border: 1px;
  border-bottom: 1px;
  border-style: double;
  border-color: crimson;
  width: 30%;
}
section {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(14, 14, 14);
  height: 100%;
  color: rgb(15, 228, 129);
}

button {
  width: 20%;
  color: rgb(14, 14, 14);
  background-color: crimson;
  border-color: crimson;
  border: 1px;
  border-bottom: 1px;
  border-style: double;
  float: right;
  cursor: pointer;
}

input, span {
  background-color: rgb(14, 14, 14);
  color: crimson;
  width: 100%;
  border: none;
  outline: none;
}
</style>
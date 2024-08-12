<!-- eslint-disable vue/multi-word-component-names -->
<template>
<img class="logo" src="/img/logo.png"/>
<h1>LOGIN</h1>
<div class="login">
    <input type="text" v-model="email" placeholder="Enter Email"/>
    <input type="text" v-model="password" placeholder="Enter Password"/>
    <button v-on:click="login">Login</button>
    <a href="" class="signup" v-on:click="openSignUp">SignUp</a>
</div>
</template>
<script>
import axios from 'axios'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    openSignUp () {
      this.$router.push({ name: 'SignUp' })
    },
    async login () {
      const result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      )
      console.warn(result)
      if (result.status === 200 && result.data.length > 0) {
        localStorage.setItem('user-info', JSON.stringify(result.data[0]))
        this.$router.push({ name: 'Home' })
      }
    }
  }
}
</script>

<style>
.logo{
    width: 200px;
}
.login input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom:30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}
.login button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    color: white;
    background-color: skyblue;
    cursor: pointer;
}
.signup{
    display: block;
    margin-top:30px;
    margin-left: auto;
    margin-right: auto;
}
</style>

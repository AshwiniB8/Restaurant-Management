<template>
<img class="logo" src="/img/logo.png"/>
<h1>SignUp</h1>
<div class="register">
    <input type="text" v-model="name" placeholder="Enter Your Name"/>
    <input type="text" v-model="email" placeholder="Enter Your Email"/>
    <input type="password" v-model="password" placeholder="Enter Your Password"/>
    <button v-on:click="signUp">Sign Up</button>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SignUp',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async signUp () {
      console.warn('Sign Up', this.name, this.email, this.password)
      const result = await axios.post('http://localhost:3000/users', {
        name: this.name,
        email: this.email,
        password: this.password
      })
      console.warn(result)
      if (result.status === 201) {
        localStorage.setItem('user-info', JSON.stringify(result.data))
        this.$router.push({ name: 'Home' })
      }
    }
  },
  mounted () {
    // eslint-disable-next-line prefer-const
    let user = localStorage.getItem('user.info')
    if (user) {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style>
.logo{
    width: 200px;
}
.register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom:30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}
.register button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    color: white;
    background-color: skyblue;
    cursor: pointer;
}
</style>

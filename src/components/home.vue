<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
<Header />
  <h1>Hello {{ name }},Welcome to home page</h1>
  <table class="home" border="1">
    <tr>
    <td>ID</td>
    <td>NAME</td>
    <td>ADDRESS</td>
    <td>CONTACT</td>
    <td>ACTIONS</td>
    </tr>
    <tr v-for="item in restaurants" :key="item.id">
    <td>{{item.id}}</td>
    <td>{{item.name}}</td>
    <td>{{item.address}}</td>
    <td>{{item.contact}}</td>
    <td><router-link :to="'/Update/'+item.id">Update</router-link>
    <button class="del" v-on:click="deleteRestaurant(item.id)">Delete</button></td>
    </tr>
  </table>
</template>

<script>
import Header from './header.vue'
import axios from 'axios'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  data () {
    return {
      name: '',
      restaurants: []
    }
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Header
  },
  methods: {
    async deleteRestaurant (id) {
      const result = await axios.delete('http://localhost:3000/restaurant/' + id)
      if (result.status === 200) {
        this.loadData()
      }
    },
    async loadData () {
      const user = localStorage.getItem('user-info')
      this.name = JSON.parse(user).name
      if (!user) {
        this.$router.push({ name: 'SignUp' })
      }
      // eslint-disable-next-line no-unused-vars
      const result = await axios.get('http://localhost:3000/restaurant')
      console.warn(result)
      this.restaurants = result.data
    }
  },
  mounted () {
    this.loadData()
  }

}
</script>

<style>
td{
    width: 160px;
    height: 40px;
}
.home{
   margin-left: auto;
   margin-right: auto;
   margin-top: 100px;
   border-color: skyblue;
}
.del{
    width: 60px;
    height: 30px;
    border: 1px solid skyblue;
    color: white;
    background-color: skyblue;
    cursor: pointer;
    margin-left: 10px;
}
</style>

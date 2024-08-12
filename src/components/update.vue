<!-- eslint-disable vue/multi-word-component-names -->
<template>
<Header />
  <h1>Hello,Welcome to Update Restaurant page</h1>
   <form class="update">
    <input type="text" placeholder="Enter Name" v-model="restaurant.name" name="name"/>
    <input type="text" placeholder="Enter Address" v-model="restaurant.address" name="address"/>
    <input type="text" placeholder="Enter Contact" v-model="restaurant.contact" name="contact"/>
    <button type="button"  v-on:click="updateRestaurant">Update Restaurant</button>
  </form>
</template>

<script>
import axios from 'axios'
import Header from './header.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Update',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Header
  },
  data () {
    return {
      restaurant: {
        name: '',
        address: '',
        contact: ''
      }
    }
  },
  methods: {
    async updateRestaurant () {
      const result = await axios.put('http://localhost:3000/restaurant/' + this.$route.params.id, {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact
      })
      if (result.status === 200) {
        this.$router.push({ name: 'Home' })
      }
    }
  },
  async  mounted () {
    const user = localStorage.getItem('user-info')
    if (!user) {
      this.$router.push({ name: 'SignUp' })
    }
    const result = await axios.get('http://localhost:3000/restaurant/' + this.$route.params.id)
    this.restaurant = result.data
  }

}
</script>

<style>
.update input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom:30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}
.update button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    color: white;
    background-color: skyblue;
    cursor: pointer;
}
</style>

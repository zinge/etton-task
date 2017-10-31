<template>
  <div id="parent">
    <h3>This parent component</h3>
    <p>Enter you name</p>
    <input type="text" v-model="user.name"></input><br>
    <p>Enter you age</p>
    <input type="number" v-model="user.age"></input><br>
    <p>Enter you phone</p>
    <input type="tel" v-model="user.phone"></input><br>

    <child :user="user"/>
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  name: 'Parent',

  data: () => ({
    user: {
      name: '',
      age: '',
      phone: ''
    }
  }),

  components: {
    Child
  }
}
</script>


<template>
  <div id="parent">
    <h3>This parent component</h3>
    <p>Enter you name</p>
    <input type="text" v-model="parentUser.name"></input><br>
    <p>Enter you age</p>
    <input type="number" v-model="parentUser.age"></input><br>
    <p>Enter you phone</p>
    <input type="tel" v-model="parentUser.phone"></input><br><br>
    <button @click="sendToChild()">send to child</button>
    <child :user="childUser"/>
  </div>
</template>

<script>
import Child from './Child.vue'

export default {
  name: 'Parent',

  data: () => ({
    parentUser: {
      name: '',
      age: '',
      phone: ''
    },

    childUser: {}
  }),

  components: {
    Child
  },

  methods: {
    sendToChild () {
      this.childUser = this.parentUser
    }
  }
}
</script>


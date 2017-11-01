<template>
  <div id="child">
    <h3>This child component</h3>
    <div class="box">
      <p>Data from parent:</p>
      <ul>
        <li v-for="(value, index) in user" :key="index.id">{{index + ': ' + value}}</li>
      </ul>
      <hr>
      <p>Child to parent form</p>
      <input type="text" v-model="childData">
      <button @click="sendToParent">send to parent</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Child',

  data: () => ({
    childData: ''
  }),

  props: ['user'],

  methods: {
    sendToParent () {
      this.$emit('backToParent', this.childData)
      this.childData = ''
    }
  }
}
</script>

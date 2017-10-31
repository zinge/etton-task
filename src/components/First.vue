<template>
  <div id="first">
    <h3>This first component</h3>
    <input type="text" v-model="firstData.test">
    <button @click="sendToSecond">send to second</button>
  </div>
</template>

<script>
export default {
  name: 'First',

  data: () => ({
    firstData: {
      test: ''
    }
  }),

  methods: {
    sendToSecond () {
      this.$store.commit('changeTest', this.firstData)
      this.firstData = {}
    }
  }
}
</script>


<template>
  <div id="app">
    <parent/>
  </div>
</template>

<script>
import Parent from './components/Parent.vue'

export default {
  name: 'app',
  data: () => ({
  }),

  components: {
    Parent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

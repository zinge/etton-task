<template>
  <div id="app">
    <div class="section">
      <div class="container">
        <parent/>
        <first/>
        <second/>
      </div>
   </div>
  </div>
</template>

<script>
import Parent from './components/Parent.vue'
import First from './components/First.vue'
import Second from './components/Second.vue'

export default {
  name: 'app',

  components: {
    Parent, First, Second
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

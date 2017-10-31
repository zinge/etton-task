<template>
  <div id="app">
    <div class="section">
      <div class="container">
        <div class="box">
          <parent/>
        </div>
        <div class="box">
          <first/>
        </div>
        <div class="box">
          <second/>
        </div>

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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

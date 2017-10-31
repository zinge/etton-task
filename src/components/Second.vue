<template>
  <div id="second">
    <h3>This second component</h3>
    {{dataFromFirst.test}}
  </div>
</template>

<script>
export default {
  name: 'Second',

  computed: {
    dataFromFirst () {
      return this.$store.state.test
    }
  }
}
</script>

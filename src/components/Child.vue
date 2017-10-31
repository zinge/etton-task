<template>
  <div id="child">
    <h3>This child component</h3>
    <ul>
      <li v-for="(value, index) in user" :key="index.id">
        {{'index: ' + index + ', value: ' + value}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Child',

  props: ['user'],

}
</script>

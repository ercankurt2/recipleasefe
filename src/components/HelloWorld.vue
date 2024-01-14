<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld', // Der Name der Vue-Komponente
  props: {
    msg: String // Eine Prop namens 'msg', die einen String erwartet
  }
}
</script>

<style scoped>
</style>

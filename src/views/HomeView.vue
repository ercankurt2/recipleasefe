<template>
  <div class="home">
    <img alt="ReciPlease logo" src="../assets/logo.png" width="250" height="250">
    <HelloWorld msg="Willkommen bei ReciPlease!"/>
  </div>
</template>

<script>
// @ ist ein Alias zu /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

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

<style scoped>
.home {
  margin-top: 60px; /* Fügt einen oberen Rand von 60px hinzu, um Überschneidungen zu vermeiden */
  background: linear-gradient(to right, #D8BFD8, #3636e5); /* Setzt einen linearen Farbübergang von helllila zu blau */
  min-height: 100vh; /* Stellt sicher, dass der Hintergrund sich über die gesamte Seite erstreckt */
}
</style>

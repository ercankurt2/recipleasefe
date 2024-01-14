<template>
  <navbar></navbar> <!-- Nutzt die Navbar-Komponente -->
  <router-view></router-view> <!-- Platzhalter für die Komponenten, die durch Vue Router geladen werden -->
</template>

<script>
import Navbar from '@/components/Navbar.vue' // Importiert die Navbar-Komponente aus dem Verzeichnis '@/components/'
export default {
  name: 'App', // Der Name der Vue-Komponente
  components: { Navbar } // Registriert die Navbar-Komponente, damit sie in der Vorlage verwendet werden kann
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

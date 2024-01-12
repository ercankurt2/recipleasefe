<template>
  <Navbar></Navbar>
  <router-view @update-recipe="handleRecipeUpdate"></router-view>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {

      recipes: []
    }
  },
  methods: {
    handleRecipeUpdate (updatedRecipe) {
      const index = this.recipes.findIndex(recipe => recipe.id === updatedRecipe.id)
      if (index !== -1) {
        this.$set(this.recipes, index, updatedRecipe)
      } else {
        this.recipes.push(updatedRecipe)
      }
    }
  }
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

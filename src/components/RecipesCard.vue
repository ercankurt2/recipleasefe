<template>
  <!-- Bootstrap Card in Anlehnung an: https://getbootstrap.com/docs/5.3/components/card/ -->
  <div class="card h-100">
    <img :src="getPicture(recipe)" class="card-img-top" :alt="recipe.titel">
    <div class="card-body">
      <h5 class="card-titel">{{ recipe.titel }}</h5>
      <p class="card-text">{{ recipe.beschreibung }}</p>
      <button class="btn btn-primary" @click="$router.push(`/recipe/${recipe.rezeptID}`)">Details ansehen</button>
      <button class="btn btn-danger" @click="loescheRezept(recipe.rezeptID)">Löschen</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  methods: {
    getPicture (recipe) {
      if (recipe.rezeptID === 1) {
        return require('../assets/kartoffelsalat.png')
      } else if (recipe.rezeptID === 2) {
        return require('../assets/test.png')
      }
    },
    loescheRezept (rezeptId) {
      axios.delete(`${process.env.VUE_APP_BACKEND_BASE_URL}/api/rezept/${rezeptId}`)
        .then(response => {
          console.log('Rezept erfolgreich gelöscht')
        })
        .catch(error => {
          console.error('Fehler beim Löschen des Rezepts:', error)
        })
    }
  }
}
</script>

<style scoped>
.card {
  background-color: #f5f5f5; /* Hintergrundfarbe ändern */
}
</style>

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
    // Bilder für die Rezepte hart reinprogrammiert
    getPicture (recipe) {
      if (recipe.rezeptID === 1) {
        return require('../assets/kartoffelsalat.png')
      } else if (recipe.rezeptID === 49) {
        return require('../assets/paella.png')
      } else if (recipe.rezeptID === 50) {
        return require('../assets/reis_basmati.png')
      } else if (recipe.rezeptID === 51) {
        return require('../assets/kuchen.png')
      } else if (recipe.rezeptID === 52) {
        return require('../assets/hamburger_pommes.png')
      } else if (recipe.rezeptID === 53) {
        return require('../assets/adana_kebab.png')
      } else if (recipe.rezeptID === 54) {
        return require('../assets/pancakes.png')
      } else if (recipe.rezeptID === 55) {
        return require('../assets/pasta_lorem.png')
      } else if (recipe.rezeptID === 56) {
        return require('../assets/pizza_mozzarella.png')
      } else if (recipe.rezeptID === 57) {
        return require('../assets/tacos.png')
      } else if (recipe.rezeptID === 58) {
        return require('../assets/waffel.png')
      } else if (recipe.rezeptID === 59) {
        return require('../assets/pizza_salami.png')
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
  max-height: 500px; /* Maximale Höhe der Karte festlegen */
  overflow: auto; /* Scrollbalken hinzufügen, wenn der Inhalt die maximale Höhe überschreitet */
}
</style>

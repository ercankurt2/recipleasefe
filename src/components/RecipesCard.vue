<template>
  <!-- Bootstrap Card in Anlehnung an: https://getbootstrap.com/docs/5.3/components/card/ -->
  <div class="card h-100">
    <img :src="getPicture(recipe)" class="card-img-top" :alt="recipe.titel">
    <div class="card-body">
      <h5 class="card-titel">{{ recipe.titel }}</h5>
      <p class="card-text">{{ recipe.beschreibung }}</p>
      <button class="btn btn-primary" @click="$router.push(`/recipe/${recipe.id}`)">Details ansehen</button>
      <button class="btn btn-danger" @click="loescheRezept(recipe.id)">Löschen</button>
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
      if (confirm('Sind Sie sicher, dass Sie dieses Rezept löschen möchten?')) {
        axios.delete(`/api/rezepte/${rezeptId}`)
          .then(response => {
            // Erfolgreiche Löschung
            // Sie könnten hier beispielsweise eine Benachrichtigung anzeigen oder die Ansicht aktualisieren
            console.log('Rezept erfolgreich gelöscht')
            // Optional: Leiten Sie den Benutzer um oder aktualisieren Sie die Ansicht
          })
          .catch(error => {
            // Fehlerbehandlung
            console.error('Fehler beim Löschen des Rezepts:', error)
            // Optional: Zeigen Sie eine Fehlermeldung an
          })
      }
    }
  }
}
</script>

<style scoped>
.card {
  background-color: #f5f5f5; /* Hintergrundfarbe ändern */
}
</style>

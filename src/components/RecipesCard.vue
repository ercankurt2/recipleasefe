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
import axios from 'axios' // Importiert die Axios-Bibliothek für HTTP-Anfragen

export default {
  props: {
    recipe: {
      type: Object, // Der Typ der Prop 'recipe' ist ein Objekt
      required: true // Diese Prop ist erforderlich. Vue wird eine Warnung ausgeben, wenn sie nicht bereitgestellt wird
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
      // Methode zum Löschen eines Rezepts
      // Sendet eine DELETE-Anfrage an den Server mit der ID des zu löschenden Rezepts
      axios.delete(`${process.env.VUE_APP_BACKEND_BASE_URL}/api/rezept/${rezeptId}`)
        .then(response => {
          // Bei erfolgreicher Anfrage wird eine Bestätigungsnachricht in der Konsole angezeigt
          console.log('Rezept erfolgreich gelöscht')
        })
        .catch(error => {
          // Fehlerbehandlung, falls die Anfrage fehlschlägt
          console.error('Fehler beim Löschen des Rezepts:', error)
        })
    }
  }
}
</script>

<style scoped>
.card {
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  max-height: 500px;
  overflow: auto;
}

.card:hover {
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

/* Anpassung der Scrollbar */
.card::-webkit-scrollbar {
  width: 10px; /* Breite der Scrollbar */
}

.card::-webkit-scrollbar-track {
  background: #f0f0f0; /* Hintergrundfarbe der Scrollbar */
  border-radius: 10px; /* Rundung der Scrollbar */
}

.card::-webkit-scrollbar-thumb {
  background: #888; /* Farbe der Scrollbar */
  border-radius: 10px; /* Rundung der Scrollbar */
}

.card::-webkit-scrollbar-thumb:hover {
  background: #555; /* Farbe der Scrollbar beim Hovern */
}

.card .btn-primary {
  margin-right: 10px; /* Fügt einen rechten Rand von 10px hinzu */
}
</style>

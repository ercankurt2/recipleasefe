<template>
  <div class="recipe-detail" v-if="recipe">
    <h1>{{ recipe.titel }}</h1>
    <img :src="getPicture(recipe)" alt="Bild des Rezepts" class="recipe-image">

    <div class="additional-info">
      <p><strong>Zubereitungszeit:</strong> {{ recipe.zubereitungszeit }}</p>
      <p><strong>Schwierigkeitsgrad:</strong> {{ recipe.schwierigkeitsgrad }}</p>
    </div>

    <div class="description-section">
      <h2>Beschreibung (ggf. mit Zubereitungsschritten)</h2>
      <p>{{ recipe.beschreibung }}</p>
    </div>

    <button class="btn btn-primary" @click="editRecipe">Bearbeiten</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RecipeDetailView', // Der Name der Vue-Komponente
  data () {
    return {
      recipe: null // Datenobjekt, das das Rezept speichert
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
    // Methode zum Bearbeiten des aktuellen Rezepts
    editRecipe () {
      this.$router.push({ name: 'RecipeEdit', params: { id: this.recipe.rezeptID } })
    }
  },
  created () {
    // Lifecycle-Hook, der aufgerufen wird, nachdem die Instanz erstellt wurde
    const id = this.$route.params.id // Holt die Rezept-ID aus den Routenparametern
    // Sendet eine GET-Anfrage an den Server, um die Daten für das spezifische Rezept zu holen
    axios.get(`${process.env.VUE_APP_BACKEND_BASE_URL}/api/rezept/${id}`)
      .then(response => {
        this.recipe = response.data // Speichert die Daten des Rezepts im Datenobjekt
      })
      .catch(error => {
        // Fehlerbehandlung, falls die Anfrage fehlschlägt
        console.error('Fehler beim Abrufen des Rezepts:', error)
      })
  }
}
</script>

<style scoped>
.recipe-detail {
  background: linear-gradient(to right, #D8BFD8, #3636e5); /* Setzt einen linearen Farbübergang von helllila zu blau */
  text-align: center; /* Zentriert den Text innerhalb des Elements */
  margin: auto; /* Zentriert das Element horizontal */
  margin-top: 60px; /* Fügt einen oberen Rand von 60px hinzu, um Überschneidungen zu vermeiden */
  padding: 20px; /* Fügt einen Innenabstand von 20px hinzu */
  max-width: 1000px; /* Begrenzt die maximale Breite auf 1000px */
}

.recipe-image {
  max-width: 100%; /* Stellt sicher, dass das Bild nicht breiter als sein Container ist */
  height: auto; /* Behält das Seitenverhältnis des Bildes bei */
  margin-bottom: 20px; /* Fügt einen unteren Rand hinzu */
}

.description-section, .ingredients-section, .preparation-section {
  text-align: left; /* Textausrichtung links */
  margin-bottom: 20px; /* Fügt einen unteren Rand hinzu */
}

.description-section h2, .ingredients-section h2, .preparation-section h2 {
  font-size: 1.5em; /* Setzt die Schriftgröße auf 1.5em */
  color: #4a4a4a; /* Setzt die Schriftfarbe auf ein dunkles Grau */
  font-weight: bold; /* Macht den Text fett */
}

ul, ol {
  list-style-type: none; /* Entfernt Aufzählungszeichen */
  padding: 0; /* Entfernt den linken Innenabstand */
}

li {
  margin-bottom: 10px; /* Fügt einen unteren Rand hinzu */
  font-size: 1.1em; /* Setzt die Schriftgröße auf 1.1em */
}

.additional-info p {
  font-size: 1.1em; /* Setzt die Schriftgröße auf 1.1em */
  margin-bottom: 5px; /* Fügt einen unteren Rand hinzu */
}
</style>

<template>
  <div class="recipes">
    <h1>Rezepte</h1>
    <div class="container-fluid">
        <recipes-card-list :recipes="this.recipes"></recipes-card-list>
    </div>
    <recipes-create-form @created="addRecipe"></recipes-create-form>
  </div>
</template>

<script>
import axios from 'axios'
import RecipesCardList from '@/components/RecipesCardList.vue'
import RecipesCreateForm from '@/components/RecipesCreateForm.vue'

export default {
  name: 'RecipesView', // Der Name der Vue-Komponente
  components: {
    RecipesCardList, // Importierte Komponente für die Anzeige der Rezeptliste
    RecipesCreateForm // Importierte Komponente für das Formular zum Erstellen neuer Rezepte
  },
  data () {
    return {
      recipes: [] // Datenobjekt, das die Liste der Rezepte speichert
    }
  },
  methods: {
    addRecipe (recipeLocation) { // Methode zum Hinzufügen eines neuen Rezepts
      axios.get(`${process.env.VUE_APP_BACKEND_BASE_URL}${recipeLocation}`) // HTTP GET-Anfrage an den Server, um die Daten des neuen Rezepts zu holen
        .then(response => {
          this.recipes.push(response.data) // Fügt das neue Rezept zur Liste der Rezepte hinzu
        })
        .catch(error => {
          console.error('Es gab einen Fehler!', error) // Fehlerbehandlung, falls die Anfrage fehlschlägt
        })
    }
  },
  mounted () { // Lifecycle-Hook, der aufgerufen wird, nachdem die Komponente eingehängt (in das DOM eingefügt) wurde
    axios.get(`${process.env.VUE_APP_BACKEND_BASE_URL}/api/rezept`) // HTTP GET-Anfrage an den Server, um die Liste der Rezepte zu holen
      .then(response => {
        console.log(response.data) // Loggt die Antwort des Servers
        this.recipes = response.data // Speichert die Liste der Rezepte im Datenobjekt
      })
      .catch(error => {
        console.error('Es gab einen Fehler!', error) // Fehlerbehandlung, falls die Anfrage fehlschlägt
      })
  }
}
</script>

<style scoped>
.recipes {
  margin-top: 60px; /* Fügt einen oberen Rand von 60px hinzu, um Überschneidungen zu vermeiden */
  background: linear-gradient(to right, #D8BFD8, #3636e5); /* Setzt einen linearen Farbübergang von helllila zu blau */
  min-height: 100vh; /* Stellt sicher, dass der Hintergrund sich über die gesamte Seite erstreckt */
}
</style>

<template>
  <div class="recipe-edit" v-if="editableRecipe">
    <h1>Rezept Bearbeiten: {{ editableRecipe.titel }}</h1>

    <form @submit.prevent="saveRecipe">
      <div>
        <h3>Titel</h3>
        <input id="titel" v-model="editableRecipe.titel">
      </div>
      <div>
        <h3>Beschreibung</h3>
        <textarea id="description" v-model="editableRecipe.beschreibung"></textarea>
      </div>
      <div>
        <h3>Zutaten</h3>
        <textarea id="zutaten" v-model="editableRecipe.zutaten"></textarea>
      </div>
      <div>
        <h3>Zubereitungsschritte</h3>
        <textarea id="schritte" v-model="editableRecipe.zubereitungsschritte"></textarea>
      </div>
      <div>
        <h3>Zubereitungszeit</h3>
        <input id="zeit" v-model="editableRecipe.zubereitungszeit">
      </div>
      <div>
        <h3>Schwierigkeitsgrad</h3>
        <select id="grad" v-model="editableRecipe.schwierigkeitsgrad">
          <option value="Leicht">leicht</option>
          <option value="Mittel">mittel</option>
          <option value="Schwer">schwer</option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary">Speichern</button>
      <router-link to="/" class="btn btn-danger">Abbrechen</router-link>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RecipeEditView',
  data () {
    return {
      editableRecipe: null
    }
  },
  methods: {
    saveRecipe () {
      axios.put(`${process.env.VUE_APP_BACKEND_BASE_URL}/api/rezept/${this.editableRecipe.rezeptID}`, this.editableRecipe)
        .then(() => {
          this.$router.push({ name: 'RecipeDetail', params: { id: this.editableRecipe.rezeptID } })
        })
        .catch(error => {
          console.error('Fehler beim Aktualisieren des Rezepts:', error)
        })
    }
  },
  created () {
    const id = this.$route.params.id
    axios.get(`${process.env.VUE_APP_BACKEND_BASE_URL}/api/rezept/${id}`)
      .then(response => {
        this.editableRecipe = response.data
      })
      .catch(error => {
        console.error('Fehler beim Abrufen des Rezepts:', error)
      })
  }
}
</script>

<style>
.recipe-edit {
  background: linear-gradient(to right, #D8BFD8, #3636e5); /* Setzt einen linearen Farbübergang von helllila zu blau */
  text-align: center; /* Zentriert den Text innerhalb des Elements */
  margin: auto; /* Zentriert das Element horizontal */
  margin-top: 60px; /* Fügt einen oberen Rand von 60px hinzu, um Überschneidungen zu vermeiden */
  padding: 20px; /* Fügt einen Innenabstand von 20px hinzu */
  min-height: 100vh; /* Stellt sicher, dass der Hintergrund sich über die gesamte Seite erstreckt */
}

.recipe-edit form label {
  display: block; /* Stellt das Label-Element als Block-Element dar */
  margin-bottom: 10px; /* Fügt einen unteren Rand von 10px hinzu */
}

.recipe-edit h3 {
  margin-bottom: 10px; /* Fügt einen unteren Rand von 10px hinzu */
}

.recipe-edit input, .recipe-edit textarea, .recipe-edit select {
  background-color: #f0f0f0; /* Ändert die Hintergrundfarbe auf ein helles Grau */
  border: none; /* Entfernt den Standard-Border */
  border-radius: 5px; /* Rundet die Ecken ab */
  padding: 10px; /* Fügt einen Innenabstand von 10px hinzu */
  margin-bottom: 20px; /* Fügt einen unteren Rand von 20px hinzu */
  width: 300px; /* Stellt sicher, dass alle Felder die selbe Breite haben */
}

.recipe-edit .btn {
  margin-top: 20px; /* Fügt einen oberen Rand von 20px hinzu */
}

.recipe-edit .btn-primary {
  margin-right: 10px; /* Fügt einen rechten Rand von 10px hinzu */
}
</style>

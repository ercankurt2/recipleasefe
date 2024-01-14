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
  name: 'RecipesView',
  components: {
    RecipesCardList,
    RecipesCreateForm
  },
  data () {
    return {
      recipes: []
    }
  },
  methods: {
    addRecipe (recipeLocation) {
      axios.get(`${process.env.VUE_APP_BACKEND_BASE_URL}${recipeLocation}`)
        .then(response => {
          this.recipes.push(response.data)
        })
        .catch(error => {
          console.error('Es gab einen Fehler!', error)
        })
    }
  },
  mounted () {
    axios.get(`${process.env.VUE_APP_BACKEND_BASE_URL}/api/rezept`)
      .then(response => {
        console.log(response.data)
        this.recipes = response.data
      })
      .catch(error => {
        console.error('Es gab einen Fehler!', error)
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

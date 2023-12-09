<template>
  <h1>Rezepte</h1>
  <div class="container-fluid">
    <recipes-card-list :recipes="this.recipes"></recipes-card-list>
  </div>
  <recipes-create-form @created="addRecipe"></recipes-create-form>
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
    },
    getPicture (recipe) {
      if (recipe.rezeptID === 1) {
        return require('../assets/kartoffelsalat.png')
      } else if (recipe.rezeptID === 2) {
        return require('../assets/test.png')
      }
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

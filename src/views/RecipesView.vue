<template>
  <h1>Das ist eine RecipesView</h1>

  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="recipe in recipes" :key="recipe.id">
        <div class="card h-100">
          <img :src="getPicture(recipe)" class="card-img-top" :alt="recipe.titel">
          <div class="card-body">
            <h5 class="card-title">{{ recipe.titel }}</h5>
            <p class="card-text">{{ recipe.beschreibung }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RecipesView',
  data () {
    return {
      recipes: []
    }
  },
  methods: {
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

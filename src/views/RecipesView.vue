<template>
  <h1>Das ist eine RecipesView</h1>

  <div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="recipe in recipes" :key="recipe.id">
        <div class="card h-100">
          <img :src="getPicture(recipe)" class="card-img-top" :alt="recipe.title">
          <div class="card-body">
            <h5 class="card-title">{{ recipe.title }}</h5>
            <p class="card-text">{{ recipe.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipesView',
  data () {
    return {
      recipes: []
    }
  },
  methods: {
    getPicture (recipe) {
      if (recipe.id === 1) {
        return require('../assets/kartoffelsalat.jpg')
      } else if (recipe.id === 2) {
        return require('../assets/test.jpg')
      }
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/rezept'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(recipe => this.recipes.push(recipe)))
      .catch(error => console.log('error', error))
  }
}
</script>

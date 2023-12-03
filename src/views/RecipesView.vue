<template>
  <h1>Das ist eine RecipesView</h1>

  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col" v-for="recipe in recipes" :key="recipe.id">
      <div class="card">
        <img :src="getPicture(recipe)" class="card-img-top" :alt="recipe.title">
        <div class="card-body">
          <h5 class="card-title">{{ recipe.title }}</h5>
          <p class="card-text">{{ recipe.description }}</p>
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
      } else {
        return require('../assets/test.jpg')
      }
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch('http://localhost:8080/api/rezept', requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(recipe => this.recipes.push(recipe)))
      .catch(error => console.log('error', error))
  }
}
</script>

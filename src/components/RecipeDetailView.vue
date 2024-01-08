<template>
  <div class="recipe-detail">
    <h1>{{ recipe.title }}</h1>
    <img :src="getPicture(recipe)" alt="Bild des Rezepts" class="recipe-image">
    <p>{{ recipe.beschreibung }}</p>
  </div>
</template>

<script>
export default {
  name: 'RecipeDetailView',
  data () {
    return {
      // Beispiel-Datenstruktur
      recipe: {
        id: 1,
        title: 'Beispielrezept',
        beschreibung: 'Dies ist eine Beispielbeschreibung.',
        rezeptID: 1
      }
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
  }
}
</script>

<style scoped>
.recipe-detail {
  text-align: center;
}

.recipe-image {
  max-width: 100%;
  height: auto;
}
</style>

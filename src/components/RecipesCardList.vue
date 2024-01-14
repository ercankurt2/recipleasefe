<template>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col" v-for="recipe in recipes" :key="recipe.id">
      <recipes-card :recipe="recipe"></recipes-card>
    </div>
  </div>
</template>

<script>
import RecipesCard from '@/components/RecipesCard.vue' // Importiert die RecipesCard-Komponente

export default {
  name: 'RecipesCardList', // Der Name der Vue-Komponente
  components: {
    RecipesCard // Registriert die RecipesCard-Komponente, damit sie in der Vorlage verwendet werden kann
  },
  props: {
    recipes: {
      type: Array, // Der Typ der Prop 'recipes' ist ein Array
      required: true // Diese Prop ist erforderlich. Vue wird eine Warnung ausgeben, wenn sie nicht bereitgestellt wird
    }
  }
}
</script>

<style scoped>

</style>

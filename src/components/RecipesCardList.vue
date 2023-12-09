<template>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col" v-for="recipe in recipes" :key="recipe.id">
      <recipes-card :recipe="recipe"></recipes-card>
    </div>
  </div>
</template>

<script>
import RecipesCard from '@/components/RecipesCard.vue'

export default {
  name: 'RecipesCardList',
  components: {
    RecipesCard
  },
  props: {
    recipes: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>

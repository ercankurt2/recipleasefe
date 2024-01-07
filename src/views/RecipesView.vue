<template>
  <div>
    <h1>Rezepte</h1>
    <div class="container-fluid">
      <recipes-card-list :recipes="recipes"></recipes-card-list>
    </div>
    <recipes-create-form @created="addRecipe"></recipes-create-form>
  </div>
</template>

<script>
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
      // Initialisierte Rezepte, die im Frontend gehalten werden.
      recipes: [
        {
          id: 1,
          title: 'Kartoffelsalat',
          beschreibung: 'Leckerer Kartoffelsalat mit Mayonnaise und Gurken.',
          rezeptID: 1
        },
        {
          id: 2,
          title: 'Spaghetti Carbonara',
          beschreibung: 'Klassische italienische Pasta mit Speck und Ei.',
          rezeptID: 2
        }
      ]
    }
  },
  methods: {
    addRecipe (newRecipe) {
      // Fügt ein neues Rezept zum 'recipes'-Array hinzu, ohne Serverkommunikation
      this.recipes.push(newRecipe)
    },

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
.container-fluid {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Stellt sicher, dass der Container die volle Bildschirmhöhe einnimmt */
}

</style>

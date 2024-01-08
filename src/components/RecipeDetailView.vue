<template>
  <div class="recipe-detail">
    <h1>{{ recipe.title }}</h1>
    <img :src="getPicture(recipe)" alt="Bild des Rezepts" class="recipe-image">

    <div class="description-section">
      <h2>Beschreibung</h2>
      <p>{{ recipe.beschreibung }}</p>
    </div>

    <div class="ingredients-section">
      <h2>Zutaten</h2>
      <ul>
        <li v-for="(zutat, index) in recipe.zutaten" :key="index">{{ zutat }}</li>
      </ul>
    </div>
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
        beschreibung: 'Dieser herzhafte Kartoffelsalat vereint die köstlichen Aromen von festkochenden Kartoffeln, würzigem Feta-Käse und knackigen roten Zwiebeln. ' +
          'Abgerundet wird er durch eine leichte, aber würzige Vinaigrette und frische Kräuter.' +
          'Dieses Gericht ist nicht nur ein optischer Hingucker, sondern bietet auch einen wunderbaren Mix aus Texturen und Geschmacksnoten. ' +
          'Ideal als Beilage zu gegrilltem Fleisch oder als Teil eines sommerlichen Buffets.',
        zutaten: [
          '1 kg festkochende Kartoffeln, gewürfelt und gekocht',
          '1 mittelgroße rote Zwiebel, in feine Ringe geschnitten',
          '200 g Feta-Käse, zerbröckelt',
          '3 Essiggurken, in Würfel geschnitten',
          '4 EL Olivenöl',
          '2 EL Weißweinessig',
          '1 TL Senf',
          'Frische Kräuter (z.B. Petersilie, Schnittlauch), gehackt',
          'Salz und Pfeffer nach Geschmack'
        ],
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
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

.recipe-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.description-section, .ingredients-section {
  text-align: left;
  margin-bottom: 20px;
}

.description-section h2, .ingredients-section h2 {
  font-size: 1.5em;
  color: #4a4a4a;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
  font-size: 1.1em;
}
</style>

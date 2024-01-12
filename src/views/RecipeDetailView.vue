<template>
  <div class="recipe-detail">
    <h1>{{ recipe.title }}</h1>
    <img :src="getPicture(recipe)" alt="Bild des Rezepts" class="recipe-image">

    <div class="additional-info">
      <p><strong>Zubereitungszeit:</strong> {{ recipe.zubereitungszeit }}</p>
      <p><strong>Schwierigkeitsgrad:</strong> {{ recipe.schwierigkeitsgrad }}</p>
    </div>

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

    <div class="preparation-section">
      <h2>Zubereitungsschritte</h2>
      <ol>
        <li v-for="(schritt, index) in recipe.zubereitungsschritte" :key="index">{{ schritt }}</li>
      </ol>
    </div>

    <button @click="editRecipe">Bearbeiten</button>
  </div>
</template>

<script>
export default {
  name: 'RecipeDetailView',
  data () {
    return {
      recipe: {
        id: 1,
        title: 'Beispielrezept',
        zubereitungszeit: '30 Minuten',
        schwierigkeitsgrad: 'Mittel',
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
        zubereitungsschritte: [
          'Kartoffeln vorbereiten: Waschen Sie die Kartoffeln gründlich und schneiden Sie sie in gleich große Würfel.',
          'Kartoffeln kochen: Geben Sie die Kartoffelwürfel in einen Topf mit Salzwasser und kochen Sie sie, bis sie weich sind, aber nicht auseinanderfallen.',
          'Kartoffeln abkühlen lassen: Gießen Sie das Wasser ab und lassen Sie die Kartoffeln abkühlen.',
          'Zutaten vorbereiten: Schneiden Sie die roten Zwiebeln in feine Ringe und zerbröckeln Sie den Feta-Käse.',
          'Dressing zubereiten: Vermischen Sie in einer großen Schüssel Olivenöl, Weißweinessig und Senf zu einem Dressing.',
          'Kartoffeln hinzufügen: Geben Sie die abgekühlten Kartoffelwürfel zum Dressing in die Schüssel.',
          'Weitere Zutaten hinzufügen: Fügen Sie die roten Zwiebelringe, den zerbröckelten Feta-Käse und die gewürfelten Essiggurken hinzu.',
          'Kräuter und Gewürze: Hacken Sie frische Kräuter wie Petersilie und Schnittlauch und geben Sie sie in die Schüssel. Würzen Sie mit Salz und Pfeffer nach Geschmack.',
          'Alles vermengen: Rühren Sie vorsichtig um, um alle Zutaten gleichmäßig zu verteilen, ohne die Kartoffeln zu zerdrücken.',
          'Kühl stellen: Lassen Sie den Kartoffelsalat vor dem Servieren mindestens eine Stunde im Kühlschrank durchziehen.'
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
    },
    editRecipe () {
      this.$router.push({ name: 'RecipeEdit', params: { id: this.recipe.id } })
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

.description-section, .ingredients-section, .preparation-section {
  text-align: left;
  margin-bottom: 20px;
}

.description-section h2, .ingredients-section h2, .preparation-section h2 {
  font-size: 1.5em;
  color: #4a4a4a;
}

ul, ol {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
  font-size: 1.1em;
}

.additional-info p {
  font-size: 1.1em;
  margin-bottom: 5px;
}
</style>

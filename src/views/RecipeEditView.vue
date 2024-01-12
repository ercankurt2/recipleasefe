<template>
  <div class="recipe-edit">
    <h1>Rezept Bearbeiten: {{ editableRecipe.title }}</h1>

    <form @submit.prevent="saveRecipe">
      <div>
        <h3>Titel</h3>
        <input id="title" v-model="editableRecipe.title">
      </div>
      <div>
        <h3>Beschreibung</h3>
        <textarea id="description" v-model="editableRecipe.beschreibung"></textarea>
      </div>
      <div>
        <h3>Zutaten</h3>
        <textarea id="zutaten" v-model="editableRecipe.zutaten"></textarea>
      </div>
      <div>
        <h3>Zubereitungsschritte</h3>
        <textarea id="schritte" v-model="editableRecipe.zubereitungsschritte"></textarea>
      </div>
      <div>
        <h3>Zubereitungszeit</h3>
        <input id="zeit" v-model="editableRecipe.zubereitungszeit">
      </div>
      <div>
        <h3>Schwierigkeitsgrad</h3>
        <select id="grad" v-model="editableRecipe.schwierigkeitsgrad">
          <option value="Leicht">Leicht</option>
          <option value="Mittel">Mittel</option>
          <option value="Schwer">Schwer</option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary">Speichern</button>
      <router-link to="/" class="btn btn-danger">Abbrechen</router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RecipeEditView',
  data () {
    return {
      editableRecipe: {
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
    saveRecipe () {
      this.$emit('update-recipe', this.editableRecipe)
      this.$router.push({ name: 'RecipeDetail', params: { id: this.editableRecipe.id } })
    }
  }
}
</script>

<style>
.recipe-edit {
  background: linear-gradient(to right, #D8BFD8, #3636e5); /* Setzt einen linearen Farbübergang von helllila zu blau */
  text-align: center; /* Zentriert den Text innerhalb des Elements */
  margin: auto; /* Zentriert das Element horizontal */
  margin-top: 60px; /* Fügt einen oberen Rand von 60px hinzu, um Überschneidungen zu vermeiden */
  padding: 20px; /* Fügt einen Innenabstand von 20px hinzu */
  min-height: 100vh; /* Stellt sicher, dass der Hintergrund sich über die gesamte Seite erstreckt */
}

.recipe-edit form label {
  display: block; /* Stellt das Label-Element als Block-Element dar */
  margin-bottom: 10px; /* Fügt einen unteren Rand von 10px hinzu */
}

.recipe-edit h3 {
  margin-bottom: 10px; /* Fügt einen unteren Rand von 10px hinzu */
}

.recipe-edit input, .recipe-edit textarea, .recipe-edit select {
  background-color: #f0f0f0; /* Ändert die Hintergrundfarbe auf ein helles Grau */
  border: none; /* Entfernt den Standard-Border */
  border-radius: 5px; /* Rundet die Ecken ab */
  padding: 10px; /* Fügt einen Innenabstand von 10px hinzu */
  margin-bottom: 20px; /* Fügt einen unteren Rand von 20px hinzu */
  width: 300px; /* Stellt sicher, dass alle Felder die selbe Breite haben */
}

.recipe-edit .btn {
  margin-top: 20px; /* Fügt einen oberen Rand von 20px hinzu */
}

.recipe-edit .btn-primary {
  margin-right: 10px; /* Fügt einen rechten Rand von 10px hinzu */
}
</style>

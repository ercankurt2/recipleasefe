<template>
  <div class="impressum">
    <h1>Impressum</h1>
    <p>ReciPlease GmbH</p>
    <p>Am Bahnhof 123</p>
    <p>12345 Bahn</p>
    <p>Telefon: +49 123 456 789</p>
    <p>E-Mail: info@reciplease.de</p>
    <p>Vertreten durch:</p>
    <p>Geschäftsführer: Ercan Kurt, Mete Han Kazancioglu</p>
    <p>Registergericht: Amtsgericht Bahnhof</p>
    <p>Handelsregister Nr.: HRB 12345</p>
    <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE123456789</p>
  </div>
</template>

<script>
export default {
  name: 'ImpressumView' // Der Name der Vue-Komponente
}
</script>

<style scoped>
.impressum {
  margin-top: 60px; /* Fügt einen oberen Rand von 60px hinzu, um Überschneidungen zu vermeiden */
  background: linear-gradient(to right, #D8BFD8, #3636e5); /* Setzt einen linearen Farbübergang von helllila zu blau */
  min-height: 100vh; /* Stellt sicher, dass der Hintergrund sich über die gesamte Seite erstreckt */
  padding: 20px; /* Fügt einen Innenabstand von 20px hinzu */
}
</style>

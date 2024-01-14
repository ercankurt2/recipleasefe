<template>
  <!-- Bootstrap Form in Anlehnung an: https://getbootstrap.com/docs/5.3/forms/layout/ -->
  <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#recipes-create-offcanvas" aria-controls="#recipes-create-offcanvas">
    <i class="fa-solid fa-utensils"></i>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="recipes-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">Neues Rezept</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation" id="recipes-create-form" novalidate>
        <div class="mb-3">
          <label for="titel" class="form-label">Titel</label>
          <input type="text" class="form-control" id="titel" v-model="titel" required>
          <div class="valid-feedback">
            Der Titel sieht gut aus!
          </div>
          <div class="invalid-feedback">
            Bitte gib einen Titel ein.
          </div>
        </div>
        <div class="mb-3">
          <label for="beschreibung" class="form-label">Beschreibung (ggf. mit Zubereitungsschritten)</label>
          <textarea class="form-control" id="beschreibung" v-model="beschreibung" required></textarea>
          <div class="valid-feedback">
            Die Beschreibung sieht gut aus!
          </div>
          <div class="invalid-feedback">
            Bitte gib eine Beschreibung ein.
          </div>
        </div>
        <div class="mb-3">
          <label for="zutat" class="form-label">Zutaten</label>
          <textarea class="form-control" id="zutat" v-model="zutat" required></textarea>
          <div class="valid-feedback">
            Die Zutaten sehen gut aus!
          </div>
          <div class="invalid-feedback">
            Bitte gib mindestens eine Zutat ein.
          </div>
        </div>
        <div class="mb-3">
          <label for="schwierigkeitsgrad" class="form-label">Schwierigkeitsgrad</label>
          <select class="form-control" id="schwierigkeitsgrad" v-model="schwierigkeitsgrad" required>
            <option disabled value="">Bitte auswählen</option>
            <option>leicht</option>
            <option>mittel</option>
            <option>schwer</option>
          </select>
          <div class="valid-feedback">
            Der Schwierigkeitsgrad sieht gut aus!
          </div>
          <div class="invalid-feedback">
            Bitte wähle einen Schwierigkeitsgrad aus.
          </div>
        </div>
        <div class="mb-3">
          <label for="zubereitungszeit" class="form-label">Zubereitungszeit</label>
          <input type="text" class="form-control" id="zubereitungszeit" v-model="zubereitungszeit" required>
          <div class="valid-feedback">
            Die Zubereitungszeit sieht gut aus!
          </div>
          <div class="invalid-feedback">
            Bitte gib eine Zubereitungszeit ein.
          </div>
        </div>
        <div v-if="this.serverValidationMessages">
          <ul>
            <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: red">
              {{ message }}
            </li>
          </ul>
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click="createRezept">Erstellen</button>
          <button class="btn btn-danger" type="reset">Zurücksetzen</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipesCreateForm', // Der Name der Vue-Komponente
  data () {
    return {
      titel: '', // Datenfeld für den Titel des Rezepts
      beschreibung: '', // Datenfeld für die Beschreibung des Rezepts
      zutat: '', // Datenfeld für die Zutaten des Rezepts
      zubereitungszeit: '', // Datenfeld für die Zubereitungszeit des Rezepts
      schwierigkeitsgrad: '', // Datenfeld für den Schwierigkeitsgrad des Rezepts
      serverValidationMessages: [] // Datenfeld für Servervalidierungsnachrichten
    }
  },
  emits: ['created'], // Diese Komponente emittiert ein 'created' Ereignis
  methods: {
    createRezept () {
      // Methode zum Erstellen eines neuen Rezepts
      console.log('Titel: ' + this.titel) // Konsolenausgabe zur Überprüfung
      console.log('Beschreibung: ' + this.beschreibung) // Konsolenausgabe zur Überprüfung
      console.log('Zutat: ' + this.zutat) // Konsolenausgabe zur Überprüfung
      console.log('Zubereitungszeit: ' + this.zubereitungszeit) // Konsolenausgabe zur Überprüfung
      console.log('Schwierigkeitsgrad: ' + this.schwierigkeitsgrad) // Konsolenausgabe zur Überprüfung
      const valid = this.validate() // Überprüft die Formularvalidierung
      if (valid) {
        // Wenn das Formular gültig ist, wird ein POST-Anfrage an den Server gesendet
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/rezept' // Endpunkt der API

        const headers = new Headers() // Erstellt neue Header
        headers.append('Content-Type', 'application/json') // Fügt den Content-Type-Header hinzu

        const payload = JSON.stringify({ // Erstellt das Payload für die Anfrage
          titel: this.titel,
          beschreibung: this.beschreibung,
          zutat: this.zutat,
          zubereitungszeit: this.zubereitungszeit,
          schwierigkeitsgrad: this.schwierigkeitsgrad
        })

        const requestOptions = { // Optionen für die Fetch-Anfrage
          method: 'POST',
          headers: headers,
          body: payload,
          redirect: 'follow'
        }

        fetch(endpoint, requestOptions) // Sendet die Anfrage
          .then(response => {
            console.log('response', response) // Konsolenausgabe der Antwort
            return response.text()
          })
          .then(text => {
            console.log('response text', text) // Konsolenausgabe des Antworttexts
          })
          .catch(error => console.log('error', error)) // Fehlerbehandlung
      }
    },
    validate () {
      // Methode zur Validierung des Formulars
      let valid = true

      const forms = document.querySelectorAll('.needs-validation') // Wählt alle Formulare mit der Klasse 'needs-validation' aus

      // Durchläuft alle Formulare und verhindert die Einreichung, wenn sie ungültig sind
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              valid = false
              event.preventDefault()
              event.stopPropagation()
            }

            form.classList.add('was-validated') // Fügt die Klasse 'was-validated' hinzu, um die Validierungsstyles anzuzeigen
          }, false)
        })
      return valid // Gibt zurück, ob das Formular gültig ist oder nicht
    }
  }
}
</script>

<style scoped>
.sticky-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 30px;
}

/* Begrenzen Sie die Breite des Formulars und zentrieren Sie es horizontal */
#recipes-create-form {
  max-width: 600px;
  margin: 0 auto;
}

/* Erhöhen Sie die Ränder und Polsterung der Formularfelder */
#recipes-create-form .form-control {
  margin-bottom: 20px;
  padding: 10px;
}

#recipes-create-form .form-control {
  font-size: 1.1em;
  color: #555;
}

/* Passen Sie die Hintergrundfarbe und den Rand der Formularfelder an */
#recipes-create-form .form-control {
  background-color: #f9f9f9;
  border: 1px solid #ccc;
}
</style>

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
          <label for="zutat" class="form-label">Zutat</label>
          <input type="text" class="form-control" id="zutat" v-model="zutat" required>
          <div class="valid-feedback">
            Die Zutat sieht gut aus!
          </div>
          <div class="invalid-feedback">
            Bitte gib eine Zutat ein.
          </div>
        </div>
        <div class="mb-3">
          <label for="beschreibung" class="form-label">Beschreibung</label>
          <input type="text" class="form-control" id="beschreibung" v-model="beschreibung" required>
          <div class="valid-feedback">
            Die Beschreibung sieht gut aus!
          </div>
          <div class="invalid-feedback">
            Bitte gib eine Beschreibung ein.
          </div>
        </div>
        <div class="mb-3">
          <label for="schwierigkeitsgrad" class="form-label">Schwierigkeitsgrad</label>
          <input type="text" class="form-control" id="schwierigkeitsgrad" v-model="schwierigkeitsgrad" required>
          <div class="valid-feedback">
            Der Schwierigkeitsgrad sieht gut aus!
          </div>
          <div class="invalid-feedback">
            Bitte gib einen Schwierigkeitsgrad ein.
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
  name: 'RecipesCreateForm',
  data () {
    return {
      titel: '',
      zutat: '',
      beschreibung: '',
      schwierigkeitsgrad: '',
      zubereitungszeit: '',
      serverValidationMessages: []
    }
  },
  emits: ['created'],
  methods: {
    createRezept () {
      console.log('Titel: ' + this.titel)
      console.log('Zutat: ' + this.zutat)
      console.log('Beschreibung: ' + this.beschreibung)
      console.log('Schwierigkeitsgrad: ' + this.schwierigkeitsgrad)
      console.log('Zubereitungszeit: ' + this.zubereitungszeit)
      const valid = this.validate()
      if (valid) {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/rezept'

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        const payload = JSON.stringify({
          titel: this.titel,
          zutat: this.zutat,
          beschreibung: this.beschreibung,
          schwierigkeitsgrad: this.schwierigkeitsgrad,
          zubereitungszeit: this.zubereitungszeit
        })

        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: payload,
          redirect: 'follow'
        }

        fetch(endpoint, requestOptions)
          .then(response => {
            console.log('response', response)
            return response.text()
          })
          .then(text => {
            console.log('response text', text)
          })
          .catch(error => console.log('error', error))
      }
    },
    validate () {
      let valid = true

      const forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              valid = false
              event.preventDefault()
              event.stopPropagation()
            }

            form.classList.add('was-validated')
          }, false)
        })
      return valid
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
</style>

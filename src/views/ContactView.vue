<template>
  <div class="kontakt-formular">
    <h1>Kontaktformular</h1>
    <form @submit.prevent="sendContactForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div class="form-group">
        <label for="email">E-Mail:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="message">Nachricht:</label>
        <textarea id="message" v-model="message" rows="6" required></textarea>
        <!-- Erhöhe die Anzahl der Zeilen auf 6 -->
      </div>
      <button type="submit">Senden</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Kontaktformular',
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendContactForm () {
      // eine Axios-Anfrage an  Server senden.
    }
  }
}
</script>

<style scoped>
.kontakt-formular {
  margin-top: 100px;
  padding: 20px;
  text-align: center; /* Zentriert den Inhalt horizontal */
  background: linear-gradient(to right, #D8BFD8, #3636e5); /* Setzt einen linearen Farbübergang von helllila zu blau */
  color: white; /* Textfarbe auf weiß ändern */
  border-radius: 10px; /* Abgerundete Ecken */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Schatten um das Formular */
  max-width: 1000px; /* Erhöhe die maximale Breite des Formulars */
  margin: 0 auto; /* Zentriert das Formular horizontal auf der Seite */
  position: absolute; /* Positioniert das Formular absolut */
  top: 50%; /* Verschiebt das Formular um die Hälfte der Bildschirmhöhe nach unten */
  left: 50%; /* Verschiebt das Formular um die Hälfte der Bildschirmbreite nach rechts */
  transform: translate(-50%, -50%); /* Zentriert das Formular sowohl horizontal als auch vertikal */
}

h1 {
  font-size: 24px; /* Größere Schriftgröße für den Titel */
  margin-bottom: 20px; /* Abstand unter dem Titel */
}

.form-group {
  margin-bottom: 20px;
  text-align: left; /* Text linksbündig ausrichten */
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px; /* Kleiner Abstand unter dem Label */
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px; /* Größere Schriftgröße für die Eingabefelder */
  background-color: transparent; /* Hintergrundfarbe der Eingabefelder transparent machen */
  color: white; /* Textfarbe in den Eingabefeldern auf weiß ändern */
}

textarea {
  resize: vertical; /* Erlaubt die vertikale Größenanpassung der Textarea */
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s; /* Übergangseffekt für den Hover-Zustand */
}

button:hover {
  background-color: #0056b3; /* Hintergrundfarbe ändert sich beim Überfahren */
}

/* Optional: Stil für Fehlermeldung hinzufügen */
.error-message {
  color: #ff0000; /* Rote Textfarbe für Fehlermeldungen */
  font-size: 14px; /* Kleinere Schriftgröße für Fehlermeldungen */
  margin-top: 5px; /* Abstand über der Fehlermeldung */
}
</style>

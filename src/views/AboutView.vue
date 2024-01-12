<template>
  <div class="about">
    <div class="box">
      <h1>Über dieses Projekt</h1>
      <p>Dies ist ein Projekt zur Erstellung und Verwaltung von Rezepten. Es wurde entwickelt, um Benutzern zu helfen, ihre Lieblingsrezepte zu organisieren und zu teilen.</p>
    </div>

    <div class="box">
      <h2>Das Team</h2>
      <ul class="no-bullets">
        <li>Ercan Kurt</li>
        <li>Mete Han Kazancioglu</li>
      </ul>
    </div>

    <div class="box">
      <h2>Projektgeschichte</h2>
      <p>Dieses Projekt wurde im Jahr 2023 gestartet und hat seitdem viele Verbesserungen und Updates erfahren.</p>
    </div>

    <div class="box">
      <h2>Kontakt</h2>
      <p>Für weitere Informationen oder Fragen, kontaktiere uns bitte unter info@reciplease.de oder folgen Sie uns auf unseren sozialen Medien.</p>
    </div>

    <div class="box">
      <h2>Verwendete Technologien</h2>
      <ul class="no-bullets">
        <li>
          <h3>JavaScript</h3>
          <p>JavaScript ist die primäre Programmiersprache dieses Projekts. Es wird verwendet, um interaktive Elemente auf der Website zu erstellen.</p>
        </li>
        <li>
          <h3>Vue.js</h3>
          <p>Vue.js ist das JavaScript-Framework, das wir für die Entwicklung der Benutzeroberfläche verwenden. Es ermöglicht uns, wiederverwendbare Komponenten zu erstellen und den Zustand der Anwendung effizient zu verwalten.</p>
        </li>
        <li>
          <h3>Node.js</h3>
          <p>Node.js wird für die Backend-Entwicklung verwendet. Hierdurch können wir serverseitigen Code in JavaScript schreiben und APIs erstellen, die mit unserer Datenbank interagieren.</p>
        </li>
        <li>
          <h3>NPM</h3>
          <p>NPM (Node Package Manager) ist der Paketmanager, den wir verwenden, um JavaScript-Bibliotheken und -Frameworks zu installieren und zu verwalten. Durch NPM können wir den Code auf dem neuesten Stand halten und die Abhängigkeiten des Projekts verwalten.</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* Definiert den Stil für den gesamten Inhalt der AboutView */
.about {
  font-family: Arial, sans-serif; /* Setzt die Schriftart auf Arial */
  color: #333; /* Setzt die Textfarbe auf dunkelgrau */
  background: linear-gradient(to right, #D8BFD8, #3636e5); /* Setzt einen linearen Farbübergang von helllila zu blau */
  min-height: 100vh; /* Stellt sicher, dass der Hintergrund sich über die gesamte Seite erstreckt */
  padding: 20px; /* Fügt einen Innenabstand von 20px hinzu */
  margin-top: 60px; /* Fügt einen oberen Rand von 60px hinzu, um Überschneidungen zu vermeiden */
}

/* Definiert den Stil für die einzelnen Boxen */
.box {
  background-color: #fff; /* Setzt die Hintergrundfarbe auf weiß */
  border: 2px solid #5340ad; /* Fügt eine 2px breite blaue Linie hinzu */
  border-radius: 15px; /* Rundet die Ecken der Box ab */
  box-shadow: 0 10px 20px rgba(0,0,0,0.1); /* Fügt einen Schatten hinzu, um Tiefe zu erzeugen */
  padding: 20px; /* Fügt einen Innenabstand von 20px hinzu */
  margin: auto; /* Zentriert die Boxen */
  margin-bottom: 20px; /* Fügt einen unteren Rand von 20px hinzu */
  width: 50%; /* Setzt die Breite der Boxen auf 50% */
}

/* Die folgenden Klassen definieren die Stile für die verschiedenen Überschriften in der AboutView */
.about h1, .about h2, .about h3 {
  color: #004d80; /* Setzt die Farbe der Überschriften auf dunkelblau */
}
.about h1 {
  font-size: 2em; /* Setzt die Schriftgröße der h1 Überschriften auf 2em */
  margin-bottom: 20px; /* Fügt einen unteren Rand von 20px hinzu */
}

.about h2 {
  font-size: 1.5em; /* Setzt die Schriftgröße der h2 Überschriften auf 1.5em */
  margin-top: 20px; /* Fügt einen oberen Rand von 20px hinzu */
  margin-bottom: 10px; /* Fügt einen unteren Rand von 10px hinzu */
}

.about h3 {
  font-size: 1.2em; /* Setzt die Schriftgröße der h3 Überschriften auf 1.2em */
  margin-top: 20px; /* Fügt einen oberen Rand von 20px hinzu */
  margin-bottom: 5px; /* Fügt einen unteren Rand von 5px hinzu */
}

/* Definiert den Stil für die Absätze in der AboutView */
.about p {
  line-height: 1.6; /* Setzt die Zeilenhöhe auf 1.6 */
  margin-bottom: 20px; /* Fügt einen unteren Rand von 20px hinzu */
}

/* Entfernt die Aufzählungszeichen von Listen und setzt den linken Innenabstand auf 0 */
.no-bullets {
  list-style: none; /* Entfernt die Aufzählungszeichen */
  padding-left: 0; /* Setzt den linken Innenabstand auf 0 */
}
</style>

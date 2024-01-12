<template>
  <div class="about">
    <h1>Über dieses Projekt</h1>
    <p>Dies ist ein Projekt zur Erstellung und Verwaltung von Rezepten. Es wurde entwickelt, um Benutzern zu helfen, ihre Lieblingsrezepte zu organisieren und zu teilen.</p>

    <h2>Unser Team</h2>
    <ul class="no-bullets">
      <li>Ercan Kurt</li>
      <li>Mete Han Kazancioglu</li>
    </ul>

    <h2>Projektgeschichte</h2>
    <p>Dieses Projekt wurde im Jahr 2023 gestartet und hat seitdem viele Verbesserungen und Updates erfahren.</p>

    <h2>Kontakt</h2>
    <p>Für weitere Informationen oder Fragen, kontaktiere uns bitte unter info@reciplease.de oder folgen Sie uns auf unseren sozialen Medien.</p>

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
</template>

<style scoped>
.about {
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #f9f9f9;
  padding: 20px;
}

.about h1, .about h2, .about h3 {
  color: #004d80; /* Ändern Sie die Farbe hier */
}

.about h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

.about h2 {
  font-size: 1.5em;
  margin-top: 40px;
  margin-bottom: 10px;
}

.about h3 {
  font-size: 1.2em;
  margin-top: 20px;
  margin-bottom: 5px;
}

.about p {
  line-height: 1.6;
  margin-bottom: 20px;
}

.no-bullets {
  list-style: none;
  padding-left: 0;
}
</style>

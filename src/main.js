import { createApp } from 'vue' // Importiert die Funktion 'createApp' aus Vue
import App from './App.vue' // Importiert die Hauptanwendungskomponente 'App'
import router from './router' // Importiert das Router-Modul
import 'bootstrap/dist/css/bootstrap.min.css' // Importiert die Bootstrap CSS-Datei
import 'bootstrap/dist/js/bootstrap.min.js' // Importiert die Bootstrap JavaScript-Datei

createApp(App).use(router).mount('#app') // Erstellt eine neue Vue-Anwendung mit der 'App'-Komponente

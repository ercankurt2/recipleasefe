<template>
  <!-- Bootstrap Navbar in Anlehnung an: https://getbootstrap.com/docs/5.3/components/navbar/ -->
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">ReciPlease</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/recipes">Rezepte</router-link>
          <router-link class="nav-link" to="/contact">Kontakt</router-link>
          <router-link class="nav-link" to="/about">Projektinformationen</router-link>
          <router-link class="nav-link" to="/impressum">Impressum</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default { name: 'Navbar' }
</script>

<style scoped>
.navbar {
  display: flex; /* Aktiviert Flexbox für dieses Element */
  align-items: center; /* Zentriert die Elemente im Container */
  justify-content: flex-start; /* Ausrichtung der Elemente am Anfang des Containers (links) */
  padding: 5px;  /* Entfernt fast den ganzen Innenabstand */
  margin: 5px;   /* Entfernt fast den ganzen Außenabstand */
  width: 250px;  /* Setzt die Breite auf 250px */
  position: absolute;  /* Positioniert die Navigation absolut */
  top: 5px;   /* Setzt die Navigation fast ganz oben an */
  left: 5px;  /* Setzt die Navigation fast ganz links an */
}

.navbar-brand {
  font-size: 20px;  /* Setzt die Schriftgröße der Überschrift der Navbar 20px */
}

.navbar-nav .nav-link {
  font-size: 20px;  /* Setzt die Schriftgröße der Elemente des Dropdown auf 20px */
  padding: 0.5rem 1rem; /* Größeres Padding für Links */
}
</style>

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import RecipesView from '../views/RecipesView.vue'
import RecipeDetailView from '../views/RecipeDetailView.vue'
import RecipeEditView from '../views/RecipeEditView.vue'
import ImpressumView from '../views/ImpressumView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/recipes',
    name: 'recipes',
    component: RecipesView
  },
  {
    path: '/recipe/:id', // Pfad mit Rezept-ID als Parameter
    name: 'RecipeDetail',
    component: RecipeDetailView
  },
  {
    path: '/recipe-edit/:id',
    name: 'RecipeEdit',
    component: RecipeEditView
  },
  {
    path: '/impressum', // Pfad für die Impressum-Seite
    name: 'impressum',
    component: ImpressumView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router

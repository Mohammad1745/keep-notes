import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ScratchPad from '../views/ScratchPad.vue'
import AddNote from "../views/AddNote";
import Favourites from "../views/Favourites";
import Trash from "../views/Trash";
import Login from "../views/Login";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add-note',
    name: 'AddNote',
    component: AddNote
  },
  {
    path: '/scratchpad',
    name: 'ScratchPad',
    component: ScratchPad
  },
  {
    path: '/favourites',
    name: 'Favourites',
    component: Favourites
  },
  {
    path: '/trash',
    name: 'Trash',
    component: Trash
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

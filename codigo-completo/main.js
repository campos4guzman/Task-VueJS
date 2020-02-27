import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Tasks from './components/tasks.vue'
import Juegos from './components/juegos.vue'
import Noticias from './components/noticias.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


Vue.use(VueRouter)

const rutas = [
  { path: '/tareas', component: Tasks },
  { path: '/juegos', component: Juegos },
  { path: '/noticias', component: Noticias },
  { path: '/*', component: Juegos }
]

const router = new VueRouter({
routes:rutas// short for `routes: routes`
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import HelloWorld from '../components/HelloWorld.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: routes
})

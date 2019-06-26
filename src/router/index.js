import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Artifact from '@/components/Artifact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/artifact',
      name: 'Artifact',
      component: Artifact
    }
  ],
  mode: 'history',
})

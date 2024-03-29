import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

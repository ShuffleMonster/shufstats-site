import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueScrollTo from 'vue-scrollto';

import '../src/assets/w3.css'
import '../src/assets/mycss.css'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueScrollTo);

new Vue({
  render: h => h(App),
}).$mount('#app')
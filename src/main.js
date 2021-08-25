import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStream, faPenNib, faTrash } from '@fortawesome/free-solid-svg-icons'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import VueFileAgent from 'vue-file-agent'
import 'vue-file-agent/dist/vue-file-agent.css'

import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'

import VueLazyload from 'vue-lazyload'

import VueGtag from 'vue-gtag'
Vue.use(VueGtag, {
  config: { id: 'G-072W3P03FL' }
})

axios.defaults.baseURL = process.env.VUE_APP_API
Vue.use(VueAxios, axios)

library.add(faStream, faPenNib, faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueSweetalert2)
Vue.use(VueFileAgent)
Vue.component('ImgInputer', ImgInputer)
Vue.use(VueLazyload)
Vue.prototype.gsap = gsap
gsap.registerPlugin(ScrollTrigger)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
// Reset css
import './assets/styles/reset.css'
// Full page js
import './assets/js/vue-fullpage.min'
// Full page
// import 'fullpage.js/vendors/scrolloverflow'
// import './fullpage.scrollHorizontally.min'
import VueFullPage from 'vue-fullpage.js'
// Boxicons 套件
import 'boxicons'
// vuesax UI 套件
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles

// sweetalert2 套件
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// 必要引用
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 根據 icon 的種類引用
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons'
library.add(faCoffee, faGooglePlus)

// 註冊元件
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
// 使用 axios 請求時順便傳認證資訊
axios.defaults.withCredentials = true

Vue.use(VueFullPage)
Vue.use(VueAxios, axios)
Vue.use(VueSweetalert2)
Vue.use(Vuesax)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

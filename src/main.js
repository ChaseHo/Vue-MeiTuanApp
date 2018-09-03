import Vue from 'vue'//引入vue.js文件
import VueResource from 'vue-resource'
import VurRouter from 'vue-router'
import Mint from 'mint-ui'
import '../node_modules/mint-ui/lib/style.min.css'
import './assets/css/cssreset.css'
import './assets/css/animate.min.css'
import './assets/font/iconfont.css'
import App from './App.vue'

import './assets/css/index1.css'
import './assets/css/iconfont1.css'
import './assets/css/eve1.css'


import { Actionsheet } from 'mint-ui';
Vue.component(Actionsheet.name, Actionsheet);

Vue.use(VurRouter)
Vue.use(VueResource)
Vue.use(Mint)

import rou from './js/router.js'



new Vue({
  el: '#app',
  render: h => h(App),
  router:rou,
})

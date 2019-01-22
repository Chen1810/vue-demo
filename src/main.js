import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// import './assets/css/index.css' //02 公共资源 css本身会暴露

// import $ from 'jquery'  //看库自身如何输出 内部判断有无模块化环境

import 'animate.css';

import axios from './plugins/axios'
Vue.use(axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

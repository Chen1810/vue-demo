import axios from 'axios';
import store from '../store'
import * as types from '../store/types'
// Vue.use(axios)  //不是所有的插件都支持 use 安装


// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // config 请求时发出的配置  修改配置
    // console.log('显示loading')
    // store==组件里面的this.$store
    //抓到 vm.$root.bLoading=true
    // console.log(store)
    store.dispatch(types.VIEW_LOADING,true)
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
  
  // Add a response interceptor
  axios.interceptors.response.use(function (response) {
    // response ==  响应数据
    // //隐藏loading
    setTimeout(()=>{ 
      store.dispatch(types.VIEW_LOADING,false);
    },1000)
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });


export default{
    install:function(Vue){
        Vue.prototype.$http = axios;
        window.axios = axios;//全局暴露
    }
}
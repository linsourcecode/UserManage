import Vue from 'vue'
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
// 导入字体图标
import './assets/fonts/iconfont.css'
//应用插件
Vue.use(VueRouter)
//引入全局样式表
import './assets/css/global.css'

Vue.config.productionTip = false
// Vue.use(Button)
// Vue.use(Form)
// Vue.use(Input)
// Vue.use(FormItem)

Vue.use(ElementUI);
axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1'
axios.interceptors.request.use(config=>{
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config;
})
Vue.prototype.$http=axios



new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')

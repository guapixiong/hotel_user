
// #ifndef VUE3
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.imageBaseURL=function(){ //全局静态资源访问目录
	return 'http://localhost:8081'
}   
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif

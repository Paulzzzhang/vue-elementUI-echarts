import Vue from 'vue'
import App from './App.vue'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import  'echarts-wordcloud/dist/echarts-wordcloud'
import 'echarts-gl'
import 'echarts/map/js/china'
Vue.use(ElementUI)


Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
new Vue({
  router,
  render: h => h(App),

}).$mount('#app')

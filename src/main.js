// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import api from '@/api';
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
Vue.prototype.$echarts = echarts
Vue.prototype.$api = api
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
console.log(api)
const requireComponent = require.context(
  // 其组件目录的相对路径
  './components/table',
  // 是否查询其子目录
  false,
  // 匹配基础组件文件名的正则表达式
  /[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  console.log(fileName)

  const componentConfig = requireComponent(fileName)

  // 获取组件的 PascalCase 命名
  const componentName = upperFirst(
    camelCase(
      // 剥去文件名开头的 `./` 和结尾的扩展名
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )
  // 全局注册组件
  Vue.component(
    componentName,
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig
  )
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
Vue.filter('timeFilter', function (time) {
  var date =new Date(time)
  var o = {
    'Y':date.getFullYear(),
    'M': date.getMonth() + 1,
    'd': date.getDate(),
    'h': date.getHours(),
    'm': date.getMinutes(),
    's': date.getSeconds(),
    'q': Math.floor((date.getMonth() + 3) / 3),
    'S': date.getMilliseconds()
  };
  var result =`${o.Y}-${o.M<10?'0'+o.M:o.M}-${o.d<10?'0'+o.d:o.d} ${o.h<10?'0'+o.h:o.h}:${o.m<10?'0'+o.m:o.m}:${o.s<10?'0'+o.s:o.s}`
  return result;
})

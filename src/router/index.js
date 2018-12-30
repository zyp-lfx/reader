import Vue from 'vue'
import Router from 'vue-router'
const Login = resolve => require(['@/pages/login'], resolve)
const Home = resolve => require(['@/pages/home'], resolve)
const Admin = resolve => require(['@/pages/home/admin'], resolve)
const System = resolve => require(['@/pages/home/system'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path: '/',
          name: 'admin',
          component: Admin,
        },
        {
          path: '/admin',
          name: 'admin',
          component: Admin,
        },
        {
          path:'/system',
          name:'system',
          component:System,
        }
      ]
    }
  ]
})

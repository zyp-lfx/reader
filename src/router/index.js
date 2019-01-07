import Vue from 'vue'
import Router from 'vue-router'
const Login = resolve => require(['@/pages/login'], resolve)
const Home = resolve => require(['@/pages/home'], resolve)
const Admin = resolve => require(['@/pages/admin'], resolve)
const System = resolve => require(['@/pages/system'], resolve)
const userAdmin = resolve => require(['@/pages/userAdmin'], resolve)
const user = resolve => require(['@/pages/user'], resolve)

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
          path: '/system',
          name: 'system',
          component: System,
          children: [
              {
                path:'/',
                name:userAdmin,
                component:userAdmin
              },
              {
                path:'/userAdmin',
                name:userAdmin,
                component:userAdmin
              },
            {
              path:'/user',
              name:user,
              component:user
            }
            ]
        },
        {
          path: '/admin',
          name: 'admin',
          component: Admin,
        },
        {
          path:'/',
          name:'admin',
          component:Admin,
        }
      ]
    }
  ]
})

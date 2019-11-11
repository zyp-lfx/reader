import Vue from 'vue'
import Router from 'vue-router'
const Login = resolve => require(['@/pages/login'], resolve)
const Home = resolve => require(['@/pages/home'], resolve)
const Admin = resolve => require(['@/pages/admin'], resolve)
const System = resolve => require(['@/pages/system'], resolve)
const userAdmin = resolve => require(['@/pages/userAdmin'], resolve)
const user = resolve => require(['@/pages/user'], resolve)
const menu = resolve => require(['@/pages/menu'], resolve)
const goods = resolve => require(['@/pages/goods'], resolve)
const goodsDetail = resolve => require(['@/pages/goodsDetail'], resolve)
const goodsClass = resolve => require(['@/pages/goodsClass'], resolve)
const msgInfo = resolve => require(['@/pages/msgInfo'], resolve)
const attrinfo = resolve => require(['@/pages/attrinfo'], resolve)

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
      meta:{
        title:'首页'
      },
      children:[
        {
          path: '/system',
          name: 'system',
          component: System,
          redirect: '/user',
          meta:{
            title:'系统中心'
          },
          children: [
              {
                path:'/userAdmin',
                name:userAdmin,
                component:userAdmin,
                meta:{
                  title:'用戶管理'
                },
              },
              {
                path:'/user',
                name:user,
                component:user,
                meta:{
                  title:'用戶管理'
                },
              },
              {
                path:'/menu',
                name:menu,
                component:menu,
                meta:{
                  title:'菜单管理'
                },

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
        },
        {
          path:'/goods',
          name:'goods',
          component:goods,
          redirect: '/goodsDetial',
          meta:{
            title:'商品中心'
          },
          children:[
            {
              path:'/goodsDetial',
              name:'goodsDetail',
              component:goodsDetail,
              meta:{
                title:'商品管理'
              },
            },
            {
              path:'/goodsClass',
              name:'goodsClass',
              component:goodsClass,
            },
            {
              path:'/attrinfo',
              name:'attrinfo',
              component:attrinfo,
            }
          ]
        },
        {
          path:'/msgInfo',
          name:'msgInfo',
          component:msgInfo,
        }
      ]
    }
  ]
})

<template>
  <div class="tab">
    <el-menu
      default-active="1-1"
      class="el-menu-vertical-demo"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#409EFF"
      >
      <template v-for="(item,index) in ROUTER_MENU" >
        <el-submenu v-if="item.children" :index="(`${index+1}`).toString()" :key="index">
          <template slot="title">
            <span slot="title">
              {{item.name}} </span>
          </template>
          <el-menu-item-group   >
              <el-menu-item :index="(`${index}-${indexs+1}`).toString()" v-for="(items,indexs) in item.children" :key="indexs">
                <router-link class="routeTab" :to="{ path: items.router }">{{items.name}}</router-link>
              </el-menu-item>
          </el-menu-item-group>

        </el-submenu>
        <el-menu-item v-else :index="(`${index+1}`).toString()">
          <span slot="title">
            <router-link class="routeTab" :to="{ path: item.router }">{{item.name}}</router-link>
            </span>
        </el-menu-item>
      </template>

    </el-menu>
  </div>
</template>

<script>
  import {mapState,mapGetters,mapActions} from 'vuex'; //先要引入

  export default {
        name: "tab",
        computed: {
          ...mapState({  //这里的...是超引用，ES6的语法，意思是state里有多少属性值我可以在这里放多少属性值
            ROUTER_MENU: state => state.ROUTER.routerMenu, //注意这些与上面的区别就是state.footerStatus,
            ROUTER_SELECT:state => state.ROUTER.routeSelect
            //里面定义的showFooter是指footerStatus.js里state的showFooter
          })
        },
        created(){
              console.log(this.ROUTER_SELECT)
        },
      methods:{
        routeChoose(index){
          this.$store.dispatch('ROUTER/ASY_SET_ROUTER_SELECT',index)
        }
      }
    }
</script>

<style scoped lang="less">
  .tab{
    width: 180px;
    background: #304156;
    overflow: hidden;
    height: 100%;
  }
  .routeTab{
    width: 100%;
    height: 100%;
    color: #fff;
  }
  .router-link-active{
      color: #409EFF!important;
  }
</style>

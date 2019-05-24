<template>
  <!--<div class="nav" v-if="routeChild&&routeChild.length">-->
    <!--<ul>-->
      <!--<li v-for="item in routeChild"><router-link class="routeTab"  :to="{ path: item.router }">{{item.name}}</router-link></li>-->
    <!--</ul>-->
  <!--</div>-->
</template>

<script>
  import {mapState,mapGetters,mapActions} from 'vuex'; //先要引入
  export default {
    name: "leftnav",
    computed: {
      ...mapState({  //这里的...是超引用，ES6的语法，意思是state里有多少属性值我可以在这里放多少属性值
        ROUTER_MENU: state => state.ROUTER.routerMenu, //注意这些与上面的区别就是state.footerStatus,
        ROUTER_SELECT:state => state.ROUTER.routeSelect
        //里面定义的showFooter是指footerStatus.js里state的showFooter
      }),
      routeChild(){
        return this.ROUTER_MENU[this.ROUTER_SELECT].children
      }

  },
    data(){
      return{
      }
    },
    created(){
      console.log(this.routeChild)
    },
    methods:{
      routeChoose(index){
        this.$store.dispatch('ROUTER/ASY_SET_ROUTER_SELECT',index)
      }
    }
  }

</script>

<style scoped lang="less">
  .nav{
    position: absolute;
    width: 150px;
    height: 100%;
    background: #293c55;
    color: #fff;
    li{
      height: 60px;
      line-height: 60px;
      text-align: center;
    }
    li:hover{
      background: #122e55;
    }
    .routeTab{
      color: #fff;
    }
  }
</style>

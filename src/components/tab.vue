<template>
  <div class="tab">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#0070e1"
      text-color="#fff"
      active-text-color="#fff"
    >
      <el-menu-item index="2" >
        <router-link class="routeTab" :to="{ path: '/home' }">首页</router-link>
      </el-menu-item>
      <el-menu-item index="1">
        <router-link class="routeTab"  :to="{ path: '/admin' }">个人中心</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link class="routeTab"  :to="{ path: '/system' }">系统管理</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
    export default {
        name: "tab"
    }
</script>

<style scoped lang="less">
  .tab{
    height: 60px;
    padding: 0 100px;
    background: #0070e1;
    .el-menu-item.is-active{
      background: #148de1 !important;
    }
    .el-menu-item{
      padding: 0;
      width: 100px;
      text-align: center;
    }
    .routeTab{
      height: 100%;
      width: 100%;
      display: inline-block;
      text-decoration: none;
    }
  }
</style>

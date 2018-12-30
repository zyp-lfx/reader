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
        <router-link :to="{ path: '/home' }">首页</router-link>
      </el-menu-item>
      <el-menu-item index="1">
        <router-link :to="{ path: '/admin' }">个人中心</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link :to="{ path: '/system' }">系统管理</router-link>
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
    background: #0070e1;
    .el-menu-item.is-active{
      background: #148de1 !important;
    }
  }
</style>

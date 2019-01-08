<template>
  <div class="nav">
    <ul>
      <li><router-link class="routeTab"  :to="{ path: '/user' }">用户管理</router-link></li>
      <li><router-link class="routeTab" :to="{ path: '/userAdmin' }">角色管理</router-link></li>
      <li><router-link class="routeTab" :to="{ path: '/menu' }">菜单管理</router-link></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "leftnav"
    }
</script>

<style scoped lang="less">
  .nav{
    width: 150px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
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

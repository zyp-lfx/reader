<template>
  <div class="sys-main">
    <leftnav></leftnav>
    <div class="content">
      <router-view ></router-view>
    </div>
  </div>
</template>

<script>
  import leftnav from '@/components/leftnav'
  export default {
    name: "index",
    components:{'leftnav':leftnav}
  }

</script>

<style scoped lang="less">
  .sys-main{
    position: relative;
    height: calc(100% - 60px);
  }
  .content{
    margin-left: 150px;
    height: 100%;
  }
</style>

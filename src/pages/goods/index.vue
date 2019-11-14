<template>
  <div class="goods-mian">
    <!--<leftnav></leftnav>-->
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
  .goods-mian{
    position: relative;
  }
  .content{
    height: 100%;
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
  }
</style>

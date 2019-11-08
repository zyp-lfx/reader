<template>
  <div class="sys-main">
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
  }
  .content{
    height:100%;
  }
</style>

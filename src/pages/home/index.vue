<template>
    <div class="main">
      <tab></tab>
      <router-view class="routerView" ></router-view>
    </div>
</template>

<script>
  import tab from '@/components/tab'
  import leftnav from '@/components/leftnav'
    export default {
        name: "home",
        components:{'tab':tab,'leftnav':leftnav}
    }
</script>

<style scoped lang="less">
  .main {
    min-height: 100%;
    background: #eee;
    display: flex;
    flex-shrink:1;
  }
  .routerView{
    width: calc( 100% - 180px );
    height: 100%;
    padding-left: 180px;
  }

</style>




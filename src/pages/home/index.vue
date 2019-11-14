<template>
    <div class="main">
      <tab class="left-home"></tab>
      <div class="right-home">
        <userTab class="userTab"></userTab>
        <router-view class="routerView" >
        </router-view>
      </div>

    </div>
</template>

<script>
  import tab from '@/components/tab'
  import userTab from '@/components/usrTab/userTab'
  import leftnav from '@/components/leftnav'
    export default {
        name: "home",
        components:{'tab':tab,'leftnav':leftnav,"userTab":userTab}
    }
</script>

<style scoped lang="less">
  .main {
    height: 100%;
    background: #eee;
    display: flex;
  }
  .left-home{
    flex-shrink: 0;
  }
  .right-home{
    flex: 1;
  }
  .routerView{
    height: calc( 100% - 51px);
  }
</style>



